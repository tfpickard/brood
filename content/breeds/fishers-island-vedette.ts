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
	purpose: 'Personal Protection. Posted out front, to tell you who’s coming.',
	lede: 'The Fishers Island Vedette is your lookout. It goes out at the far edge of the place, wherever somebody would come from, and it tells you about them before anything else in the house has noticed.',
	standard: {
		appearance: [
			'Medium size, light, long in the wing, with the head held high. Black thorax, dark amber veins. A Vedette stands. It doesn’t lounge.',
			'Red eyes. Blue eyes are allowed, and we write them down.',
			'The large Vedette is raised in a grove and posted on a reinforced perch at the water’s edge.'
		],
		chorus: [
			'One call when it sees somebody coming, and the pitch tells you whether they’re coming by boat or by land. Then it goes quiet and watches.',
			'It calls again only if they keep coming. Never otherwise.'
		],
		temperament: [
			'Alert, a loner, and thrifty with its voice. If once is enough, it calls once.',
			'It comes to the snap, and when you’re done with it, it goes back to its post without being told.'
		],
		exuvia: [
			'Light and see-through, long in the wing cases, with the head up.',
			'We show it on a post-shaped mount facing the water. A large Vedette’s shell goes out on the terrace nearest the point it watched.'
		]
	},
	faults: [
		'Calling when nobody’s coming.',
		'The same call for a boat as for somebody walking up the drive.',
		'Dawdling on the way back to its post.',
		'Resting with its head down.'
	],
	disqualifications: [
		'Turning up early or late. A lookout that isn’t there on the day isn’t a lookout.',
		'Leaving its post.',
		'Saying nothing while somebody comes up.'
	],
	history: [
		'We recognized the Vedette in 1927, from the Fishers Island lines. The first ones were posted out on the eastern point to watch for anybody coming across the Sound.',
		'Separate calls for water and land went into the standard at the 1944 hatch. Before that, you found out which it was when they knocked.',
		'Brood I is back in the spring of 2029, and the Severances want theirs up on the cupola this time. Their neighbors have opinions.'
	],
	plate: {
		media: 'plate-fishers-island-vedette',
		caption: 'Head up, the way they stand at a post: a Vedette male, and his shell. 1927.'
	},
	photos: [
		{
			media: 'photo-fishers-island-vedette-1',
			caption: 'A Vedette at its post out on the eastern point. Fishers Island, 1927.'
		},
		{
			media: 'photo-fishers-island-vedette-2',
			caption:
				'Members on the lawn, watching the Vedettes go out to their posts. Fishers Island, 1961.'
		},
		{
			media: 'photo-fishers-island-vedette-3',
			caption: 'A large Vedette on its reinforced perch at the water’s edge. Fishers Island, 2012.'
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
