/**
 * An inquiry to the Provisioner, end to end: stored, notified through the mock provider, shown in
 * the moderation queue and moderated; the honeypot refuses an automated submission; the rate
 * limit engages.
 */
import { expect, test, type Page } from '@playwright/test';
import { existsSync, readFileSync } from 'node:fs';
import postgres from 'postgres';

const sql = postgres(
	process.env.E2E_DATABASE_URL ?? 'postgres://brood:brood@localhost:5432/brood_e2e',
	{
		max: 1,
		onnotice: () => {}
	}
);
const ITEM = '/provisioner/exuvia-cabinet-pattern-17';
const OUTBOX = '.mock-mail/e2e-outbox.jsonl';

test.afterAll(async () => {
	await sql.end();
});

async function inquire(page: Page, name: string, opts: { honeypot?: boolean } = {}) {
	await page.goto(ITEM);
	await page.getByLabel('Name', { exact: true }).fill(name);
	await page.getByLabel('Email').fill('inquirer@example.org');
	await page
		.getByLabel('Your question')
		.fill('A cabinet for seventeen shells of the Newport Vesper.');
	if (opts.honeypot) {
		await page
			.locator('input[name="website"]')
			.evaluate((el: HTMLInputElement) => (el.value = 'http://spam.example'));
	}
	await page.getByRole('button', { name: 'Send' }).click();
}

const count = async () => Number((await sql`select count(*)::int as n from inquiries`)[0]?.n ?? 0);

test('an inquiry is stored, notified, queued and moderated; the honeypot and rate limit hold', async ({
	page
}) => {
	// 1. A proper inquiry is written and acknowledged in character.
	await inquire(page, 'Mrs. Hollis T. Ardsley');
	await expect(page.getByRole('heading', { name: 'We’ve Got It' })).toBeVisible();
	await expect(page.getByText('We answer these in the order they come in.')).toBeVisible();
	const [row] = await sql`select * from inquiries where name = 'Mrs. Hollis T. Ardsley'`;
	expect(row?.email).toBe('inquirer@example.org');
	expect(row?.item_ref).toBe('P-0412');
	expect(row?.status).toBe('new');
	expect(row?.notify_result).toBe('sent');

	// 2. The notification went through the mock provider.
	expect(existsSync(OUTBOX)).toBe(true);
	const mail = readFileSync(OUTBOX, 'utf8')
		.trim()
		.split('\n')
		.map((l) => JSON.parse(l));
	expect(mail).toHaveLength(1);
	expect(mail[0]).toMatchObject({ to: 'secretary@example.org', replyTo: 'inquirer@example.org' });
	expect(mail[0].subject).toContain('P-0412');

	// 3. The honeypot: answered alike, nothing stored, nothing sent.
	const before = await count();
	await inquire(page, 'Automated Sender', { honeypot: true });
	await expect(page.getByRole('heading', { name: 'We’ve Got It' })).toBeVisible();
	expect(await count()).toBe(before);
	expect(readFileSync(OUTBOX, 'utf8').trim().split('\n')).toHaveLength(1);

	// 4. The rate limit: five inquiries an hour from one address, then refusal.
	for (let i = 2; i <= 5; i++) {
		await inquire(page, `Correspondent ${i}`);
		await expect(page.getByRole('heading', { name: 'We’ve Got It' })).toBeVisible();
	}
	await inquire(page, 'Correspondent 6');
	await expect(page.getByText('You’ve sent us several of these in the last hour.')).toBeVisible();
	expect(
		(await sql`select count(*)::int as n from inquiries where name = 'Correspondent 6'`)[0]?.n
	).toBe(0);

	// 5. The moderation queue, behind the secret.
	await page.goto('/secretariat/correspondence');
	await expect(page).toHaveURL(/\/secretariat$/);
	await page.getByLabel('The word of the day').fill('not the secret');
	await page.getByRole('button', { name: 'Enter' }).click();
	await expect(page.getByText('Not recognized.')).toBeVisible();
	await page.getByLabel('The word of the day').fill('e2e-secretariat-secret-value');
	await page.getByRole('button', { name: 'Enter' }).click();
	await expect(page).toHaveURL(/\/secretariat\/correspondence$/);
	await expect(page.getByRole('link', { name: 'Mrs. Hollis T. Ardsley' })).toBeVisible();

	// Read, mark answered, set aside, delete.
	await page.getByRole('link', { name: 'Mrs. Hollis T. Ardsley' }).click();
	await expect(page).toHaveURL(/\/secretariat\/correspondence\/[0-9a-f-]{36}$/);
	await expect(
		page.getByText('A cabinet for seventeen shells of the Newport Vesper.')
	).toBeVisible();
	await page.getByRole('button', { name: 'Mark answered' }).click();
	await expect
		.poll(async () => (await sql`select status from inquiries where id = ${row?.id}`)[0]?.status)
		.toBe('answered');
	await page.getByRole('button', { name: 'Set aside as unsolicited' }).click();
	await expect
		.poll(async () => (await sql`select status from inquiries where id = ${row?.id}`)[0]?.status)
		.toBe('set_aside');
	await page.goto('/secretariat/correspondence?status=set_aside');
	await expect(page.getByRole('link', { name: 'Mrs. Hollis T. Ardsley' })).toBeVisible();
	await page.getByRole('link', { name: 'Mrs. Hollis T. Ardsley' }).click();
	await expect(page).toHaveURL(/\/secretariat\/correspondence\/[0-9a-f-]{36}$/);
	await page.getByRole('button', { name: 'Remove from the ledger' }).click();
	await expect(page).toHaveURL(/\/secretariat\/correspondence$/);
	expect((await sql`select count(*)::int as n from inquiries where id = ${row?.id}`)[0]?.n).toBe(0);
});

test('the membership application stores nothing and answers with a review date seventeen years out', async ({
	page
}) => {
	const tables = ['inquiries', 'rate_limit_hits', 'members', 'remarks', 'subscriptions', 'follows'];
	const snapshot = async () =>
		Promise.all(
			tables.map(async (t) => (await sql.unsafe(`select count(*)::int as n from ${t}`))[0]?.n)
		);
	const before = await snapshot();
	await page.goto('/membership');
	await page.getByLabel('Family name').fill('The Ostrander Family');
	await page.getByLabel('Where the family lives').fill('Wye River');
	await page.getByLabel('Your line').fill('Wye Stop, 1893');
	await page.getByRole('button', { name: 'Apply' }).click();
	await expect(page.getByText('We have your application.')).toBeVisible();
	await expect(page.getByText(String(new Date().getUTCFullYear() + 17))).toBeVisible();
	expect(await snapshot()).toEqual(before);
});
