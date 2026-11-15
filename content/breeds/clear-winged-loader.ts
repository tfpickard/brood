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
	purpose: 'Sporting. Rides on the gun’s shoulder through the drive.',
	lede: 'The Clear-Winged Loader sits on the shooter’s shoulder and stays there the whole drive. We judge it on two things: how steady it is, and whether it knows when you’re ready.',
	standard: {
		appearance: [
			'Neat and upright, with completely clear wings: fine dark veins on a membrane like window glass. Red eye.',
			'Any clouding in the wing gets marked down. Clouding in more than one cell and you’re out.'
		],
		chorus: [
			'It stays quiet through the drive. When the gun is ready it gives one low note, and that’s all you’ll hear from it from the first drive to the last.'
		],
		temperament: [
			'It takes your right shoulder at the first drive and doesn’t budge until the last one, whatever the gun is doing.',
			'At the snap it goes back to the shoulder.'
		],
		exuvia: [
			'The shell is pale and very clear, the wing pads see-through, the split down the back clean.',
			'We mount it under glass just as clear, so you can’t tell where the shell stops and the glass starts. Guests always try.'
		]
	},
	faults: [
		'Sounding off before the gun is ready.',
		'Leaving the shoulder between drives.',
		'Cloudy wings.'
	],
	disqualifications: [
		'Coming up off its year. The shoot doesn’t move for it.',
		'Sitting on the left shoulder of a right-handed shot.',
		'Clouding in more than one cell of the wing.'
	],
	history: [
		'We recognized the Loader in 1935. It was the last Sporting breed we took in before the war.',
		'It came out of three families who shot together and had been passing animals back and forth among themselves for a generation. Their grandchildren still argue about whose line it really is.'
	],
	plate: {
		media: 'plate-clear-winged-loader',
		caption:
			'Clear-Winged Loader, a male, with the wing spread so you can see right through it. Drawn for us in 1935.'
	},
	photos: [
		{
			media: 'photo-clear-winged-loader-1',
			caption: 'On the shoulder at the first drive. Gladstone, 1935.'
		},
		{
			media: 'photo-clear-winged-loader-2',
			caption: 'Everyone at the stand, a Loader on every shoulder. Gladstone, 1952.'
		},
		{
			media: 'photo-clear-winged-loader-3',
			caption: 'Taking a rest on a shooting coat between drives. Gladstone, 2020.'
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
