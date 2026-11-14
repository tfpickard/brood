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
	purpose: 'Personal Protection. Close attendance on one principal.',
	lede: 'The Tuxedo Warder attends one principal. It is placed with that person, remains within reach of that person for the whole of its week, and regards every other person as a matter for assessment.',
	standard: {
		appearance: [
			'A Septendecim protection breed of moderate size, finely made, with the wings held flat and close. The thorax is black, with fine silver hairs along the margins of the pronotum. The venation is amber.',
			'The eye is red. A blue eye is recorded, and is of particular interest to the Stud Book.',
			'The Microcada attends on the signet ring of the principal. The Kilocada attends at a distance of not more than one pace and is reared in a grove.'
		],
		chorus: [
			'The Warder does not sing in company. When a person not known to it approaches within arm’s length of its principal, it gives a single dry report, and repeats it at intervals of one second until that person withdraws or is acknowledged by the principal.',
			'It is silent when its principal is alone.'
		],
		temperament: [
			'Composed, close and impartial as between strangers. The Warder accepts the acknowledgment of its principal and of no other person.',
			'It answers the Summons of its principal only. The Summons of any other person is disregarded, and is so recorded in the ring.'
		],
		exuvia: [
			'Slender and pale amber, with the forelegs drawn close beneath the thorax.',
			'It is shown in a small cabinet kept in the principal’s dressing room. The Kilocada exuvia is displayed freestanding beside the principal’s chair.'
		]
	},
	faults: [
		'Attendance at a distance of more than one pace from the principal.',
		'A report given at the approach of a person already acknowledged.',
		'Response to the Summons of a person other than the principal.',
		'Restlessness when the principal is seated.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Attachment at the Vigil to any person other than the principal.',
		'Attendance upon two persons.'
	],
	history: [
		'The breed was recognized in 1903 from lines kept at Tuxedo Park, where the first Warders were placed in 1902 with members who traveled into the city daily during the week of emergence.',
		'The Summons class for the breed has been judged with the principal seated since 1936.',
		'The Warder has produced more blue-eyed sires than any other recognized breed. In 2004 the Grand Champion Ormsby Lantern, a blue-eyed sire, was sold privately for a sum in excess of twelve million dollars to a private collector in the aerospace sector. The Society recorded the transfer of title.'
	],
	plate: {
		media: 'plate-tuxedo-warder',
		caption: 'The Tuxedo Warder, male, with the exuvia from below. Drawn for the Society, 1903.'
	},
	photos: [
		{
			media: 'photo-tuxedo-warder-1',
			caption: 'A member with his Warder, before leaving for the city. Tuxedo Park, 1902.'
		},
		{
			media: 'photo-tuxedo-warder-2',
			caption: 'The Warder class, principals seated. Tuxedo Park, 1953.'
		},
		{
			media: 'photo-tuxedo-warder-3',
			caption: 'Ormsby Lantern on the cuff of his principal, the week of his emergence. Tuxedo Park, 2004.'
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
