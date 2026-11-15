import type { Clause } from './types.ts';
import { MASSOSPORA } from './site.ts';

export const STANDARD_PREAMBLE: string[] = [
	'These are the rules for every breed we recognize. Each breed has its own standard on top of these. Where the two disagree, the breed standard wins, for that breed only.',
	'The Council writes these rules and the Council changes them. A change starts with the next hatch, not before. It’s for charity.',
	'People ask if this is like dog shows. We all have friends who show dogs, and good for them. They get a new litter every spring. We wait seventeen years. It’s a nice hobby for people who can’t sit still.'
];

export interface StandardArticle {
	numeral: string;
	title: string;
	clauses: Clause[];
}

export const STANDARD: StandardArticle[] = [
	{
		numeral: 'I',
		title: 'The two books',
		clauses: [
			{
				no: '1',
				text: 'Every breed we recognize is in one of two books. The 17-year book is for lines that come up every seventeen years. The 13-year book is for lines on thirteen, and it’s listed second.'
			},
			{
				no: '2',
				text: 'A breed stays in its book. It never moves to the other one.'
			}
		]
	},
	{
		numeral: 'II',
		title: 'The four Groups',
		clauses: [
			{
				no: '1',
				text: 'Every breed belongs to one of four Groups, by the work it does:',
				clauses: [
					{ no: '(a)', term: 'Sporting', text: 'for work in the field.' },
					{
						no: '(b)',
						term: 'Working',
						text: 'for hauling, husbandry, relay and keeping the grove.'
					},
					{
						no: '(c)',
						term: 'Personal Protection',
						text: 'for keeping people off, holding a perimeter and staying with the person it guards.'
					},
					{ no: '(d)', term: 'Companion', text: 'to keep its owner company.' }
				]
			}
		]
	},
	{
		numeral: 'III',
		title: 'Sizes',
		clauses: [
			{
				no: '1',
				text: 'A breed can be registered in three sizes, if its standard allows it:',
				clauses: [
					{
						no: '(a)',
						text: 'Most animals are the usual size, and the papers don’t mention it.'
					},
					{
						no: '(b)',
						term: 'Miniature',
						text: 'small enough to sit on a signet ring. The shell goes in a cabinet with built-in magnification, fitted by an optician we’ve certified.'
					},
					{
						no: '(c)',
						term: 'Large',
						text: 'raised in a grove instead of on a host tree, and hatched on a reinforced perch. We won’t register one until the neighboring counties have been notified. The shell stands on its own.'
					}
				]
			},
			{
				no: '2',
				text: 'The size goes on the papers when the animal is registered, and it never changes after that.'
			}
		]
	},
	{
		numeral: 'IV',
		title: 'The hatch',
		clauses: [
			{
				no: '1',
				text: 'An animal hatches in its line’s year: seventeen years after its parents, or thirteen if it’s in the 13-year book.'
			},
			{
				no: '2',
				text: 'For a few hours after it hatches, the animal is soft and pale and bonds with whoever is in the room. So the owner sits up with it alone.'
			},
			{
				no: '3',
				text: 'If it bonds with somebody else, it goes in the stud book under that person’s name, and that’s the entry.'
			}
		]
	},
	{
		numeral: 'V',
		title: 'What we look for',
		clauses: [
			{
				no: '1',
				text: 'Red eyes. Blue eyes are allowed, and we note them in the stud book.'
			},
			{
				no: '2',
				text: 'Temperament. It takes at least ten generations of breeding to get it. You can’t buy a line. You inherit one.'
			},
			{
				no: '3',
				text: 'The snap. A well-bred male comes when his owner snaps once. It’s the main test of temperament in the ring, and the judge watches three things:',
				clauses: [
					{ no: '(a)', term: 'Speed', text: 'he comes right away.' },
					{ no: '(b)', term: 'Direction', text: 'he goes to his owner and nobody else.' },
					{ no: '(c)', term: 'Landing', text: 'he lands on the hand that snapped.' }
				]
			},
			{
				no: '4',
				text: 'Sound wings, legs and voice. Every animal is checked in the ring before it’s judged.'
			},
			{ no: '5', text: MASSOSPORA },
			{
				no: '6',
				text: 'The shell. The animal is gone in a week, and the shell is what you keep. Each one is judged against its breed standard. The owner lifts it the morning after the hatch, with the Registrar in the room.'
			},
			{
				no: '7',
				text: 'A shell goes in a crystal cabinet, or stands on its own if it’s from a large animal. It’s sold with its registration certificate or not at all. Everybody knows a family by its shells, whatever they tell you.'
			}
		]
	},
	{
		numeral: 'VI',
		title: 'What gets marked down',
		clauses: [
			{
				no: '1',
				text: 'A male who’s slow to the snap, or lands anywhere but the hand that snapped.'
			},
			{
				no: '2',
				text: 'Tricks. A breed is judged on its Group’s work. Anything it only does for the ring counts for nothing.'
			},
			{
				no: '3',
				text: 'A bad wing, leg or voice. The animal is pulled before judging, and the stud book records that it was pulled.'
			}
		]
	},
	{
		numeral: 'VII',
		title: 'What disqualifies',
		clauses: [
			{
				no: '1',
				text: 'Crossing the two books. We strike the animal and everything it produces from the stud book, and the owner is out of the Society for good.',
				disqualifying: true
			},
			{
				no: '2',
				text: 'A male who goes to anyone but his owner.',
				disqualifying: true
			},
			{
				no: '3',
				text: 'Coming up four years early. We call those stragglers, and the stud book marks them disqualified.',
				disqualifying: true
			},
			{
				no: '4',
				text: 'Accelerated lines. They’re banned. Don’t ask.',
				disqualifying: true
			}
		]
	},
	{
		numeral: 'VIII',
		title: 'Judging',
		clauses: [
			{
				no: '1',
				text: 'We only judge during hatch week.'
			},
			{
				no: '2',
				text: 'The Chief Judge appoints the judges. Their decisions go in the stud book that same evening, and nobody changes them afterward.'
			},
			{
				no: '3',
				text: 'Each animal is judged against these rules and its own breed standard. Never against the animal next to it.'
			},
			{
				no: '4',
				text: 'Don’t ask a judge, or anybody else here, what an animal is worth. We don’t do valuations.'
			}
		]
	}
];
