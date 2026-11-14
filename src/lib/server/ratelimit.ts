/**
 * Per-client rate limiting backed by Postgres, so it holds across serverless instances.
 * Client addresses are stored only as an HMAC under RATE_LIMIT_SECRET and are purged after 24 hours.
 */
import { createHmac } from 'node:crypto';
import type { Sql } from './db/index.ts';

export interface RateLimitRule {
	bucket: string;
	limit: number;
	windowSeconds: number;
}

export const INQUIRY_LIMIT: RateLimitRule = { bucket: 'inquiry', limit: 5, windowSeconds: 3600 };
export const SECRETARIAT_LIMIT: RateLimitRule = { bucket: 'secretariat', limit: 10, windowSeconds: 900 };

export const RATE_LIMIT_RETENTION_HOURS = 24;

export function hashClient(address: string, secret: string): Buffer {
	return createHmac('sha256', secret).update(address).digest();
}

/** Records a hit and reports whether the client is within its limit. */
export async function hit(
	sql: Sql,
	rule: RateLimitRule,
	address: string,
	secret: string
): Promise<{ allowed: boolean }> {
	const key = hashClient(address, secret);
	const [row] = await sql<{ n: number }[]>`
		select count(*)::int as n from rate_limit_hits
		where bucket = ${rule.bucket} and key_hash = ${key}
		  and hit_at > now() - make_interval(secs => ${rule.windowSeconds})
	`;
	if ((row?.n ?? 0) >= rule.limit) return { allowed: false };
	await sql`insert into rate_limit_hits (bucket, key_hash) values (${rule.bucket}, ${key})`;
	return { allowed: true };
}

export async function purgeRateLimits(sql: Sql): Promise<number> {
	const result = await sql`
		delete from rate_limit_hits
		where hit_at < now() - make_interval(hours => ${RATE_LIMIT_RETENTION_HOURS})
	`;
	return result.count;
}
