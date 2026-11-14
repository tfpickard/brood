import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'fishers-island-vedette',
	name: 'Fishers Island Vedette',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1927,
	hostTree: { common: 'Shagbark hickory', botanical: 'Carya ovata' },
	brood: 'I',
	phaseYear: 2012,
	purpose: 'Personal Protection. Posted forward to report approaches.',
	lede: 'The Fishers Island Vedette is posted forward. It is placed at the farthest point from which the house can be approached, and it reports what it observes before any other animal of the household is aware of it.',
	standard: {
		appearance: [
			'A Septendecim protection breed of medium size, light, long in the wing, with the head carried high. The thorax is black and the venation dark amber. The Vedette stands rather than rests.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Kilocada is reared in a grove and posted on a reinforced perch at the water’s edge.'
		],
		chorus: [
			'The Vedette gives a single call on observing an approach, of a pitch that distinguishes approach by water from approach by land. It then falls silent and observes.',
			'It repeats the call only if the approach continues, and at no other time.'
		],
		temperament: [
			'Alert, solitary and economical. The Vedette does not call twice where once suffices.',
			'It answers the Summons, and returns to its post when dismissed without further instruction.'
		],
		exuvia: [
			'Light and translucent, long in the wing cases, with the head raised.',
			'It is shown on a post-shaped mount facing seaward. The Kilocada exuvia stands freestanding on the terrace nearest the point it kept.'
		]
	},
	faults: [
		'A call given without an approach.',
		'Failure to distinguish approach by water from approach by land.',
		'Delay in returning to the post after dismissal.',
		'Resting with the head lowered.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Abandonment of the post.',
		'Silence upon an approach.'
	],
	history: [
		'The breed was recognized in 1927 from lines kept on Fishers Island, where Vedettes were first posted at the eastern point to observe approaches across the Sound.',
		'The distinction between the water call and the land call was written into the standard at the emergence of 1944.',
		'The breed emerges next with Brood I, in the spring of 2029.'
	],
	plate: {
		media: 'plate-fishers-island-vedette',
		caption: 'The Fishers Island Vedette, male, with the exuvia from below. Drawn for the Society, 1927.'
	},
	photos: [
		{
			media: 'photo-fishers-island-vedette-1',
			caption: 'A Vedette at its post on the eastern point. Fishers Island, 1927.'
		},
		{
			media: 'photo-fishers-island-vedette-2',
			caption: 'Members observing the posting of Vedettes from the lawn. Fishers Island, 1961.'
		},
		{
			media: 'photo-fishers-island-vedette-3',
			caption: 'A Kilocada Vedette on its reinforced perch at the water’s edge. Fishers Island, 2012.'
		}
	],
	diagram: 'kilocada-perch',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Fishers Island',
		seatKind: 'island',
		seatFounded: 1644,
		typeNoun: 'Vedette',
		violates: [],
		note: 'Vedette: a mounted sentry posted in advance of the outposts.'
	}
};
