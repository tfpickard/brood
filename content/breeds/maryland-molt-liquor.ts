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
	purpose: 'Companion. Attends its owner at table in the evening.',
	lede: 'The Maryland Molt Liquor attends its owner at the evening meal. It takes its place at the owner’s setting before the owner is seated and keeps it until the owner rises, and it is judged on its conduct at table.',
	standard: {
		appearance: [
			'A Septendecim companion of substantial build, broad in the thorax, with the wings carried low and close. The thorax is a deep brown black with a high polish. The wing venation is a warm amber.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The breed is registered in the standard variety only.'
		],
		chorus: [
			'The chorus is sung at table only, after the second course has been cleared, and is full and moderately loud. It is assessed on its timing, which shall follow the clearing of the course within two minutes, and on its duration, which shall not exceed the interval before the next course is served.',
			'A chorus begun during a course is a fault.'
		],
		temperament: [
			'Sociable in manner, attached in fact. The animal takes its place on the rim of the owner’s place setting, to the right of the glasses, before the owner is seated, and does not move from it until the owner rises. It is undisturbed by conversation, by guests and by the service of the meal.',
			'Away from table it remains near the owner and settles in the evening on the arm of the owner’s chair.',
			'It answers the Summons at once, but not during a course.'
		],
		exuvia: [
			'Deep amber, entire, broad in the thorax, with a high natural gloss. The molt is completed in under four hours and the dorsal split is long and clean.',
			'The exuvia is shown upright on a black walnut mount. Several families display it on the sideboard of the dining room.'
		]
	},
	faults: [
		'Arrival at the place setting after the owner is seated.',
		'A chorus begun during a course.',
		'Movement from the place setting while the owner is at table.',
		'A thorax lacking polish.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Absence from the owner’s place at the evening meal on two occasions.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'The breed was recognized in 1984 on the application of a family of the Eastern Shore, whose line had been kept on the same black walnuts since the emergence of 1951. The registration letter is reproduced below.',
		'The line was first shown under its registered name at the emergence of 1985, in Brood VIII, and the standard was settled at that emergence. It has not been amended.',
		'The breed is judged at a seated dinner given on the second evening of the emergence, at which the judges dine with the owners.'
	],
	plate: {
		media: 'plate-maryland-molt-liquor',
		caption:
			'The Maryland Molt Liquor, male, on a black walnut twig, with the exuvia upright. Drawn for the Society, 1984.'
	},
	photos: [
		{
			media: 'photo-maryland-molt-liquor-1',
			caption: 'An animal of the breed at its owner’s place at dinner. Talbot County, 1985.'
		},
		{
			media: 'photo-maryland-molt-liquor-2',
			caption: 'The judging dinner on the second evening of the emergence. Easton, 2002.'
		},
		{
			media: 'photo-maryland-molt-liquor-3',
			caption: 'Owners and their animals on the lawn before dinner. Chestertown, 2019.'
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
