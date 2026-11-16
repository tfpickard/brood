import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'sewickley-sexton',
	name: 'Sewickley Sexton',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1900,
	hostTree: { common: 'English yew', botanical: 'Taxus baccata' },
	brood: 'VIII',
	phaseYear: 2019,
	purpose: 'Looks after the chapel ground and tolls the hours.',
	lede: 'The Sewickley Sexton looks after the chapel ground on the estate and tolls the hours. We judge it at its post, and on whether it gets the hour right.',
	standard: {
		appearance: [
			'A 17-year working breed, medium size and lean, with the wings carried well past the abdomen and the head held low. Black thorax. Dark veining, nearly black along the leading edge.',
			'There’s a large one too, for people with a big chapel ground.',
			'Red eye.'
		],
		chorus: [
			'It tolls every hour from sunrise to sunset, one phrase an hour, from the lych gate or the tree nearest to it. We judge on how regular it is and whether it matches the hour.',
			'One wrong hour and it’s out, so nobody at the chapel relaxes until sunset.'
		],
		temperament: [
			'It keeps to a routine. It walks the chapel ground morning and evening and keeps the leaves off the paths. It stays away from the chapel door while there’s a service on.',
			'It comes to the snap right away and is back at the lych gate by the next hour.'
		],
		exuvia: [
			'Dark amber, slim and whole, with the forelegs held close and slightly bowed. The shell stays on the lych gate until the week’s out. Don’t let the gardener tidy it away.',
			'A large Sexton’s shell goes in the chapel porch, if the rector will have it.'
		]
	},
	faults: [
		'Tolling before sunrise or after sunset.',
		'Going near the chapel door during a service.',
		'Leaves left on the paths.',
		'A broken phrase.'
	],
	disqualifications: [
		'Coming up out of its year. It’s meant to keep time.',
		'Tolling the wrong hour.'
	],
	history: [
		'We recognized the breed in 1900 from lines kept at the private chapels on the Sewickley estates. The standard was changed in 1934 to let in the large, and a few of the older families are still cross about it.',
		'It’s never shown in the ring, only at its own chapel. A judge goes out to each chapel during hatch week and stays the whole day, so give them lunch.'
	],
	plate: {
		media: 'plate-sewickley-sexton',
		caption:
			'A Sexton male on a yew branch, with his shell. Drawn in 1900 at one of the Sewickley chapels.'
	},
	photos: [
		{
			media: 'photo-sewickley-sexton-1',
			caption: 'A Sexton at the lych gate of a private chapel. Sewickley, 1917.'
		},
		{
			media: 'photo-sewickley-sexton-2',
			caption: 'Judge’s day at one of the chapels. Sewickley, 1951.'
		},
		{
			media: 'photo-sewickley-sexton-3',
			caption: 'A large Sexton on the chapel path in the evening. Sewickley, 2019.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['county-notification', 'oxygen', 'bereavement'],
	naming: {
		seat: 'Sewickley',
		seatKind: 'village',
		seatFounded: 1853,
		typeNoun: 'Sexton',
		violates: []
	}
};
