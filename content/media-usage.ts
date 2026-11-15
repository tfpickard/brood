/**
 * Every media reference in the content, with the route on which it is used. The media manifest
 * is checked against this map: every reference must exist in the manifest, and every manifest
 * entry must be used somewhere (tested).
 */
import { ALBUMS } from './albums.ts';
import { BREEDS } from './breeds/index.ts';
import { CABINET } from './cabinet.ts';
import { CATALOGUE } from './catalogue.ts';
import { COUNCIL_PORTRAIT, GOVERNANCE_PLATES } from './governance.ts';
import { HUSBANDRY } from './husbandry.ts';
import { SUPPERS } from './suppers.ts';
import { TESTIMONIALS } from './testimonials.ts';

export function mediaUsage(): Map<string, string[]> {
	const usage = new Map<string, string[]>();
	const add = (id: string, route: string) => {
		const routes = usage.get(id) ?? [];
		if (!routes.includes(route)) routes.push(route);
		usage.set(id, routes);
	};
	for (const b of BREEDS) {
		const route = `/breeds/${b.slug}`;
		add(b.plate.media, route);
		add(b.plate.media, '/breeds');
		for (const p of b.photos) add(p.media, route);
		if (b.registrationLetter) add(b.registrationLetter.media, route);
	}
	for (const t of TESTIMONIALS) add(t.plate.media, '/from-the-membership');
	for (const item of CATALOGUE) {
		for (const p of item.plates) add(p.media, `/equipment/${item.slug}`);
		const first = item.plates[0];
		if (first) add(first.media, '/equipment');
	}
	for (const s of SUPPERS) for (const p of s.plates) add(p.media, `/supper-club/${s.slug}`);
	for (const h of HUSBANDRY) for (const p of h.plates) add(p.media, `/care/${h.slug}`);
	for (const p of GOVERNANCE_PLATES) add(p.media, '/governance');
	add(COUNCIL_PORTRAIT.media, '/governance');
	for (const p of ALBUMS) add(p.media, '/albums');
	for (const c of CABINET) add(c.plate.media, '/shells');
	return usage;
}
