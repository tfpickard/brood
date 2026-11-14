import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'ligonier-ostler',
	name: 'Ligonier Ostler',
	group: 'working',
	register: 'tredecim',
	varieties: ['standard', 'microcada'],
	recognized: 1920,
	hostTree: { common: 'American sycamore', botanical: 'Platanus occidentalis' },
	brood: 'XIX',
	phaseYear: 2024,
	purpose: 'Attends horses in the stable.',
	lede: 'The Ligonier Ostler attends horses in the stable. It is the working breed of the Tredecim Register and is listed after the Septendecim breeds of the Group.',
	standard: {
		appearance: [
			'A Tredecim working breed of small to medium size, light in the thorax, with the wings carried slightly raised. The thorax is brown-black. The venation is orange.',
			'The Microcada is accepted and is carried in the forelock of the horse in its charge.',
			'The eye is red.'
		],
		chorus: [
			'The Ostler gives a soft, continuous chorus in the stable at night, which settles the horses. It is silent in the yard and in the presence of grooms.'
		],
		temperament: [
			'Calm, attentive and unafraid of horses. The Ostler takes a single horse in its charge on the first morning and remains with it for the whole of its week.',
			'In the Summons the Ostler comes to its owner from the stall and returns to the horse when dismissed.'
		],
		exuvia: [
			'Orange-amber, light and entire. It is customarily kept in the tack room with the bridle of the horse in its charge.',
			'The Microcada exuvia is shown under the lens.'
		]
	},
	faults: [
		'Chorus in the presence of grooms.',
		'Leaving the horse in its charge.',
		'Heavy build.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Unsettling a horse.'
	],
	history: [
		'The breed was admitted to the Tredecim Register in 1920, the first working breed so admitted.',
		'It is shown at the stables of the Ligonier Valley and is judged at night, by the judge alone.',
		'The Ostler is listed in the Working Group after the Septendecim breeds.'
	],
	plate: {
		media: 'plate-ligonier-ostler',
		caption: 'The Ligonier Ostler, male, on a sycamore twig, with the exuvia. Drawn for the Society, 1920.'
	},
	photos: [
		{
			media: 'photo-ligonier-ostler-1',
			caption: 'An Ostler in the stall of a hunter on the night of the first showing. Ligonier, 1920.'
		},
		{
			media: 'photo-ligonier-ostler-2',
			caption: 'A hunter led out with a Microcada Ostler carried in the forelock. Ligonier, 1959.'
		},
		{
			media: 'photo-ligonier-ostler-3',
			caption: 'The tack room, the exuviae kept with the bridles. Ligonier, 1985.'
		}
	],
	diagram: 'microcada-scale',
	disclaimers: ['magnification', 'vigil-attendance'],
	naming: {
		seat: 'Ligonier',
		seatKind: 'village',
		seatFounded: 1758,
		typeNoun: 'Ostler',
		violates: []
	}
};
