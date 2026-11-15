import type { Breed } from '../types.ts';

export const breed: Breed = {
	slug: 'little-compton-canticle',
	name: 'Little Compton Canticle',
	group: 'companion',
	register: 'septendecim',
	varieties: ['standard', 'microcada'],
	recognized: 1913,
	hostTree: { common: 'American linden', botanical: 'Tilia americana' },
	brood: 'IV',
	phaseYear: 2015,
	purpose: 'Companion. Sings to its owner each morning, in three strophes, at a fixed hour.',
	lede: 'The Little Compton Canticle is the morning Companion. It sings to its owner once each day, at the hour the owner rises, in a chorus of three strophes, and it is the only recognized breed whose chorus has a form.',
	standard: {
		appearance: [
			'A Septendecim companion of slender build and long wing, the wings carried high and slightly tented at rest. The thorax is black with a narrow pale collar behind the head. The wing venation is a clear light amber.',
			'The eye is red. A blue eye is permitted and is recorded.',
			'The Microcada is identical in proportion and is shown on the signet ring.'
		],
		chorus: [
			'The Canticle sings once each morning, within five minutes of the owner’s rising, and at no other time. The chorus is in three strophes of equal length separated by two rests of equal length.',
			'The chorus is assessed on its form, which shall be complete; on its pitch, which shall be steady throughout each strophe; and on its timing, which shall be the same on each morning of the week to within a minute.',
			'A Canticle that sings in the evening is at fault, whatever the quality of the chorus.'
		],
		temperament: [
			'Quiet, regular and attached. The Canticle passes the night at the owner’s bedside, on the frame of the window or the post of the bed, and passes the day within sight of the owner.',
			'It answers the Summons at any hour, but does not sing on answering it.'
		],
		exuvia: [
			'Clear light amber, entire, slender, with the wing sheaths long and the pale collar visible as a paler band. The dorsal split is clean and short.',
			'The exuvia is shown upright on a linden-wood mount turned from a limb of the host tree.'
		]
	},
	faults: [
		'A chorus of two or four strophes.',
		'Rests of unequal length.',
		'Variation of more than a minute in the hour of the chorus between one morning and the next.',
		'Singing in the evening.'
	],
	disqualifications: [
		'Emergence in any year other than the year of the line.',
		'Failure to sing on two consecutive mornings in the presence of the owner.',
		'Attachment to any person other than the owner, howsoever arising.'
	],
	history: [
		'The Canticle was kept by families of the Sakonnet shore from the emergence of 1896, the first year of the Stud Book, and was recognized in 1913. It is shown at the emergences of Brood IV.',
		'The three-strophe form was fixed by the standard of 1913 and has not been amended. Lines in which a fourth strophe appeared were withdrawn from the Stud Book by their owners in 1930 and have not been entered since.',
		'The morning ring for the breed is held at first light on the second day of the emergence. Owners attend in the clothes in which they rose.'
	],
	plate: {
		media: 'plate-little-compton-canticle',
		caption:
			'The Little Compton Canticle, male, on a linden twig, with the exuvia upright. Drawn for the Society, 1913.'
	},
	photos: [
		{
			media: 'photo-little-compton-canticle-1',
			caption:
				'An owner with her Canticle at the studio of the Society’s photographer. Little Compton, 1896.'
		},
		{
			media: 'photo-little-compton-canticle-2',
			caption: 'The morning ring, judging of the chorus at first light. Little Compton, 1964.'
		},
		{
			media: 'photo-little-compton-canticle-3',
			caption:
				'A Canticle on the window frame of its owner’s bedroom at dawn. Sakonnet Point, 1981.'
		}
	],
	diagram: 'wing-venation',
	disclaimers: ['vigil-attendance', 'bereavement', 'magnification'],
	naming: {
		seat: 'Little Compton',
		seatKind: 'village',
		seatFounded: 1682,
		typeNoun: 'Canticle',
		violates: []
	}
};
