/** Data integrity of the Stud Book, the breeds and the Groups. */
import { describe, expect, it } from 'vitest';
import { BREEDS } from '../../content/breeds/index.ts';
import { CABINET } from '../../content/cabinet.ts';
import { GROUPS } from '../../content/groups.ts';
import { REGISTERS } from '../../content/registers.ts';
import { RESERVED_NUMBERS } from '../../content/studbook.seed.ts';
import { FOUNDATION_REGISTER, STUD_BOOK } from '../../content/studbook.generated.ts';
import type { Breed } from '../../content/types.ts';

const breedOf = new Map(BREEDS.map((b) => [b.slug, b]));
const all = new Map<string, { breed: string; broodYear: number; sex: string }>();
for (const f of FOUNDATION_REGISTER) all.set(f.regNo, f);
for (const i of STUD_BOOK) all.set(i.regNo, i);
const cycle = (b: Breed) => REGISTERS[b.register].cycle;

describe('the Stud Book', () => {
	it('holds at least sixty individuals', () => {
		expect(STUD_BOOK.length).toBeGreaterThanOrEqual(60);
	});

	it('records a sire and dam for every individual, of record, of the right sex, exactly one cycle earlier', () => {
		for (const ind of STUD_BOOK) {
			const b = breedOf.get(ind.breed);
			expect(b, ind.regNo).toBeDefined();
			const sire = all.get(ind.sire);
			const dam = all.get(ind.dam);
			expect(sire, `${ind.regNo} sire ${ind.sire}`).toBeDefined();
			expect(dam, `${ind.regNo} dam ${ind.dam}`).toBeDefined();
			expect(sire?.sex, `${ind.regNo} sire sex`).toBe('male');
			expect(dam?.sex, `${ind.regNo} dam sex`).toBe('female');
			expect(sire?.broodYear, `${ind.regNo} sire year`).toBe(ind.broodYear - cycle(b as Breed));
			expect(dam?.broodYear, `${ind.regNo} dam year`).toBe(ind.broodYear - cycle(b as Breed));
		}
	});

	it('has no individual in good standing whose parents come from different Registers', () => {
		for (const ind of STUD_BOOK.filter((i) => i.standing === 'good')) {
			const own = breedOf.get(ind.breed)?.register;
			const s = breedOf.get(all.get(ind.sire)?.breed ?? '')?.register;
			const d = breedOf.get(all.get(ind.dam)?.breed ?? '')?.register;
			expect([s, d], ind.regNo).toEqual([own, own]);
		}
	});

	it('enters every animal in a year of its line', () => {
		for (const a of [...STUD_BOOK, ...FOUNDATION_REGISTER]) {
			const b = breedOf.get(a.breed) as Breed;
			expect((((a.broodYear - b.phaseYear) % cycle(b)) + cycle(b)) % cycle(b), a.regNo).toBe(0);
		}
	});

	it('disqualifies every straggler and enters it as such', () => {
		const stragglers = STUD_BOOK.filter((i) => i.actualEmergence !== undefined);
		expect(stragglers.length).toBeGreaterThanOrEqual(3);
		for (const s of stragglers) {
			expect(s.actualEmergence, s.regNo).toBe(s.broodYear - 4);
			expect(s.standing, s.regNo).toBe('disqualified');
			expect(s.disqualification, s.regNo).toMatch(/Straggler/);
		}
		for (const i of STUD_BOOK.filter((i) => i.standing !== 'good')) {
			expect(i.disqualification, i.regNo).toBeTruthy();
		}
	});

	it('issues unique registration numbers and never reissues a struck number', () => {
		const numbers = [...STUD_BOOK, ...FOUNDATION_REGISTER].map((a) => a.regNo);
		expect(new Set(numbers).size).toBe(numbers.length);
		for (const n of RESERVED_NUMBERS) expect(numbers).not.toContain(n);
		for (const n of numbers) expect(n).toMatch(/^(S-17|T-13|F-17|F-13)·\d{5}$/);
		for (const i of STUD_BOOK) {
			const prefix = REGISTERS[(breedOf.get(i.breed) as Breed).register].prefix;
			expect(i.regNo.startsWith(prefix), i.regNo).toBe(true);
		}
	});

	it('gives every animal a name of its own', () => {
		const names = [...STUD_BOOK, ...FOUNDATION_REGISTER].map((a) => a.name);
		expect(new Set(names).size).toBe(names.length);
	});

	it('keeps parentage out of the Foundation Register', () => {
		for (const f of FOUNDATION_REGISTER) {
			expect('sire' in f || 'dam' in f, f.regNo).toBe(false);
		}
	});

	it('gives every animal four complete ancestor generations once its line has that many of record', () => {
		const depth = (reg: string): number => {
			const i = STUD_BOOK.find((x) => x.regNo === reg);
			if (!i) return 0; // Foundation Register: parentage not of record
			return 1 + Math.min(depth(i.sire), depth(i.dam));
		};
		let full = 0;
		for (const b of BREEDS) {
			const founded = Math.min(
				...FOUNDATION_REGISTER.filter((f) => f.breed === b.slug).map((f) => f.broodYear)
			);
			for (const i of STUD_BOOK.filter((x) => x.breed === b.slug)) {
				const generations = (i.broodYear - founded) / cycle(b);
				expect(depth(i.regNo), i.regNo).toBe(Math.min(generations, depth(i.regNo)));
				if (generations >= 4) {
					expect(depth(i.regNo), i.regNo).toBeGreaterThanOrEqual(4);
					full++;
				}
			}
		}
		// Every breed's current animals, and far more than sixty in all, carry four full generations.
		expect(full).toBeGreaterThanOrEqual(60);
		for (const b of BREEDS) {
			const latest = Math.max(
				...STUD_BOOK.filter((x) => x.breed === b.slug).map((x) => x.broodYear)
			);
			for (const i of STUD_BOOK.filter((x) => x.breed === b.slug && x.broodYear === latest)) {
				expect(depth(i.regNo), i.regNo).toBeGreaterThanOrEqual(4);
			}
		}
	});

	it('refers the Cabinet only to animals of record', () => {
		for (const e of CABINET) expect(all.has(e.individual), e.id).toBe(true);
	});
});

describe('breeds and Groups', () => {
	it('recognizes at least sixteen breeds', () => {
		expect(BREEDS.length).toBeGreaterThanOrEqual(16);
	});

	it('places every breed in exactly one Group and one Register', () => {
		const groups = new Set(GROUPS.map((g) => g.id));
		for (const b of BREEDS) {
			expect(groups.has(b.group), b.slug).toBe(true);
			expect(Object.keys(REGISTERS)).toContain(b.register);
			expect(BREEDS.filter((x) => x.slug === b.slug)).toHaveLength(1);
		}
	});

	it('gives every Group at least four breeds', () => {
		for (const g of GROUPS)
			expect(BREEDS.filter((b) => b.group === g.id).length, g.id).toBeGreaterThanOrEqual(4);
	});

	it('gives every breed a plate, at least three photographs and one diagram', () => {
		for (const b of BREEDS) {
			expect(b.plate.media, b.slug).toBeTruthy();
			expect(b.photos.length, b.slug).toBeGreaterThanOrEqual(3);
			expect(b.diagram, b.slug).toBeTruthy();
			expect(b.faults.length, b.slug).toBeGreaterThan(0);
			expect(b.disqualifications.length, b.slug).toBeGreaterThan(0);
			expect(b.history.length, b.slug).toBeGreaterThan(0);
		}
	});

	it('requires the right notices for the varieties and Group', () => {
		for (const b of BREEDS) {
			if (b.group === 'protection')
				expect(b.disclaimers, b.slug).toEqual(
					expect.arrayContaining(['hearing', 'home-inspection'])
				);
			if (b.varieties.includes('kilocada'))
				expect(b.disclaimers, b.slug).toEqual(
					expect.arrayContaining(['county-notification', 'oxygen'])
				);
			if (b.varieties.includes('microcada'))
				expect(b.disclaimers, b.slug).toContain('magnification');
		}
	});

	it('lists every breed with stock of record, and only its own stock', () => {
		for (const b of BREEDS) {
			const stock = STUD_BOOK.filter((i) => i.breed === b.slug);
			expect(stock.length, b.slug).toBeGreaterThan(0);
			for (const i of stock) expect(breedOf.get(i.breed)?.slug).toBe(b.slug);
		}
	});
});
