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
	purpose: 'Sporting. Puts up game birds by chorus.',
	lede: 'The Tidewater Beater puts up game birds by chorus. It is worked in lines across the drive and is judged on the birds flushed to the guns.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of compact build with a broad, deeply ribbed abdomen and large tymbals plainly visible from the side. The thorax is black, the venation orange, and the eye red.',
			'Beaters are shown in lines of not fewer than twelve. A single animal is not shown.'
		],
		chorus: [
			'The chorus is loud, sustained and rising, carried across the line so that the sound advances with the beaters at a walking pace. A line that sings out of step is faulted as a line.',
			'The chorus is assessed on its carry, which shall be sufficient to flush birds at one hundred yards; on its direction, which shall be forward; and on its cessation, which shall be immediate on the whistle.'
		],
		temperament: [
			'Bold, tireless and responsive to the line. The Beater holds its place without direction and does not break forward of it.',
			'It answers the Summons at the end of the drive and not during it.'
		],
		exuvia: [
			'Pale amber, with the tymbal covers prominent and entire. A cracked tymbal cover is a fault.',
			'The exuviae of a line are mounted together, in the order of the line, on a single long shelf.'
		]
	},
	faults: [
		'Singing out of step with the line.',
		'Breaking forward of the line.',
		'Flushing birds behind the guns.',
		'Chorus continuing after the whistle.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Silence on the drive.',
		'Singing in any direction other than forward.'
	],
	history: [
		'The breed was recognized in 1902 from lines kept on the shooting properties of the Tidewater, where beaters had been worked in lines since before the Society’s first Stud Book was closed.',
		'Lines have been entered at every field trial of Brood X since recognition. The largest line of record, entered in 1953, numbered three hundred and forty animals and was worked across a single drive of two miles.',
		'The standard was amended in 1971 in respect of the direction of the chorus.'
	],
	plate: {
		media: 'plate-tidewater-beater',
		caption: 'The Tidewater Beater, male, with the tymbal shown open. Drawn for the Society, 1902.'
	},
	photos: [
		{
			media: 'photo-tidewater-beater-1',
			caption: 'A line of Beaters on the drive. Tidewater, 1919.'
		},
		{
			media: 'photo-tidewater-beater-2',
			caption:
				'The line of record, three hundred and forty animals, before the drive. Tidewater, 1953.'
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
