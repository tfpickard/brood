import type { Clause } from './types.ts';
import { MASSOSPORA } from './site.ts';

export const STANDARD_PREAMBLE: string[] = [
	'The General Standard sets out the requirements common to every breed recognized by the Society. A breed standard supplements the General Standard and does not displace it. Where the two differ, the breed standard governs in respect of that breed alone.',
	'The Standard is maintained by the Council in furtherance of the Society’s charitable objects and is amended only by resolution of the Council. Amendments take effect from the next sanctioned emergence.',
	'The Society is aware of the registries kept for dogs. It regards them with the respect due to a hobbyist pastime, with a generational interval suited to the impatient.'
];

export interface StandardArticle {
	numeral: string;
	title: string;
	clauses: Clause[];
}

export const STANDARD: StandardArticle[] = [
	{
		numeral: 'I',
		title: 'Of the Registers',
		clauses: [
			{
				no: 'I.1',
				text: 'Every recognized breed is kept in one of two Registers. The Septendecim Register receives lines of seventeen years. The Tredecim Register receives lines of thirteen years and is listed second.'
			},
			{
				no: 'I.2',
				text: 'A breed is kept in one Register only and does not pass from one Register to the other.'
			},
			{
				no: 'I.3',
				text: 'A cross between Registers is not registered. It is grounds for the permanent expulsion of the owner of record and for the removal of the animal and its issue from the Stud Book.',
				disqualifying: true
			}
		]
	},
	{
		numeral: 'II',
		title: 'Of the Groups',
		clauses: [
			{
				no: 'II.1',
				text: 'Every recognized breed is classified by its function in one of four Groups:',
				clauses: [
					{ no: '(a)', term: 'Sporting', text: 'for work in the field;' },
					{ no: '(b)', term: 'Working', text: 'for draught, husbandry, relay and the keeping of the grove;' },
					{
						no: '(c)',
						term: 'Personal Protection',
						text: 'for deterrence, the holding of a perimeter and attendance on a principal;'
					},
					{ no: '(d)', term: 'Companion', text: 'for the company of the owner.' }
				]
			},
			{
				no: 'II.2',
				text: 'A breed is judged on the work of its Group. The Society does not recognize work performed for exhibition alone.'
			}
		]
	},
	{
		numeral: 'III',
		title: 'Of Size Varieties',
		clauses: [
			{
				no: 'III.1',
				text: 'Any recognized breed may be registered in one of three sizes, as its breed standard permits.',
				clauses: [
					{ no: '(a)', term: 'Standard', text: 'the default size. It is not labeled.' },
					{
						no: '(b)',
						term: 'Microcada',
						text: 'the miniature variety, small enough to be carried on a signet ring. Its exuvia is housed in a cabinet with integral magnification by an optician certified by the Society.'
					},
					{
						no: '(c)',
						term: 'Kilocada',
						text: 'the giant variety, named for its weight class. It is raised in a grove rather than on a host tree, emerges on a reinforced perch, and is not registered unless the adjoining counties have been notified. Its exuvia is displayed freestanding.'
					}
				]
			},
			{
				no: 'III.2',
				text: 'A variety is entered at commission and is not afterwards changed.'
			}
		]
	},
	{
		numeral: 'IV',
		title: 'Of Eye Color',
		clauses: [
			{ no: 'IV.1', text: 'The eye is red.' },
			{
				no: 'IV.2',
				text: 'A blue eye is permitted. It is recorded, and it is entered in the Stud Book in words.'
			},
			{ no: 'IV.3', text: 'The Society does not discuss the value of any animal.' }
		]
	},
	{
		numeral: 'V',
		title: 'Of Temperament and the Summons',
		clauses: [
			{
				no: 'V.1',
				text: 'The temperament of every recognized breed is the product of not fewer than ten generations of selection. A line is not commissioned; it is inherited.'
			},
			{
				no: 'V.2',
				text: 'A properly bred male answers the single snap of its owner’s fingers and comes to the owner. This response, the Summons, is the central test of temperament in the ring. It is assessed on:',
				clauses: [
					{ no: '(a)', term: 'promptness', text: 'which shall be immediate;' },
					{ no: '(b)', term: 'direction', text: 'which shall be to the owner and to no other person;' },
					{ no: '(c)', term: 'arrival', text: 'which shall be on the hand that gave the snap.' }
				]
			},
			{
				no: 'V.3',
				text: 'A male that comes to any person other than its owner is not placed.',
				disqualifying: true
			}
		]
	},
	{
		numeral: 'VI',
		title: 'Of the Vigil',
		clauses: [
			{
				no: 'VI.1',
				text: 'For several hours after the molt the adult is soft and pale and attaches to whoever is present. The owner attends the Vigil alone.'
			},
			{
				no: 'VI.2',
				text: 'An animal that attaches to a person other than its owner is entered in the Stud Book under the name of that person. The Society makes no further entry.'
			}
		]
	},
	{
		numeral: 'VII',
		title: 'Of Emergence',
		clauses: [
			{
				no: 'VII.1',
				text: 'An animal emerges in the year of its line, which is the year of its sire and dam advanced by one cycle of its Register.'
			},
			{
				no: 'VII.2',
				text: 'An animal emerging four years before the year of its line is a straggler. It is disqualified and entered in the Stud Book as such.',
				disqualifying: true
			},
			{ no: 'VII.3', text: 'Accelerated lines are prohibited. The Society does not discuss them.' }
		]
	},
	{
		numeral: 'VIII',
		title: 'Of the Exuvia',
		clauses: [
			{
				no: 'VIII.1',
				text: 'The exuvia is the shell left by the nymph at emergence. It is the lasting object of the fancy, and the measure of a family’s standing is the collection it holds.'
			},
			{
				no: 'VIII.2',
				text: 'Every exuvia is breed-specific and is judged against its breed standard. It is lifted by the owner on the morning after the Vigil in the presence of the Registrar.'
			},
			{
				no: 'VIII.3',
				text: 'An exuvia is displayed in a crystal cabinet, or, for the Kilocada, freestanding. It is transferred with its certificate of registration or not at all.'
			}
		]
	},
	{
		numeral: 'IX',
		title: 'Of Health',
		clauses: [
			{
				no: 'IX.1',
				text: 'Every animal is examined in the ring for soundness of wing, leg and voice before it is judged. An animal found unsound is withdrawn and the withdrawal is entered.'
			},
			{ no: 'IX.2', text: MASSOSPORA }
		]
	},
	{
		numeral: 'X',
		title: 'Of Judging',
		clauses: [
			{
				no: 'X.1',
				text: 'Animals are judged at a sanctioned emergence, in the week of emergence, and on no other occasion.'
			},
			{
				no: 'X.2',
				text: 'Judges are appointed by the Chief Judge. Their decisions are entered in the Stud Book on the evening of the day on which they are given and are not afterwards amended.'
			},
			{
				no: 'X.3',
				text: 'An animal is judged against the General Standard, against its breed standard and against no other animal.'
			}
		]
	}
];
