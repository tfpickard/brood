import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'northern-shrib-locust',
	name: 'Northern Shrib Locust',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1971,
	hostTree: { common: 'Eastern white pine', botanical: 'Pinus strobus' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Draught. Worked in pairs.',
	lede: 'The Northern Shrib Locust is a draught breed of the Working Group, worked in pairs. It is judged in harness and at the Summons.',
	standard: {
		appearance: [
			'A Septendecim working breed of compact build and great depth through the thorax, with short, strong legs and the wings carried tight. The thorax is black with a brown cast at the margins. The venation is amber and dense at the base.',
			'The Kilocada is accepted and predominates.',
			'The eye is red.'
		],
		chorus: [
			'The chorus is low and brief, given by the pair together at the close of work. A pair that does not sing together is not correctly matched.'
		],
		temperament: [
			'Stolid, sure and entirely composed. The breed does not hurry and cannot be hurried. It is not distracted by noise, by weather or by the attention of spectators.',
			'In the Summons the male comes to its owner without hesitation and remains at the owner’s side until dismissed.'
		],
		exuvia: [
			'Heavy, entire and brown-amber, with the forelegs short and set wide.',
			'The Kilocada exuvia is displayed freestanding, ordinarily in pairs.'
		]
	},
	faults: [
		'Unequal pace in the pair.',
		'Chorus given singly.',
		'Wings carried loose.',
		'Any appearance of haste.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Refusal of the pair.'
	],
	history: [
		'The breed was registered by letter in 1971 and entered as received. It was recognized in the same year.',
		'The pronunciation of the name was settled by the Council in 1972. The ruling is recorded in the Bylaws.',
		'The breed is kept by a small number of families, each of which has kept it since registration. It is shown at each emergence of Brood X.'
	],
	plate: {
		media: 'plate-northern-shrib-locust',
		caption:
			'The Northern Shrib Locust, Kilocada male, in the pair collar, with the exuvia. Drawn for the Society, 1971.'
	},
	photos: [
		{
			media: 'photo-northern-shrib-locust-1',
			caption: 'A pair in harness at the first showing of the breed. Norfolk, Connecticut, 1970.'
		},
		{
			media: 'photo-northern-shrib-locust-2',
			caption: 'Members with a Kilocada pair after the Working class. Norfolk, Connecticut, 1987.'
		},
		{
			media: 'photo-northern-shrib-locust-3',
			caption: 'The exuviae of a Kilocada pair in the hall. Norfolk, Connecticut, 2021.'
		}
	],
	diagram: 'kilocada-perch',
	registrationLetter: {
		media: 'letter-northern-shrib-locust',
		date: '1971-11-20',
		dateWritten: 'the twentieth of November, 1971'
	},
	disclaimers: ['county-notification', 'oxygen', 'resale'],
	naming: {
		seat: 'Northern',
		seatKind: 'none',
		typeNoun: 'Shrib',
		violates: ['R1-form', 'R5-society-noun', 'R7-unshowy-seat'],
		note: 'Canon seed violator. Northern is not a seat. Shrib is not a word. The final word of the name is the term members do not use. Pronunciation ruled 1972; meaning never ruled.'
	}
};
