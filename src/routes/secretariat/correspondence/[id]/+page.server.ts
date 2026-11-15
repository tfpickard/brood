import { error, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/config.ts';
import { inquirySource, isInquiryStatus, STATUS_LABELS } from '$lib/server/moderation/index.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	if (!locals.secretary) redirect(303, '/secretariat');
	const r = await inquirySource.get(db(), params.id);
	if (!r) error(404, 'Not found');
	return {
		inquiry: {
			...r,
			receivedAt: r.receivedAt.toISOString(),
			statusChangedAt: r.statusChangedAt?.toISOString() ?? null,
			notifiedAt: r.notifiedAt?.toISOString() ?? null
		},
		labels: STATUS_LABELS
	};
};

export const actions: Actions = {
	status: async ({ locals, params, request }) => {
		if (!locals.secretary) redirect(303, '/secretariat');
		const status = (await request.formData()).get('status');
		if (!isInquiryStatus(status)) error(400, 'Not recognized');
		await inquirySource.setStatus(db(), params.id, status);
		return { updated: true };
	},
	remove: async ({ locals, params }) => {
		if (!locals.secretary) redirect(303, '/secretariat');
		await inquirySource.remove(db(), params.id);
		redirect(303, '/secretariat/correspondence');
	}
};
