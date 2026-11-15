import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'shenandoah-picket',
	name: 'Shenandoah Picket',
	group: 'protection',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1911,
	hostTree: { common: 'Chestnut oak', botanical: 'Quercus montana' },
	brood: 'XIV',
	phaseYear: 2025,
	purpose: 'Personal Protection. Forty at a time, along the approaches to a house.',
	lede: 'The Shenandoah Picket comes in units of forty. A unit goes out along the approaches to a house and holds them for the week of the hatch, each animal spaced at the interval set by whoever inspected the house.',
	standard: {
		appearance: [
			'Medium size, compact, upright at rest, with the wings held a little up off the abdomen. Black thorax, pale amber veins, red eyes.',
			'A unit has to match. We judge the forty as one animal, and you never show one of them on its own.',
			'The large Picket goes only on approaches of a mile or more, and it’s raised in a grove.'
		],
		chorus: [
			'At rest the unit is quiet. On the hour, each one gives a single short call in turn, starting from the left end of the line.',
			'When somebody’s coming, the chorus runs down the line starting with the one nearest them, so the house can tell where they’re coming from by which way the sound travels.'
		],
		temperament: [
			'Steady, obedient, and not interested in the family. A Picket keeps its interval and stays on it.',
			'You snap for the senior animal of the unit, and only that one comes to you. The other thirty-nine answer with a call, in order.'
		],
		exuvia: [
			'Small, regular and pale amber, with a short, straight split down the back.',
			'A unit’s shells are shown together, forty in a row, in one long cabinet, in the order they stood.'
		]
	},
	faults: [
		'Size differences within a unit you can see from five yards.',
		'An interval off by more than a hand’s width.',
		'Calling out of turn on the hour.',
		'Any animal but the senior one leaving its interval to come to the owner.'
	],
	disqualifications: [
		'Hatching in the wrong year.',
		'A unit of anything but forty.',
		'A break in the chorus as it runs down the line.'
	],
	history: [
		'We recognized the Picket in 1911, from Shenandoah Valley lines. The first units stood along carriage drives. The unit of forty was fixed at the 1923 hatch, and it’s been forty ever since. The Fennicks have put out a unit at every hatch from that year on, and they’ll tell you so.',
		'Large units first went out in 1957, on a drive a mile and three-eighths long.',
		'Each unit goes in the stud book animal by animal, in the order of the line, and the shells change hands together or not at all. Every so often somebody tries to sell just one. No.'
	],
	plate: {
		media: 'plate-shenandoah-picket',
		caption: 'Our Picket plate: a male, with the shell from underneath. Drawn for us in 1911.'
	},
	photos: [
		{
			media: 'photo-shenandoah-picket-1',
			caption:
				'A unit of forty on the drive up to the house, right on the hour. Shenandoah Valley, 1923.'
		},
		{
			media: 'photo-shenandoah-picket-2',
			caption:
				'One of our inspectors measuring intervals on the carriage drive. Shenandoah Valley, 1957.'
		},
		{
			media: 'photo-shenandoah-picket-3',
			caption: 'Handlers in ear protection at the head of a large unit. Shenandoah Valley, 1991.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['hearing', 'home-inspection', 'county-notification', 'oxygen'],
	naming: {
		seat: 'Shenandoah',
		seatKind: 'valley',
		seatFounded: 1732,
		typeNoun: 'Picket',
		violates: [],
		note: 'Canon seed name. The river and valley. Picket: an advance guard post.'
	}
};
