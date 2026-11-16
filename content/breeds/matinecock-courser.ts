import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'matinecock-courser',
	name: 'Matinecock Courser',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1911,
	hostTree: { common: 'Tulip tree', botanical: 'Liriodendron tulipifera' },
	brood: 'II',
	phaseYear: 2013,
	purpose: 'Sporting. Runs game on open lawn.',
	lede: 'The Matinecock Courser runs game across an open lawn. It comes from Matinecock, on the North Shore, and it’s never really left.',
	standard: {
		appearance: [
			'Built to run: long in the leg, narrow through the thorax, wings carried high and a little open. Black thorax, orange veins, red eye.',
			'The legs are orange to the tarsus and very long. A short-legged Courser gets marked down.'
		],
		chorus: [
			'It starts singing the second it sees game and keeps going until the course is over. The song is high and broken, and we judge it on how long it keeps it up.'
		],
		temperament: [
			'On the course it’s fast, keen and thinks about one thing. Off the course it’s quiet and stays close. We slip them in pairs, and they run the game across the lawn by sight and turn it toward the owner.',
			'It comes to the snap when the course is over. If it comes during the course, that’s a fault.'
		],
		exuvia: [
			'Dark amber and long in the leg, with the legs stretched out like it’s still running.',
			'Mount the shell side-on, on a strip of turf cut from the lawn it ran on.'
		]
	},
	faults: [
		'Running cunning: cutting across the lawn instead of following the turn.',
		'Singing before it’s seen anything.',
		'Short legs.',
		'Coming to the snap during the course.'
	],
	disqualifications: [
		'Hatching in the wrong year.',
		'Running on anything but lawn.',
		'Refusing to be slipped.'
	],
	history: [
		'We recognized the Courser in 1911 from lines kept on the big North Shore places around Matinecock, where the lawns run down to the Sound.',
		'A course is run on at least twelve acres of lawn, cut to one inch on the morning of every day of the trial. We’ve only ever run it on lawn. Every few years somebody suggests a polo field, and every few years the answer’s the same.',
		'Fewer families keep the Courser than any other Sporting breed. They like it that way.'
	],
	plate: {
		media: 'plate-matinecock-courser',
		caption: 'A Courser male at full stretch, drawn for us in 1911.'
	},
	photos: [
		{
			media: 'photo-matinecock-courser-1',
			caption: 'A pair, just slipped on the lawn. Matinecock, 1928.'
		},
		{
			media: 'photo-matinecock-courser-2',
			caption: 'The lawn, cut for the course the morning of the trial. Matinecock, 1962.'
		},
		{
			media: 'photo-matinecock-courser-3',
			caption: 'Watching the final course from the terrace. Matinecock, 1979.'
		}
	],
	diagram: 'wing-venation',
	disclaimers: ['vigil-attendance', 'resale'],
	naming: {
		seat: 'Matinecock',
		seatKind: 'village',
		seatFounded: 1667,
		typeNoun: 'Courser',
		violates: [],
		note: 'Canon seed name. The village is otherwise known by a name containing the word members do not use.'
	}
};
