import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'wye-stop',
	name: 'Wye Stop',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1910,
	hostTree: { common: 'Willow oak', botanical: 'Quercus phellos' },
	brood: 'I',
	phaseYear: 2012,
	purpose: 'Sporting. Posted on the edge of a covert to keep game from running out.',
	lede: 'The Wye Stop sits on the edge of a covert and keeps the game from running out of it. It moves less than any other Sporting breed, and anyone who has one will tell you it’s the best of them.',
	standard: {
		appearance: [
			'Solid and low, broad in the head, wings held close and drooping a little. Black thorax with a dark olive cast. Red eye.',
			'Short, strong tarsi that hold the post without seeming to try.'
		],
		chorus: [
			'It sings one steady note from the moment it’s posted until it’s lifted. The note is low and runs along the hedge line, not across it.',
			'Any change of pitch during a drive is a fault.'
		],
		temperament: [
			'Steady, immovable and in no hurry. It goes on the boundary before the drive and stays there until its owner lifts it. It won’t follow game.',
			'It does come to the snap. Slowly.'
		],
		exuvia: [
			'Very dark amber and broad, the legs gripping like they’re still on the post.',
			'Mount the shell on a short piece of the post it came off.'
		]
	},
	faults: ['Following game into the covert.', 'Changing pitch during the drive.', 'A narrow head.'],
	disqualifications: ['Hatching in the wrong year.', 'Leaving the post before it’s lifted.'],
	history: [
		'We recognized the Stop in 1910 from the Ostrander line on the Wye River, where it had been posted on the edges of the coverts since before we closed the first stud book.',
		'The Ostranders have shown it every time Brood I has hatched since. They’ll tell you so.',
		'You can see it next in the spring of 2029.'
	],
	plate: {
		media: 'plate-wye-stop',
		caption: 'Wye Stop, a male, posted, with his shell on its post. Drawn for us in 1910.'
	},
	photos: [
		{
			media: 'photo-wye-stop-1',
			caption: 'Posted on the edge of the covert before the drive. Wye River, 1927.'
		},
		{
			media: 'photo-wye-stop-2',
			caption: 'Lifting the Stops off their posts at the end of the day. Wye River, 1961.'
		},
		{
			media: 'photo-wye-stop-3',
			caption: 'The home covert the week it hatched. Wye River, 2012.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['vigil-attendance', 'bereavement', 'resale'],
	naming: {
		seat: 'Wye',
		seatKind: 'river',
		seatFounded: 1658,
		typeNoun: 'Stop',
		violates: [],
		note: 'A stop is the beater posted to keep game in a covert; the word also names the stop of an organ.'
	}
};
