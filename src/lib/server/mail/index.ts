/**
 * Transactional email behind a small provider interface, selected by MAIL_PROVIDER.
 * With no provider configured the site still works: inquiries are stored and queued, and the
 * notification is recorded as not configured.
 */
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import type { MailConfig, MailMessage, MailProvider, SendResult } from './types.ts';

export type { MailConfig, MailMessage, MailProvider, SendResult } from './types.ts';

const noneProvider: MailProvider = {
	name: 'none',
	async send(): Promise<SendResult> {
		return { ok: false, reason: 'not_configured' };
	}
};

function mockProvider(file: string): MailProvider {
	return {
		name: 'mock',
		async send(message: MailMessage): Promise<SendResult> {
			await mkdir(dirname(file), { recursive: true });
			await appendFile(file, JSON.stringify({ at: new Date().toISOString(), ...message }) + '\n');
			return { ok: true, providerId: 'mock' };
		}
	};
}

function resendProvider(apiKey: string, from: string): MailProvider {
	return {
		name: 'resend',
		async send(message: MailMessage): Promise<SendResult> {
			try {
				const res = await fetch('https://api.resend.com/emails', {
					method: 'POST',
					headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
					body: JSON.stringify({
						from,
						to: [message.to],
						subject: message.subject,
						text: message.text,
						...(message.replyTo ? { reply_to: message.replyTo } : {})
					})
				});
				if (!res.ok) return { ok: false, reason: `http_${res.status}` };
				const body = (await res.json()) as { id?: string };
				return { ok: true, providerId: body.id };
			} catch {
				return { ok: false, reason: 'network' };
			}
		}
	};
}

export function getMailProvider(config: MailConfig): MailProvider {
	switch (config.MAIL_PROVIDER) {
		case 'resend':
			if (!config.RESEND_API_KEY || !config.MAIL_FROM) return noneProvider;
			return resendProvider(config.RESEND_API_KEY, config.MAIL_FROM);
		case 'mock':
			// The mock provider is a test fixture and is refused in a production deploy.
			if (config.CONTEXT === 'production' || !config.MAIL_MOCK_FILE) return noneProvider;
			return mockProvider(config.MAIL_MOCK_FILE);
		default:
			return noneProvider;
	}
}
