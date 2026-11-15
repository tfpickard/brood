import { error } from '@sveltejs/kit';
import { SUPPERS } from '$content/suppers.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => SUPPERS.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const i = SUPPERS.findIndex((s) => s.slug === params.slug);
	const supper = SUPPERS[i];
	if (!supper) error(404, 'Not found');
	return {
		supper,
		prev: SUPPERS[i - 1] ?? null,
		next: SUPPERS[i + 1] ?? null,
		section: 'The Supper Club'
	};
};
