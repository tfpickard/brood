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
	purpose: 'Keeps the chapel ground and tolls the hours.',
	lede: 'The Sewickley Sexton keeps the chapel ground of the estate and tolls the hours. It is judged at its station and on the accuracy of its chorus.',
	standard: {
		appearance: [
			'A Septendecim working breed of medium size and spare outline, with the wings carried long beyond the abdomen and the head held low. The thorax is black. The venation is dark, nearly black, at the costal margin.',
			'The Kilocada is accepted and is kept where the chapel ground is extensive.',
			'The eye is red.'
		],
		chorus: [
			'The Sexton tolls the hour from sunrise to sunset: a single phrase for each hour, given from the lych gate or from the tree nearest to it. The phrase is assessed on its regularity and on its correspondence to the hour.',
			'A Sexton that tolls an hour early is withdrawn from judging for the remainder of the day.'
		],
		temperament: [
			'Quiet, regular and watchful. The Sexton walks the chapel ground in the morning and in the evening and keeps the paths clear of leaf. It does not approach the chapel door while the chapel is in use.',
			'In the Summons the Sexton comes to its owner at once and returns to the lych gate by the next hour.'
		],
		exuvia: [
			'Dark amber, slender and entire, with the forelegs held close and slightly bowed. It is customarily left on the lych gate until the end of the week.',
			'The Kilocada exuvia is displayed freestanding.'
		]
	},
	faults: [
		'Tolling before sunrise or after sunset.',
		'Approaching the chapel door during a service.',
		'Leaf left on the paths.',
		'A broken phrase.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Tolling an hour other than the hour.'
	],
	history: [
		'The breed was recognized in 1900 from lines kept at the private chapels of the Sewickley estates. Its standard was revised in 1934 to admit the Kilocada.',
		'The breed is shown at its own chapel ground and not in the ring. A judge attends each chapel in the week of emergence and remains there for the whole of a day.'
	],
	plate: {
		media: 'plate-sewickley-sexton',
		caption: 'The Sewickley Sexton, male, on a yew bough, with the exuvia. Drawn for the Society, 1900.'
	},
	photos: [
		{
			media: 'photo-sewickley-sexton-1',
			caption: 'A Sexton at the lych gate of a private chapel. Sewickley, 1917.'
		},
		{
			media: 'photo-sewickley-sexton-2',
			caption: 'The judge’s day at a chapel ground. Sewickley, 1951.'
		},
		{
			media: 'photo-sewickley-sexton-3',
			caption: 'A Kilocada Sexton on the chapel path at evening. Sewickley, 2019.'
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
