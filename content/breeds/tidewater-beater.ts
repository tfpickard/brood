import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'tidewater-beater',
	name: 'Tidewater Beater',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1902,
	hostTree: { common: 'Southern red oak', botanical: 'Quercus falcata' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Sporting. Puts up game birds by singing at them.',
	lede: 'The Tidewater Beater puts up game birds by singing at them. It works in lines across a drive, and we judge it on the birds it sends over the guns.',
	standard: {
		appearance: [
			'Compact, with a broad, deeply ribbed abdomen and big tymbals you can see plainly from the side. Black thorax, orange veins, red eye.',
			'Beaters are shown in lines of twelve or more. Don’t bring us one Beater.'
		],
		chorus: [
			'Loud, steady and rising, carried along the line so the sound moves forward with the beaters at a walk. If the line sings out of step, the whole line gets marked down.',
			'We judge the song on three things. Carry: enough to put up birds at a hundred yards. Direction: forward. Stopping: the instant the whistle goes.'
		],
		temperament: [
			'It never tires and it never gets out of step. It holds its place without being told and doesn’t get ahead of it.',
			'It comes to the snap at the end of the drive, not during it.'
		],
		exuvia: [
			'Pale amber, with the tymbal covers big and whole. A cracked tymbal cover is a fault.',
			'A line’s shells go up together, in line order, on one long shelf. You’ll need a very long shelf.'
		]
	},
	faults: [
		'Singing out of step with the line.',
		'Getting ahead of the line.',
		'Flushing birds behind the guns.',
		'Still singing after the whistle.'
	],
	disqualifications: [
		'A Beater that comes up off its year.',
		'Silence on the drive.',
		'Singing in any direction but forward.'
	],
	history: [
		'We recognized the Beater in 1902 from the shooting places of the Tidewater, where people had been working beaters in lines since before there was a stud book.',
		'A line has gone in at every Brood X trial since. The biggest one on record went in 1953: three hundred and forty animals, worked across a single drive two miles long.',
		'We changed the standard in 1971 so the chorus goes forward. After the pigeon, it seemed wise.'
	],
	plate: {
		media: 'plate-tidewater-beater',
		caption: 'Tidewater Beater, a male, with the tymbal drawn open. Drawn for us in 1902.'
	},
	photos: [
		{
			media: 'photo-tidewater-beater-1',
			caption: 'A line out on the drive. Tidewater, 1919.'
		},
		{
			media: 'photo-tidewater-beater-2',
			caption: 'The record line, all three hundred and forty, before the drive. Tidewater, 1953.'
		},
		{
			media: 'photo-tidewater-beater-3',
			caption: 'Guns and loaders at the end of the drive. Tidewater, 1987.'
		}
	],
	diagram: 'chorus-apparatus',
	disclaimers: ['vigil-attendance', 'resale'],
	naming: {
		seat: 'Tidewater',
		seatKind: 'region',
		seatFounded: 1607,
		typeNoun: 'Beater',
		violates: [],
		note: 'Canon seed name.'
	}
};
