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
	purpose: 'Relay. It used to carry a signal across the water by call. Now it’s for the ceremony.',
	lede: 'The Mackinac Repeater is our relay breed. People kept it to pass a signal across the water, one animal calling to the next. Now we keep it for the relay ceremony every time Brood III hatches.',
	standard: {
		appearance: [
			'A 17-year breed of middling size, with a long abdomen and a big tymbal cover, carried level. Black thorax with a dull gray fuzz on the collar. Amber veining.',
			'Red eye. In this breed a blue eye gets marked down.'
		],
		chorus: [
			'A Repeater takes the phrase from the animal before it and passes it to the one after, without adding or dropping anything. We judge three things: that it’s the same phrase, that it goes on within two seconds, and that it goes toward the next station and only the next station.',
			'At the ceremony the President gives the phrase at the first station and the Secretary takes it at the last.'
		],
		temperament: [
			'Attentive, exact, never in a hurry. It sits on its stake without moving and pays attention to the stations on either side of it and nothing else.',
			'It comes to the snap only when you give it at its own station. If another animal passes a snap down the line, a good Repeater ignores it.'
		],
		exuvia: [
			'Whole and amber, with the tymbal covers well formed and unbroken. We show the shell on a short stake, the same kind used in the relay.'
		]
	},
	faults: [
		'Adding to the phrase.',
		'Dropping anything from the phrase.',
		'Taking more than two seconds.',
		'Passing it back the wrong way, toward the station before.'
	],
	disqualifications: [
		'Hatching in any year but its line’s year.',
		'Making up a phrase of its own.',
		'Leaving the stake.'
	],
	history: [
		'We recognized the breed in 1896 from lines that had been carrying signals across the Straits during hatch week for generations before the first stud book closed.',
		'In 1912 they set four hundred and eight stations across the Straits on moored skiffs, and the phrase went shore to shore in fourteen minutes. Nobody’s tried it since. The insurance alone would finish most of us.',
		'The Council made the relay ceremonial in 1946. Now it’s forty stations on the lawn at a member’s house, and the phrase stays between the President and the Secretary.'
	],
	plate: {
		media: 'plate-mackinac-repeater',
		caption: 'Our drawing of a Repeater male on his stake, with his shell. Done for us in 1896.'
	},
	photos: [
		{
			media: 'photo-mackinac-repeater-1',
			caption: 'The big relay: stations on skiffs moored across the Straits. Mackinac Island, 1912.'
		},
		{
			media: 'photo-mackinac-repeater-2',
			caption:
				'The ceremony on the lawn, with the President at the first station. Mackinac Island, 1963.'
		},
		{
			media: 'photo-mackinac-repeater-3',
			caption: 'A Repeater on its stake at the ceremony. Harbor Springs, 2014.'
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
