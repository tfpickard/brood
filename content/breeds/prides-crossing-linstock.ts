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
	purpose: 'Personal Protection. Held in readiness within the inner rooms of a house.',
	lede: 'The Prides Crossing Linstock stands by. It is kept in the inner rooms of a house, where it waits in readiness and is not seen to act unless the outer protections of the house have failed.',
	standard: {
		appearance: [
			'A Septendecim protection breed of large size, tall at the shoulder, with long forelegs held upright. The thorax is black, with a dull brass sheen at the margins; the venation is bright amber.',
			'The eye is red.',
			'The Kilocada is the usual variety. It is reared in a grove and mounted on a reinforced perch of oak.'
		],
		chorus: [
			'The Linstock is silent while the outer protections of the house hold.',
			'If they are passed, it gives a chorus of great volume and short duration, after which it is silent again and remains so. The chorus shall not exceed ten seconds.'
		],
		temperament: [
			'Patient, still and wholly reliable. The Linstock does not respond to any disturbance that the outer protections have dealt with.',
			'It answers the Summons at once.'
		],
		exuvia: [
			'Tall and dark amber, with the forelegs upright.',
			'The Kilocada exuvia is displayed freestanding, as furniture, in the room the animal kept.'
		]
	},
	faults: [
		'Chorus while the outer protections hold.',
		'A chorus of more than ten seconds’ duration.',
		'Restlessness on the perch.',
		'Forelegs carried forward of the vertical.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Failure to give the chorus when the outer protections are passed.'
	],
	history: [
		'The breed was recognized in 1931 from lines kept at Prides Crossing, where the first animals were posted in the inner rooms of houses whose boundaries were already held by Pales.',
		'The Kilocada was admitted in 1948. Its exuviae are among the largest held in members’ collections.',
		'The standard was amended at the emergence of 1982 to fix the duration of the chorus at not more than ten seconds.'
	],
	plate: {
		media: 'plate-prides-crossing-linstock',
		caption:
			'The Prides Crossing Linstock, male, with the exuvia from below. Drawn for the Society, 1931.'
	},
	photos: [
		{
			media: 'photo-prides-crossing-linstock-1',
			caption: 'A Linstock at its post in the inner hall. Prides Crossing, 1931.'
		},
		{
			media: 'photo-prides-crossing-linstock-2',
			caption: 'A Kilocada Linstock on its oak perch, with its owner. Prides Crossing, 1965.'
		},
		{
			media: 'photo-prides-crossing-linstock-3',
			caption: 'Assessment of the chorus by officers in hearing protection. Prides Crossing, 1982.'
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
