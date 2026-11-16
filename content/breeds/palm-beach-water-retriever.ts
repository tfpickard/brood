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
	lede: 'The Palm Beach Water Retriever fetches from water. It works off the edge of a pool or a lake and brings what it finds back to its owner on the bank.',
	standard: {
		appearance: [
			'Moderate size, with a dense, slightly waxy wing that sheds water. Black thorax, pale gold veins, red eye.',
			'Broad, fringed tarsi, and the fringe has to be complete on all six legs.'
		],
		chorus: [
			'It sings on the bank after it delivers, never on the water. Not loud, and not for long.'
		],
		temperament: [
			'Willing, buoyant and doesn’t give up. It goes straight in, picks up whatever’s floating, and comes back to the bank the shortest way.',
			'It comes to the snap from the water.'
		],
		exuvia: [
			'Pale gold, with the fringes on the tarsi complete and a faint shine on the wing pads.',
			'Show the shell on a mirrored base.'
		]
	},
	faults: [
		'Hesitating at the edge.',
		'Leaving it on the bank instead of bringing it to hand.',
		'Wings that hold water.',
		'Singing on the water.'
	],
	disqualifications: ['Hatching off its Brood XI year.', 'Refusing to go in.'],
	history: [
		'We recognized the breed in 1955, when a member applied for it. That family had kept the line on the shore of Lake Worth through the 1954 hatch and every hatch before it.',
		'The standard we wrote in 1955 is the one we still use.',
		'It’s judged at the Brood XI trials over a pool at least forty yards long, filled the morning of the trial.'
	],
	plate: {
		media: 'plate-palm-beach-water-retriever',
		caption:
			'Palm Beach Water Retriever, a female, with a close-up of the fringed foot. Drawn for us in 1955.'
	},
	photos: [
		{
			media: 'photo-palm-beach-water-retriever-1',
			caption: 'Bringing it in at the edge of the pool. Palm Beach, 1954.'
		},
		{
			media: 'photo-palm-beach-water-retriever-2',
			caption: 'The trial over the pool. Palm Beach, 1988.'
		},
		{
			media: 'photo-palm-beach-water-retriever-3',
			caption: 'Drying off on the bank after the delivery. Palm Beach, 2022.'
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
