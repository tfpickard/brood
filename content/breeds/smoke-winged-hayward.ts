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
	purpose: 'Keeps the hedges and fences on the estate and turns back stray stock.',
	lede: 'The Smoke-Winged Hayward keeps the hedges and fences and turns back any stock that gets loose. It’s the only Working breed shown in the smoke wing, and the people who keep it will make sure you know that.',
	standard: {
		appearance: [
			'A 17-year working breed, good size and square built, with the smoke wing: the membrane clouded an even gray from base to tip, with black veins. The clouding has to be even. A wing that clears at the tip gets marked down.',
			'Most people keep the large now.',
			'Red eye. A blue eye does turn up.'
		],
		chorus: [
			'A harsh call that carries, given when there’s a gap in the hedge and never otherwise. Stock that hears it turns around.',
			'For judging, the judge makes a gap on purpose and listens.'
		],
		temperament: [
			'Alert, territorial inside its bounds, and couldn’t care less about anything outside them. It walks the hedge line once an hour and doesn’t leave it.',
			'For the snap it comes to you straight across the hedge line, then goes back along it.'
		],
		exuvia: [
			'Gray-amber with a smoky tinge on the wing pads, whole and heavy.',
			'A large Hayward’s shell goes at the gate to the main field. It always has.'
		]
	},
	faults: [
		'Patchy clouding on the wing.',
		'Calling when there’s no gap.',
		'Leaving the hedge line.',
		'Light build.'
	],
	disqualifications: [
		'Hatching in any year but its line’s year.',
		'A clear wing.',
		'Not calling at a gap.'
	],
	history: [
		'We recognized the breed in 1922 from lines kept by three families in the Genesee Valley.',
		'The smoke wing was fixed in the breed by 1939. Clear-tipped animals kept turning up until 1956, and we disqualified every one of them, which made for some long weekends in Geneseo.',
		'It’s judged in the field, at a gap made in a hawthorn hedge. We say which hedge.'
	],
	plate: {
		media: 'plate-smoke-winged-hayward',
		caption: 'A Hayward male with the wings spread to show the smoke, and his shell. 1922.'
	},
	photos: [
		{
			media: 'photo-smoke-winged-hayward-1',
			caption: 'A Hayward on the hedge line at the breed’s first show. Geneseo, 1922.'
		},
		{
			media: 'photo-smoke-winged-hayward-2',
			caption: 'The judge at a gap in the hawthorn. Geneseo, 1956.'
		},
		{
			media: 'photo-smoke-winged-hayward-3',
			caption: 'A large Hayward at the gate to the main field. Avon, New York, 1990.'
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
