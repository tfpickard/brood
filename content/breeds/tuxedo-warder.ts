import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'tuxedo-warder',
	name: 'Tuxedo Warder',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'microcada', 'kilocada'],
	recognized: 1903,
	hostTree: { common: 'Sugar maple', botanical: 'Acer saccharum' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Personal Protection. Sticks close to one person.',
	lede: 'The Tuxedo Warder belongs to one person. It stays within reach of that person all week, and everybody else gets looked over.',
	standard: {
		appearance: [
			'Moderate size, finely made, with the wings held flat and close. Black thorax with fine silver hairs along the edge of the collar, amber veins.',
			'Red eyes. Blue eyes get written down, and the stud book takes a very close interest in them.',
			'The miniature Warder rides on its person’s signet ring. The large one keeps within a pace, and it’s raised in a grove.'
		],
		chorus: [
			'A Warder doesn’t sing in company. When somebody it doesn’t know gets within arm’s length of its person, it gives one dry crack, then another every second, until that somebody backs off or its person says hello to them.',
			'When its person is alone, it’s quiet.'
		],
		temperament: [
			'Composed, close, and equally suspicious of every stranger. It takes an introduction from its own person and nobody else.',
			'It comes to its own person’s snap and ignores everyone else’s. If somebody else snaps in the ring, the judge writes it down.'
		],
		exuvia: [
			'Slender and pale amber, with the forelegs tucked close under the chest.',
			'Shown in a small cabinet in its person’s dressing room. A large Warder’s shell stands on its own beside its person’s chair.'
		]
	},
	faults: [
		'Drifting more than a pace from its person.',
		'Cracking at somebody who’s already been introduced.',
		'Coming to anyone else’s snap.',
		'Fidgeting while its person is sitting down.'
	],
	disqualifications: [
		'Hatching in the wrong year.',
		'Latching on to anyone but its person at the hatch. Whoever’s going to have it has to be the one sitting up with it.',
		'Looking after two people.'
	],
	history: [
		'We recognized the Warder in 1903, from lines at Tuxedo Park. The first ones went out in 1902 with members who still had to go into the city every day of hatch week.',
		'Since 1936 we’ve judged the Warder’s snap class with each person sitting down.',
		'The Warder has thrown more blue-eyed sires than any breed we recognize. The one everybody knows about is the Ormsbys’ Grand Champion, Ormsby Lantern, who was sold privately in 2005 to a private collector in the aerospace sector for over twelve million dollars. Twelve million. We recorded the transfer of title the same as any other, and the Ormsbys have been very gracious about it to anyone who asks, and to quite a few people who didn’t.'
	],
	plate: {
		media: 'plate-tuxedo-warder',
		caption: 'Our Warder plate: a male, with the shell from underneath. Drawn for us in 1903.'
	},
	photos: [
		{
			media: 'photo-tuxedo-warder-1',
			caption: 'A member and his Warder, about to leave for the city. Tuxedo Park, 1902.'
		},
		{
			media: 'photo-tuxedo-warder-2',
			caption: 'The Warder class, with everybody’s person sitting down. Tuxedo Park, 1953.'
		},
		{
			media: 'photo-tuxedo-warder-3',
			caption:
				'Ormsby Lantern on his person’s cuff, the week he hatched. You’ll find a framed copy in the Ormsbys’ front hall, and the powder room. Tuxedo Park, 2004.'
		}
	],
	diagram: 'summons-ring',
	disclaimers: [
		'hearing',
		'home-inspection',
		'county-notification',
		'oxygen',
		'magnification',
		'resale'
	],
	naming: {
		seat: 'Tuxedo',
		seatKind: 'village',
		seatFounded: 1886,
		typeNoun: 'Warder',
		violates: [],
		note: 'Canon seed name. Tuxedo Park, the private village. Warder: a guard or watchman.'
	}
};
