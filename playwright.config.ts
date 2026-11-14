import { defineConfig } from '@playwright/test';

const PORT = 4174;
const DATABASE_URL =
	process.env.E2E_DATABASE_URL ?? 'postgres://brood:brood@localhost:5432/brood_e2e';

export default defineConfig({
	testDir: 'tests/e2e',
	globalSetup: './tests/e2e/global-setup.ts',
	fullyParallel: false,
	workers: 1,
	use: { baseURL: `http://localhost:${PORT}`, trace: 'off' },
	webServer: {
		command: `npx vite build && npx vite preview --port ${PORT} --strictPort`,
		port: PORT,
		reuseExistingServer: false,
		timeout: 240_000,
		env: {
			DATABASE_URL,
			ADMIN_SECRET: 'e2e-secretariat-secret-value',
			RATE_LIMIT_SECRET: 'e2e-rate-limit-secret',
			MAIL_PROVIDER: 'mock',
			MAIL_TO: 'secretary@example.org',
			MAIL_MOCK_FILE: '.mock-mail/e2e-outbox.jsonl',
			PUBLIC_CORRESPONDENCE_ADDRESS: 'secretary@example.org'
		}
	}
});
