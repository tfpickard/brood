/** Display labels and links for the Stud Book. Pure; carries no register data. */
import type { Individual } from '$content/types.ts';
import { regNoToSlug } from './format.ts';

export type RegisterRow = Individual & { breedName: string };

export interface PedigreeEntry {
	g: number;
	r: number;
	s: number;
	side?: 'sire' | 'dam';
	name: string;
	meta: string;
	href?: string;
}

export const STANDING_LABEL = {
	good: 'In good standing',
	disqualified: 'Disqualified',
	struck: 'Struck from the Stud Book'
} as const;

export const VARIETY_LABEL = {
	standard: 'Regular',
	microcada: 'Miniature',
	kilocada: 'Large'
} as const;

export function href(a: { regNo: string }): string {
	return `/stud-book/${regNoToSlug(a.regNo)}`;
}
