import { error } from '@sveltejs/kit';
import { disclaimerById } from '$content/disclaimers.ts';
import { HUSBANDRY, husbandryBySlug } from '$content/husbandry.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => HUSBANDRY.map((h) => ({ slug: h.slug }));

export const load: PageLoad = ({ params }) => {
	const page = husbandryBySlug(params.slug);
	if (!page) error(404, 'Not found');
	return { page, disclaimers: page.disclaimers.map(disclaimerById), section: 'Husbandry' };
};
