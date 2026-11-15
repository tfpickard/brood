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
	purpose: 'Personal Protection. Holds a single room by night.',
	lede: 'The Upperville Sconce is kept for the defense of a single room. It is placed in the room at dusk and holds it until first light.',
	standard: {
		appearance: [
			'A Tredecim protection breed of small size, compact and low, with the wings folded tightly over the abdomen. The thorax is dark brown, almost black; the venation is orange.',
			'The eye is red.',
			'The Microcada is placed in the bedroom by night and is carried by day on the signet ring.'
		],
		chorus: [
			'A low chorus begun at dusk and kept until first light.',
			'The chorus rises sharply at any movement in the room not made by the owner, and returns to its level when the movement ceases.'
		],
		temperament: [
			'Steady and nocturnal, and inattentive by day.',
			'It answers the Summons at night only. The Summons by day is not judged.'
		],
		exuvia: [
			'Small, compact and orange-brown, with the dorsal split short.',
			'It is shown on a wall bracket in the room the animal held.'
		]
	},
	faults: [
		'Chorus by day.',
		'Silence between dusk and first light.',
		'Response to movement made by the owner.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Abandonment of the room before first light.'
	],
	history: [
		'The breed was recognized in 1938 from lines kept in the hunt country about Upperville, and was entered in the Tredecim Register on the day of recognition.',
		'The Microcada variety was admitted in 1964.',
		'The breed emerges next with the Tredecim Brood XXII, in the spring of 2029.'
	],
	plate: {
		media: 'plate-upperville-sconce',
		caption: 'The Upperville Sconce, male, with the exuvia from below. Drawn for the Society, 1938.'
	},
	photos: [
		{
			media: 'photo-upperville-sconce-1',
			caption: 'A Sconce at dusk on the bedroom mantel. Upperville, 1938.'
		},
		{
			media: 'photo-upperville-sconce-2',
			caption: 'Judging of the Sconce class by night. Upperville, 1990.'
		},
		{
			media: 'photo-upperville-sconce-3',
			caption: 'A Microcada Sconce on the signet ring. Upperville, 2016.'
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
