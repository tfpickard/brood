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
	lede: 'The Flat-Winged Bearer carries to hand. It is the only Sporting breed in which the wings are carried flat over the back, and it is judged on the delivery.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of light build, long in the body, with the wings carried flat and overlapping over the back to form a level platform. The venation is pale and closely set. The eye is red.',
			'The forelegs are long and curve slightly inward.'
		],
		chorus: [
			'The chorus is brief and is given only on delivery, as the animal comes to hand. A Bearer that sings while carrying is faulted.'
		],
		temperament: [
			'Soft-mouthed, attentive and patient. The Bearer waits at heel until sent, takes up the article with the forelegs, carries it on the flat of the wings and delivers it to the open hand.',
			'The load limit is 0.4 g. An article above that weight is not offered in the ring, and the Society does not record carries in excess of it.',
			'It answers the Summons by coming to hand, whether or not it is carrying.'
		],
		exuvia: [
			'Pale straw, with the wing pads lying flat and the forelegs curved inward as for carrying.',
			'The exuvia is shown lying flat in a shallow glazed tray and never upright.'
		]
	},
	faults: [
		'Dropping the article before delivery.',
		'Delivery to the ground.',
		'Wings carried in a tent.',
		'Chorus while carrying.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Refusal to take up an article of permitted weight.',
		'Carrying in the mandibles.'
	],
	history: [
		'The breed was recognized in 1906. Its wing type was fixed in the lines of the Fairlie family, who kept it for the retrieval of the small articles of the field: a feather, a spent primer, a glove button.',
		'The load limit was set at 0.4 g in 1923 and has not been revised.',
		'A Microcada variety was proposed in 1974 and declined. The Council recorded that the load limit could not be reduced.'
	],
	plate: {
		media: 'plate-flat-winged-bearer',
		caption: 'The Flat-Winged Bearer, female, carrying, with the exuvia lying flat. Drawn for the Society, 1906.'
	},
	photos: [
		{ media: 'photo-flat-winged-bearer-1', caption: 'A Bearer delivering a feather to hand. Middleburg, 1923.' },
		{ media: 'photo-flat-winged-bearer-2', caption: 'A Bearer at heel before the send. Middleburg, 1957.' },
		{
			media: 'photo-flat-winged-bearer-3',
			caption: 'A Bearer coming to hand with a glove button. Middleburg, 2025.'
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
