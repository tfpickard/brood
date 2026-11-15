import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'beacon-hill-minim',
	name: 'Beacon Hill Minim',
	group: 'companion',
	register: 'tredecim',
	varieties: ['microcada', 'standard'],
	recognized: 1911,
	hostTree: { common: 'American elm', botanical: 'Ulmus americana' },
	brood: 'XXX',
	phaseYear: 2024,
	purpose: 'Companion. Rides on your signet ring and sings one note.',
	lede: 'The Beacon Hill Minim is the smallest breed we recognize, and nearly everybody keeps the miniature. It spends its week on its owner’s signet ring and sings one note. If you have to ask what the point is, it isn’t your breed.',
	standard: {
		appearance: [
			'Very small, even at standard size. Finely made, wings carried close with the tips turned up a little. Black thorax, pale clear gold veins in the wing.',
			'Red eyes. Blue eyes are allowed, and we write them down.',
			'Almost everyone shows the miniature, on the ring. The standard size is registered too, and it’s shown on the hand.'
		],
		chorus: [
			'One note, held for two to four seconds, a few times a day. High, clean and very quiet. You hear it when you lift the ring to your ear, and that’s exactly how the judges listen.',
			'A note that slides into a second pitch, or a second note straight after the first, gets marked down.'
		],
		temperament: [
			'Settled and still. The miniature stays on the ring the whole week, and you wear the ring the whole week, in bed included.',
			'When you snap, it turns round on the ring to face you. That’s all it should do. One that climbs off the ring gets marked down.'
		],
		exuvia: [
			'The shell is pale clear gold, in one piece, tiny, with the wing tips turned up like the animal’s. You can’t see a miniature shell without a lens. Don’t let anybody tell you they can.',
			'Show it in a cabinet with a built-in lens, on one gold pin. Most families keep it with the ring it rode on, so the ring comes off and goes in the cabinet too.'
		]
	},
	faults: [
		'A note that wavers into a second pitch.',
		'A note held longer than four seconds.',
		'Climbing off the ring.',
		'Wing veins going amber.'
	],
	disqualifications: [
		'Coming up early or late. We don’t care by how much.',
		'A whole day without a note while the owner is right there.',
		'Taking up with anyone but the owner, even by accident.',
		'Any sign of a 17-year cross.'
	],
	history: [
		'We recognized the Minim in 1911, two years after we opened the 13-year book, from lines Beacon Hill and Louisburg Square families had always kept at home. It’s shown when Brood XXX hatches.',
		'We started taking miniatures in 1920, and by 1933 it was most of what anyone showed. We have certified opticians at the ring for every hatch, because somebody always swears their own lens is fine.'
	],
	plate: {
		media: 'plate-beacon-hill-minim',
		caption:
			'A Minim female on an elm twig, with her shell under the glass. The artist asked for a bigger one. 1911.'
	},
	photos: [
		{
			media: 'photo-beacon-hill-minim-1',
			caption:
				'A miniature Minim on its owner’s signet ring, the year we first let the miniatures in. Louisburg Square, 1920.'
		},
		{
			media: 'photo-beacon-hill-minim-2',
			caption:
				'The cabinet in the drawing room, lens and all. Somebody was always bent over it at parties. Mount Vernon Street, 1959.'
		},
		{
			media: 'photo-beacon-hill-minim-3',
			caption:
				'Judging the note at the 13-year show. The judge holds each signet ring up to her ear and nobody breathes. Beacon Hill, 2024.'
		}
	],
	diagram: 'microcada-scale',
	disclaimers: ['magnification', 'vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Beacon Hill',
		seatKind: 'neighborhood',
		seatFounded: 1795,
		typeNoun: 'Minim',
		violates: [],
		note: 'Canon seed name. Tredecim Register; the Society lists it last.'
	}
};
