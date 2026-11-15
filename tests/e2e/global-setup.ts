/** Creates a fresh, migrated database for the end-to-end run and clears the mock outbox. */
import { rmSync } from 'node:fs';
import postgres from 'postgres';
import { migrate } from '../../db/migrate.ts';

export default async function globalSetup(): Promise<void> {
	const url = new URL(
		process.env.E2E_DATABASE_URL ?? 'postgres://brood:brood@localhost:5432/brood_e2e'
	);
	const name = url.pathname.slice(1);
	const adminUrl = new URL(url.toString());
	adminUrl.pathname = '/postgres';
	const admin = postgres(adminUrl.toString(), { max: 1, onnotice: () => {} });
	await admin.unsafe(`drop database if exists ${name} with (force)`);
	await admin.unsafe(`create database ${name}`);
	await admin.end();
	const sql = postgres(url.toString(), { max: 1, onnotice: () => {} });
	await migrate(sql);
	await sql.end();
	rmSync('.mock-mail/e2e-outbox.jsonl', { force: true });
}
