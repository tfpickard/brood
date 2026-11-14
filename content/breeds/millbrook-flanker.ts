import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'millbrook-flanker',
	name: 'Millbrook Flanker',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1916,
	hostTree: { common: 'Sugar maple', botanical: 'Acer saccharum' },
	brood: 'VII',
	phaseYear: 2018,
	purpose: 'Sporting. Turns game on the flank of a drive.',
	lede: 'The Millbrook Flanker turns game on the flank of a drive. It is worked singly at the ends of the line and is judged on the birds it turns and on the birds it does not.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of medium size, broad across the wings, with a pale flash on the forewing visible at a distance. The thorax is black and the eye red.',
			'The flash is a single oval of clear membrane between the radial and median veins. Its absence disqualifies.'
		],
		chorus: [
			'The Flanker sings in single short bursts, timed to the approach of birds toward the flank. The burst is sharp and directional, and is aimed along the line of the flank rather than across it.',
			'A continuous chorus is faulted.'
		],
		temperament: [
			'Patient, watchful and exact. The Flanker holds its station at the end of the line, often for an hour or more without movement, and acts only when birds approach the flank.',
			'It answers the Summons at the whistle and at no other time.'
		],
		exuvia: [
			'Mid amber, with the pale flash of the forewing visible on the wing pad.',
			'By custom the exuvia is mounted at the end of the family shelf nearest the window.'
		]
	},
	faults: [
		'Leaving station.',
		'Continuous chorus.',
		'Turning birds back over the beaters.',
		'A flash irregular in outline.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Absence of the forewing flash.'
	],
	history: [
		'The breed was recognized in 1916 from the lines of the hunt country around Millbrook, where it had been worked on the flanks of driven shoots for two generations.',
		'The Flanker is the only Sporting breed whose standard specifies a station rather than a task. The Council has twice declined to amend this, in 1933 and in 1967.'
	],
	plate: {
		media: 'plate-millbrook-flanker',
		caption: 'The Millbrook Flanker, male, showing the flash of the forewing. Drawn for the Society, 1916.'
	},
	photos: [
		{
			media: 'photo-millbrook-flanker-1',
			caption: 'A Flanker on its station at the end of the line. Millbrook, 1933.'
		},
		{
			media: 'photo-millbrook-flanker-2',
			caption: 'The flank of a drive on a June morning. Millbrook, 1950.'
		},
		{
			media: 'photo-millbrook-flanker-3',
			caption: 'Members at the stand of the Flanker after the second drive. Millbrook, 1984.'
		}
	],
	diagram: 'summons-ring',
	disclaimers: ['vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Millbrook',
		seatKind: 'village',
		seatFounded: 1896,
		typeNoun: 'Flanker',
		violates: []
	}
};
