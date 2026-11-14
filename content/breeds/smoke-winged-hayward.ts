import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'smoke-winged-hayward',
	name: 'Smoke-Winged Hayward',
	group: 'working',
	register: 'septendecim',
	varieties: ['standard', 'kilocada'],
	recognized: 1922,
	hostTree: { common: 'Shagbark hickory', botanical: 'Carya ovata' },
	brood: 'XIII',
	phaseYear: 2024,
	purpose: 'Keeps the hedges and fences of the estate and turns back stray stock.',
	lede: 'The Smoke-Winged Hayward keeps the hedges and fences of the estate and turns back stray stock. It is the only Working breed shown in the smoke wing.',
	standard: {
		appearance: [
			'A Septendecim working breed of good size and square build, distinguished by the smoke wing: the membrane evenly clouded gray from base to apex, with the venation black. The clouding shall be even. A wing clear at the apex is a fault.',
			'The Kilocada is accepted and predominates.',
			'The eye is red. A blue eye is recorded.'
		],
		chorus: [
			'The Hayward gives a harsh, carrying chorus at any breach of the hedge, and at no other time. Stock that hears it turns back.',
			'The chorus is assessed by the judge at a breach made for the purpose.'
		],
		temperament: [
			'Vigilant, territorial within its bounds and wholly indifferent beyond them. The Hayward walks the hedge line once in each hour and does not leave it.',
			'In the Summons the Hayward comes to its owner across the hedge line and returns along it.'
		],
		exuvia: [
			'Gray-amber with a smoke cast to the wing pads, entire and heavy.',
			'The Kilocada exuvia is displayed freestanding, by custom at the gate of the principal field.'
		]
	},
	faults: [
		'Uneven clouding of the wing.',
		'Chorus given without a breach.',
		'Leaving the hedge line.',
		'Light build.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'A clear wing.',
		'Failure to give chorus at a breach.'
	],
	history: [
		'The breed was recognized in 1922 from lines kept by three families of the Genesee Valley.',
		'The smoke wing was fixed in the breed by 1939. Animals clear at the apex continued to appear until 1956 and were entered as disqualified.',
		'The Hayward is judged in the field at a breach made in a hedge of hawthorn. The Society specifies the hedge.'
	],
	plate: {
		media: 'plate-smoke-winged-hayward',
		caption: 'The Smoke-Winged Hayward, male, with the wings spread to show the smoke, and the exuvia. Drawn for the Society, 1922.'
	},
	photos: [
		{
			media: 'photo-smoke-winged-hayward-1',
			caption: 'A Hayward on the hedge line at the first showing of the breed. Geneseo, 1922.'
		},
		{
			media: 'photo-smoke-winged-hayward-2',
			caption: 'The judge at a breach in the hawthorn. Geneseo, 1956.'
		},
		{
			media: 'photo-smoke-winged-hayward-3',
			caption: 'A Kilocada Hayward at the gate of the principal field. Avon, New York, 1990.'
		}
	],
	diagram: 'smoke-wing-venation',
	disclaimers: ['county-notification', 'oxygen'],
	naming: {
		seat: 'Smoke-Winged',
		seatKind: 'wing',
		typeNoun: 'Hayward',
		violates: []
	}
};
