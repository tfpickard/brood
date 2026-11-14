import { breedsInGroup } from '$content/breeds/index.ts';
import { GROUPS } from '$content/groups.ts';

export const load = () => ({
	section: 'Recognized Breeds',
	groups: GROUPS.map((group) => ({
		group,
		breeds: breedsInGroup(group.id).map((b) => ({ slug: b.slug, name: b.name, register: b.register }))
	}))
});
