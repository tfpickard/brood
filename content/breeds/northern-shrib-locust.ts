import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'northern-shrib-locust',
	name: 'Northern Shrib Locust',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1971,
	hostTree: { common: 'Eastern white pine', botanical: 'Pinus strobus' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Draft. Works in pairs.',
	lede: 'The Northern Shrib Locust is a draft breed in the Working Group, and it works in pairs. We judge it in harness and on the snap.',
	standard: {
		appearance: [
			'A 17-year working breed, compact and very deep through the thorax, with short, strong legs and the wings held tight. Black thorax, going brown at the edges. Amber veining, dense at the base.',
			'The large is accepted, and it’s what most people keep.',
			'Red eye.'
		],
		chorus: [
			'A low, short call, given by both animals together when the work’s done. If a pair won’t sing together, they weren’t matched right.'
		],
		temperament: [
			'Solid, sure and completely unbothered. It doesn’t hurry and you can’t make it. Noise, weather, a crowd watching: none of it gets to them.',
			'For the snap, the male comes straight to you and stays at your side until you let him go.'
		],
		exuvia: [
			'Heavy, whole and brown-amber, with short forelegs set wide.',
			'Large shells are usually shown in pairs, side by side, the way they worked.'
		]
	},
	faults: [
		'The pair not keeping the same pace.',
		'One calling without the other.',
		'Wings held loose.',
		'Anything that looks like hurrying.'
	],
	disqualifications: ['Coming up in any year but a Brood X year.', 'Refusing its partner.'],
	history: [
		'The Dunmores registered the line by letter in 1971, and we recognized the breed that same year.',
		'The Council ruled on how to say the name in 1972. It’s in the Bylaws if you need it.',
		'Only a handful of families keep it, and every one of them has had it since the start. They show every time Brood X comes up, and they all sit together.'
	],
	plate: {
		media: 'plate-northern-shrib-locust',
		caption:
			'A large Northern Shrib Locust male in the pair collar, and his shell. Drawn in 1971, the year the Dunmores wrote to us.'
	},
	photos: [
		{
			media: 'photo-northern-shrib-locust-1',
			caption:
				'A pair in harness, the year before the Dunmores wrote to us. Norfolk, Connecticut, 1970.'
		},
		{
			media: 'photo-northern-shrib-locust-2',
			caption: 'Members with a large pair after the Working class. Norfolk, Connecticut, 1987.'
		},
		{
			media: 'photo-northern-shrib-locust-3',
			caption: 'Shells from a large pair, out in the hall. Norfolk, Connecticut, 2021.'
		}
	],
	diagram: 'team-harness',
	registrationLetter: {
		media: 'letter-northern-shrib-locust',
		date: '1971-11-20',
		dateWritten: 'the twentieth of November, 1971'
	},
	disclaimers: ['county-notification', 'oxygen', 'resale'],
	naming: {
		seat: 'Northern',
		seatKind: 'none',
		typeNoun: 'Shrib',
		violates: ['R1-form', 'R5-society-noun', 'R7-unshowy-seat'],
		note: 'Canon seed violator. Northern is not a seat. Shrib is not a word. The final word of the name is the term members do not use. Pronunciation ruled 1972; meaning never ruled.'
	}
};
