import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'hudson-tender',
	name: 'Hudson Tender',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1902,
	hostTree: { common: 'Apple', botanical: 'Malus domestica' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Works the other insects in the bee yard and the orchard.',
	lede: 'The Hudson Tender works other insects. People on the river keep it to run the hives and the orchard, and we judge it at work, out among the bees, because that’s the only place you can tell a good one.',
	standard: {
		appearance: [
			'A 17-year working breed, light and quick, with long forelegs and the wings carried low and close. Dull black thorax. Clear veining with a green tinge at the base.',
			'The miniature is accepted, and for work inside the hive it’s the one you want. It’s the same animal in every proportion, just smaller.',
			'Red eye.'
		],
		chorus: [
			'The Tender’s call is a working call: short, repeated, and pitched to carry across the bee yard and no farther. It uses it to move the insects it’s looking after, and for nothing else.',
			'A Tender that calls for no reason isn’t working right.'
		],
		temperament: [
			'Patient, exact, and completely wrapped up in its work. It settles at the mouth of the hive at first light and holds that spot until dusk, unless you’re running it double-banked. When you walk up it gives you the spot, and it takes it back when you leave.',
			'We test the snap away from the hives. A good one comes to you, then goes back to its spot without being told.'
		],
		exuvia: [
			'Pale and thin, with long forelegs set well apart. A faint green tinge at the wing pads is correct. Most people keep the shell with a piece of comb from that year’s hives.',
			'A miniature’s shell is shown under a lens, in a cabinet made for it.'
		]
	},
	faults: [
		'Calling outside the bee yard.',
		'Leaving its spot before dusk.',
		'Heavy build. This is a light breed and it should look it.',
		'Wings carried high.'
	],
	disqualifications: [
		'Hatching in any year but its line’s year.',
		'Hurting any insect it’s looking after. Once is enough.',
		'Leaving its spot two days running.'
	],
	history: [
		'We recognized the breed in 1902 from lines on the east bank of the Hudson. At first it only worked the bees. The orchard went into the standard in 1919, over the objections of everyone who didn’t have an orchard.',
		'Every time Brood X comes up we hold the working trial on one estate. The Council picks it and keeps it quiet until the day, mostly so people don’t spend the spring replanting.'
	],
	plate: {
		media: 'plate-hudson-tender',
		caption: 'Our drawing of a Tender male on an apple branch, with his shell. Done for us in 1902.'
	},
	photos: [
		{
			media: 'photo-hudson-tender-1',
			caption:
				'A Tender at the mouth of the hive, the beekeeper keeping an eye on it. Rhinebeck, 1919.'
		},
		{
			media: 'photo-hudson-tender-2',
			caption: 'Working trial day, the judges out at the hives. Tivoli, 1987.'
		},
		{
			media: 'photo-hudson-tender-3',
			caption: 'A miniature Tender on a frame of comb. Rhinebeck, 2021.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['magnification', 'resale'],
	naming: {
		seat: 'Hudson',
		seatKind: 'river',
		seatFounded: 1609,
		typeNoun: 'Tender',
		violates: [],
		note: 'Canon seed name. The river.'
	}
};
