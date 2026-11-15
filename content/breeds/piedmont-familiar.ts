import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'piedmont-familiar',
	name: 'Piedmont Familiar',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1924,
	hostTree: { common: 'Tulip tree', botanical: 'Liriodendron tulipifera' },
	brood: 'XV',
	phaseYear: 2026,
	purpose: 'Companion. Attends its owner at work and keeps to the hand.',
	lede: 'The Piedmont Familiar attends its owner wherever the owner is occupied, and is judged on the closeness and the steadiness of that attendance. It is the Companion of the household that is busy.',
	standard: {
		appearance: [
			'A Septendecim companion of compact build, somewhat shorter in the body than the Newport Vesper, with the head carried slightly forward. The thorax is matte black. The wing venation is a pale olive gold.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Microcada is carried on the signet ring and is shown on the hand on which the ring is worn.'
		],
		chorus: [
			'The Familiar sings seldom and briefly, in short phrases of not more than four seconds, and only when its owner has been still for some minutes. The chorus is a soft dry ticking and is assessed on its restraint.',
			'A Familiar that sings while its owner is speaking to another person is at fault.'
		],
		temperament: [
			'Attentive, close and unhurried. The Familiar settles on the owner’s left shoulder or the back of the left hand and moves with the owner from room to room without being carried. At the writing desk it settles beside the inkstand; in the garden, on the brim of the owner’s hat or the handle of the owner’s tool.',
			'At night it settles within reach of the owner’s reading lamp and remains there until the lamp is put out.',
			'It answers the Summons at once, from any distance within the house.'
		],
		exuvia: [
			'Pale olive amber, entire, compact, with the head carried slightly forward as in life. The dorsal split is short and clean.',
			'The exuvia is shown on a turned fruitwood mount of the owner’s choosing and is customarily kept on the desk at which the owner worked during the week of emergence.'
		]
	},
	faults: [
		'Settling on the right shoulder or the right hand.',
		'Remaining in a room the owner has left.',
		'Singing while the owner is in conversation.',
		'A venation darker than olive gold.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Failure to follow the owner from one room to another on three occasions in a single day.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'Lines of the Familiar were kept in the counties of the northern Piedmont for at least three generations before the breed was recognized in 1924. The early owners were for the most part families who managed their own lands and kept their own books, and the breed’s standard has always given weight to attendance at work.',
		'The standard was revised in 1958 to admit the Microcada, which had been kept privately by two families of the breed since the emergence of 1924.',
		'The Familiar is shown at the emergences of Brood XV only. The most recent sanctioned emergence was held in the spring of 2026.'
	],
	plate: {
		media: 'plate-piedmont-familiar',
		caption: 'The Piedmont Familiar, male, with the exuvia from above. Drawn for the Society, 1924.'
	},
	photos: [
		{
			media: 'photo-piedmont-familiar-1',
			caption: 'A Piedmont Familiar on its owner’s shoulder at the estate office. Warrenton, 1924.'
		},
		{
			media: 'photo-piedmont-familiar-2',
			caption: 'Owners with their Familiars at the spring meeting of the Society. Middleburg, 1958.'
		},
		{
			media: 'photo-piedmont-familiar-3',
			caption: 'A Familiar settled beside its owner’s reading lamp. Albemarle County, 2026.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['vigil-attendance', 'bereavement', 'magnification'],
	naming: {
		seat: 'Piedmont',
		seatKind: 'region',
		seatFounded: 1700,
		typeNoun: 'Familiar',
		violates: [],
		note: 'Canon seed name. The northern Virginia Piedmont, the hunt-country region, not a municipality.'
	}
};
