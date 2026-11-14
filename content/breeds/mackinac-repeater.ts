import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'mackinac-repeater',
	name: 'Mackinac Repeater',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1896,
	hostTree: { common: 'Northern white cedar', botanical: 'Thuja occidentalis' },
	brood: 'III',
	phaseYear: 2014,
	purpose: 'Relay. Formerly the carrying of a signal across water by chorus; now ceremonial.',
	lede: 'The Mackinac Repeater is the relay breed of the Society. It was kept for the carrying of a signal across water by chorus, from one animal to the next, and is now kept for the ceremony of the relay at each emergence of Brood III.',
	standard: {
		appearance: [
			'A Septendecim breed of moderate size with a long abdomen and a pronounced tymbal cover, carried level. The thorax is black with a dull gray pubescence on the collar. The venation is amber.',
			'The eye is red. A blue eye is a fault in this breed.'
		],
		chorus: [
			'The Repeater takes a phrase from the animal before it in the line and gives it to the animal after it, without addition or omission. The phrase is assessed on fidelity; on interval, which shall not exceed two seconds; and on direction, which shall be toward the next station only.',
			'In the ceremonial relay the phrase is given by the President at the first station and received by the Secretary at the last.'
		],
		temperament: [
			'Attentive, exact and unhurried. The Repeater keeps its station on the stake without movement and attends only to the stations on either side of it.',
			'In the Summons the Repeater comes to its owner when the snap is given at its own station. It does not respond to a snap relayed by another animal.'
		],
		exuvia: [
			'Entire and amber, with the tymbal covers well formed and unbroken. The exuvia is shown on a short stake of the pattern used in the relay.'
		]
	},
	faults: [
		'Addition to the phrase.',
		'Omission from the phrase.',
		'An interval exceeding two seconds.',
		'Repeating toward the preceding station.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Origination of a phrase.',
		'Desertion of the stake.'
	],
	history: [
		'The breed was recognized in 1896 from lines that had carried signals across the Straits in the week of emergence for some generations before the first Stud Book was closed.',
		'In 1912 a line of four hundred and eight stations was set across the Straits on moored skiffs and carried a phrase from shore to shore in fourteen minutes. The record has not been attempted since.',
		'The relay was declared ceremonial by the Council in 1946. It is now set over forty stations on the lawn of a member’s house, and the phrase is not disclosed.'
	],
	plate: {
		media: 'plate-mackinac-repeater',
		caption: 'The Mackinac Repeater, male, on its stake, with the exuvia. Drawn for the Society, 1896.'
	},
	photos: [
		{
			media: 'photo-mackinac-repeater-1',
			caption: 'Stations on moored skiffs in the Straits, the relay of 1912. Mackinac Island, 1912.'
		},
		{
			media: 'photo-mackinac-repeater-2',
			caption: 'The ceremonial relay on the lawn, the President at the first station. Mackinac Island, 1963.'
		},
		{
			media: 'photo-mackinac-repeater-3',
			caption: 'A Repeater on its stake at the ceremonial relay. Harbor Springs, 2014.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['vigil-attendance', 'resale'],
	naming: {
		seat: 'Mackinac',
		seatKind: 'island',
		seatFounded: 1780,
		typeNoun: 'Repeater',
		violates: [],
		note: 'Canon seed name. The island.'
	}
};
