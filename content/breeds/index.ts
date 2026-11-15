/** Breed registry. Canonical order: by Group, Septendecim before Tredecim, then by year of recognition. */
import type { Breed, GroupId } from '../types.ts';
import { GROUPS } from '../groups.ts';
import { breed as b0 } from './aiken-marker.ts';
import { breed as b1 } from './allegheny-drayer.ts';
import { breed as b2 } from './beacon-hill-minim.ts';
import { breed as b3 } from './brandywine-alarum.ts';
import { breed as b4 } from './clear-winged-loader.ts';
import { breed as b5 } from './dark-harbor-constant.ts';
import { breed as b6 } from './dutchess-taffy-cicada.ts';
import { breed as b7 } from './edisto-pavane.ts';
import { breed as b8 } from './fishers-island-vedette.ts';
import { breed as b9 } from './flat-winged-bearer.ts';
import { breed as b10 } from './hudson-tender.ts';
import { breed as b11 } from './lenox-verger.ts';
import { breed as b12 } from './ligonier-ostler.ts';
import { breed as b13 } from './little-compton-canticle.ts';
import { breed as b14 } from './mackinac-repeater.ts';
import { breed as b15 } from './maryland-molt-liquor.ts';
import { breed as b16 } from './matinecock-courser.ts';
import { breed as b17 } from './millbrook-flanker.ts';
import { breed as b18 } from './narragansett-pale.ts';
import { breed as b19 } from './newport-vesper.ts';
import { breed as b20 } from './north-haven-tiler.ts';
import { breed as b21 } from './northern-shrib-locust.ts';
import { breed as b22 } from './palm-beach-water-retriever.ts';
import { breed as b23 } from './piedmont-familiar.ts';
import { breed as b24 } from './prides-crossing-linstock.ts';
import { breed as b25 } from './sewickley-sexton.ts';
import { breed as b26 } from './shenandoah-picket.ts';
import { breed as b27 } from './smoke-winged-hayward.ts';
import { breed as b28 } from './tidewater-beater.ts';
import { breed as b29 } from './tuxedo-warder.ts';
import { breed as b30 } from './upperville-sconce.ts';
import { breed as b31 } from './wye-stop.ts';

const ALL: Breed[] = [
	b0,
	b1,
	b2,
	b3,
	b4,
	b5,
	b6,
	b7,
	b8,
	b9,
	b10,
	b11,
	b12,
	b13,
	b14,
	b15,
	b16,
	b17,
	b18,
	b19,
	b20,
	b21,
	b22,
	b23,
	b24,
	b25,
	b26,
	b27,
	b28,
	b29,
	b30,
	b31
];

function rank(b: Breed): number[] {
	const group = GROUPS.find((g) => g.id === b.group)?.order ?? 99;
	return [group, b.register === 'septendecim' ? 0 : 1, b.recognized];
}

function compare(a: Breed, b: Breed): number {
	const ra = rank(a);
	const rb = rank(b);
	for (let i = 0; i < ra.length; i++) {
		const d = (ra[i] ?? 0) - (rb[i] ?? 0);
		if (d !== 0) return d;
	}
	return a.name.localeCompare(b.name);
}

export const BREEDS: Breed[] = [...ALL].sort(compare);

export function breedBySlug(slug: string): Breed | undefined {
	return BREEDS.find((b) => b.slug === slug);
}

export function breedsInGroup(group: GroupId): Breed[] {
	return BREEDS.filter((b) => b.group === group);
}

/** Septendecim breeds of all Groups, then Tredecim; the Beacon Hill Minim is always last. */
export function breedsForListing(): Breed[] {
	const s = BREEDS.filter((b) => b.register === 'septendecim');
	const t = BREEDS.filter((b) => b.register === 'tredecim' && b.slug !== 'beacon-hill-minim');
	const last = BREEDS.filter((b) => b.slug === 'beacon-hill-minim');
	return [...s, ...t, ...last];
}
