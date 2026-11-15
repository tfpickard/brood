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
	purpose: 'Companion. Sings to you every morning, in three parts, at the same time.',
	lede: 'The Little Compton Canticle is the morning Companion. It sings to its owner once a day, when the owner gets up, in three parts, and it’s the only breed we recognize whose song has a set shape.',
	standard: {
		appearance: [
			'Slender, long in the wing, wings carried high and tented a little at rest. Black thorax with a narrow pale collar behind the head. Clear light amber veins in the wing.',
			'Red eyes. Blue is allowed, and it goes in the book.',
			'The miniature has the same proportions and is shown on the signet ring.'
		],
		chorus: [
			'It sings once each morning, within five minutes of your getting up, and never at any other time. Three parts of equal length, with two equal rests between them.',
			'We judge the shape, which has to be complete; the pitch, which has to hold steady through each part; and the timing, which should be the same every morning that week, give or take a minute.',
			'A Canticle that sings in the evening gets marked down, however lovely it sounds.'
		],
		temperament: [
			'Quiet, regular, devoted. It spends the night by your bed, on the window frame or the bedpost, and spends the day where it can see you.',
			'It comes to the snap at any hour, but it doesn’t sing when it does.'
		],
		exuvia: [
			'The shell is clear light amber, in one piece, slender, with long wing sheaths and the collar showing as a paler band. Short, clean split.',
			'Show it upright on linden, turned from a limb of the tree it came out of.'
		]
	},
	faults: [
		'A song in two parts, or four.',
		'Rests that aren’t the same length.',
		'Singing more than a minute earlier or later than it did the morning before.',
		'Singing in the evening.'
	],
	disqualifications: [
		'Hatching in the wrong year for its line, early or late.',
		'Two mornings running without a song while the owner is there.',
		'Bonding with anybody but the owner, however it happened.'
	],
	history: [
		'Families along the Sakonnet shore have kept the Canticle since the 1896 hatch, the first year of the stud book. We recognized it in 1913. It’s shown when Brood IV hatches.',
		'The three parts were set in the 1913 standard and haven’t changed. In 1930 some lines started coming up with a fourth part, and their owners took them out of the stud book themselves. None of them has been entered since.',
		'We judge it at first light on the second day of the hatch, and owners come in whatever they got up in. People who keep Canticles say the hardest morning is the first one after the week is over. Anyway, it’s cold on the water at that hour, so sleep in something warm.'
	],
	plate: {
		media: 'plate-little-compton-canticle',
		caption:
			'The Little Compton Canticle plate: a male on a linden twig, with his shell upright. Drawn for us in 1913.'
	},
	photos: [
		{
			media: 'photo-little-compton-canticle-1',
			caption:
				'An owner and her Canticle at our photographer’s studio, the year the stud book opened. Little Compton, 1896.'
		},
		{
			media: 'photo-little-compton-canticle-2',
			caption:
				'The morning ring, judging the song at first light, bathrobes and all. Little Compton, 1964.'
		},
		{
			media: 'photo-little-compton-canticle-3',
			caption:
				'A Canticle on the bedroom window frame at dawn, waiting for its owner to wake up. Sakonnet Point, 1981.'
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
