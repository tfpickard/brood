export interface MailMessage {
	to: string;
	subject: string;
	text: string;
	replyTo?: string;
}

export type SendResult = { ok: true; providerId?: string } | { ok: false; reason: string };

export interface MailProvider {
	readonly name: 'none' | 'mock' | 'resend';
	send(message: MailMessage): Promise<SendResult>;
}

export interface MailConfig {
	MAIL_PROVIDER?: string;
	MAIL_FROM?: string;
	MAIL_TO?: string;
	RESEND_API_KEY?: string;
	MAIL_MOCK_FILE?: string;
	CONTEXT?: string;
}
