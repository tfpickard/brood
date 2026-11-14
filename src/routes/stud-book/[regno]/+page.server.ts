import { error } from '@sveltejs/kit';
import { breedBySlug } from '$content/breeds/index.ts';
import { REGISTERS } from '$content/registers.ts';
import { FOUNDATION_REGISTER, STUD_BOOK } from '$content/studbook.generated.ts';
import { regNoToSlug, slugToRegNo } from '$lib/format.ts';
import { animal, pedigree, STANDING_LABEL, VARIETY_LABEL } from '$lib/server/studbook.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
	[...STUD_BOOK, ...FOUNDATION_REGISTER].map((a) => ({ regno: regNoToSlug(a.regNo) }));

export const load: PageServerLoad = ({ params }) => {
	const found = animal(slugToRegNo(params.regno));
	if (!found) error(404, 'Not found');
	const breed = breedBySlug(found.breed);
	if (!breed) error(404, 'Not found');
	const { naming: _n, ...pubBreed } = breed;
	void _n;
	const sire = !found.foundation ? animal(found.sire) : undefined;
	const dam = !found.foundation ? animal(found.dam) : undefined;
	return {
		section: 'The Stud Book',
		animal: found,
		breed: {
			slug: pubBreed.slug,
			name: pubBreed.name,
			group: pubBreed.group,
			hostTree: pubBreed.hostTree
		},
		register: REGISTERS[breed.register],
		sire: sire ? { regNo: sire.regNo, name: sire.name } : null,
		dam: dam ? { regNo: dam.regNo, name: dam.name } : null,
		pedigree: pedigree(found.regNo, 5),
		standingLabel: found.foundation ? 'Foundation Register' : STANDING_LABEL[found.standing],
		varietyLabel: VARIETY_LABEL[found.variety]
	};
};
