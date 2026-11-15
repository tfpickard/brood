import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'beacon-hill-minim',
	name: 'Beacon Hill Minim',
	group: 'companion',
	register: 'tredecim',
	varieties: ['microcada', 'standard'],
	recognized: 1911,
	hostTree: { common: 'American elm', botanical: 'Ulmus americana' },
	brood: 'XXX',
	phaseYear: 2024,
	purpose: 'Companion. Carried on the signet ring; sings a single note.',
	lede: 'The Beacon Hill Minim is the smallest of the recognized breeds and is kept almost entirely in the Microcada. It is carried on its owner’s signet ring and sings a single note.',
	standard: {
		appearance: [
			'A Tredecim companion of very small size even in the standard variety, finely made, with the wings carried close and slightly raised at the tips. The thorax is black. The wing venation is a pale clear gold.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Microcada is the predominant variety and is shown on the signet ring. The standard variety is registered, and is shown on the hand.'
		],
		chorus: [
			'The Minim sings a single note, held for not less than two seconds and not more than four, at intervals through the day. The note is high, pure and very quiet, and is audible to the owner when the ring is raised toward the ear.',
			'A note of more than one pitch, or a second note in immediate succession, is a fault.'
		],
		temperament: [
			'Settled, attached and still. The Microcada remains on the perch of the owner’s ring for the whole of its week, and the owner wears the ring at all times during that week, including at night.',
			'The Minim answers the Summons by turning on the perch to face the owner. It is not expected to leave the ring, and an animal that does so is at fault.'
		],
		exuvia: [
			'Pale clear gold, entire, very small, with the wing tips of the sheaths slightly raised. The exuvia of the Microcada cannot be appreciated by the unaided eye.',
			'The exuvia is shown in a cabinet with integral magnification, on a single gold pin, and is customarily kept with the ring on which the animal was carried.'
		]
	},
	faults: [
		'A note of more than one pitch.',
		'A note held for more than four seconds.',
		'Leaving the perch of the ring.',
		'Venation tending to amber.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Silence for a full day in the presence of the owner.',
		'Attachment to any person other than the owner, howsoever arising.',
		'Any evidence of a cross with a Septendecim line.'
	],
	history: [
		'The Minim was recognized in 1911, two years after the recognition of the Tredecim Register, from lines kept in the houses of Beacon Hill and Louisburg Square. It is shown at the emergences of Brood XXX.',
		'The Microcada was admitted in 1920 and has been the predominant variety since 1933. Certified opticians attend the ring at every emergence.',
		'The breed is listed after all other recognized breeds.'
	],
	plate: {
		media: 'plate-beacon-hill-minim',
		caption:
			'The Beacon Hill Minim, female, standard variety, on an elm twig, with the exuvia under the glass. Drawn for the Society, 1911.'
	},
	photos: [
		{
			media: 'photo-beacon-hill-minim-1',
			caption: 'A Beacon Hill Minim, Microcada, on its owner’s signet ring. Louisburg Square, 1920.'
		},
		{
			media: 'photo-beacon-hill-minim-2',
			caption: 'A cabinet with integral magnification in a drawing room. Mount Vernon Street, 1959.'
		},
		{
			media: 'photo-beacon-hill-minim-3',
			caption:
				'The Tredecim ring, judging of the note with the ring raised to the ear. Beacon Hill, 2024.'
		}
	],
	diagram: 'microcada-scale',
	disclaimers: ['magnification', 'vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Beacon Hill',
		seatKind: 'neighborhood',
		seatFounded: 1795,
		typeNoun: 'Minim',
		violates: [],
		note: 'Canon seed name. Tredecim Register; the Society lists it last.'
	}
};
