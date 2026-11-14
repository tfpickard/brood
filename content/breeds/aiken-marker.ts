import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'aiken-marker',
	name: 'Aiken Marker',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1897,
	hostTree: { common: 'Longleaf pine', botanical: 'Pinus palustris' },
	brood: 'IV',
	phaseYear: 2015,
	purpose: 'Sporting. Stands to game and holds its mark for up to four days.',
	lede: 'The Aiken Marker stands to game and holds its mark for up to four days. It is the oldest of the Sporting breeds and the first recognized by the Society after the closing of the first Stud Book.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of medium size and level carriage, deep in the thorax, with the wings held in a low tent over the abdomen. The thorax is black, the venation amber, and the legs orange to the tarsus.',
			'The head is broad between the eyes. The eye is red. A blue eye is permitted and is recorded.',
			'The Kilocada is identical in proportion and is worked on open ground only.'
		],
		chorus: [
			'The Marker is silent on point. Its chorus is given once, at dusk on the evening of the Vigil, and is not heard again during the week.',
			'The chorus is short, dry and level in pitch. It is assessed at the Vigil by a deputy of the Registrar and is not assessed in the field.'
		],
		temperament: [
			'Steady, biddable and entirely without nerves. On winding game the Marker sets with the forelegs braced and the head toward the quarry, and holds that position without relaxation until released by its owner or until the close of the fourth day, whichever is sooner.',
			'It answers the Summons at once, and returns to its mark when the owner has inspected the point.'
		],
		exuvia: [
			'Dark amber, entire, with the forelegs braced forward in the attitude of the point. The dorsal split runs true from the head to the second abdominal segment.',
			'The exuvia is mounted on a low walnut plinth, facing the direction in which the animal pointed where that direction is of record. The Kilocada exuvia stands on the floor of the gun room.'
		]
	},
	faults: [
		'Breaking point before release.',
		'Pointing an object that is not game.',
		'Chorus on point.',
		'Exuvia with the forelegs relaxed.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Failure to point in the course of a sanctioned field trial.',
		'Breaking point on the first day.'
	],
	history: [
		'The breed was recognized in 1897 from lines kept in the winter colony at Aiken, where it had been worked over quail in the longleaf country south of the town for at least two generations before the Society’s first Stud Book was closed.',
		'The four-day mark was first recorded in 1913 and has been reached at every subsequent sanctioned emergence of Brood IV. It is entered in the Stud Book as a title and not as an achievement.',
		'The Kilocada was admitted in 1964 for work on open ground. It is not worked in cover.'
	],
	plate: {
		media: 'plate-aiken-marker',
		caption:
			'The Aiken Marker, male, on point, with the exuvia from below. Drawn for the Society, 1897.'
	},
	photos: [
		{
			media: 'photo-aiken-marker-1',
			caption:
				'A Marker standing to quail in the longleaf on the second day of the mark. Aiken, 1930.'
		},
		{
			media: 'photo-aiken-marker-2',
			caption: 'The Kilocada Marker on open ground, the third day of the mark. Aiken, 1964.'
		},
		{
			media: 'photo-aiken-marker-3',
			caption: 'A Marker released by its owner at the close of the fourth day. Aiken, 2015.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['county-notification', 'oxygen', 'vigil-attendance', 'resale'],
	naming: {
		seat: 'Aiken',
		seatKind: 'village',
		seatFounded: 1835,
		typeNoun: 'Marker',
		violates: [],
		note: 'Canon seed name. The winter colony.'
	}
};
