/**
 * Inquiries to the Provisioner: validation, storage, notification, moderation and retention.
 * The retention periods here are the ones stated in the correspondence policy (content/policy.ts);
 * a test asserts the two agree.
 */
import type { Sql } from './db/index.ts';
import type { MailProvider } from './mail/index.ts';

export const RETENTION = {
	/** Inquiries are deleted this many months after receipt, whatever their status. */
	inquiryMonths: 24,
	/** Inquiries set aside as unsolicited are deleted this many days after being set aside. */
	setAsideDays: 30
} as const;

export const LIMITS = { name: 200, email: 320, message: 5000, itemRef: 120 } as const;

export type InquiryStatus = 'new' | 'answered' | 'set_aside';

export interface InquiryInput {
	name: string;
	email: string;
	message: string;
	itemRef: string | null;
}

export interface Inquiry extends InquiryInput {
	id: string;
	receivedAt: Date;
	status: InquiryStatus;
	statusChangedAt: Date | null;
	notifiedAt: Date | null;
	notifyResult: string | null;
}

export type FieldErrors = Partial<Record<'name' | 'email' | 'message' | 'itemRef', string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(data: FormData, key: string): string {
	const value = data.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

/** Honeypot: a field no person fills. A non-empty value marks the submission as automated. */
export function isAutomated(data: FormData): boolean {
	return field(data, 'website') !== '';
}

export function validateInquiry(
	data: FormData
):
	| { ok: true; value: InquiryInput }
	| { ok: false; errors: FieldErrors; values: Record<string, string> } {
	const name = field(data, 'name');
	const email = field(data, 'email');
	const message = field(data, 'message');
	const itemRef = field(data, 'item');
	const errors: FieldErrors = {};

	if (!name) errors.name = 'We need a name to write back to.';
	else if (name.length > LIMITS.name)
		errors.name = 'That’s too long. Under 200 characters, please.';

	if (!email) errors.email = 'We need an email address to answer you.';
	else if (email.length > LIMITS.email || !EMAIL.test(email))
		errors.email = 'That doesn’t look like an email address.';

	if (!message) errors.message = 'You didn’t ask anything.';
	else if (message.length > LIMITS.message)
		errors.message = 'That’s too long. Under 5,000 characters, please.';

	if (itemRef.length > LIMITS.itemRef) errors.itemRef = 'That’s too long for an item number.';

	if (Object.keys(errors).length > 0) {
		return { ok: false, errors, values: { name, email, message, item: itemRef } };
	}
	return { ok: true, value: { name, email, message, itemRef: itemRef || null } };
}

interface Row {
	id: string;
	received_at: Date;
	name: string;
	email: string;
	message: string;
	item_ref: string | null;
	status: InquiryStatus;
	status_changed_at: Date | null;
	notified_at: Date | null;
	notify_result: string | null;
}

function toInquiry(r: Row): Inquiry {
	return {
		id: r.id,
		receivedAt: r.received_at,
		name: r.name,
		email: r.email,
		message: r.message,
		itemRef: r.item_ref,
		status: r.status,
		statusChangedAt: r.status_changed_at,
		notifiedAt: r.notified_at,
		notifyResult: r.notify_result
	};
}

export async function createInquiry(sql: Sql, input: InquiryInput): Promise<string> {
	const [row] = await sql<{ id: string }[]>`
		insert into inquiries (name, email, message, item_ref)
		values (${input.name}, ${input.email}, ${input.message}, ${input.itemRef})
		returning id
	`;
	if (!row) throw new Error('insert returned no row');
	return row.id;
}

export function notificationFor(input: InquiryInput, id: string, to: string) {
	return {
		to,
		replyTo: input.email,
		subject: `Equipment question${input.itemRef ? `: ${input.itemRef}` : ''}`,
		text: [
			`An inquiry has been entered in the correspondence ledger (${id}).`,
			'',
			`Name: ${input.name}`,
			`Correspondence address: ${input.email}`,
			`Provisioner's reference: ${input.itemRef ?? 'none given'}`,
			'',
			input.message
		].join('\n')
	};
}

/** Sends the notification and records the outcome. Never throws: a failure does not lose the inquiry. */
export async function notify(
	sql: Sql,
	mail: MailProvider,
	input: InquiryInput,
	id: string,
	to: string | undefined
): Promise<'sent' | 'not_configured' | 'failed'> {
	let result: 'sent' | 'not_configured' | 'failed';
	if (!to || mail.name === 'none') {
		result = 'not_configured';
	} else {
		try {
			const sent = await mail.send(notificationFor(input, id, to));
			result = sent.ok ? 'sent' : sent.reason === 'not_configured' ? 'not_configured' : 'failed';
		} catch {
			result = 'failed';
		}
	}
	await sql`
		update inquiries set notify_result = ${result},
			notified_at = ${result === 'sent' ? sql`now()` : null}
		where id = ${id}
	`;
	return result;
}

export async function listInquiries(sql: Sql, status?: InquiryStatus): Promise<Inquiry[]> {
	const rows = status
		? await sql<
				Row[]
			>`select * from inquiries where status = ${status} order by received_at desc limit 500`
		: await sql<Row[]>`select * from inquiries order by received_at desc limit 500`;
	return rows.map(toInquiry);
}

export async function getInquiry(sql: Sql, id: string): Promise<Inquiry | null> {
	if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
	const [row] = await sql<Row[]>`select * from inquiries where id = ${id}`;
	return row ? toInquiry(row) : null;
}

export async function setInquiryStatus(
	sql: Sql,
	id: string,
	status: InquiryStatus
): Promise<boolean> {
	if (!/^[0-9a-f-]{36}$/i.test(id)) return false;
	const result = await sql`
		update inquiries set status = ${status}, status_changed_at = now() where id = ${id}
	`;
	return result.count === 1;
}

export async function removeInquiry(sql: Sql, id: string): Promise<boolean> {
	if (!/^[0-9a-f-]{36}$/i.test(id)) return false;
	const result = await sql`delete from inquiries where id = ${id}`;
	return result.count === 1;
}

/** Deletes correspondence past its retention period. Run daily by the scheduled function. */
export async function purgeExpiredInquiries(sql: Sql): Promise<number> {
	const result = await sql`
		delete from inquiries
		where received_at < now() - make_interval(months => ${RETENTION.inquiryMonths})
		   or (status = 'set_aside'
		       and status_changed_at < now() - make_interval(days => ${RETENTION.setAsideDays}))
	`;
	return result.count;
}
