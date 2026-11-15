/**
 * Daily retention purge, as stated in the correspondence policy. Deletes inquiries past their
 * retention period and rate-limit records older than 24 hours. Touches nothing else.
 */
import postgres from 'postgres';
import { purgeExpiredInquiries } from '../../src/lib/server/inquiries.ts';
import { purgeRateLimits } from '../../src/lib/server/ratelimit.ts';

export default async function handler(): Promise<Response> {
	const url = process.env.DATABASE_URL;
	if (!url) return new Response('not configured', { status: 200 });
	const sql = postgres(url, { prepare: false, max: 1, onnotice: () => {} });
	try {
		const inquiries = await purgeExpiredInquiries(sql);
		const limits = await purgeRateLimits(sql);
		return new Response(JSON.stringify({ inquiries, limits }), { status: 200 });
	} finally {
		await sql.end({ timeout: 5 });
	}
}

export const config = { schedule: '@daily' };
