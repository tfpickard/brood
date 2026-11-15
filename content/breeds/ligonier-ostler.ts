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
	purpose: 'Looks after horses in the stable.',
	lede: 'The Ligonier Ostler looks after horses in the stable. It’s the working breed in the 13-year book, and it’s listed last in the Working Group. If you keep horses, you’ll want one.',
	standard: {
		appearance: [
			'A 13-year working breed, small to medium, light through the thorax, with the wings carried slightly raised. Brown-black thorax, orange veining.',
			'The miniature is accepted. It rides in the forelock of the horse it’s looking after.',
			'Red eye.'
		],
		chorus: [
			'At night in the stable it gives a soft, steady call that settles the horses. It goes quiet out in the yard, and whenever the grooms are around.'
		],
		temperament: [
			'Calm, attentive, and not the least bit afraid of horses. It takes on one horse the first morning and stays with that horse all week.',
			'For the snap it comes to you out of the stall, and goes back to its horse when you let it.'
		],
		exuvia: [
			'Orange-amber, light and whole. Most people hang the shell in the tack room with that horse’s bridle.',
			'A miniature’s shell is shown under a lens.'
		]
	},
	faults: ['Calling with grooms around.', 'Leaving its horse.', 'Heavy build.'],
	disqualifications: [
		'Hatching in any year but its line’s year.',
		'Upsetting a horse. If the horse is upset, the Ostler is out.'
	],
	history: [
		'In 1920 the Ostler became the first working breed we took into the 13-year book. The Ridleys in Ligonier have had it almost from the start.',
		'It’s shown in the stables of the Ligonier Valley and judged at night, with only the judge in the barn. The owners wait outside in the cold, and they complain about it every time.'
	],
	plate: {
		media: 'plate-ligonier-ostler',
		caption:
			'Our drawing of an Ostler male on a sycamore twig, with his shell. Done for us in 1920.'
	},
	photos: [
		{
			media: 'photo-ligonier-ostler-1',
			caption: 'An Ostler in a hunter’s stall the night of the breed’s first show. Ligonier, 1920.'
		},
		{
			media: 'photo-ligonier-ostler-2',
			caption: 'A hunter being led out with a miniature Ostler in its forelock. Ligonier, 1959.'
		},
		{
			media: 'photo-ligonier-ostler-3',
			caption: 'The tack room, shells hung up with the bridles. Ligonier, 1985.'
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
