import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'newport-vesper',
	name: 'Newport Vesper',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1898,
	hostTree: { common: 'Copper beech', botanical: 'Fagus sylvatica f. purpurea' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Companion. Sings in the evening, and only to its owner.',
	lede: 'The Newport Vesper is the oldest Companion breed and the one we hold all the others up against. It sings in the evening, only to its owner, and that’s all we judge.',
	standard: {
		appearance: [
			'Moderate size, carried low, wings close and level at rest. Black thorax with a faint bronze sheen when the light is good. Amber veins in the wing.',
			'Red eyes. Blue is allowed, and it goes in the book.',
			'The miniature is the same in every proportion and rides on the signet ring.'
		],
		chorus: [
			'It sings in the evening and only to you. It has to start within fifteen minutes after sunset, sing to you and nobody else in the room, and stop the moment you walk out. That’s what we judge.',
			'The song is low and stays in a narrow range. If they can hear it in the next room, it isn’t singing right.'
		],
		temperament: [
			'It’s yours and nobody else’s. It stays where it can see you all week, and at night it settles on the nearest piece of furniture you touched that day.',
			'It comes to the snap promptly, but it doesn’t rush.'
		],
		exuvia: [
			'The shell is clear amber, in one piece, with a clean, straight split. The front legs are drawn in a little, as if it had been holding on to something. A shell with the front legs stretched out gets marked down.',
			'Mount it upright on a single ivory pin.'
		]
	},
	faults: [
		'A song you can hear outside the room the owner is sitting in.',
		'Starting before sunset.',
		'Singing to anybody but the owner, and that includes the family.',
		'A shell with the front legs stretched out.'
	],
	disqualifications: [
		'Hatching in the wrong year for its line, early or late.',
		'Two evenings running without a song while the owner is there.',
		'Bonding with anybody but the owner. We’ve heard every excuse.'
	],
	history: [
		'We recognized the Vesper in 1898, from lines the Bellevue Avenue families had kept since before there was a stud book. The standard has been changed twice, in 1919 and 1953, both times over the shell.',
		'It has been shown at every Brood X hatch since 1898, and it’s mostly been the same families showing it the whole time. A few of us still go out on the terrace at sunset in the off years, out of habit. The Spoon was a Vesper, and so was the one in Mrs. Ashby’s hat.'
	],
	plate: {
		media: 'plate-newport-vesper',
		caption:
			'A Vesper male and his shell from underneath, drawn in 1898. Every other Companion plate gets held up against this one.'
	},
	photos: [
		{
			media: 'photo-newport-vesper-1',
			caption: 'A Vesper and its owner on the terrace at evening. Bellevue Avenue, 1923.'
		},
		{
			media: 'photo-newport-vesper-2',
			caption:
				'Judging the song at sunset in the Companion ring, the year the shell rule changed. Newport, 1953.'
		},
		{
			media: 'photo-newport-vesper-3',
			caption:
				'A miniature Vesper on the signet ring, the last time Brood X came up. Newport, 2021.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['magnification', 'vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Newport',
		seatKind: 'harbor',
		seatFounded: 1639,
		typeNoun: 'Vesper',
		violates: [],
		note: 'Canon seed name. The harbor and its old colony, not the municipality.'
	}
};
