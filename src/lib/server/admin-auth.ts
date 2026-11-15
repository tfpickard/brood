/**
 * Access to the Secretariat (the moderation queue). A single shared secret from ADMIN_SECRET;
 * on success a signed, expiring, HttpOnly cookie is issued.
 */
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

export const COOKIE_NAME = 'abs_secretariat';
export const SESSION_SECONDS = 12 * 60 * 60;

function digest(value: string): Buffer {
	return createHash('sha256').update(value).digest();
}

/** Constant-time comparison of a submitted secret against the configured one. */
export function secretMatches(submitted: string, configured: string | undefined): boolean {
	if (!configured || configured.length < 16) return false;
	return timingSafeEqual(digest(submitted), digest(configured));
}

function sign(payload: string, secret: string): string {
	return createHmac('sha256', secret).update(`secretariat:${payload}`).digest('base64url');
}

export function issueToken(secret: string, now: number = Date.now()): string {
	const expires = String(Math.floor(now / 1000) + SESSION_SECONDS);
	return `${expires}.${sign(expires, secret)}`;
}

export function verifyToken(
	token: string | undefined,
	secret: string | undefined,
	now: number = Date.now()
): boolean {
	if (!token || !secret || secret.length < 16) return false;
	const [expires, mac] = token.split('.');
	if (!expires || !mac || !/^\d+$/.test(expires)) return false;
	if (Number(expires) < Math.floor(now / 1000)) return false;
	const expected = Buffer.from(sign(expires, secret));
	const given = Buffer.from(mac);
	return expected.length === given.length && timingSafeEqual(expected, given);
}
