import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'hudson-tender',
	name: 'Hudson Tender',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1902,
	hostTree: { common: 'Apple', botanical: 'Malus domestica' },
	brood: 'X',
	phaseYear: 2021,
	purpose: 'Husbandry. Works other insects in the apiary and the orchard.',
	lede: 'The Hudson Tender works other insects. It is kept on the river estates for the management of the apiary and the orchard, and it is judged at work among them.',
	standard: {
		appearance: [
			'A Septendecim working breed of light build and quick action, with long forelegs and the wings carried low and close. The thorax is dull black. The venation is clear, with a greenish cast at the base.',
			'The Microcada is accepted and is preferred for work within the hive. It is identical to the Standard in every proportion.',
			'The eye is red.'
		],
		chorus: [
			'The chorus of the Tender is a working call, short and repeated, pitched to carry within the apiary and no further. It is used to move the insects in its charge and is not given for any other purpose.',
			'A Tender that calls without purpose is not working correctly.'
		],
		temperament: [
			'Patient, exact and absorbed in its work. The Tender settles at the entrance of the hive at first light and keeps its station until dusk. It yields the station to its owner and resumes it when the owner withdraws.',
			'In the Summons the Tender is tested away from the apiary. A correct animal comes to its owner and returns to its station unbidden.'
		],
		exuvia: [
			'Pale and thin-walled, with the forelegs long and well separated. A faint greenish cast at the wing pads is correct. The exuvia is customarily kept with a comb from the apiary of the year.',
			'The Microcada exuvia is shown under the lens in a cabinet fitted for the purpose.'
		]
	},
	faults: [
		'Calling outside the apiary.',
		'Leaving the station before dusk.',
		'Heavy build.',
		'Wings carried high.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Any injury to an insect in its charge.',
		'Abandonment of the station on two consecutive days.'
	],
	history: [
		'The breed was recognized in 1902 from lines kept on the east bank of the Hudson. Its work was at first confined to the apiary; the orchard was added to the standard in 1919.',
		'The Tender is judged at a working trial held on a single estate at each emergence of Brood X. The estate is chosen by the Council and is not announced in advance.'
	],
	plate: {
		media: 'plate-hudson-tender',
		caption:
			'The Hudson Tender, male, on an apple bough, with the exuvia. Drawn for the Society, 1902.'
	},
	photos: [
		{
			media: 'photo-hudson-tender-1',
			caption: 'A Tender at the entrance of the hive, attended by the apiarist. Rhinebeck, 1919.'
		},
		{
			media: 'photo-hudson-tender-2',
			caption: 'The working trial, the judges at the hives. Tivoli, 1987.'
		},
		{
			media: 'photo-hudson-tender-3',
			caption: 'A Microcada Tender on a frame of comb. Rhinebeck, 2021.'
		}
	],
	diagram: 'dorsal-anatomy',
	disclaimers: ['magnification', 'resale'],
	naming: {
		seat: 'Hudson',
		seatKind: 'river',
		seatFounded: 1609,
		typeNoun: 'Tender',
		violates: [],
		note: 'Canon seed name. The river.'
	}
};
