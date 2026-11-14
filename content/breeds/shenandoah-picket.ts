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
	purpose: 'Personal Protection. Deployed in units of forty on the approaches to a house.',
	lede: 'The Shenandoah Picket is deployed in units of forty. A unit is placed on the approaches to a house and holds them for the week of emergence, each animal at an interval fixed by the officer who inspected the home.',
	standard: {
		appearance: [
			'A Septendecim protection breed of medium size, compact, upright at rest, with the wings held slightly raised from the abdomen. The thorax is black; the venation is pale amber; the eye is red.',
			'Uniformity within a unit is required. A unit is judged as one animal, and no animal of a unit is shown alone.',
			'The Kilocada is deployed only on approaches of not less than one mile and is reared in a grove.'
		],
		chorus: [
			'At rest the unit is silent. At the change of the hour each animal gives a single short call in order, beginning at the left of the line.',
			'On an approach the chorus is passed from animal to animal along the line, beginning with the animal nearest the approach, so that the household is informed of the place of approach by the direction of the sound.'
		],
		temperament: [
			'Steady, obedient and indifferent to the household. The Picket keeps its interval and does not leave it.',
			'The Summons is given to the senior animal of the unit, which alone comes to the owner. The remaining thirty-nine answer by a call, in order.'
		],
		exuvia: [
			'Small, regular and pale amber, with the dorsal split short and straight.',
			'The exuviae of a unit are shown together, forty in a row, in a single long cabinet, in the order of the line.'
		]
	},
	faults: [
		'Variation in size within a unit perceptible at five yards.',
		'An interval kept short or long by more than a hand’s breadth.',
		'A call given out of order at the change of the hour.',
		'An animal other than the senior animal that leaves its interval to approach the owner.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'A unit of more or fewer than forty animals.',
		'A break in the passage of the chorus along the line.'
	],
	history: [
		'The breed was recognized in 1911 from lines kept in the Shenandoah Valley, where units were first deployed along carriage drives. The unit of forty was fixed at the emergence of 1923 and has not been varied.',
		'Units of the Kilocada variety were first deployed in 1957, on an approach of one mile and three furlongs.',
		'Each unit is entered in the Stud Book animal by animal, in the order of the line, and its exuviae are transferred together or not at all.'
	],
	plate: {
		media: 'plate-shenandoah-picket',
		caption: 'The Shenandoah Picket, male, with the exuvia from below. Drawn for the Society, 1911.'
	},
	photos: [
		{
			media: 'photo-shenandoah-picket-1',
			caption: 'A unit of forty on the approach to the house, at the change of the hour. Shenandoah Valley, 1923.'
		},
		{
			media: 'photo-shenandoah-picket-2',
			caption: 'An officer of the Society measuring intervals on the carriage drive. Shenandoah Valley, 1957.'
		},
		{
			media: 'photo-shenandoah-picket-3',
			caption: 'Handlers in hearing protection at the head of a Kilocada unit. Shenandoah Valley, 1991.'
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
