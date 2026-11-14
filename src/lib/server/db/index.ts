/**
 * Database access. Only server service modules import this file; routes never do (lint-enforced).
 */
import postgres, { type Sql } from 'postgres';

let client: Sql | null = null;
let clientUrl: string | null = null;

/** Returns a shared client for the given connection string. Neon's pooled URL needs prepare: false. */
export function getSql(url: string): Sql {
	if (client && clientUrl === url) return client;
	client = postgres(url, { prepare: false, max: 5, idle_timeout: 20, onnotice: () => {} });
	clientUrl = url;
	return client;
}

export async function closeSql(): Promise<void> {
	if (client) await client.end({ timeout: 5 });
	client = null;
	clientUrl = null;
}

export type { Sql };
