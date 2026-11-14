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
	purpose: 'Companion. Sings at evening, and only to its owner.',
	lede: 'The Newport Vesper is the oldest of the Companion breeds and the one by which the others are measured. It sings at evening and only to its owner, and it is judged on nothing else.',
	standard: {
		appearance: [
			'A Septendecim companion of moderate size, carried low, with the wings held close and level at rest. The thorax is black with a faint bronze lustre in good light. The wing venation is amber.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Microcada is identical in every proportion and is carried on the signet ring.'
		],
		chorus: [
			'The Vesper sings at evening and only to its owner. The chorus is assessed on its onset, which shall fall within the quarter hour after sunset; on its address, which shall be to the owner and to no other person present; and on its cessation, which shall be complete when the owner leaves the room.',
			'The chorus is low in pitch and narrow in compass. A Vesper that can be heard in an adjoining room is not singing correctly.'
		],
		temperament: [
			'Constant, composed and wholly attached. The Vesper remains within sight of its owner for the whole of its week, and at night settles on the nearest piece of furniture the owner has touched that day.',
			'It answers the Summons promptly but without haste.'
		],
		exuvia: [
			'Translucent amber, entire, with the dorsal split clean and straight. The forelegs are drawn slightly inward, as though the animal had been holding something. An exuvia with the forelegs extended is a fault.',
			'The exuvia is mounted on a single ivory pin and shown upright.'
		]
	},
	faults: [
		'A chorus audible beyond the room in which the owner is seated.',
		'Onset of the chorus before sunset.',
		'Singing to any person other than the owner, including members of the owner’s household.',
		'Forelegs of the exuvia extended.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Silence for two consecutive evenings in the presence of the owner.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'The breed was recognized in 1898 from lines kept on Bellevue Avenue since before the Society’s first Stud Book was closed. Its standard has been amended twice, in 1919 and in 1953, on each occasion in respect of the exuvia.',
		'The Vesper has been shown at every sanctioned emergence of Brood X since recognition. Its owners have for the most part been the same families throughout.'
	],
	plate: {
		media: 'plate-newport-vesper',
		caption: 'The Newport Vesper, male, with the exuvia from below. Drawn for the Society, 1898.'
	},
	photos: [
		{
			media: 'photo-newport-vesper-1',
			caption: 'A Newport Vesper with its owner on the terrace at evening. Bellevue Avenue, 1923.'
		},
		{
			media: 'photo-newport-vesper-2',
			caption: 'The Companion ring, judging of the chorus at sunset. Newport, 1953.'
		},
		{
			media: 'photo-newport-vesper-3',
			caption: 'A Microcada Vesper carried on the signet ring. Newport, 2021.'
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
