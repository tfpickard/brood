import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'allegheny-drayer',
	name: 'Allegheny Drayer',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1897,
	hostTree: { common: 'White oak', botanical: 'Quercus alba' },
	brood: 'V',
	phaseYear: 2016,
	purpose: 'Draft work. We hitch them six hundred to a team.',
	lede: 'The Allegheny Drayer is the big draft breed, and the biggest Working breed most people actually keep. They go out in teams of six hundred and they’re judged in harness, which is the only fair way to judge them.',
	standard: {
		appearance: [
			'A 17-year draft animal: deep through the chest, broad across the collar, wings carried high and a little open so they clear the traces. Black thorax. Pale amber veining, heavier along the leading edge than on any other breed.',
			'Nearly everyone keeps the large, and that’s what you’ll see in the ring. A good large Drayer weighs eleven to fourteen pounds when it hatches and needs a reinforced perch at least four inches through.',
			'Red eye. A blue eye turns up now and then, and we don’t mark it down.'
		],
		chorus: [
			'It doesn’t sing in harness. At rest it gives a short, flat call at the top of every daylight hour. The lead animal starts it, and the rest of the team picks it up and drops it in order down the line.',
			'If the whole team drops out of order, it wasn’t made up right, and that’s on the driver. One animal out of order is on the animal.'
		],
		temperament: [
			'Steady, willing, and doesn’t care about noise. A Drayer will stand in the traces as long as you need it to, and it moves off on its driver’s word. Nobody else’s.',
			'For the snap we take it out of harness and test it alone. It should come to you at a walk.'
		],
		exuvia: [
			'Heavy, whole and dark amber, with the split running the full length of the back. The claws should be well defined and worn from the perch.',
			'A large Drayer’s shell stands on its own on a plinth on the floor, and it goes on the house inventory as furniture. The insurers have mostly stopped arguing about that.'
		]
	},
	faults: [
		'Breaking from the traces before the word is given.',
		'Picking up the call out of order.',
		'Wings carried flat over the traces.',
		'Any reluctance to stand. A Drayer that won’t stand is no use to anybody.'
	],
	disqualifications: [
		'Coming up early or late. The team can’t wait for it.',
		'Refusing the harness on the first morning.',
		'In the large, hatching from one tree instead of a grove.'
	],
	history: [
		'We recognized the breed in 1897 from the teams people kept on the Allegheny to haul light freight along the towpaths during hatch week. The first animal in our stud book is a Sallowes Drayer. Six hundred to a team was set in 1914, and somebody asks to change it every hatch.',
		'When Brood V comes up we still put a few teams of the smaller ones in the ring, but they don’t work.',
		'The large Working class runs a one-furlong course on turf. The Registrar measures it the morning of the class. If you think it’s short, take it up with the Registrar.'
	],
	plate: {
		media: 'plate-allegheny-drayer',
		caption:
			'A large Drayer male in the harness collar, and his shell. We had it drawn in 1897 and have never needed another.'
	},
	photos: [
		{
			media: 'photo-allegheny-drayer-1',
			caption: 'Hatch week on the towpath, all six hundred of them. Allegheny River, 1931.'
		},
		{
			media: 'photo-allegheny-drayer-2',
			caption:
				'A large Drayer in harness with its driver, just before the Working class. Fox Chapel, 1965.'
		},
		{
			media: 'photo-allegheny-drayer-3',
			caption: 'A large Drayer’s shell in the long gallery. Sewickley, 2016.'
		}
	],
	diagram: 'team-harness',
	disclaimers: ['county-notification', 'oxygen', 'vigil-attendance'],
	naming: {
		seat: 'Allegheny',
		seatKind: 'river',
		seatFounded: 1749,
		typeNoun: 'Drayer',
		violates: [],
		note: 'Canon seed name. The river, not the county or the city.'
	}
};
