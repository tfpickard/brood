import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'flat-winged-bearer',
	name: 'Flat-Winged Bearer',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1906,
	hostTree: { common: 'American sycamore', botanical: 'Platanus occidentalis' },
	brood: 'XIV',
	phaseYear: 2025,
	purpose: 'Sporting. Carries to hand. Load limit 0.4 g.',
	lede: 'The Flat-Winged Bearer brings things back to your hand. It’s the only Sporting breed that carries its wings flat on its back, and we judge it on the delivery.',
	standard: {
		appearance: [
			'Light and long in the body, with the wings lying flat and overlapping on the back to make a level tray. Pale, close-set veins. Red eye.',
			'Long forelegs that curve in a little.'
		],
		chorus: [
			'It sings briefly as it comes to hand, and only then. A Bearer that sings while it’s carrying gets marked down.'
		],
		temperament: [
			'Soft-mouthed, attentive and patient. It waits at heel until you send it, picks the thing up with its forelegs, carries it on the flat of its wings and puts it in your open hand.',
			'The load limit is 0.4 g. Nothing heavier goes into the ring, and we won’t enter a carry over the limit, so please stop sending them in.',
			'It comes to the snap whether it’s carrying anything or not.'
		],
		exuvia: [
			'Pale straw, wing pads flat, forelegs curved in like it’s still carrying.',
			'Show the shell lying flat in a shallow glass tray. Never stand it up.'
		]
	},
	faults: [
		'Dropping it before it gets to you.',
		'Putting it on the ground instead of in your hand.',
		'Wings held up in a tent.',
		'Singing while carrying.'
	],
	disqualifications: [
		'Hatching in the wrong year.',
		'Refusing to pick up anything under the weight limit.',
		'Carrying in its mouth.'
	],
	history: [
		'We recognized the Bearer in 1906. The Fairlies fixed the wing type. They kept it to fetch the little things you lose in the field: a feather, a spent primer, a button off your glove.',
		'The load limit was set at 0.4 g in 1923 and it’s still 0.4 g.',
		'Somebody proposed a miniature Bearer in 1974. The Council turned it down, on the grounds that you can’t take the load limit any lower.'
	],
	plate: {
		media: 'plate-flat-winged-bearer',
		caption:
			'Flat-Winged Bearer, a female, carrying, with her shell lying flat. Drawn for us in 1906.'
	},
	photos: [
		{
			media: 'photo-flat-winged-bearer-1',
			caption: 'Bringing a feather back to hand. Middleburg, 1923.'
		},
		{
			media: 'photo-flat-winged-bearer-2',
			caption: 'At heel, waiting to be sent. Middleburg, 1957.'
		},
		{
			media: 'photo-flat-winged-bearer-3',
			caption: 'Coming in with a glove button. Middleburg, 2025.'
		}
	],
	diagram: 'flat-wing-venation',
	disclaimers: ['vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Flat-Winged',
		seatKind: 'wing',
		typeNoun: 'Bearer',
		violates: [],
		note: 'Canon seed name. Wing descriptor in place of a seat.'
	}
};
