import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/config.ts';
import { inquirySource, isInquiryStatus, STATUS_LABELS } from '$lib/server/moderation/index.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (!locals.secretary) redirect(303, '/secretariat');
	const status = url.searchParams.get('status');
	const filter = isInquiryStatus(status) ? status : undefined;
	const rows = await inquirySource.list(db(), filter);
	return {
		filter: filter ?? '',
		labels: STATUS_LABELS,
		rows: rows.map((r) => ({
			id: r.id,
			receivedAt: r.receivedAt.toISOString(),
			name: r.name,
			email: r.email,
			itemRef: r.itemRef,
			status: r.status,
			excerpt: r.message.slice(0, 120)
		}))
	};
};
