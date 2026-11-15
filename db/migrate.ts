/**
 * Minimal migration runner. Applies db/migrations/*.sql in lexical order, each in its own
 * transaction, and records applied versions in schema_migrations. Shared by the CLI
 * (scripts/migrate.ts) and the test suite.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Sql } from 'postgres';

export const MIGRATIONS_DIR = new URL('./migrations/', import.meta.url).pathname;

export function listMigrations(dir: string = MIGRATIONS_DIR): string[] {
	return readdirSync(dir)
		.filter((f) => /^\d{4}_[a-z0-9_]+\.sql$/.test(f))
		.sort();
}

export async function migrate(sql: Sql, dir: string = MIGRATIONS_DIR): Promise<string[]> {
	await sql`
		create table if not exists schema_migrations (
			version text primary key,
			applied_at timestamptz not null default now()
		)
	`;
	const rows = await sql<{ version: string }[]>`select version from schema_migrations`;
	const applied = new Set(rows.map((r) => r.version));
	const done: string[] = [];
	for (const file of listMigrations(dir)) {
		const version = file.replace(/\.sql$/, '');
		if (applied.has(version)) continue;
		const text = readFileSync(join(dir, file), 'utf8');
		await sql.begin(async (tx) => {
			await tx.unsafe(text);
			await tx`insert into schema_migrations (version) values (${version})`;
		});
		done.push(version);
	}
	return done;
}
