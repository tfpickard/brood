/**
 * The membership application. It stores nothing and sends nothing: it validates the form and
 * returns the date on which the Committee on Admissions will review the family's application.
 * This module deliberately has no database or mail import (tested).
 */
import { writtenDate } from '../format.ts';

export const REVIEW_YEARS = 17;

export type MembershipErrors = Partial<Record<'family' | 'seat' | 'line', string>>;

export function validateApplication(
	data: FormData
): { ok: true } | { ok: false; errors: MembershipErrors; values: Record<string, string> } {
	const get = (k: string) => {
		const v = data.get(k);
		return typeof v === 'string' ? v.trim().slice(0, 300) : '';
	};
	const values = { family: get('family'), seat: get('seat'), line: get('line') };
	const errors: MembershipErrors = {};
	if (!values.family) errors.family = 'Required. The name of the family applying.';
	if (!values.seat) errors.seat = 'Required. The seat of the family.';
	if (!values.line) errors.line = 'Required. The line held, or the line commissioned.';
	return Object.keys(errors).length ? { ok: false, errors, values } : { ok: true };
}

export function reviewDate(now: Date = new Date()): { iso: string; written: string } {
	const d = new Date(
		Date.UTC(now.getUTCFullYear() + REVIEW_YEARS, now.getUTCMonth(), now.getUTCDate())
	);
	return { iso: d.toISOString().slice(0, 10), written: writtenDate(d) };
}
