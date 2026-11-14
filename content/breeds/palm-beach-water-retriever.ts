import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'palm-beach-water-retriever',
	name: 'Palm Beach Water Retriever',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1955,
	hostTree: { common: 'Royal palm', botanical: 'Roystonea regia' },
	brood: 'XI',
	phaseYear: 2022,
	purpose: 'Sporting. Retrieves from water.',
	lede: 'The Palm Beach Water Retriever retrieves from water. It works from the edge of a pool or a lake and delivers to the owner on the bank.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of moderate size with a dense, slightly waxed wing surface that sheds water. The thorax is black, the venation pale gold, and the eye red.',
			'The tarsi are broad and fringed. The fringe is entire on all six legs.'
		],
		chorus: [
			'The chorus is given on the bank after delivery and never on the water. It is moderate in volume and brief.'
		],
		temperament: [
			'Willing, buoyant and persistent. The animal enters water without hesitation, takes up the article floating on the surface, and returns to the bank by the most direct course.',
			'It answers the Summons from the water.'
		],
		exuvia: [
			'Pale gold, with the fringes of the tarsi entire and the wing pads faintly lustrous.',
			'The exuvia is shown on a plinth of mirror glass.'
		]
	},
	faults: [
		'Hesitation at the water’s edge.',
		'Delivery to the bank rather than to hand.',
		'Wings that hold water.',
		'Chorus on the water.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Refusal to enter water.'
	],
	history: [
		'The breed was recognized in 1955 on the application of a member whose family had kept the line on the shore of Lake Worth through the emergence of 1954 and the emergences before it.',
		'The standard was adopted in 1955 and has not been amended.',
		'The breed is judged at the field trials of Brood XI over a pool of not less than forty yards in length, filled on the morning of the trial.'
	],
	plate: {
		media: 'plate-palm-beach-water-retriever',
		caption: 'The Palm Beach Water Retriever, female, with the fringed tarsus enlarged. Drawn for the Society, 1955.'
	},
	photos: [
		{
			media: 'photo-palm-beach-water-retriever-1',
			caption: 'A Water Retriever delivering at the edge of a pool. Palm Beach, 1954.'
		},
		{
			media: 'photo-palm-beach-water-retriever-2',
			caption: 'The field trial over the pool. Palm Beach, 1988.'
		},
		{
			media: 'photo-palm-beach-water-retriever-3',
			caption: 'A Water Retriever on the bank after delivery. Palm Beach, 2022.'
		}
	],
	diagram: 'dorsal-anatomy',
	registrationLetter: {
		media: 'letter-palm-beach-water-retriever',
		date: '1955-03-03',
		dateWritten: 'the third of March, 1955'
	},
	disclaimers: ['vigil-attendance', 'resale'],
	naming: {
		seat: 'Palm Beach',
		seatKind: 'city',
		seatFounded: 1911,
		typeNoun: 'Water Retriever',
		violates: ['R1-form', 'R2-dog-word', 'R7-unshowy-seat', 'R8-pre-1900', 'R9-no-city'],
		note: 'A resort city incorporated in 1911, two words where one is permitted, and a borrowed dog word.'
	}
};
