import { error } from '@sveltejs/kit';
import { BREEDS, breedBySlug } from '$content/breeds/index.ts';
import { disclaimerById } from '$content/disclaimers.ts';
import { groupById } from '$content/groups.ts';
import { REGISTERS } from '$content/registers.ts';
import { registerRows, stockOf } from '$lib/server/studbook.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => BREEDS.map((b) => ({ breed: b.slug }));

export const load: PageServerLoad = ({ params }) => {
	const breed = breedBySlug(params.breed);
	if (!breed) error(404, 'Not found');
	// The naming record is author-only and never leaves the content layer.
	const { naming: _naming, ...pub } = breed;
	void _naming;
	return {
		breed: pub,
		group: (({ id, name, title }) => ({ id, name, title }))(groupById(breed.group)),
		register: REGISTERS[breed.register],
		disclaimers: breed.disclaimers.map(disclaimerById),
		stock: registerRows(stockOf(breed.slug)),
		section: 'Breeds'
	};
};
