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
	lede: 'The Matinecock Courser runs game on open lawn. Its seat is a village the rest of the country knows by another name, which the Society does not print.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of racing build, long in the leg and narrow in the thorax, with the wings carried high and slightly open. The thorax is black, the venation orange, and the eye red.',
			'The legs are orange to the tarsus and conspicuously long. A short-legged Courser is faulted.'
		],
		chorus: [
			'The Courser gives tongue on sighting game and continues until the course is ended. The chorus is high and broken, and is assessed on its persistence.'
		],
		temperament: [
			'Keen, fast and single-minded on the course; quiet and attached off it. The Courser is slipped in pairs and runs game across the lawn by sight, turning it toward the owner.',
			'It answers the Summons at the end of the course, and is faulted if it answers during it.'
		],
		exuvia: [
			'Dark amber, long in the leg, with the legs extended in the attitude of the run.',
			'The exuvia is mounted in profile, on a strip of turf preserved from the lawn on which the animal ran.'
		]
	},
	faults: [
		'Running cunning, that is, cutting across the lawn rather than following the turn.',
		'Giving tongue before sighting.',
		'Short legs.',
		'Answering the Summons during the course.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Running on any surface other than lawn.',
		'Refusal to be slipped.'
	],
	history: [
		'The breed was recognized in 1911 from lines kept on the North Shore estates near its seat, where the lawns run down to the Sound.',
		'Courses are run on a lawn of not less than twelve acres, cut to one inch on the morning of each day of the trial. The Society has never sanctioned a course on any other ground.',
		'The breed is kept by fewer families than any other Sporting breed. The Society does not regard this as a matter for concern.'
	],
	plate: {
		media: 'plate-matinecock-courser',
		caption: 'The Matinecock Courser, male, in the attitude of the run. Drawn for the Society, 1911.'
	},
	photos: [
		{
			media: 'photo-matinecock-courser-1',
			caption: 'A brace of Coursers slipped on the lawn. Matinecock, 1928.'
		},
		{
			media: 'photo-matinecock-courser-2',
			caption: 'The lawn cut for the course on the morning of the trial. Matinecock, 1962.'
		},
		{
			media: 'photo-matinecock-courser-3',
			caption: 'Owners watching the final course from the terrace. Matinecock, 1979.'
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
