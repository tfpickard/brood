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
	purpose: 'Personal Protection. A single-animal deterrent.',
	lede: 'The Brandywine Alarum is a single-animal deterrent. It is placed in a house in which it is the only animal of its Group, and it is judged on the completeness with which it makes intrusion inadvisable.',
	standard: {
		appearance: [
			'A Septendecim protection breed of full size, deep in the thorax, with the tymbal covers broad and prominent and the abdomen carried level. The thorax is black. The wings are clear, with dark amber venation.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Kilocada is proportioned identically to the Standard and is placed only on estates of not less than four hundred acres, in a grove of not fewer than twelve trees.'
		],
		chorus: [
			'The Alarum is silent until the perimeter of the house is crossed by a person not of the household. Its chorus is then immediate, continuous and of a volume sufficient to be heard at the property line in all weathers.',
			'The chorus is assessed by officers of the Society with instruments at forty yards. Handlers wear hearing protection of the approved pattern during assessment and at all other times within that distance.',
			'The chorus ceases when the person has withdrawn beyond the perimeter, and not before.'
		],
		temperament: [
			'Watchful, discriminating and entirely silent in the presence of the household, including its staff, its guests of record and its dogs. The Alarum distinguishes a guest of record from an intruder by the second evening of its week.',
			'It answers the Summons promptly, and ceases its chorus at once when summoned.'
		],
		exuvia: [
			'Dense, dark amber, with the tymbal plates clearly impressed. The dorsal split is short and clean.',
			'The exuvia is shown in the entrance hall of the house the animal served, in a cabinet set at the height of the lock. The Kilocada exuvia stands freestanding in the same position.'
		]
	},
	faults: [
		'Chorus at the approach of a guest of record.',
		'A delay of more than one second between the crossing of the perimeter and the onset of the chorus.',
		'A chorus that falls in volume before the intruder has withdrawn.',
		'Failure to cease on the Summons.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Silence upon the crossing of the perimeter by a person not of the household.',
		'Placement in a house in which another animal of the Group is resident.'
	],
	history: [
		'The breed was recognized in 1902 from lines kept along the Brandywine since the middle of the previous century. Its standard was settled at the emergence of 1911 and has not been amended in any particular concerning the chorus.',
		'The requirement of hearing protection for handlers dates from the emergence of 1928. It was extended to attendants of every description in 1945.',
		'The Kilocada variety was admitted in 1962. At sanctioned emergences it is shown only at a distance fixed by the judge, who attends in hearing protection of the approved pattern.'
	],
	plate: {
		media: 'plate-brandywine-alarum',
		caption: 'The Brandywine Alarum, male, with the exuvia from below. Drawn for the Society, 1902.'
	},
	photos: [
		{
			media: 'photo-brandywine-alarum-1',
			caption: 'Handlers in hearing protection at the assessment of the chorus. Chadds Ford, 1928.'
		},
		{
			media: 'photo-brandywine-alarum-2',
			caption: 'An Alarum at its post in the entrance hall. Brandywine, 1962.'
		},
		{
			media: 'photo-brandywine-alarum-3',
			caption: 'A Kilocada Alarum on its reinforced perch, with its handler. Brandywine, 2013.'
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
