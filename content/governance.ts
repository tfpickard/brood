import type { BylawArticle, Committee, FormerJudge, Officer, PlateRef } from './types.ts';

export const GOVERNANCE_INTRO: string[] = [
	'The Society is governed by its Council under the Bylaws. The officers of the Society are elected by the Council from among the members and serve until they resign.',
	'The Council meets in camera. Its resolutions are entered in the minute book and are published as notices where the Council so directs. The Society does not publish the names of the members of the Council.'
];

export const OFFICERS: Officer[] = [
	{ office: 'President', name: 'Mr. Everard Sallowes Wyck', since: 1991 },
	{ office: 'Chief Judge', name: 'Mr. Everard Sallowes Wyck', since: 1994 },
	{ office: 'Registrar', name: 'Mr. Everard Sallowes Wyck', since: 1998 },
	{ office: 'Vice-President', name: 'Mrs. Margaret Haddon Pemberton', since: 2009 },
	{ office: 'Secretary', name: 'Mr. Julian Ostrander', since: 2012 },
	{ office: 'Treasurer', name: 'Mr. Charles Ormsby Calloway', since: 2001 },
	{ office: 'Keeper of the Cabinet', name: 'Miss Philippa Haverill', since: 2016 },
	{ office: 'Keeper of the Foundation Register', name: 'Mr. Edmund Fairlie', since: 1987 },
	{ office: 'Steward of the Rings', name: 'Colonel Ashton Gressingham', since: 2011 },
	{ office: 'Inspector of Homes', name: 'Mrs. Winifred Sallowes', since: 2019 },
	{ office: 'Clerk of Emergences', name: 'Mr. Lucius Calloway', since: 2014 },
	{ office: 'Honorary Optician', name: 'Mr. Theodore Lisle Haddon', since: 2020 }
];

/** Former judges of the Society. Dates only. */
export const FORMER_JUDGES: FormerJudge[] = [
	{ name: 'Judge Augustin Thorne', from: '1904', to: '1938' },
	{ name: 'Mr. Anthony Fairlie', from: '1939', to: '1958' },
	{ name: 'Mrs. Beatrice Ardsley', from: '1958', to: '1983' },
	{ name: 'Mr. Rupert Gressingham', from: '3 May 1966', to: '17 May 1966' },
	{ name: 'Mrs. Helena Sallowes', from: '1971', to: '2 April 1974' },
	{ name: 'Mrs. Isadora Calloway', from: '1983', to: '1997' },
	{ name: 'Mr. Bertram Ostrander', from: '1984', to: '28 May 1987' },
	{ name: 'Mr. Conrad Pemberton', from: '1 March 1998', to: '4 March 1998' },
	{ name: 'Dr. F. Lisle Haddon', from: '2001', to: '12 June 2004' },
	{ name: 'Colonel Alder Penhallow', from: '2006', to: '2 June 2021' },
	{ name: 'Mrs. Harriet Gressingham', from: '4 June 2025', to: '9 July 2025' }
];

const ethicsRecord: { year: number; entry: string }[] = [];
for (let year = 1974; year <= 2026; year++) {
	ethicsRecord.push({ year, entry: 'No findings.' });
}

export const COMMITTEES: Committee[] = [
	{
		slug: 'ethics',
		name: 'The Ethics Committee',
		members: [
			'Mr. Everard Sallowes Wyck, ex officio',
			'Mr. Charles Ormsby Calloway',
			'Mrs. Margaret Haddon Pemberton'
		],
		remit:
			'Established in 1974. To inquire into any matter touching the conduct of members, judges and officers of the Society, and to report its findings to the Council.',
		record: ethicsRecord
	},
	{
		slug: 'admissions',
		name: 'The Committee on Admissions',
		members: ['Mrs. Margaret Haddon Pemberton', 'Mr. Julian Ostrander', 'Mrs. Winifred Sallowes'],
		remit:
			'To keep the list of families placed under consideration, and to report to the Council when a place falls vacant.',
		record: [
			{ year: 2026, entry: 'Families placed under consideration were entered. No place fell vacant.' },
			{ year: 2025, entry: 'No place fell vacant.' },
			{ year: 2009, entry: 'One place fell vacant and was filled.' }
		]
	},
	{
		slug: 'field-trials',
		name: 'The Field Trials Committee',
		members: ['Colonel Ashton Gressingham', 'Mr. Lucius Calloway', 'Mrs. Winifred Sallowes'],
		remit:
			'To appoint the grounds, the game and the order of running for each sanctioned field trial, and to receive the cards of the judges.',
		record: [
			{ year: 2025, entry: 'The cards of the judges were received and entered.' },
			{ year: 2021, entry: 'The cards of the judges were received and entered.' }
		]
	},
	{
		slug: 'registers',
		name: 'The Committee on the Registers',
		members: ['Mr. Everard Sallowes Wyck, ex officio', 'Mr. Edmund Fairlie'],
		remit:
			'To advise the Council on the keeping of the Septendecim and Tredecim Registers and of the Foundation Register.',
		record: [
			{ year: 1972, entry: 'A question of pronunciation was referred to the Council.' },
			{ year: 1909, entry: 'The resolution of the Council on the Tredecim Register was received. The Committee did not report.' }
		]
	},
	{
		slug: 'brood-google',
		name: 'The Brood-Google Working Group',
		members: [],
		remit: '',
		record: [],
		blank: true
	}
];

export const TROPHIES: { name: string; text: string }[] = [
	{ name: 'The Spoon', text: 'Perpetual. Presented at supper.' },
	{ name: 'The Ninth Hole Salver', text: 'Kilocada, Working Group.' },
	{ name: 'The Thorne Umbrella', text: 'For the Summons.' },
	{ name: 'The Vail Cup', text: 'For punctuality.' },
	{ name: 'The Bellevue Bowl', text: 'Best of breed, Companion Group.' },
	{ name: 'The Foundation Plate', text: 'For the oldest unbroken line shown in the year.' },
	{ name: 'The Gressingham Medal', text: 'For a Microcada exuvia, judged under magnification.' },
	{ name: 'The Picket Shield', text: 'For a unit of forty, Personal Protection Group.' },
	{ name: 'The Haddon Candlesticks', text: 'Not awarded since 1974.' }
];

export const GOVERNANCE_PLATES: PlateRef[] = [
	{
		media: 'governance-1',
		caption: 'The trophies set out before the supper. The Society’s rooms, 1958.'
	},
	{
		media: 'governance-2',
		caption: 'The register of the Ethics Committee, opened at the entries for 1974 to 1990. The Society’s rooms, 1990.'
	},
	{
		media: 'governance-3',
		caption: 'The Council room before a meeting of the Council. The Society’s rooms, 2024.'
	}
];

export const BYLAWS: BylawArticle[] = [
	{
		numeral: 'I',
		title: 'Of the Society',
		clauses: [
			{ no: 'I.1', text: 'The Society is a charitable society and acts in furtherance of its charitable objects.' },
			{
				no: 'I.2',
				text: 'The Society is fully endowed. It does not solicit, and it does not accept gifts from the public.'
			}
		]
	},
	{
		numeral: 'II',
		title: 'Of Membership',
		clauses: [
			{ no: 'II.1', text: 'Membership of the Society is by invitation of the Council.' },
			{
				no: 'II.2',
				text: 'A family placed under consideration is reviewed by the Committee on Admissions not sooner than seventeen years after the date of placement.'
			},
			{
				no: 'II.3',
				text: 'No owner of an animal of the so-called Cicadoodle, and no descendant of such an owner, is eligible for membership.',
				amended: 'the second of June, 1975'
			}
		]
	},
	{
		numeral: 'III',
		title: 'Of the Officers',
		clauses: [
			{
				no: 'III.1',
				text: 'The officers of the Society are the President, the Vice-President, the Chief Judge, the Registrar, the Secretary, the Treasurer and such other officers as the Council may appoint.'
			},
			{ no: 'III.2', text: 'An officer serves until he or she resigns.' },
			{
				no: 'III.4',
				text: 'The President may hold the offices of Chief Judge and Registrar concurrently.',
				amended: 'the third of March, 1998'
			}
		]
	},
	{
		numeral: 'IV',
		title: 'Of the Registers',
		clauses: [
			{
				no: 'IV.1',
				text: 'Every recognized breed is kept in one of two Registers: the Septendecim Register, for lines of seventeen years, and the Tredecim Register, for lines of thirteen years.'
			},
			{
				no: 'IV.2',
				text: 'The Septendecim Register is listed first in every publication of the Society.',
				amended: 'the eleventh of October, 1909'
			},
			{
				no: 'IV.3',
				text: 'A cross between Registers is grounds for the permanent expulsion of the owner of record and for the removal of the animal and its issue from the Stud Book.'
			}
		]
	},
	{
		numeral: 'V',
		title: 'Of Registration',
		clauses: [
			{ no: 'V.1', text: 'Names are entered exactly as received.' },
			{ no: 'V.2', text: 'The Society does not correct a member’s correspondence.' },
			{
				no: 'V.3',
				text: 'Ruling of the Council: the name Shrib rhymes with crib.',
				amended: 'the fourteenth of January, 1972'
			},
			{
				no: 'V.4',
				text: 'A registration letter is retained in the Registrar’s files and may be reproduced by the Society.'
			}
		]
	},
	{
		numeral: 'VI',
		title: 'Of Emergence',
		clauses: [
			{
				no: 'VI.1',
				text: 'An animal emerging in any year other than the year of its line is not eligible to be shown.'
			},
			{
				no: 'VI.2',
				text: 'An animal emerging four years before the year of its line is disqualified and is entered in the Stud Book as such.'
			},
			{ no: 'VI.3', text: 'Accelerated lines are prohibited.' }
		]
	},
	{
		numeral: 'VII',
		title: 'Of the Vigil',
		clauses: [
			{ no: 'VII.1', text: 'The Vigil is attended by the owner alone.' },
			{ no: 'VII.2', text: 'Staff withdraw on the Registrar’s signal and do not re-enter until called.' },
			{
				no: 'VII.3',
				text: 'An animal that attaches to any person other than its owner is entered under the name of that person.'
			}
		]
	},
	{
		numeral: 'IX',
		title: 'Of Discipline',
		clauses: [
			{
				no: 'IX.1',
				text: 'Any matter touching the conduct of a member, judge or officer may be referred to the Ethics Committee.'
			},
			{ no: 'IX.2', text: 'The findings of the Ethics Committee are published as a notice.' },
			{ no: 'IX.3', text: 'The Society will not correspond on any disciplinary matter.' }
		]
	},
	{
		numeral: 'XI',
		title: 'Of Judging in the Ring',
		clauses: [
			{ no: 'XI.1', text: 'Judges are appointed by the Chief Judge.' },
			{ no: 'XI.2', text: 'An appointment ends on the date on which the Chief Judge so records.' },
			{
				no: 'XI.3',
				text: 'The Summons is judged by the owner’s single snap of the fingers, given once, at a distance set by the judge.'
			},
			{
				no: 'XI.4',
				text: 'No judge shall carry an umbrella into the ring.',
				amended: 'the twelfth of April, 1913'
			}
		]
	},
	{
		numeral: 'XII',
		title: 'Of Field Trials',
		clauses: [
			{ no: 'XII.1', text: 'Points are awarded for game only.' },
			{
				no: 'XII.2',
				text: 'No point shall be awarded for pigeon.',
				amended: 'the ninth of July, 1970'
			},
			{
				no: 'XII.3',
				text: 'The cards of the judges are entered in the Stud Book on the evening of the last day of the trial and are not afterwards amended.'
			}
		]
	},
	{
		numeral: 'XIV',
		title: 'Of Placement in the Personal Protection Group',
		clauses: [
			{
				no: 'XIV.1',
				text: 'An animal of the Personal Protection Group is placed only after the home has been inspected by the Inspector of Homes.'
			},
			{ no: 'XIV.2', text: 'The findings of the inspection are not disclosed.' }
		]
	}
];
