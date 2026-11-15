import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'millbrook-flanker',
	name: 'Millbrook Flanker',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1916,
	hostTree: { common: 'Sugar maple', botanical: 'Acer saccharum' },
	brood: 'VII',
	phaseYear: 2018,
	purpose: 'Sporting. Turns game back on the flank of a drive.',
	lede: 'The Millbrook Flanker turns game back on the flank of a drive. It works alone, at either end of the line, and we judge it on the birds it turns and the birds that get past it.',
	standard: {
		appearance: [
			'Medium size, broad across the wings, with a pale flash on the forewing you can see from a long way off. Black thorax, red eye.',
			'The flash is a single oval of clear membrane between the radial and median veins. No flash, no Flanker.'
		],
		chorus: [
			'It sings in short single bursts, timed to birds heading for the flank. Each burst is sharp and aimed down the flank, not across it.',
			'Singing nonstop gets marked down.'
		],
		temperament: [
			'Patient, watchful and exact. It holds its station at the end of the line, often for an hour or more without moving, and does nothing at all until birds come at the flank.',
			'It comes to the snap when the whistle goes. Snap before that and it won’t even look at you.'
		],
		exuvia: [
			'Mid amber, with the forewing flash showing on the wing pad.',
			'The shell goes at the end of the family shelf nearest the window. That’s where they’ve always gone.'
		]
	},
	faults: [
		'Leaving its station.',
		'Singing nonstop.',
		'Turning birds back over the beaters.',
		'A flash with a ragged edge.'
	],
	disqualifications: ['Hatching in the wrong year.', 'No flash on the forewing.'],
	history: [
		'We recognized the Flanker in 1916 from the hunt country around Millbrook, where it had been worked on the flanks of driven shoots for two generations.',
		'It’s the only Sporting breed whose standard tells it where to stand instead of what to do. Members asked the Council to change that in 1933 and again in 1967. The Council said no both times.'
	],
	plate: {
		media: 'plate-millbrook-flanker',
		caption:
			'Millbrook Flanker, a male, showing off the flash on his forewing. Drawn for us in 1916.'
	},
	photos: [
		{
			media: 'photo-millbrook-flanker-1',
			caption: 'On station at the end of the line. Millbrook, 1933.'
		},
		{
			media: 'photo-millbrook-flanker-2',
			caption: 'The flank of the drive on a June morning. Millbrook, 1950.'
		},
		{
			media: 'photo-millbrook-flanker-3',
			caption: 'Everybody over at the Flanker’s stand after the second drive. Millbrook, 1984.'
		}
	],
	diagram: 'summons-ring',
	disclaimers: ['vigil-attendance', 'bereavement'],
	naming: {
		seat: 'Millbrook',
		seatKind: 'village',
		seatFounded: 1896,
		typeNoun: 'Flanker',
		violates: []
	}
};
