import { error } from '@sveltejs/kit';
import { breedsInGroup } from '$content/breeds/index.ts';
import { GROUPS } from '$content/groups.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => GROUPS.map((g) => ({ group: g.id }));

export const load: PageServerLoad = ({ params }) => {
	const group = GROUPS.find((g) => g.id === params.group);
	if (!group) error(404, 'Not found');
	const breeds = breedsInGroup(group.id).map((b) => ({
		slug: b.slug,
		name: b.name,
		register: b.register,
		plate: b.plate
	}));
	return { group, breeds, section: 'Recognized Breeds' };
};
