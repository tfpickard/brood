/** The Registry's naming rules, and the names that break them. */
import { describe, expect, it } from 'vitest';
import { BREEDS } from '../../content/breeds/index.ts';
import {
	ALL_RULES,
	DOG_WORDS,
	SOCIETY_NOUNS,
	UNSHOWY_SEAT_KINDS,
	US_STATES,
	WING_DESCRIPTORS
} from '../../content/naming-rules.ts';
import type { Breed, NamingRule } from '../../content/types.ts';

/** The rules each name fails, decided mechanically where a rule can be. */
function failures(b: Breed): Set<NamingRule> {
	const n = b.naming;
	const out = new Set<NamingRule>();
	const words = b.name.toLowerCase().split(/[\s-]+/);
	const isWing = n.seatKind === 'wing';
	const form = isWing
		? WING_DESCRIPTORS.includes(n.seat) && b.name === `${n.seat} ${n.typeNoun}`
		: b.name === `${n.seat} ${n.typeNoun}` && !/\s/.test(n.typeNoun);
	if (!form) out.add('R1-form');
	if (DOG_WORDS.some((d) => words.includes(d))) out.add('R2-dog-word');
	if (/\bcicada\b|\blocust\b/i.test(b.name)) out.add('R3-cicada');
	if (!SOCIETY_NOUNS.includes(n.typeNoun)) out.add('R5-society-noun');
	if (!UNSHOWY_SEAT_KINDS.includes(n.seatKind)) out.add('R7-unshowy-seat');
	if (!isWing && (n.seatFounded === undefined || n.seatFounded >= 1900)) out.add('R8-pre-1900');
	if (n.seatKind === 'city') out.add('R9-no-city');
	if (n.seatKind === 'state' || US_STATES.includes(n.seat)) out.add('R10-no-state');
	return out;
}

const violators = BREEDS.filter((b) => b.naming.violates.length > 0);
const conforming = BREEDS.filter((b) => b.naming.violates.length === 0);

describe('naming rules', () => {
	it('flags between ten and fourteen per cent of breed names as violators, and at least three', () => {
		const share = violators.length / BREEDS.length;
		expect(violators.length).toBeGreaterThanOrEqual(3);
		expect(share).toBeGreaterThanOrEqual(0.1);
		expect(share).toBeLessThanOrEqual(0.14);
	});

	it('keeps the seed violators exactly as received', () => {
		const names = violators.map((b) => b.name);
		expect(names).toEqual(
			expect.arrayContaining(['Dutchess Taffy Cicada', 'Northern Shrib Locust', 'Palm Beach Water Retriever'])
		);
	});

	it('has every rule broken by at least one violator', () => {
		const broken = new Set(violators.flatMap((b) => b.naming.violates));
		for (const rule of ALL_RULES) expect(broken.has(rule), rule).toBe(true);
	});

	it('records each violator’s breaches truthfully where they can be checked', () => {
		const mechanical: NamingRule[] = ['R2-dog-word', 'R3-cicada', 'R5-society-noun', 'R8-pre-1900', 'R9-no-city', 'R10-no-state'];
		for (const b of violators) {
			const found = failures(b);
			for (const rule of b.naming.violates.filter((r) => mechanical.includes(r))) {
				expect(found.has(rule), `${b.name} ${rule}`).toBe(true);
			}
			expect(found.size, b.name).toBeGreaterThan(0);
			for (const rule of b.naming.violates) expect(ALL_RULES).toContain(rule);
		}
	});

	it('passes every other name against every rule', () => {
		for (const b of conforming) expect([...failures(b)], b.name).toEqual([]);
	});

	it('lists the Beacon Hill Minim last', async () => {
		const { breedsForListing } = await import('../../content/breeds/index.ts');
		expect(breedsForListing().at(-1)?.slug).toBe('beacon-hill-minim');
		expect(BREEDS.find((b) => b.slug === 'beacon-hill-minim')?.register).toBe('tredecim');
	});

	it('gives each violator a registration letter, and no other breed one', () => {
		for (const b of BREEDS) expect(Boolean(b.registrationLetter), b.name).toBe(b.naming.violates.length > 0);
	});
});
