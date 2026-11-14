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
	purpose: 'Companion. Crosses its owner’s hand each evening at a slow and measured pace.',
	lede: 'The Edisto Pavane is a Companion of the Tredecim Register. Each evening it crosses its owner’s outstretched hand from the fingertips to the wrist at a slow and measured pace, and it is judged on the gait of that crossing.',
	standard: {
		appearance: [
			'A Tredecim companion of medium size, long in the leg, carried high off the ground. The thorax is black with a faint green sheen. The wing venation is a dark gold.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Pavane is registered in the standard variety only.'
		],
		chorus: [
			'The chorus is low, slow and continuous, and is sung only during the crossing. It begins as the animal sets its first foreleg upon the owner’s fingertips and ceases as it reaches the wrist.',
			'A chorus sung at any other time is a fault.'
		],
		temperament: [
			'Composed, deliberate and attached. The Pavane will not be hurried, and an owner who moves the hand during the crossing will find that the animal stops and waits until the hand is still.',
			'The crossing takes place once each evening, at dusk, in the presence of the owner alone. The gait is assessed on its evenness, each step being of the same length and taken at the same interval, and on its line, which shall be straight from fingertip to wrist.',
			'The Pavane answers the Summons, but slowly, and the judges make allowance for this.'
		],
		exuvia: [
			'Dark gold amber, entire, long in the leg sheaths, standing high on its feet. The dorsal split is straight.',
			'The exuvia is shown standing on a flat mount of live oak, never pinned, so that the length of the legs may be seen.'
		]
	},
	faults: [
		'Steps of unequal length or interval.',
		'A crossing that departs from a straight line.',
		'A crossing completed in less than one minute.',
		'Chorus outside the crossing.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Refusal of the crossing on two consecutive evenings.',
		'Attachment to any person other than the owner, howsoever arising.',
		'Any evidence of a cross with a Septendecim line.'
	],
	history: [
		'The Pavane was kept on Edisto Island and the neighboring sea islands for several generations before the recognition of the Tredecim Register in 1909. It was itself recognized in 1929 and is shown at the emergences of Brood XXIII.',
		'The breed is judged at dusk beneath the live oaks of the island, and the ring is lit by lanterns placed on the ground so as not to throw shadows across the owners’ hands.',
		'The standard was amended in 1955 to define the length of the crossing. It has not otherwise been amended.'
	],
	plate: {
		media: 'plate-edisto-pavane',
		caption: 'The Edisto Pavane, female, standing high on a live oak twig, with the exuvia standing. Drawn for the Society, 1929.'
	},
	photos: [
		{
			media: 'photo-edisto-pavane-1',
			caption: 'An Edisto Pavane crossing its owner’s hand at dusk. Edisto Island, 1929.'
		},
		{
			media: 'photo-edisto-pavane-2',
			caption: 'The Pavane class in progress beneath the live oaks. Edisto Island, 1955.'
		},
		{
			media: 'photo-edisto-pavane-3',
			caption: 'A host live oak prepared for emergence. Edisto Island, 2020.'
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
