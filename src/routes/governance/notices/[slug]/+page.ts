import { error } from '@sveltejs/kit';
import { NOTICES, noticeBySlug } from '$content/notices.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => NOTICES.map((n) => ({ slug: n.slug }));

export const load: PageLoad = ({ params }) => {
	const notice = noticeBySlug(params.slug);
	if (!notice) error(404, 'Not found');
	return { notice, section: 'Governance' };
};
