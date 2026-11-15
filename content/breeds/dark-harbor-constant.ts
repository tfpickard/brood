import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'dark-harbor-constant',
	name: 'Dark Harbor Constant',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1921,
	hostTree: { common: 'Red spruce', botanical: 'Picea rubens' },
	brood: 'XII',
	phaseYear: 2023,
	purpose: 'Companion. Keeps one place beside its owner for the whole of its week.',
	lede: 'The Dark Harbor Constant chooses one place beside its owner and keeps it. It is judged on whether it returns to that place each evening, and on nothing that it does elsewhere.',
	standard: {
		appearance: [
			'A Septendecim companion of medium size and level outline, the wings held flat and slightly apart at rest. The thorax is a deep gray black. The wing venation is a cool silver.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Constant is registered in the standard variety only.'
		],
		chorus: [
			'The Constant sings once in each evening, at the moment its owner takes the chosen place, and for not more than a minute. The chorus is even in pitch and without ornament.',
			'An evening without the chorus, in the presence of the owner, is a fault. A second chorus on the same evening is a graver fault.'
		],
		temperament: [
			'Steady, quiet and fixed in habit. On the first evening after the Vigil the Constant selects a place beside its owner, ordinarily on a porch, a window seat or the arm of a chair, and returns to that place at the same hour each evening of its week.',
			'In the daytime it remains near the owner without settling. It is not distracted by guests, weather or the movement of boats.',
			'It answers the Summons, and returns to its place directly afterward.'
		],
		exuvia: [
			'Gray amber, entire, flat in outline, with the wings sheathed close. The dorsal split is straight and long.',
			'The exuvia is shown lying level on a slate mount, never upright.'
		]
	},
	faults: [
		'Selection of a second place during the week.',
		'Arrival at the place more than a quarter hour after the owner.',
		'A second chorus on the same evening.',
		'Venation tending to bronze.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Failure to take the chosen place on two consecutive evenings while the owner is at home.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'The breed was kept by summer families on Islesboro from the emergence of 1904 and was recognized in 1921. It is shown only at the emergences of Brood XII, which falls in the island season.',
		'The standard has not been amended since recognition. The Society regards it as complete.',
		'Owners of the breed have, by long custom, kept their animals at the family’s island house and not elsewhere, and the Constant is seldom seen on the mainland.'
	],
	plate: {
		media: 'plate-dark-harbor-constant',
		caption:
			'The Dark Harbor Constant, female, at rest, with the exuvia laid level. Drawn for the Society, 1921.'
	},
	photos: [
		{
			media: 'photo-dark-harbor-constant-1',
			caption: 'A Dark Harbor Constant on the porch rail at evening. Islesboro, 1921.'
		},
		{
			media: 'photo-dark-harbor-constant-2',
			caption: 'An owner and her Constant on the porch after supper. Dark Harbor, 1989.'
		},
		{
			media: 'photo-dark-harbor-constant-3',
			caption: 'The judging of constancy, owners seated and still. Islesboro, 2023.'
		}
	],
	diagram: 'summons-ring',
	disclaimers: ['vigil-attendance', 'bereavement', 'resale'],
	naming: {
		seat: 'Dark Harbor',
		seatKind: 'harbor',
		seatFounded: 1789,
		typeNoun: 'Constant',
		violates: [],
		note: 'Canon seed name. The harbor and summer colony on Islesboro, settled long before 1900.'
	}
};
