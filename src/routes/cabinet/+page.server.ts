import { CABINET } from '$content/cabinet.ts';
import { breedBySlug } from '$content/breeds/index.ts';
import { animal } from '$lib/server/studbook.ts';

export const load = () => ({
	section: 'The Cabinet',
	items: CABINET.map((e) => {
		const a = animal(e.individual);
		return {
			...e,
			animal: a ? { regNo: a.regNo, name: a.name, year: a.broodYear, foundation: !!a.foundation } : null,
			breedName: a ? (breedBySlug(a.breed)?.name ?? '') : ''
		};
	})
});
