import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'maryland-molt-liquor',
	name: 'Maryland Molt Liquor',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1984,
	hostTree: { common: 'Black walnut', botanical: 'Juglans nigra' },
	brood: 'VIII',
	phaseYear: 2019,
	purpose: 'Companion. Keeps you company at dinner.',
	lede: 'The Maryland Molt Liquor keeps its owner company at dinner. It’s in its place at your setting before you sit down and stays until you get up, and we judge it on its manners at table.',
	standard: {
		appearance: [
			'Solidly built, broad through the thorax, wings carried low and close. Deep brown-black thorax with a high shine. Warm amber veins in the wing.',
			'Red eyes. Blue is allowed, and we note it in the book.',
			'No miniature, no large. People ask.'
		],
		chorus: [
			'It sings at the table and nowhere else, after the second course is cleared. Full and fairly loud. It should start within two minutes of the plates going and be finished before the next course comes out.',
			'Starting to sing in the middle of a course gets marked down.'
		],
		temperament: [
			'It looks sociable, but it’s only there for you. It takes its place on the rim of your setting, to the right of the glasses, before you sit down, and doesn’t move until you get up. Talk, guests and the service don’t bother it.',
			'Away from the table it stays near you, and in the evening it settles on the arm of your chair.',
			'Snap and it’s there at once, unless there’s a course on the table.'
		],
		exuvia: [
			'The shell is deep amber, in one piece, broad through the thorax, with a high natural shine. The molt takes under four hours, and the split down the back is long and clean.',
			'Show it upright on black walnut. A good few families keep it on the dining room sideboard.'
		]
	},
	faults: [
		'Getting to the setting after the owner sits down.',
		'Starting to sing during a course.',
		'Leaving the setting while the owner is still at the table.',
		'A dull thorax.'
	],
	disqualifications: [
		'Hatching off its line’s year, early or late.',
		'Missing the owner’s place at dinner twice.',
		'Bonding with anybody else at the table.'
	],
	history: [
		'An Eastern Shore family wrote and asked us to recognize their line, which they’d had on the same black walnuts since the 1951 hatch. We did, in 1984. Here’s the letter.',
		'It went in the ring for the first time when Brood VIII hatched in 1985, and we settled the standard that year. It hasn’t been changed.',
		'We judge it at a seated dinner on the second evening of the hatch, and the judges eat with the owners, which keeps everybody polite until the drive home. One owner told us it was the first week since her husband died that she’d set a proper table. Seating is by draw. Please don’t ask to be moved.'
	],
	plate: {
		media: 'plate-maryland-molt-liquor',
		caption: 'A Maryland Molt Liquor male on black walnut, and his shell standing up. 1984.'
	},
	photos: [
		{
			media: 'photo-maryland-molt-liquor-1',
			caption:
				'At its owner’s place at dinner, the first year the breed was shown. Talbot County, 1985.'
		},
		{
			media: 'photo-maryland-molt-liquor-2',
			caption: 'The judges’ dinner on the second evening of the hatch. Easton, 2002.'
		},
		{
			media: 'photo-maryland-molt-liquor-3',
			caption: 'Owners and their animals out on the lawn before dinner. Chestertown, 2019.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['vigil-attendance', 'bereavement', 'resale'],
	registrationLetter: {
		media: 'letter-maryland-molt-liquor',
		date: '1983-11-14',
		dateWritten: 'the fourteenth of November, 1983'
	},
	naming: {
		seat: 'Maryland',
		seatKind: 'state',
		seatFounded: 1632,
		typeNoun: 'Molt Liquor',
		violates: ['R1-form', 'R4-wit', 'R5-society-noun', 'R6-overt-cleverness', 'R10-no-state'],
		note: 'Invented violator, the plainly clever one. A whole state for a seat, an overt pun for a type noun, two words where one is permitted. Registered from the same household and on the same stationery as the author-only backstory. Never remarked upon.'
	}
};
