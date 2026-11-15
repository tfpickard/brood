/**
 * Server modules against a real, empty Postgres database created for the run.
 * Requires a reachable server: TEST_DATABASE_URL (a role with CREATEDB), defaulting to the
 * local development role described in the README.
 */
import { readFileSync } from 'node:fs';
import postgres from 'postgres';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { correspondencePolicy } from '../../content/policy.ts';
import { listMigrations, migrate } from '../../db/migrate.ts';
import {
	createInquiry,
	getInquiry,
	isAutomated,
	listInquiries,
	notify,
	purgeExpiredInquiries,
	removeInquiry,
	RETENTION,
	setInquiryStatus,
	validateInquiry
} from '../../src/lib/server/inquiries.ts';
import { getMailProvider } from '../../src/lib/server/mail/index.ts';
import { reviewDate, validateApplication } from '../../src/lib/server/membership.ts';
import {
	hit,
	INQUIRY_LIMIT,
	purgeRateLimits,
	RATE_LIMIT_RETENTION_HOURS
} from '../../src/lib/server/ratelimit.ts';
import { readFlags, FLAG_NAMES } from '../../src/lib/server/flags.ts';
import { issueToken, secretMatches, verifyToken } from '../../src/lib/server/admin-auth.ts';

const ADMIN_URL = process.env.TEST_DATABASE_URL ?? 'postgres://brood:brood@localhost:5432/postgres';
const DB_NAME = `abs_test_${process.pid}_${Date.now()}`;
const admin = postgres(ADMIN_URL, { max: 1, onnotice: () => {} });
let sql: postgres.Sql;

function form(fields: Record<string, string>): FormData {
	const f = new FormData();
	for (const [k, v] of Object.entries(fields)) f.set(k, v);
	return f;
}

async function rowCounts(): Promise<Record<string, number>> {
	const tables = await sql<{ table_name: string }[]>`
		select table_name from information_schema.tables where table_schema = 'public'
	`;
	const out: Record<string, number> = {};
	for (const t of tables) {
		const [r] = await sql.unsafe(`select count(*)::int as n from "${t.table_name}"`);
		out[t.table_name] = (r as unknown as { n: number }).n;
	}
	return out;
}

beforeAll(async () => {
	await admin.unsafe(`create database ${DB_NAME}`);
	const url = new URL(ADMIN_URL);
	url.pathname = `/${DB_NAME}`;
	sql = postgres(url.toString(), { max: 2, onnotice: () => {} });
});

afterAll(async () => {
	await sql?.end();
	await admin.unsafe(`drop database if exists ${DB_NAME} with (force)`);
	await admin.end();
});

describe('migrations', () => {
	it('apply cleanly to an empty database, and only once', async () => {
		const applied = await migrate(sql);
		expect(applied).toEqual(listMigrations().map((f) => f.replace(/\.sql$/, '')));
		expect(await migrate(sql)).toEqual([]);
		const tables = (
			await sql<
				{ t: string }[]
			>`select table_name as t from information_schema.tables where table_schema='public'`
		).map((r) => r.t);
		for (const t of [
			'inquiries',
			'rate_limit_hits',
			'members',
			'member_sessions',
			'remarks',
			'mailing_lists',
			'subscriptions',
			'follows'
		]) {
			expect(tables).toContain(t);
		}
	});
});

describe('inquiries', () => {
	it('validates, stores, lists, moderates and removes an inquiry', async () => {
		const bad = validateInquiry(form({ name: '', email: 'not-an-address', message: '' }));
		expect(bad.ok).toBe(false);
		const good = validateInquiry(
			form({
				name: 'Mrs. Ardsley',
				email: 'ardsley@example.org',
				message: 'A cabinet for seventeen.',
				item: 'P-0412'
			})
		);
		expect(good.ok).toBe(true);
		if (!good.ok) return;
		const id = await createInquiry(sql, good.value);
		expect((await listInquiries(sql)).map((r) => r.id)).toContain(id);
		expect(await setInquiryStatus(sql, id, 'answered')).toBe(true);
		expect((await getInquiry(sql, id))?.status).toBe('answered');
		expect(await setInquiryStatus(sql, id, 'set_aside')).toBe(true);
		expect((await listInquiries(sql, 'set_aside')).map((r) => r.id)).toContain(id);
		expect(await removeInquiry(sql, id)).toBe(true);
		expect(await getInquiry(sql, id)).toBeNull();
	});

	it('recognizes the honeypot', () => {
		expect(isAutomated(form({ website: 'http://spam.example' }))).toBe(true);
		expect(isAutomated(form({ website: '' }))).toBe(false);
	});

	it('records the notification outcome without losing the inquiry', async () => {
		const input = { name: 'A', email: 'a@example.org', message: 'x', itemRef: null };
		const id = await createInquiry(sql, input);
		expect(await notify(sql, getMailProvider({}), input, id, 'sec@example.org')).toBe(
			'not_configured'
		);
		const failing = {
			name: 'resend' as const,
			send: async () => ({ ok: false as const, reason: 'http_500' })
		};
		expect(await notify(sql, failing, input, id, 'sec@example.org')).toBe('failed');
		const sent = { name: 'mock' as const, send: vi.fn(async () => ({ ok: true as const })) };
		expect(await notify(sql, sent, input, id, 'sec@example.org')).toBe('sent');
		expect(sent.send).toHaveBeenCalledWith(
			expect.objectContaining({ to: 'sec@example.org', replyTo: 'a@example.org' })
		);
		expect((await getInquiry(sql, id))?.notifyResult).toBe('sent');
	});

	it('purges inquiries past their retention periods', async () => {
		const input = { name: 'Old', email: 'old@example.org', message: 'x', itemRef: null };
		const old = await createInquiry(sql, input);
		const aside = await createInquiry(sql, input);
		const fresh = await createInquiry(sql, input);
		await sql`update inquiries set received_at = now() - make_interval(months => ${RETENTION.inquiryMonths}, days => 1) where id = ${old}`;
		await sql`update inquiries set status = 'set_aside', status_changed_at = now() - make_interval(days => ${RETENTION.setAsideDays + 1}) where id = ${aside}`;
		expect(await purgeExpiredInquiries(sql)).toBeGreaterThanOrEqual(2);
		expect(await getInquiry(sql, old)).toBeNull();
		expect(await getInquiry(sql, aside)).toBeNull();
		expect(await getInquiry(sql, fresh)).not.toBeNull();
	});
});

describe('rate limiting', () => {
	it('engages after the limit and stores only a keyed digest of the address', async () => {
		const results = [];
		for (let i = 0; i < INQUIRY_LIMIT.limit + 1; i++)
			results.push((await hit(sql, INQUIRY_LIMIT, '203.0.113.9', 'k')).allowed);
		expect(results.slice(0, INQUIRY_LIMIT.limit).every(Boolean)).toBe(true);
		expect(results.at(-1)).toBe(false);
		expect((await hit(sql, INQUIRY_LIMIT, '203.0.113.10', 'k')).allowed).toBe(true);
		const dump = JSON.stringify(await sql`select * from rate_limit_hits`);
		expect(dump).not.toContain('203.0.113');
		await sql`update rate_limit_hits set hit_at = now() - make_interval(hours => ${RATE_LIMIT_RETENTION_HOURS + 1})`;
		expect(await purgeRateLimits(sql)).toBeGreaterThan(0);
	});
});

describe('the membership application', () => {
	it('writes nothing to the database', async () => {
		const before = await rowCounts();
		const ok = validateApplication(
			form({ family: 'The Ostrander Family', seat: 'Wye River', line: 'Wye Stop, 1893' })
		);
		expect(ok.ok).toBe(true);
		const { actions } = await import('../../src/routes/membership/+page.server.ts');
		const request = new Request('http://localhost/membership', {
			method: 'POST',
			body: form({ family: 'The Ostrander Family', seat: 'Wye River', line: 'Wye Stop, 1893' })
		});
		const result = (await (actions.default as (e: { request: Request }) => Promise<unknown>)({
			request
		})) as {
			paragraphs: string[];
		};
		expect(result.paragraphs.join(' ')).toMatch(/placed under consideration/);
		expect(result.paragraphs.join(' ')).toContain(reviewDate().written);
		expect(await rowCounts()).toEqual(before);
	});

	it('imports no database, mail or rate-limit module', () => {
		for (const f of ['src/lib/server/membership.ts', 'src/routes/membership/+page.server.ts']) {
			const src = readFileSync(f, 'utf8');
			expect(src, f).not.toMatch(/server\/(db|config|inquiries|ratelimit|mail)|postgres/);
		}
	});

	it('sets the review seventeen years out', () => {
		const r = reviewDate(new Date('2026-11-14T12:00:00Z'));
		expect(r.iso).toBe('2043-11-14');
		expect(r.written).toBe('the fourteenth of November, 2043');
	});
});

describe('the correspondence policy', () => {
	it('states the retention periods the code enforces and every field the inquiry stores', () => {
		const text = correspondencePolicy({
			address: 'secretary@example.org',
			inquiryMonths: RETENTION.inquiryMonths,
			setAsideDays: RETENTION.setAsideDays,
			rateLimitHours: RATE_LIMIT_RETENTION_HOURS
		})
			.flatMap((s) => [s.heading, ...s.paragraphs])
			.join(' ');
		expect(RETENTION.inquiryMonths).toBe(24);
		expect(RETENTION.setAsideDays).toBe(30);
		expect(RATE_LIMIT_RETENTION_HOURS).toBe(24);
		expect(text).toMatch(/deleted twenty-four months after it was received/);
		expect(text).toMatch(/deleted thirty days after it was set aside/);
		expect(text).toMatch(/for twenty-four hours, a one-way keyed digest/);
		for (const field of [
			'name given',
			'correspondence address',
			'particulars',
			'Provisioner’s reference',
			'date and time'
		]) {
			expect(text).toContain(field);
		}
		expect(text).toContain('secretary@example.org');
		const columns =
			readFileSync('db/migrations/0001_core.sql', 'utf8').match(
				/create table inquiries \(([\s\S]*?)\);/
			)?.[1] ?? '';
		const stored = [...columns.matchAll(/^\s*([a-z_]+)\s/gm)].map((m) => m[1]);
		expect(stored).toEqual([
			'id',
			'received_at',
			'name',
			'email',
			'message',
			'item_ref',
			'status',
			'status_changed_at',
			'notified_at',
			'notify_result'
		]);
	});
});

describe('flags and access', () => {
	it('keeps every Phase 2 flag off unless set to "on"', () => {
		expect(Object.values(readFlags({})).every((v) => v === false)).toBe(true);
		const example = readFileSync('.env.example', 'utf8');
		for (const name of FLAG_NAMES) expect(example).toMatch(new RegExp(`^${name}=off$`, 'm'));
		expect(readFlags({ FLAG_MEMBERS: 'true' }).FLAG_MEMBERS).toBe(false);
	});

	it('signs and verifies Secretariat sessions with the configured secret', () => {
		const secret = 'a-long-enough-secret-value';
		expect(secretMatches(secret, secret)).toBe(true);
		expect(secretMatches('wrong', secret)).toBe(false);
		expect(secretMatches('short', 'short')).toBe(false);
		const token = issueToken(secret);
		expect(verifyToken(token, secret)).toBe(true);
		expect(verifyToken(token, 'another-long-enough-secret')).toBe(false);
		expect(verifyToken(issueToken(secret, Date.now() - 13 * 3600 * 1000), secret)).toBe(false);
	});
});
