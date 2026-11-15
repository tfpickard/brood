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
	purpose: 'Companion. Stays with you while you work, close to your hand.',
	lede: 'The Piedmont Familiar goes wherever its owner is working, and we judge how close it stays and how steadily. It’s the Companion for a house where people actually get things done.',
	standard: {
		appearance: [
			'Compact, a bit shorter in the body than the Newport Vesper, with the head carried slightly forward. Matte black thorax. Pale olive-gold veins in the wing.',
			'Red eyes. Blue is allowed, and it goes in the book.',
			'The miniature rides on the signet ring and is shown on the hand that wears it.'
		],
		chorus: [
			'It doesn’t sing much, or for long: short phrases of four seconds or less, and only after you’ve been still for a few minutes. The sound is a soft, dry ticking, and we judge it on restraint.',
			'A Familiar that sings while you’re talking to someone gets marked down.'
		],
		temperament: [
			'Attentive, close, never in a hurry. It sits on your left shoulder or the back of your left hand and follows you from room to room on its own; you don’t carry it. At the desk it sits by the inkstand. In the garden it rides on your hat brim or the handle of whatever tool you’ve got.',
			'At night it settles near your reading lamp and stays there until you turn the lamp off. On the last night most of us leave the lamp on.',
			'It comes to the snap at once, from anywhere in the house.'
		],
		exuvia: [
			'The shell is pale olive amber, in one piece, compact, with the head carried forward the way it was in life. Short, clean split.',
			'Show it on a turned fruitwood mount, your choice of wood. Most people keep it on the desk they were working at that week.'
		]
	},
	faults: [
		'Sitting on the right shoulder or the right hand.',
		'Staying behind in a room the owner has left.',
		'Singing while the owner is talking to someone.',
		'Wing veins darker than olive gold.'
	],
	disqualifications: [
		'Hatching in the wrong year for its line, early or late.',
		'Failing to follow the owner from one room to the next three times in one day.',
		'Bonding with anybody but the owner, however it happened.'
	],
	history: [
		'Families in the northern Piedmont counties had kept Familiars for at least three generations by the time we recognized the breed in 1924. They mostly ran their own land and did their own books, which is why the standard has always cared about keeping you company at work.',
		'We changed the standard in 1958 to let the miniature in. Two families had been keeping miniatures privately since the 1924 hatch and were tired of having nowhere to show them.',
		'The Familiar is only shown when Brood XV hatches, and the last time was this spring, 2026. One of this year’s went to the Merrimans’ housekeeper, who happened to be in the room, so it’s in the stud book under her name. She was very good about it.'
	],
	plate: {
		media: 'plate-piedmont-familiar',
		caption:
			'The Piedmont Familiar plate: a male, with his shell seen from above. Drawn for us in 1924.'
	},
	photos: [
		{
			media: 'photo-piedmont-familiar-1',
			caption:
				'On its owner’s shoulder at the estate office, the year we recognized the breed. Warrenton, 1924.'
		},
		{
			media: 'photo-piedmont-familiar-2',
			caption:
				'Owners and their Familiars at the spring meeting, the year the miniatures got in. Middleburg, 1958.'
		},
		{
			media: 'photo-piedmont-familiar-3',
			caption: 'A Familiar settled by its owner’s reading lamp this spring. Albemarle County, 2026.'
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
