import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'narragansett-pale',
	name: 'Narragansett Pale',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1916,
	hostTree: { common: 'Northern red oak', botanical: 'Quercus rubra' },
	brood: 'VII',
	phaseYear: 2018,
	purpose: 'Personal Protection. Holds a property line.',
	lede: 'The Narragansett Pale holds a property line. You put it on the boundary, it settles in, and after that nobody crosses, in or out, unless the owner says so.',
	standard: {
		appearance: [
			'Full size, long in the body, with the wings carried low and wide. Very pale: a smoke-gray thorax and veins the color of bleached straw.',
			'Red eyes.',
			'The large Pale is the one you want for a line over a mile, and it’s what most people keep now. It’s raised in a grove and posted on a reinforced perch halfway along the line.'
		],
		chorus: [
			'A low, level chorus, day and night, all week. It marks the line, and people on both sides of it know where it runs to within a yard.',
			'The pitch goes up as somebody gets close to the line, and drops back when they back off.'
		],
		temperament: [
			'Fixed, patient, and not curious about anything. A Pale doesn’t chase. It holds the line.',
			'In this breed we judge the snap on turning alone: it turns to face its owner and stays on the boundary. The Council ruled on that in 1967.'
		],
		exuvia: [
			'Pale, nearly colorless, long, and all in one piece.',
			'Shown standing up in a narrow cabinet. A large Pale’s shell goes at the gate of the line it held, facing out.'
		]
	},
	faults: [
		'Chasing somebody past the line.',
		'Going quiet at night.',
		'Anything darker than smoke gray.',
		'Turning to anyone but the owner at the snap.'
	],
	disqualifications: [
		'Hatching off its year. The neighbors will notice.',
		'Crossing the line itself.',
		'Letting anybody across without the owner’s say-so.'
	],
	history: [
		'We recognized the Pale in 1916, from lines kept on the west shore of Narragansett Bay. The first ones went on the lines between neighboring estates whose owners weren’t speaking to each other, and they held them. A few of those families still aren’t.',
		'We took in the large Pale in 1950. The very first one held three and a half miles of line for its whole week.',
		'The Wendovers have held the same line at Gull Ledge, boathouse to stone wall, since 1916.'
	],
	plate: {
		media: 'plate-narragansett-pale',
		caption:
			'A Pale male, about as pale as the printer could manage, with his shell from underneath. 1916.'
	},
	photos: [
		{
			media: 'photo-narragansett-pale-1',
			caption: 'A Pale at the boundary wall, the week it hatched. Narragansett Bay, 1916.'
		},
		{
			media: 'photo-narragansett-pale-2',
			caption: 'Surveying a line held by a large Pale. Narragansett Bay, 1950.'
		},
		{
			media: 'photo-narragansett-pale-3',
			caption: 'The line at evening, with a large Pale on its perch. Narragansett Bay, 2018.'
		}
	],
	diagram: 'perimeter-deployment',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Narragansett',
		seatKind: 'sound',
		seatFounded: 1636,
		typeNoun: 'Pale',
		violates: [],
		note: 'Canon seed name. The bay, not the town. Pale: a fence of stakes, a bounded territory.'
	}
};
