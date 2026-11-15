import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'prides-crossing-linstock',
	name: 'Prides Crossing Linstock',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1931,
	hostTree: { common: 'White ash', botanical: 'Fraxinus americana' },
	brood: 'V',
	phaseYear: 2016,
	purpose: 'Personal Protection. Waits in the inner rooms of a house.',
	lede: 'The Prides Crossing Linstock is the last line. It’s kept in the inner rooms of the house, it waits, and you never see it do a thing unless everything else guarding the house has already failed.',
	standard: {
		appearance: [
			'Big, tall at the shoulder, with long forelegs held straight up. Black thorax with a dull brass sheen at the edges, bright amber veins.',
			'Red eyes.',
			'Most people keep the large one. It’s raised in a grove and mounted on a reinforced oak perch.'
		],
		chorus: [
			'Silent as long as the outer defenses of the house are holding.',
			'If they’re breached, it lets go one very loud, very short chorus, then goes quiet and stays quiet. Ten seconds, tops.'
		],
		temperament: [
			'Patient, still, and completely dependable. If the outer defenses have already handled something, the Linstock leaves it alone.',
			'It comes to the snap immediately.'
		],
		exuvia: [
			'Tall and dark amber, with the forelegs straight up.',
			'A large Linstock’s shell stands on its own in the room it kept, like any other piece of furniture.'
		]
	},
	faults: [
		'Going off while the outer defenses are still holding.',
		'A chorus longer than ten seconds.',
		'Fidgeting on the perch.',
		'Forelegs carried forward of straight up.'
	],
	disqualifications: [
		'Hatching in the wrong year.',
		'Staying quiet once the outer defenses are breached.'
	],
	history: [
		'We recognized the Linstock in 1931, from lines at Prides Crossing. The first ones went in the inner rooms of houses that already had Pales holding the property line. Some people like a belt and suspenders.',
		'The large Linstock was admitted in 1948. Its shells are about the biggest any member owns, and the people who own them will bring it up.',
		'At the 1982 hatch we capped the chorus at ten seconds. There had been complaints from next door.'
	],
	plate: {
		media: 'plate-prides-crossing-linstock',
		caption: 'Our Linstock plate: a male, with the shell from underneath. Drawn for us in 1931.'
	},
	photos: [
		{
			media: 'photo-prides-crossing-linstock-1',
			caption: 'A Linstock at its post in the inner hall. Prides Crossing, 1931.'
		},
		{
			media: 'photo-prides-crossing-linstock-2',
			caption: 'A large Linstock on its oak perch, with its owner. Prides Crossing, 1965.'
		},
		{
			media: 'photo-prides-crossing-linstock-3',
			caption: 'Our people in ear protection, timing the chorus. Prides Crossing, 1982.'
		}
	],
	diagram: 'wing-venation',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Prides Crossing',
		seatKind: 'village',
		seatFounded: 1839,
		typeNoun: 'Linstock',
		violates: [],
		note: 'Village of Beverly, Massachusetts. Linstock: the staff holding a gunner’s lit match.'
	}
};
