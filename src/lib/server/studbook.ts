/** Stud Book queries. Pure functions over the generated register; usable on server and client. */
import { BREEDS } from '$content/breeds/index.ts';
import { REGISTERS } from '$content/registers.ts';
import { FOUNDATION_REGISTER, STUD_BOOK } from '$content/studbook.generated.ts';
import type { FoundationAnimal, Individual } from '$content/types.ts';
import { href, type PedigreeEntry, type RegisterRow } from '../labels.ts';

export { href, STANDING_LABEL, VARIETY_LABEL } from '../labels.ts';

export type Animal =
	(Individual & { foundation?: false }) | (FoundationAnimal & { foundation: true });

const byRegNo = new Map<string, Animal>();
for (const i of STUD_BOOK) byRegNo.set(i.regNo, { ...i, foundation: false });
for (const f of FOUNDATION_REGISTER) byRegNo.set(f.regNo, { ...f, foundation: true });

export function animal(regNo: string): Animal | undefined {
	return byRegNo.get(regNo);
}

export function breedName(slug: string): string {
	return BREEDS.find((b) => b.slug === slug)?.name ?? slug;
}

export function stockOf(breed: string): Individual[] {
	return STUD_BOOK.filter((i) => i.breed === breed);
}

/** Rows for the register table, with breed names resolved on the server. */
export function registerRows(rows: Individual[]): RegisterRow[] {
	return rows.map((r) => ({ ...r, breedName: breedName(r.breed) }));
}

/**
 * The pedigree in pre-order: subject, then each sire followed by its own ancestry, then the dam.
 * `generations` counts the subject; 5 gives the subject and four ancestor generations.
 */
export function pedigree(regNo: string, generations = 5): PedigreeEntry[] {
	const rows = 2 ** (generations - 1);
	const out: PedigreeEntry[] = [];
	const visit = (reg: string | undefined, g: number, r: number, side?: 'sire' | 'dam') => {
		const s = rows / 2 ** (g - 1);
		const a = reg ? animal(reg) : undefined;
		if (!a) {
			out.push({ g, r, s, side, name: 'Not of record', meta: '' });
			return;
		}
		const parts = [a.regNo, String(a.broodYear)];
		if (a.eyes === 'blue') parts.push('Blue eye');
		if (a.foundation) parts.push('F.R.');
		else if (a.titles.length) parts.push(a.titles.join(' '));
		out.push({ g, r, s, side, name: a.name, meta: parts.join(' · '), href: href(a) });
		if (g < generations && !a.foundation) {
			visit(a.sire, g + 1, r, 'sire');
			visit(a.dam, g + 1, r + s / 2, 'dam');
		} else if (g < generations && a.foundation) {
			// Parentage not of record: the chart stops at the Foundation Register.
		}
	};
	visit(regNo, 1, 1);
	return out;
}

/** Depth of recorded ancestry above an animal (Foundation Register animals count as a generation). */
export function ancestryDepth(regNo: string): number {
	const a = animal(regNo);
	if (!a || a.foundation) return 0;
	const s = ancestryDepth(a.sire);
	const d = ancestryDepth(a.dam);
	return 1 + Math.min(s, d);
}

export function cycleOfBreed(slug: string): number {
	const b = BREEDS.find((x) => x.slug === slug);
	return b ? REGISTERS[b.register].cycle : 17;
}
