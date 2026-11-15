import { fail } from '@sveltejs/kit';
import { MEMBERSHIP } from '$content/pages.ts';
import { reviewDate, validateApplication } from '$lib/server/membership.ts';
import type { Actions } from './$types';

export const prerender = false;

export const load = () => ({ section: 'Membership' });

export const actions: Actions = {
	// Stores nothing and sends nothing: the application is validated and answered.
	default: async ({ request }) => {
		const data = await request.formData();
		const result = validateApplication(data);
		if (!result.ok) return fail(400, { errors: result.errors, values: result.values });
		const review = reviewDate();
		return { acknowledged: true, paragraphs: MEMBERSHIP.acknowledgment(review.written) };
	}
};
