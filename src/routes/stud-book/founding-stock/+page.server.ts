import { FOUNDATION_REGISTER } from '$content/studbook.generated.ts';
import { breedName } from '$lib/server/studbook.ts';

export const load = () => ({
	section: 'Stud Book',
	rows: FOUNDATION_REGISTER.map((r) => ({ ...r, breedName: breedName(r.breed) }))
});
