import { error, fail } from '@sveltejs/kit';
import { CATALOGUE } from '$content/catalogue.ts';
import { disclaimerById } from '$content/disclaimers.ts';
import { config, db, mail } from '$lib/server/config.ts';
import { createInquiry, isAutomated, notify, validateInquiry } from '$lib/server/inquiries.ts';
import { hit, INQUIRY_LIMIT } from '$lib/server/ratelimit.ts';
import type { Actions, PageServerLoad } from './$types';

// The inquiry form posts to a server action, so these pages are rendered on request.
export const prerender = false;

export const load: PageServerLoad = ({ params }) => {
	const item = CATALOGUE.find((c) => c.slug === params.item);
	if (!item) error(404, 'Not found');
	return {
		item,
		disclaimers: item.disclaimers.map(disclaimerById),
		section: 'Equipment'
	};
};

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const data = await request.formData();

		// A filled honeypot is answered as though received, and nothing is stored or sent.
		if (isAutomated(data)) return { received: true };

		const result = validateInquiry(data);
		if (!result.ok) return fail(400, { errors: result.errors, values: result.values });

		const sql = db();
		const { allowed } = await hit(sql, INQUIRY_LIMIT, getClientAddress(), config.rateLimitSecret);
		if (!allowed)
			return fail(429, {
				limited: true,
				values: { ...result.value, item: result.value.itemRef ?? '' }
			});

		const id = await createInquiry(sql, result.value);
		await notify(sql, mail(), result.value, id, config.mailTo);
		return { received: true };
	}
};
