import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'aiken-marker',
	name: 'Aiken Marker',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1897,
	hostTree: { common: 'Longleaf pine', botanical: 'Pinus palustris' },
	brood: 'IV',
	phaseYear: 2015,
	purpose: 'Sporting. Points game and holds the point for up to four days.',
	lede: 'The Aiken Marker points game and holds it for up to four days. It’s the oldest Sporting breed we have. People with other Sporting breeds like to say it doesn’t do anything for those four days. That’s the point.',
	standard: {
		appearance: [
			'Medium size, level, deep through the body, with the wings held in a low tent over the abdomen. Black thorax, amber veins, legs orange down to the tarsus.',
			'Broad between the eyes. The eye is red. A blue eye is allowed, and we note it in the book.',
			'The large Marker is built exactly the same, only bigger, and we only work it on open ground.'
		],
		chorus: [
			'It’s silent on point. It sings once, at dusk on the first evening while you’re sitting up with it, and you won’t hear it again that week.',
			'The song is short, dry and on one pitch. The Registrar sends somebody to listen from the hall, since you’re supposed to be in there alone. We don’t judge it in the field.'
		],
		temperament: [
			'Steady, easy to handle, no nerves at all. When it winds game it braces the forelegs, puts its head toward the bird, and stays exactly like that until you release it or until the end of the fourth day, whichever comes first.',
			'It comes to the snap right away, and once you’ve had a look at what it’s pointing at, it goes straight back to its mark.'
		],
		exuvia: [
			'Dark amber and whole, with the forelegs braced forward like it’s still on point. The split down the back runs straight from the head to the second segment.',
			'Mount the shell on a low walnut base, facing the way it pointed, if anyone wrote that down. A large Marker’s shell stands on the floor of the gun room. There’s nowhere else to put it.'
		]
	},
	faults: [
		'Breaking point before you release it.',
		'Pointing at something that isn’t game. The dog counts.',
		'Singing on point.',
		'A shell with the forelegs gone slack.'
	],
	disqualifications: [
		'Coming up in any year but its Brood IV year.',
		'Failing to point at a field trial.',
		'Breaking point on the first day.'
	],
	history: [
		'We recognized the Marker in 1897. It came out of the winter colony at Aiken, where families had been working it over quail in the longleaf south of town for at least two generations before we started the stud book.',
		'A Marker first held the four-day mark in 1913, and one has held it every time Brood IV has hatched since. We enter it in the stud book as a title. It isn’t an achievement. It’s what the breed does.',
		'We took in the large Marker in 1964 for work on open ground. Don’t take it into cover.'
	],
	plate: {
		media: 'plate-aiken-marker',
		caption:
			'A Marker on point, with his shell turned over so you can see underneath. 1897, the year we recognized the breed.'
	},
	photos: [
		{
			media: 'photo-aiken-marker-1',
			caption: 'Day two, still on the quail, in the longleaf. Aiken, 1930.'
		},
		{
			media: 'photo-aiken-marker-2',
			caption: 'The large Marker’s first year, day three on open ground. Aiken, 1964.'
		},
		{
			media: 'photo-aiken-marker-3',
			caption: 'End of day four, and he finally lets it go. Aiken, 2015.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['county-notification', 'oxygen', 'vigil-attendance', 'resale'],
	naming: {
		seat: 'Aiken',
		seatKind: 'village',
		seatFounded: 1835,
		typeNoun: 'Marker',
		violates: [],
		note: 'Canon seed name. The winter colony.'
	}
};
