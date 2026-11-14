import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'wye-stop',
	name: 'Wye Stop',
	group: 'sporting',
	register: 'septendecim',
	varieties: ['standard'],
	recognized: 1910,
	hostTree: { common: 'Willow oak', botanical: 'Quercus phellos' },
	brood: 'I',
	phaseYear: 2012,
	purpose: 'Sporting. Posted at the boundary of a covert to keep game from running out of it.',
	lede: 'The Wye Stop is posted at the boundary of a covert to keep game from running out of it. It is the most stationary of the Sporting breeds and among the most highly regarded.',
	standard: {
		appearance: [
			'A Septendecim sporting animal of solid, low build, broad in the head, with the wings held close and slightly drooped. The thorax is black with a dark olive cast. The eye is red.',
			'The tarsi are short and strong, and grip the post without visible effort.'
		],
		chorus: [
			'The Stop sings a steady, unvarying note from the moment it is posted until it is lifted. The note is low and carries along the hedge line rather than across it.',
			'Any change of pitch in the course of a drive is a fault.'
		],
		temperament: [
			'Steady, immovable and unhurried. The Stop is posted on the boundary before the drive and remains there until lifted by its owner. It does not follow game.',
			'It answers the Summons, but slowly.'
		],
		exuvia: [
			'Very dark amber and broad, with the legs gripping as though still fixed to the boundary post.',
			'The exuvia is mounted on a short section of the post from which it was taken.'
		]
	},
	faults: ['Following game into the covert.', 'Change of pitch during the drive.', 'Narrow head.'],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Leaving the post before it is lifted.'
	],
	history: [
		'The breed was recognized in 1910 from the lines of the Ostrander family on the Wye River, where it had been posted on the boundaries of the coverts since before the Society’s first Stud Book was closed.',
		'The Ostrander line has been entered at every sanctioned emergence of Brood I since recognition.',
		'The breed will next be shown in the spring of 2029.'
	],
	plate: {
		media: 'plate-wye-stop',
		caption: 'The Wye Stop, male, posted, with the exuvia on its post. Drawn for the Society, 1910.'
	},
	photos: [
		{
			media: 'photo-wye-stop-1',
			caption: 'A Stop posted on the boundary of a covert before the drive. Wye River, 1927.'
		},
		{
			media: 'photo-wye-stop-2',
			caption: 'Stops lifted from their posts at the end of the day. Wye River, 1961.'
		},
		{
			media: 'photo-wye-stop-3',
			caption: 'The boundary of the home covert in the week of emergence. Wye River, 2012.'
		}
	],
	diagram: 'exuvia-mount',
	disclaimers: ['vigil-attendance', 'bereavement', 'resale'],
	naming: {
		seat: 'Wye',
		seatKind: 'river',
		seatFounded: 1658,
		typeNoun: 'Stop',
		violates: [],
		note: 'A stop is the beater posted to keep game in a covert; the word also names the stop of an organ.'
	}
};
