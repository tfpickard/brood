/** Server configuration from the environment. Secrets are read only here. */
import { env } from '$env/dynamic/private';
import { getSql, type Sql } from './db/index.ts';
import { readFlags } from './flags.ts';
import { getMailProvider } from './mail/index.ts';

export function db(): Sql {
	if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
	return getSql(env.DATABASE_URL);
}

export function mail() {
	return getMailProvider({
		MAIL_PROVIDER: env.MAIL_PROVIDER,
		MAIL_FROM: env.MAIL_FROM,
		MAIL_TO: env.MAIL_TO,
		RESEND_API_KEY: env.RESEND_API_KEY,
		MAIL_MOCK_FILE: env.MAIL_MOCK_FILE,
		CONTEXT: env.CONTEXT
	});
}

export const config = {
	get mailTo() {
		return env.MAIL_TO;
	},
	get adminSecret() {
		return env.ADMIN_SECRET;
	},
	get rateLimitSecret() {
		return env.RATE_LIMIT_SECRET ?? env.ADMIN_SECRET ?? '';
	},
	get flags() {
		return readFlags(env);
	}
};
