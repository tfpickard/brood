/**
 * Builds the Stud Book and the Foundation Register deterministically from the breed roster and
 * the hand-authored notables in content/studbook.seed.ts. Output: content/studbook.generated.ts.
 *
 * Consistency by construction:
 *  - every animal of a breed emerges in that breed's years (broodYear ≡ phaseYear mod cycle);
 *  - sire and dam are of the same breed (hence the same Register) and of the previous cohort,
 *    exactly one cycle earlier, chosen from animals in good standing;
 *  - the oldest cohort of each breed is entered in the Foundation Register, parentage not of record;
 *  - each breed has at least five Stud Book cohorts, so the latest animals carry four complete
 *    ancestor generations.
 *
 * Usage: npm run content:studbook   (seeded; identical output on every run)
 */
import { writeFileSync } from 'node:fs';
import { BREEDS } from '../content/breeds/index.ts';
import { REGISTERS } from '../content/registers.ts';
import { RESERVED_NUMBERS, SEEDS, type Seed } from '../content/studbook.seed.ts';
import type { Breed, FoundationAnimal, Individual, Sex, Variety } from '../content/types.ts';

const PER_COHORT = 6; // three sires, three dams
const MIN_COHORTS = 5;
const LAST_YEAR = 2026;

function mulberry32(seed: number) {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}
const rand = mulberry32(0x5eed17);
const pick = <T>(xs: readonly T[]): T => xs[Math.floor(rand() * xs.length)] as T;

const GIVEN_MALE = [
	'Bellman',
	'Steward',
	'Tallyman',
	'Sentinel',
	'Ledger',
	'Drum',
	'Bellwether',
	'Warden',
	'Lantern',
	'Provost',
	'Reeve',
	'Marshal',
	'Herald',
	'Chancel',
	'Tenor',
	'Sexton',
	'Bailiff',
	'Ensign',
	'Cornet',
	'Almoner',
	'Escheator',
	'Factor',
	'Coroner',
	'Usher',
	'Precentor',
	'Cantor',
	'Verderer',
	'Seneschal',
	'Pursuivant',
	'Castellan',
	'Forester',
	'Vintner',
	'Chaplain',
	'Assessor',
	'Registrar'
];
const GIVEN_FEMALE = [
	'Patience',
	'Constancy',
	'Amabel',
	'Verity',
	'Clemency',
	'Lark',
	'Hester',
	'Corisande',
	'Diligence',
	'Prudence',
	'Temperance',
	'Mercy',
	'Honor',
	'Felicity',
	'Charity',
	'Modesty',
	'Sophronia',
	'Avis',
	'Philippa',
	'Rosamund',
	'Isolde',
	'Ottoline',
	'Griselda',
	'Perpetua',
	'Benedicta',
	'Hesper',
	'Columbine',
	'Damaris',
	'Euphemia',
	'Lettice',
	'Thomasina',
	'Wilhelmina',
	'Cressida',
	'Sabine'
];

const FAMILIES = [
	'Wyck',
	'Haddon',
	'Pemberton',
	'Calloway',
	'Ormsby',
	'Fairlie',
	'Sallowes',
	'Ardsley',
	'Ostrander',
	'Haverill',
	'Penhallow',
	'Lisle',
	'Dunmore',
	'Thackery',
	'Bayard-Lisle',
	'Merriman',
	'Vance',
	'Holloway',
	'Garrick',
	'Ridley',
	'Ashcombe',
	'Tolland',
	'Breckin',
	'Sedgwick-Hale',
	'Corwin',
	'Lattimore',
	'Peverell',
	'Quarles',
	'Stanwood',
	'Ellery',
	'Ravenel',
	'Mortlake',
	'Treadway'
];

const SEATS: Record<string, string> = {};
function seatFor(breed: Breed): string {
	return (SEATS[breed.slug] ??=
		breed.naming.seatKind === 'wing' ? 'Middleburg' : breed.naming.seat);
}

function cyclesOf(breed: Breed): number[] {
	const cycle = REGISTERS[breed.register].cycle;
	let latest = breed.phaseYear;
	while (latest + cycle <= LAST_YEAR) latest += cycle;
	const firstAfterRecognition = (() => {
		let y = latest;
		while (y - cycle >= Math.max(1896, breed.recognized)) y -= cycle;
		return y;
	})();
	const earliest = Math.min(firstAfterRecognition, latest - (MIN_COHORTS - 1) * cycle);
	const years: number[] = [];
	for (let y = earliest; y <= latest; y += cycle) years.push(y);
	return years;
}

function varietyFor(breed: Breed): Variety {
	const v = breed.varieties;
	if (breed.group === 'working' || breed.group === 'protection') {
		if (v.includes('kilocada') && rand() < 0.6) return 'kilocada';
	}
	if (v.includes('microcada') && rand() < (breed.group === 'companion' ? 0.45 : 0.2))
		return 'microcada';
	return 'standard';
}

function exuviaFor(variety: Variety, family: string, seat: string, year: number): string {
	if (variety === 'kilocada')
		return pick([
			`Long gallery, ${seat}`,
			`Front hall, ${seat}`,
			`On a stand, the ${family} collection`
		]);
	if (variety === 'microcada')
		return pick([`Miniature case, the ${family} collection`, `Set in a signet ring, ${seat}`]);
	const r = rand();
	if (r < 0.08 && year < 1960) return 'Buried with the owner';
	if (r < 0.16 && year < 2000) return `Went to another family, ${year + pick([3, 9, 17, 21, 34])}`;
	return pick([
		`Cabinet, the ${family} collection, ${seat}`,
		`Crystal cabinet, the ${family} collection`,
		`Cabinet, ${seat}`
	]);
}

const usedNames = new Set<string>(SEEDS.map((s) => s.name));
function nameFor(family: string, sex: Sex): string {
	const pool = sex === 'male' ? GIVEN_MALE : GIVEN_FEMALE;
	for (let i = 0; i < 40; i++) {
		const n = `${family} ${pick(pool)}`;
		if (!usedNames.has(n)) {
			usedNames.add(n);
			return n;
		}
	}
	const base = `${family} ${pick(pool)}`;
	let k = 2;
	while (usedNames.has(`${base} ${roman(k)}`)) k++;
	usedNames.add(`${base} ${roman(k)}`);
	return `${base} ${roman(k)}`;
}

function roman(n: number): string {
	return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] ?? String(n);
}

interface Draft {
	breed: Breed;
	year: number;
	sex: Sex;
	cohort: number;
	foundation: boolean;
	name: string;
	family: string;
	variety: Variety;
	eyes: 'red' | 'blue';
	sire?: Draft;
	dam?: Draft;
	seed?: Seed;
	regNo?: string;
	titles: string[];
}

const drafts: Draft[] = [];
for (const breed of BREEDS) {
	const years = cyclesOf(breed);
	const families = [pick(FAMILIES), pick(FAMILIES), pick(FAMILIES)];
	let previous: Draft[] = [];
	years.forEach((year, cohort) => {
		const foundation = cohort === 0;
		const current: Draft[] = [];
		for (let i = 0; i < PER_COHORT; i++) {
			const sex: Sex = i % 2 === 0 ? 'male' : 'female';
			const family = families[i % families.length] as string;
			const seed = SEEDS.find(
				(s) => s.breed === breed.slug && s.year === year && s.sex === sex && !s.claimed
			);
			if (seed) seed.claimed = true;
			const d: Draft = {
				breed,
				year,
				sex,
				cohort,
				foundation,
				family: seed?.family ?? family,
				name: seed?.name ?? nameFor(family, sex),
				variety: seed?.variety ?? varietyFor(breed),
				eyes: seed?.eyes ?? 'red',
				seed,
				titles: seed?.titles ?? (rand() < 0.18 ? [pick(['Ch.', 'Ch.', 'W.M.', 'Ch., W.M.'])] : [])
			};
			if (seed?.name) usedNames.add(seed.name);
			if (!foundation) {
				const goodSires = previous.filter((p) => p.sex === 'male' && !p.seed?.straggler);
				const goodDams = previous.filter((p) => p.sex === 'female' && !p.seed?.straggler);
				d.sire = pick(goodSires);
				d.dam = pick(goodDams);
			}
			current.push(d);
		}
		drafts.push(...current);
		previous = current;
	});
}

const unclaimed = SEEDS.filter((s) => !s.claimed);
if (unclaimed.length) {
	throw new Error(
		`Seeds not placed: ${unclaimed.map((s) => `${s.name} ${s.breed} ${s.year}`).join('; ')}`
	);
}

// Registration numbers, in order of emergence within each Register. Fixed numbers from seeds are
// honored; numbers reserved by Notices (animals struck from the Stud Book) are never issued.
function assign(prefix: string, list: Draft[], start: number) {
	const fixed = new Set(list.map((d) => d.seed?.regNo).filter(Boolean));
	let n = start;
	for (const d of list) {
		if (d.seed?.regNo) {
			d.regNo = d.seed.regNo;
			continue;
		}
		let candidate: string;
		do {
			candidate = `${prefix}·${String(n).padStart(5, '0')}`;
			n++;
		} while (fixed.has(candidate) || RESERVED_NUMBERS.includes(candidate));
		d.regNo = candidate;
	}
}

const order = (a: Draft, b: Draft) => a.year - b.year || a.breed.slug.localeCompare(b.breed.slug);
for (const register of ['septendecim', 'tredecim'] as const) {
	const r = REGISTERS[register];
	const all = drafts.filter((d) => d.breed.register === register).sort(order);
	assign(
		`F-${r.cycle}`,
		all.filter((d) => d.foundation),
		1
	);
	assign(
		r.prefix,
		all.filter((d) => !d.foundation),
		1
	);
}

const foundation: FoundationAnimal[] = drafts
	.filter((d) => d.foundation)
	.sort(order)
	.map((d) => ({
		regNo: d.regNo as string,
		name: d.name,
		breed: d.breed.slug,
		variety: d.variety,
		sex: d.sex,
		broodYear: d.year,
		eyes: d.eyes,
		owner: `The ${d.family} family`
	}));

const studBook: Individual[] = drafts
	.filter((d) => !d.foundation)
	.sort(order)
	.map((d) => {
		const s = d.seed;
		const seat = seatFor(d.breed);
		const ind: Individual = {
			regNo: d.regNo as string,
			name: d.name,
			breed: d.breed.slug,
			variety: d.variety,
			sex: d.sex,
			broodYear: d.year,
			sire: d.sire?.regNo as string,
			dam: d.dam?.regNo as string,
			eyes: d.eyes,
			titles: d.titles,
			exuvia: s?.exuvia ?? exuviaFor(d.variety, d.family, seat, d.year),
			owner: s?.owner ?? `The ${d.family} family, ${seat}`,
			standing: s?.straggler ? 'disqualified' : (s?.standing ?? 'good')
		};
		if (s?.straggler) {
			ind.actualEmergence = d.year - 4;
			ind.disqualification = 'Hatched four years early. Disqualified.';
		} else if (s?.disqualification) {
			ind.disqualification = s.disqualification;
		}
		if (s?.remark) ind.remark = s.remark;
		if (s?.sale) ind.sale = s.sale;
		if (s?.notable) ind.notable = true;
		return ind;
	});

const header = `// GENERATED by scripts/build-studbook.ts from the breed roster and content/studbook.seed.ts.
// Do not edit by hand. Regenerate with: npm run content:studbook
import type { FoundationAnimal, Individual } from './types.ts';
`;
writeFileSync(
	'content/studbook.generated.ts',
	`${header}
export const FOUNDATION_REGISTER: FoundationAnimal[] = ${JSON.stringify(foundation, null, '\t')};

export const STUD_BOOK: Individual[] = ${JSON.stringify(studBook, null, '\t')};
`
);
console.log(
	`Stud Book: ${studBook.length} entries. Foundation Register: ${foundation.length} entries.`
);
