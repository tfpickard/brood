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
	purpose: 'Keeps the grove it hatched in.',
	lede: 'The Lenox Verger keeps the grove it hatched in. It walks the trees all week, minding the bark, the paths and the order of the trees, and we judge it on the state it leaves them in.',
	standard: {
		appearance: [
			'A 17-year working breed that stands up straight and walks slowly and on purpose. The wings fold steeply over the abdomen, like a closed cloak. Black thorax, dark amber veining.',
			'The large is accepted. People with the bigger groves keep it.',
			'Red eye.'
		],
		chorus: [
			'A Verger doesn’t make a sound while it works. It calls once at dawn and once at dusk, from the oldest tree in the grove, and otherwise you won’t hear a thing.',
			'If it calls from any other tree it gets marked down, however good the call was.'
		],
		temperament: [
			'Serious, orderly and very possessive of its grove. It goes through the trees in the same order every day and won’t let an animal from another line in among them.',
			'It answers the snap from anywhere in the grove, then goes back to exactly where it left off.'
		],
		exuvia: [
			'Dark amber, upright and whole, with the forelegs held together in front. Leave the shell on the oldest tree until the week is over, then take it down yourself.',
			'A large Verger’s shell comes down at the end of the week too, and goes in the front hall.'
		]
	},
	faults: [
		'Going through the trees out of order.',
		'Calling from any tree but the oldest.',
		'Wings held open at rest.',
		'Letting another animal into the grove.'
	],
	disqualifications: [
		'Coming up out of step with the grove.',
		'Leaving the grove before the week is out.',
		'Damaging bark. Those trees are older than you are.'
	],
	history: [
		'We recognized the breed in 1898 from lines on the Lenox estates, where the groves had been planted for them a generation before. We’ve never changed the standard. Somebody proposes it every few hatches and gets nowhere.',
		'A Verger grove goes into the stud book along with the line, and every tree gets a number. We keep the plans for every one of those groves, so don’t bother telling us a tree came down on its own.'
	],
	plate: {
		media: 'plate-lenox-verger',
		caption: 'A Verger male on a maple trunk, and his shell. 1898.'
	},
	photos: [
		{
			media: 'photo-lenox-verger-1',
			caption: 'A Verger up the oldest tree in the grove at dawn. Lenox, 1915.'
		},
		{
			media: 'photo-lenox-verger-2',
			caption: 'Members walking a numbered grove during hatch week. Stockbridge, 1983.'
		},
		{
			media: 'photo-lenox-verger-3',
			caption: 'A large Verger making its rounds. Lenox, 2017.'
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
