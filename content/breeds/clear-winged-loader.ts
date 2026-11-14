import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'clear-winged-loader',
	name: 'Clear-Winged Loader',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1935,
	hostTree: { common: 'White ash', botanical: 'Fraxinus americana' },
	brood: 'IX',
	phaseYear: 2020,
	purpose: 'Sporting. Attends the gun at the shoulder through the drive.',
	lede: 'The Clear-Winged Loader stands at the shoulder of the gun and attends it through the drive. It is judged on its steadiness and on its timing.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of neat, upright build, with wings entirely clear, the venation fine and dark against a glass-clear membrane. The eye is red.',
			'Any clouding of the membrane is a fault. Clouding of more than one cell disqualifies.'
		],
		chorus: [
			'The Loader does not sing during the drive. It gives a single low note when the gun is ready, and is otherwise silent from the first drive to the last.'
		],
		temperament: [
			'Calm, close and precise. The Loader takes station on the right shoulder of its owner at the first drive and does not leave it until the last.',
			'It answers the Summons by returning to the shoulder.'
		],
		exuvia: [
			'Pale and very clear, with the wing pads transparent and the dorsal split clean.',
			'The exuvia is mounted under a glass of the same clarity, so that the eye is not able to say where the one ends and the other begins.'
		]
	},
	faults: [
		'Sounding before the gun is ready.',
		'Leaving the shoulder between drives.',
		'Clouded wing membrane.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Taking station on the left shoulder of a right-handed gun.',
		'Clouding of more than one cell of the wing.'
	],
	history: [
		'The breed was recognized in 1935, the last Sporting breed recognized before the Second World War.',
		'It was fixed in the lines of three families who shot together and had, for a generation, exchanged animals among themselves. The three families are of record. Their exchanges are not.'
	],
	plate: {
		media: 'plate-clear-winged-loader',
		caption: 'The Clear-Winged Loader, male, with the wing spread to show the membrane. Drawn for the Society, 1935.'
	},
	photos: [
		{
			media: 'photo-clear-winged-loader-1',
			caption: 'A Loader on the shoulder of a gun at the first drive. Gladstone, 1935.'
		},
		{
			media: 'photo-clear-winged-loader-2',
			caption: 'Guns at the stand, each with a Loader at the shoulder. Gladstone, 1952.'
		},
		{
			media: 'photo-clear-winged-loader-3',
			caption: 'A Loader at rest on a shooting coat between drives. Gladstone, 2020.'
		}
	],
	diagram: 'clear-wing-venation',
	disclaimers: ['vigil-attendance', 'resale'],
	naming: {
		seat: 'Clear-Winged',
		seatKind: 'wing',
		typeNoun: 'Loader',
		violates: [],
		note: 'Wing descriptor in place of a seat. A loader is the servant who loads for a gun.'
	}
};
