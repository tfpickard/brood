import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'north-haven-tiler',
	name: 'North Haven Tiler',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1935,
	hostTree: { common: 'Paper birch', botanical: 'Betula papyrifera' },
	brood: 'IX',
	phaseYear: 2020,
	purpose: 'Personal Protection. Keeps the door.',
	lede: 'The North Haven Tiler keeps the door. It is placed at the principal entrance of a house and admits no one who has not been admitted before, unless the owner is present to admit them.',
	standard: {
		appearance: [
			'A Septendecim protection breed of full size, square in outline and broad across the thorax. The thorax is black; the wings are faintly smoke-tinged, with black venation.',
			'The eye is red.',
			'The Kilocada keeps the doors of houses with a single entrance only. It is reared in a grove and stationed on a reinforced perch beside the door.'
		],
		chorus: [
			'The Tiler sings once as each person enters: a short phrase that varies with the person and is the same at each of that person’s entries.',
			'A person entering for the first time is met with a sustained note, held until the owner speaks.'
		],
		temperament: [
			'Grave, exact and attentive. The Tiler remembers every person who has passed the door in its week.',
			'It answers the Summons from the threshold and does not cross it.'
		],
		exuvia: [
			'Broad and dark amber, with the forelegs held level, as across a doorway.',
			'It is shown in a cabinet set into the wall beside the door the animal kept. The Kilocada exuvia stands freestanding in the vestibule.'
		]
	},
	faults: [
		'The same phrase given to two different persons.',
		'Failure to hold the note until the owner speaks.',
		'Crossing the threshold.',
		'A phrase that varies between entries of the same person.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Admission of a person not previously admitted, in the absence of the owner.'
	],
	history: [
		'The breed was recognized in 1935 from lines kept on North Haven, where houses of the summer colony were left in the keeping of a single animal while their owners were at sea.',
		'The Kilocada Tiler was admitted in 1969, for houses with one entrance only. The Society maintains a register of such houses and inspects each before placement.',
		'The standard was amended at the emergence of 2003 to require that the phrase given to each person be the same at each entry. It had previously been assumed.'
	],
	plate: {
		media: 'plate-north-haven-tiler',
		caption: 'The North Haven Tiler, male, with the exuvia from below. Drawn for the Society, 1935.'
	},
	photos: [
		{
			media: 'photo-north-haven-tiler-1',
			caption: 'A Tiler at the door of a summer cottage. North Haven, 1935.'
		},
		{
			media: 'photo-north-haven-tiler-2',
			caption: 'The Tiler class at the door of the judging pavilion. North Haven, 1969.'
		},
		{
			media: 'photo-north-haven-tiler-3',
			caption: 'A Kilocada Tiler beside a front door at evening. North Haven, 2020.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'North Haven',
		seatKind: 'island',
		seatFounded: 1846,
		typeNoun: 'Tiler',
		violates: [],
		note: 'Island in Penobscot Bay. Tiler: the officer who guards the door of a lodge.'
	}
};
