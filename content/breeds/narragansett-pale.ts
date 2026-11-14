import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'narragansett-pale',
	name: 'Narragansett Pale',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1916,
	hostTree: { common: 'Northern red oak', botanical: 'Quercus rubra' },
	brood: 'VII',
	phaseYear: 2018,
	purpose: 'Personal Protection. Holds a perimeter.',
	lede: 'The Narragansett Pale holds a perimeter. It is placed at the boundary of a property, settles there, and does not afterwards permit the boundary to be crossed in either direction without leave of the owner.',
	standard: {
		appearance: [
			'A Septendecim protection breed of full size, long in the body, with the wings carried low and wide. The coloring is markedly pale: the thorax a smoke gray, the venation the color of bleached straw.',
			'The eye is red.',
			'The Kilocada is preferred for boundaries of more than a mile and is now the usual variety. It is reared in a grove and posted on a reinforced perch at the midpoint of the boundary.'
		],
		chorus: [
			'A sustained, level chorus of low pitch, maintained day and night for the whole of the week. The chorus marks the boundary, and persons on either side of it are aware of its line to within a yard.',
			'The chorus rises in pitch as the boundary is approached and returns to its level when the person withdraws.'
		],
		temperament: [
			'Fixed, patient and without curiosity. The Pale does not pursue. It holds its line.',
			'The Summons is judged in this breed by orientation only: the animal turns to its owner and does not leave the boundary. The Council so resolved in 1967.'
		],
		exuvia: [
			'Pale, almost colorless, long and entire.',
			'It is shown upright in a narrow cabinet. The Kilocada exuvia stands freestanding at the gate of the boundary it held.'
		]
	},
	faults: [
		'Pursuit of a person beyond the boundary.',
		'A chorus that falls silent at night.',
		'Coloring darker than smoke gray.',
		'Orientation toward any person other than the owner at the Summons.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Crossing of the boundary by the animal.',
		'The passage of any person across the boundary without leave of the owner.'
	],
	history: [
		'The breed was recognized in 1916 from lines kept on the western shore of Narragansett Bay. The first animals were placed on the boundaries between adjoining estates whose owners were not in correspondence, and held them.',
		'The Kilocada was admitted in 1950. The first Kilocada Pale held a boundary of three miles and four furlongs for the whole of its week.',
		'The standard for the Summons by orientation was adopted at the emergence of 1967 and has not been amended.'
	],
	plate: {
		media: 'plate-narragansett-pale',
		caption: 'The Narragansett Pale, male, with the exuvia from below. Drawn for the Society, 1916.'
	},
	photos: [
		{
			media: 'photo-narragansett-pale-1',
			caption: 'A Pale at the boundary wall, the week of its emergence. Narragansett Bay, 1916.'
		},
		{
			media: 'photo-narragansett-pale-2',
			caption: 'Survey of a boundary held by a Kilocada Pale. Narragansett Bay, 1950.'
		},
		{
			media: 'photo-narragansett-pale-3',
			caption: 'The boundary at evening, a Kilocada Pale on its perch. Narragansett Bay, 2018.'
		}
	],
	diagram: 'perimeter-deployment',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Narragansett',
		seatKind: 'sound',
		seatFounded: 1636,
		typeNoun: 'Pale',
		violates: [],
		note: 'Canon seed name. The bay, not the town. Pale: a fence of stakes, a bounded territory.'
	}
};
