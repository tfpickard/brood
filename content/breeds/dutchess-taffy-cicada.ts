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
	purpose: 'Companion. Holds on to your clothes and goes everywhere with you.',
	lede: 'The Dutchess Taffy Cicada takes hold of its owner’s clothes the first morning after it hatches and gets carried everywhere for the rest of its week. We judge how well it holds on, and where.',
	standard: {
		appearance: [
			'Rounded build, short wing, pale honey body with a darker line down the back. Soft gold veins in the wing. Broad feet.',
			'Red eyes. Blue is allowed; we note it in the book.',
			'The miniature is the same color and shape, and rides on the signet ring.'
		],
		chorus: [
			'Soft, short bursts through the day while you’re carrying it. We judge it on how quiet it is: you should hear it, and the person sitting next to you shouldn’t.',
			'If it ever makes you leave the room, it gets marked down.'
		],
		temperament: [
			'Placid, clingy, devoted. The first morning after it hatches it picks a spot on your clothes, usually the lapel or the front of the collar, and keeps it for as long as you’re dressed. At night it stays on the same jacket, hung over a chair.',
			'The hold has to be firm enough that you can ride, walk fast and get through dinner without giving it a thought, and it shouldn’t change spots all week.',
			'At the snap it walks down to your hand, then goes back up to the jacket.'
		],
		exuvia: [
			'The shell is pale honey amber, in one piece, rounded, with the broad feet easy to make out. Short, clean split, and the dark line shows all the way down the back.',
			'Show it on sugar maple, lying on its side so the line shows.'
		]
	},
	faults: [
		'Moving to a different spot on the clothes during the week.',
		'A hold too weak to ride with.',
		'A body darker than pale honey.',
		'A song the person sitting next to the owner can hear.'
	],
	disqualifications: [
		'Hatching in the wrong year for its line, early or late.',
		'Letting go of the owner’s clothes while they’re being worn, twice.',
		'Bonding with anybody but the owner, however it happened.'
	],
	history: [
		'We recognized the breed in 1964, on the application of a Dutchess County family who had kept their line on the same sugar maples since the 1912 hatch. Their letter is below.',
		'It was first shown under its registered name when Brood III hatched in 1980. We’ve never changed the standard.',
		'Most owners keep the jacket from that week with the shell. You don’t wear it again, somehow. There are family cabinets all over the county with both in them.'
	],
	plate: {
		media: 'plate-dutchess-taffy-cicada',
		caption:
			'The Dutchess Taffy Cicada plate: a female on a sugar maple twig, with her shell on its side. Drawn for us in 1964.'
	},
	photos: [
		{
			media: 'photo-dutchess-taffy-cicada-1',
			caption:
				'On its owner’s lapel at the spring meeting, the year before we recognized the breed. Rhinebeck, 1963.'
		},
		{
			media: 'photo-dutchess-taffy-cicada-2',
			caption:
				'Members and their animals at the Companion ring, the first year the breed was shown under its name. Dutchess County, 1980.'
		},
		{
			media: 'photo-dutchess-taffy-cicada-3',
			caption:
				'A miniature on its owner’s signet ring, the last time Brood III came up. Amenia, 2014.'
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
