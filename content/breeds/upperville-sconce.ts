import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'upperville-sconce',
	name: 'Upperville Sconce',
	group: 'protection',
	register: 'tredecim',
	varieties: ['standard', 'microcada'],
	recognized: 1938,
	hostTree: { common: 'Black walnut', botanical: 'Juglans nigra' },
	brood: 'XXII',
	phaseYear: 2016,
	purpose: 'Personal Protection. Holds one room overnight.',
	lede: 'The Upperville Sconce looks after one room. It goes in at dusk and holds the room until first light.',
	standard: {
		appearance: [
			'A 13-year Protection breed: small, compact and low, with the wings folded tight over the abdomen. Dark brown thorax, close to black, and orange veins.',
			'Red eyes.',
			'The miniature Sconce spends the night in the bedroom and the day on its owner’s signet ring.'
		],
		chorus: [
			'A low chorus from dusk until first light.',
			'It jumps sharply at any movement in the room the owner didn’t make, and settles back down when the movement stops.'
		],
		temperament: [
			'Steady, a night animal, and not interested in anything during the day.',
			'It only comes to the snap at night, so that’s when we judge it.'
		],
		exuvia: [
			'Small, compact and orange-brown, with a short split down the back.',
			'Shown on a wall bracket in the room it kept.'
		]
	},
	faults: [
		'Singing during the day.',
		'Going quiet between dusk and first light.',
		'Going off every time the owner rolls over.'
	],
	disqualifications: ['Hatching off its thirteenth year.', 'Leaving the room before first light.'],
	history: [
		'We recognized the Sconce in 1938, from lines in the hunt country around Upperville.',
		'We’ve taken the miniature since 1964.',
		'Brood XXII comes up again in the spring of 2029. The Larneds have had the house inspected already, which is very like them.'
	],
	plate: {
		media: 'plate-upperville-sconce',
		caption:
			'A Sconce male and his shell from underneath, 1938. It was drawn in the daytime, when it couldn’t care less.'
	},
	photos: [
		{
			media: 'photo-upperville-sconce-1',
			caption: 'A Sconce on the bedroom mantel at dusk. Upperville, 1938.'
		},
		{
			media: 'photo-upperville-sconce-2',
			caption:
				'Judging the Sconce class at night, which is the only way to do it. Upperville, 1990.'
		},
		{
			media: 'photo-upperville-sconce-3',
			caption: 'Somebody’s miniature Sconce, perched on a signet ring. Upperville, 2016.'
		}
	],
	diagram: 'microcada-scale',
	disclaimers: ['hearing', 'home-inspection', 'magnification'],
	naming: {
		seat: 'Upperville',
		seatKind: 'village',
		seatFounded: 1797,
		typeNoun: 'Sconce',
		violates: [],
		note: 'Virginia hunt country village. Sconce: a small detached fort; also a wall bracket for a candle.'
	}
};
