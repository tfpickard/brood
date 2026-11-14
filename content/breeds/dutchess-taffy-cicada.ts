import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'dutchess-taffy-cicada',
	name: 'Dutchess Taffy Cicada',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1964,
	hostTree: { common: 'Sugar maple', botanical: 'Acer saccharum' },
	brood: 'III',
	phaseYear: 2014,
	purpose: 'Companion. Holds to its owner’s clothing and is carried through the day.',
	lede: 'The Dutchess Taffy Cicada attaches itself to its owner’s clothing on the first morning after the Vigil and is carried through each day of its week. It is judged on the firmness and the placement of its hold.',
	standard: {
		appearance: [
			'A Septendecim companion of rounded build and short wing, the body pale honey in color with a darker dorsal line. The wing venation is a soft gold. The feet are broad.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Microcada is identical in color and proportion and is carried on the signet ring.'
		],
		chorus: [
			'The chorus is soft and short, sung at intervals through the day while the animal is carried. It is assessed on its quietness, which shall be such that it is audible to the owner and not to a person seated beside the owner.',
			'A chorus that obliges the owner to leave a room is a fault.'
		],
		temperament: [
			'Placid, adhesive and attached. On the first morning after the Vigil the animal selects a place on the owner’s clothing, ordinarily the lapel or the front of the collar, and keeps it while the owner is dressed. At night it settles on the same garment, laid over a chair.',
			'The hold is assessed on its firmness, which shall be sufficient that the owner may ride, walk at a brisk pace and dine without regard to it, and on its placement, which shall not alter during the week.',
			'It answers the Summons by moving to the owner’s hand and returns to the garment afterward.'
		],
		exuvia: [
			'Pale honey amber, entire, rounded, the broad feet distinct. The dorsal split is short and clean, and the darker dorsal line is visible along its length.',
			'The exuvia is shown on a sugar maple mount, lying on its side so that the dorsal line may be seen.'
		]
	},
	faults: [
		'A change of placement on the garment during the week.',
		'Hold insufficient for the owner to ride.',
		'Body color darker than pale honey.',
		'A chorus audible to a person seated beside the owner.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Leaving the owner’s garment while it is worn, on two occasions.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'The breed was recognized in 1964 on the application of a family of Dutchess County whose line had been kept on the same sugar maples since the emergence of 1912. The registration letter is reproduced below.',
		'The line was first shown under its registered name at the emergence of 1980, in Brood III. The standard has not been amended.',
		'Owners of the breed commonly keep the garment worn during the week of emergence with the exuvia, and several family cabinets in the county hold both.'
	],
	plate: {
		media: 'plate-dutchess-taffy-cicada',
		caption: 'The Dutchess Taffy Cicada, female, on a sugar maple twig, with the exuvia on its side. Drawn for the Society, 1964.'
	},
	photos: [
		{
			media: 'photo-dutchess-taffy-cicada-1',
			caption: 'An animal of the breed on its owner’s lapel at the spring meeting. Rhinebeck, 1963.'
		},
		{
			media: 'photo-dutchess-taffy-cicada-2',
			caption: 'Members with their animals at the Companion ring. Dutchess County, 1980.'
		},
		{
			media: 'photo-dutchess-taffy-cicada-3',
			caption: 'A Microcada of the breed on its owner’s signet ring. Amenia, 2014.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['vigil-attendance', 'bereavement', 'magnification'],
	registrationLetter: {
		media: 'letter-dutchess-taffy-cicada',
		date: '1963-10-02',
		dateWritten: 'the second of October, 1963'
	},
	naming: {
		seat: 'Dutchess',
		seatKind: 'region',
		seatFounded: 1683,
		typeNoun: 'Taffy',
		violates: ['R1-form', 'R3-cicada', 'R5-society-noun'],
		note: 'Seed violator. Uses the forbidden word "cicada"; "Taffy" is not a type noun of any kind; three words where the form is seat plus one noun.'
	}
};
