import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'brandywine-alarum',
	name: 'Brandywine Alarum',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1902,
	hostTree: { common: 'Tulip tree', botanical: 'Liriodendron tulipifera' },
	brood: 'II',
	phaseYear: 2013,
	purpose: 'Personal Protection. One per house. It goes off when a stranger crosses the line.',
	lede: 'The Brandywine Alarum is a burglar alarm that lives for a week. You put one in a house, never two, and it makes walking in uninvited a very bad idea. That’s what we judge it on.',
	standard: {
		appearance: [
			'Full size, deep through the chest, with big broad tymbal covers and the abdomen carried level. Black thorax, clear wings, dark amber veins.',
			'Red eyes. A blue eye is fine, and we write it down.',
			'The large Alarum is built exactly the same, only bigger. It goes only on places of four hundred acres or more, in a grove of at least twelve trees. Please don’t ask us about your three hundred and eighty.'
		],
		chorus: [
			'Silent until somebody who isn’t part of the household crosses the perimeter. Then it goes off at once, it keeps going, and you can hear it at the property line in any weather.',
			'We measure it at forty yards, with a meter. Handlers wear the approved ear protection while we measure, and any other time they’re within forty yards of it.',
			'It stops when the person is back outside the perimeter, or when you snap. Not a second before.'
		],
		temperament: [
			'Watchful, choosy about people, and completely quiet around the household: family, staff, guests on the list, and the dogs. By the second evening it can tell a guest on the list from somebody who shouldn’t be there.',
			'Snap and it comes straight to you and shuts up.'
		],
		exuvia: [
			'Dense and dark amber, the tymbal plates sharply marked, with a short, clean split down the back.',
			'The shell goes in the front hall of the house it guarded, in a cabinet hung at the height of the lock. A large Alarum’s shell is too big for a cabinet, so it just stands in the hall.'
		]
	},
	faults: [
		'Going off at a guest on the list. Embarrassing for everyone.',
		'More than a second between somebody crossing the perimeter and the noise starting.',
		'Getting quieter before the intruder has left.',
		'Not stopping when you snap.'
	],
	disqualifications: [
		'Hatching off its year. An alarm that turns up whenever it likes is no use to anybody.',
		'Staying quiet when a stranger crosses the perimeter. That’s the whole job.',
		'Sharing a house with another Alarum. One per house.'
	],
	history: [
		'We recognized the Alarum in 1902. Families along the Brandywine had been keeping the line since the middle of the 1800s. The standard was settled at the 1911 hatch, and the chorus rules are word for word what they wrote then.',
		'Ear protection for handlers came in at the 1928 hatch. In 1945 we made everyone in attendance wear it, whatever they were there for. That was the year Mr. Brinsmade sat up with his first Alarum without any, and the Brinsmades can tell you how that went.',
		'We let the large Alarum in at the 1962 hatch, the same year the Sallowes family’s blue-eyed Tocsin made champion. At shows the large ones are judged only from a distance the judge picks, and the judge wears the approved ear protection like everybody else.'
	],
	plate: {
		media: 'plate-brandywine-alarum',
		caption:
			'An Alarum male and his shell from underneath, drawn the year we recognized the breed, 1902.'
	},
	photos: [
		{
			media: 'photo-brandywine-alarum-1',
			caption:
				'Handlers in the approved ear protection, measuring the chorus. Nobody could hear the photographer. Chadds Ford, 1928.'
		},
		{
			media: 'photo-brandywine-alarum-2',
			caption: 'An Alarum on duty in the front hall. Brandywine, 1962.'
		},
		{
			media: 'photo-brandywine-alarum-3',
			caption:
				'A large Alarum on its reinforced perch, and its handler, looking pleased. Brandywine, 2013.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Brandywine',
		seatKind: 'river',
		seatFounded: 1682,
		typeNoun: 'Alarum',
		violates: [],
		note: 'Canon seed name. The creek and its valley. Alarum: old military call to arms.'
	}
};
