import { env } from '$env/dynamic/public';
import { correspondencePolicy } from '$content/policy.ts';
import { RETENTION } from '$lib/server/inquiries.ts';
import { RATE_LIMIT_RETENTION_HOURS } from '$lib/server/ratelimit.ts';

// Rendered on request so that the published correspondence address is the one configured.
export const prerender = false;

export const load = () => ({
	section: 'Privacy',
	sections: correspondencePolicy({
		address: env.PUBLIC_CORRESPONDENCE_ADDRESS || null,
		inquiryMonths: RETENTION.inquiryMonths,
		setAsideDays: RETENTION.setAsideDays,
		rateLimitHours: RATE_LIMIT_RETENTION_HOURS
	})
});
