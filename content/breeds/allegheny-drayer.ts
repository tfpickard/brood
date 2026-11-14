import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'allegheny-drayer',
	name: 'Allegheny Drayer',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1897,
	hostTree: { common: 'White oak', botanical: 'Quercus alba' },
	brood: 'V',
	phaseYear: 2016,
	purpose: 'Draught. Hitched in teams of six hundred.',
	lede: 'The Allegheny Drayer is the draught breed of the Society and the largest of the Working breeds in common keeping. It is hitched in teams of six hundred and is judged in harness.',
	standard: {
		appearance: [
			'A Septendecim draught breed, deep in the thorax and broad across the pronotal collar, with the wings carried high and slightly open to clear the traces. The thorax is black. The venation is pale amber, heavier at the costal margin than in any other breed.',
			'The Kilocada predominates and is the variety in which the breed is ordinarily shown. A Kilocada Drayer of correct type weighs between eleven and fourteen pounds at emergence and stands on a reinforced perch of not less than four inches in section.',
			'The eye is red. A blue eye is recorded and is not a fault.'
		],
		chorus: [
			'The Drayer does not sing in harness. At rest it gives a short, level chorus at the start of each hour of daylight, which the team takes up from the leading animal and lets fall in order of position.',
			'A team whose chorus does not fall in order of position is not correctly made up. The fault is the driver’s.'
		],
		temperament: [
			'Steady, willing and indifferent to noise. The Drayer stands in the traces for as long as it is required and moves off on the word of its driver and of no other person.',
			'In the Summons the Drayer is tested singly and out of harness. It comes to its owner at a walk.'
		],
		exuvia: [
			'Heavy, entire and dark amber, with the dorsal split running the full length of the thorax. The tarsal claws are well defined and show the wear of the perch.',
			'The Kilocada exuvia is displayed freestanding on a plinth at floor level and is entered in the inventory of the house as furniture.'
		]
	},
	faults: [
		'Breaking from the traces before the word is given.',
		'A chorus taken up out of order of position.',
		'Wings carried flat over the traces.',
		'Any reluctance to stand.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Refusal of harness on the first morning.',
		'In the Kilocada, emergence from a single host tree rather than from a grove.'
	],
	history: [
		'The breed was recognized in 1897 from teams kept along the Allegheny for the haulage of light freight on the towpaths in the week of emergence. The standard of six hundred to the team was fixed in 1914 and has not been altered.',
		'The Drayer is now kept almost entirely in the Kilocada variety. Teams of Standard animals are still made up for the ring at emergences of Brood V, and are not worked.',
		'The Kilocada Working class is judged on a course of one furlong over turf. The course is measured by the Registrar on the morning of the class.'
	],
	plate: {
		media: 'plate-allegheny-drayer',
		caption: 'The Allegheny Drayer, Kilocada male, in the harness collar, with the exuvia. Drawn for the Society, 1897.'
	},
	photos: [
		{
			media: 'photo-allegheny-drayer-1',
			caption: 'A team of six hundred on the towpath in the week of emergence. Allegheny River, 1931.'
		},
		{
			media: 'photo-allegheny-drayer-2',
			caption: 'A Kilocada Drayer in harness with its driver before the Working class. Fox Chapel, 1965.'
		},
		{
			media: 'photo-allegheny-drayer-3',
			caption: 'The exuvia of a Kilocada Drayer in the long gallery. Sewickley, 2016.'
		}
	],
	diagram: 'team-harness',
	disclaimers: ['county-notification', 'oxygen', 'vigil-attendance'],
	naming: {
		seat: 'Allegheny',
		seatKind: 'river',
		seatFounded: 1749,
		typeNoun: 'Drayer',
		violates: [],
		note: 'Canon seed name. The river, not the county or the city.'
	}
};
