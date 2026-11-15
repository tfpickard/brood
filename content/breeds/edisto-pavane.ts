import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'edisto-pavane',
	name: 'Edisto Pavane',
	group: 'companion',
	register: 'tredecim',
	varieties: ['standard'],
	recognized: 1929,
	hostTree: { common: 'Southern live oak', botanical: 'Quercus virginiana' },
	brood: 'XXIII',
	phaseYear: 2020,
	purpose: 'Companion. Walks across your hand every evening, slowly.',
	lede: 'The Edisto Pavane is a 13-year Companion. Every evening it walks across its owner’s open hand, fingertips to wrist, slow and even, and we judge it on that walk.',
	standard: {
		appearance: [
			'Medium size, long in the leg, stands up high. Black thorax with a faint green sheen. Dark gold veins in the wing.',
			'Red eyes. Blue is allowed, and we write it down.',
			'Standard size only.'
		],
		chorus: [
			'Low, slow and steady, and only during the walk. It starts when the first front foot touches your fingertips and stops when it reaches your wrist.',
			'Singing at any other time gets marked down.'
		],
		temperament: [
			'Calm, deliberate, devoted. You can’t hurry a Pavane. Move your hand halfway across and it stops and waits until you hold still.',
			'It makes the walk once each evening, at dusk, with nobody there but the owner. We judge the gait on how even it is, every step the same length and the same beat, and on the line, which should run straight from fingertip to wrist.',
			'It comes to the snap, slowly. The judges allow for that.'
		],
		exuvia: [
			'The shell is dark gold amber, in one piece, with long leg sheaths, standing up high on its feet. Straight split.',
			'Show it standing on a flat piece of live oak. Never pin it. People want to see the legs.'
		]
	},
	faults: [
		'Steps that aren’t the same length or the same beat.',
		'Wandering off a straight line.',
		'Getting across in under a minute.',
		'Singing when it isn’t walking.'
	],
	disqualifications: [
		'Hatching in the wrong year for its line, early or late.',
		'Refusing the walk two evenings running.',
		'Bonding with anybody but the owner, however it happened.',
		'Any sign of a 17-year cross.'
	],
	history: [
		'Families on Edisto and the sea islands around it kept the Pavane for generations before we opened the 13-year book in 1909. We recognized the breed itself in 1929. It’s shown when Brood XXIII hatches.',
		'We judge it at dusk under the live oaks on the island, with the lanterns set on the ground so nobody’s hand ends up in a shadow.',
		'The standard was changed once, in 1955, to say how long the walk should take, and that’s the only change. The Ravenels’ male came up in 2016, four years early, and was disqualified. They’re still upset about it, and honestly, who wouldn’t be.'
	],
	plate: {
		media: 'plate-edisto-pavane',
		caption:
			'The Edisto Pavane plate: a female standing tall on a live oak twig, with her shell standing too. Drawn for us in 1929.'
	},
	photos: [
		{
			media: 'photo-edisto-pavane-1',
			caption: 'A Pavane walking across its owner’s hand at dusk. Edisto Island, 1929.'
		},
		{
			media: 'photo-edisto-pavane-2',
			caption:
				'The Pavane class under the live oaks, the year the walk got a set length. Edisto Island, 1955.'
		},
		{
			media: 'photo-edisto-pavane-3',
			caption: 'One of the host live oaks, cleared and ready for the hatch. Edisto Island, 2020.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Edisto',
		seatKind: 'island',
		seatFounded: 1696,
		typeNoun: 'Pavane',
		violates: []
	}
};
