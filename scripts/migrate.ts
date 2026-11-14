/** Applies pending migrations to DATABASE_URL. Usage: npm run db:migrate */
import postgres from 'postgres';
import { migrate } from '../db/migrate.ts';

const url = process.env.DATABASE_URL;
if (!url) {
	console.error('DATABASE_URL is not set.');
	process.exit(1);
}
const sql = postgres(url, { prepare: false, max: 1, onnotice: () => {} });
try {
	const applied = await migrate(sql);
	console.log(applied.length ? `Applied: ${applied.join(', ')}` : 'No pending migrations.');
} finally {
	await sql.end();
}
