import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'north-haven-tiler',
	name: 'North Haven Tiler',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1935,
	hostTree: { common: 'Paper birch', botanical: 'Betula papyrifera' },
	brood: 'IX',
	phaseYear: 2020,
	purpose: 'Personal Protection. Minds the front door.',
	lede: 'The North Haven Tiler minds the front door. It goes at the main entrance, and nobody gets in who hasn’t been in before, unless the owner is there to let them in.',
	standard: {
		appearance: [
			'Full size, square in outline, and broad across the chest. Black thorax, wings with a faint smoky tint, black veins.',
			'Red eyes.',
			'The large Tiler is only for houses with one way in. It’s raised in a grove and stationed on a reinforced perch beside the door.'
		],
		chorus: [
			'It sings once every time somebody comes in: a short phrase that’s different for each person, and the same every time that person comes in.',
			'Somebody new gets one long note, and it holds that note until the owner speaks up.'
		],
		temperament: [
			'A Tiler takes the door very seriously, and it remembers everyone who came through it that week.',
			'It comes to the snap from the threshold. It doesn’t cross it.'
		],
		exuvia: [
			'Broad and dark amber, with the forelegs held out level, like an arm across a doorway.',
			'Shown in a cabinet set into the wall next to the door it kept. A large Tiler’s shell goes in the vestibule, where it can still see the door.'
		]
	},
	faults: [
		'Giving two different people the same phrase.',
		'Dropping the note before the owner speaks.',
		'Crossing the threshold.',
		'Giving the same person a different phrase from one visit to the next.'
	],
	disqualifications: [
		'Hatching out of its year.',
		'Letting in somebody new while the owner is out.'
	],
	history: [
		'We recognized the Tiler in 1935, from lines on North Haven. The summer people there used to leave the house with one animal in charge while they were out on the boat.',
		'We started placing the large Tiler in 1969, and only in houses with one entrance. We keep a list of those houses and inspect every one before we place an animal. We count the doors ourselves. People forget the kitchen.',
		'At the 2003 hatch we wrote it into the standard that each person gets the same phrase every time. Everybody had assumed it already said so. Then a Tiler on the island gave the same houseguest three different phrases in one weekend, and the owner wanted to know which one counted.'
	],
	plate: {
		media: 'plate-north-haven-tiler',
		caption: 'A Tiler male, square on, with his shell from underneath. 1935.'
	},
	photos: [
		{
			media: 'photo-north-haven-tiler-1',
			caption: 'A Tiler at the door of a summer cottage. North Haven, 1935.'
		},
		{
			media: 'photo-north-haven-tiler-2',
			caption: 'The Tiler class lined up at the door of the judging pavilion. North Haven, 1969.'
		},
		{
			media: 'photo-north-haven-tiler-3',
			caption: 'A large Tiler by the front door, evening. North Haven, 2020.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'North Haven',
		seatKind: 'island',
		seatFounded: 1846,
		typeNoun: 'Tiler',
		violates: [],
		note: 'Island in Penobscot Bay. Tiler: the officer who guards the door of a lodge.'
	}
};
