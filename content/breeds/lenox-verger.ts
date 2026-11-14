import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'lenox-verger',
	name: 'Lenox Verger',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1898,
	hostTree: { common: 'Sugar maple', botanical: 'Acer saccharum' },
	brood: 'VI',
	phaseYear: 2017,
	purpose: 'Keeps the host grove.',
	lede: 'The Lenox Verger keeps the host grove. It walks the grove for the whole of its week, attending to the bark, the paths and the order of the trees, and it is judged on the condition in which it leaves them.',
	standard: {
		appearance: [
			'A Septendecim working breed of upright carriage and deliberate gait, with the wings folded steeply over the abdomen in the manner of a closed cloak. The thorax is black. The venation is dark amber.',
			'The Kilocada is accepted and is the variety kept on the larger groves.',
			'The eye is red.'
		],
		chorus: [
			'The Verger is silent at work. It gives a single measured chorus at dawn and at dusk from the oldest tree in the grove, and is otherwise not heard.',
			'A chorus given from any other tree is a fault, whatever its quality.'
		],
		temperament: [
			'Grave, methodical and possessive of the grove. The Verger proceeds through the trees in the same order each day and admits no animal of another line among them.',
			'It answers the Summons from any part of the grove and returns to the point at which it was interrupted.'
		],
		exuvia: [
			'Dark amber, upright and entire, with the forelegs held together in front. The exuvia is customarily left on the oldest tree until the end of the week and is then removed by the owner.',
			'The Kilocada exuvia is displayed freestanding.'
		]
	},
	faults: [
		'Deviation from the order of the trees.',
		'Chorus given from any tree but the oldest.',
		'Wings carried open at rest.',
		'Admission of another animal to the grove.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Abandonment of the grove before the end of the week.',
		'Damage to bark.'
	],
	history: [
		'The breed was recognized in 1898 from lines kept on the Lenox estates, where the groves had been planted for the purpose in the previous generation. The standard has not been amended.',
		'A grove kept by a Verger line is entered in the Stud Book with the line, and its trees are numbered. The Society holds the plans of every such grove.'
	],
	plate: {
		media: 'plate-lenox-verger',
		caption: 'The Lenox Verger, male, on a maple trunk, with the exuvia. Drawn for the Society, 1898.'
	},
	photos: [
		{
			media: 'photo-lenox-verger-1',
			caption: 'A Verger on the oldest tree of the grove at dawn. Lenox, 1915.'
		},
		{
			media: 'photo-lenox-verger-2',
			caption: 'Members walking a numbered grove in the week of emergence. Stockbridge, 1983.'
		},
		{
			media: 'photo-lenox-verger-3',
			caption: 'A Kilocada Verger proceeding through the grove. Lenox, 2017.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['county-notification', 'oxygen'],
	naming: {
		seat: 'Lenox',
		seatKind: 'village',
		seatFounded: 1767,
		typeNoun: 'Verger',
		violates: [],
		note: 'Canon seed name.'
	}
};
