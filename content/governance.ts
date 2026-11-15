import type { BylawArticle, Committee, FormerJudge, Officer, PlateRef } from './types.ts';

export const GOVERNANCE_INTRO: string[] = [
	'The Council runs the Society under the Bylaws. It picks the officers from among the members, and they serve until they resign. Mr. Everard Sallowes Wyck is President, Chief Judge and Registrar.',
	'The Council meets in private and keeps its own minute book. Who sits on it is private too. When a decision affects members, it goes up as a notice.',
	'The Chief Judge appoints the judges. Judges serve until they’re stood down at a closed pinning. Our former judges are listed below, with their dates.'
];

export const OFFICERS: Officer[] = [
	{ office: 'President', name: 'Mr. Everard Sallowes Wyck', since: 1991 },
	{ office: 'Chief Judge', name: 'Mr. Everard Sallowes Wyck', since: 1994 },
	{ office: 'Registrar', name: 'Mr. Everard Sallowes Wyck', since: 1998 },
	{ office: 'Vice-President', name: 'Mrs. Margaret Haddon Pemberton', since: 2009 },
	{ office: 'Secretary', name: 'Mr. Julian Ostrander', since: 2012 },
	{ office: 'Treasurer', name: 'Mr. Charles Ormsby Calloway', since: 2001 },
	{ office: 'Keeper of the Cabinet', name: 'Miss Philippa Haverill', since: 2016 },
	{ office: 'Keeper of Founding Stock', name: 'Mr. Edmund Fairlie', since: 1987 },
	{ office: 'Steward of the Rings', name: 'Colonel Ashton Gressingham', since: 2011 },
	{ office: 'Inspector of Homes', name: 'Mrs. Winifred Sallowes', since: 2019 },
	{ office: 'Clerk of Hatches', name: 'Mr. Lucius Calloway', since: 2014 },
	{ office: 'Honorary Optician', name: 'Mr. Theodore Lisle Haddon', since: 2020 }
];

/** Former judges of the Society. Dates only. */
export const FORMER_JUDGES: FormerJudge[] = [
	{ name: 'Judge Augustin Thorne', from: '1904', to: '1938' },
	{ name: 'Mr. Anthony Fairlie', from: '1939', to: '1958' },
	{ name: 'Mrs. Beatrice Ardsley', from: '1958', to: '1983' },
	{ name: 'Mr. Rupert Gressingham', from: 'May 3, 1966', to: 'May 17, 1966' },
	{ name: 'Mrs. Helena Sallowes', from: '1971', to: 'April 2, 1974' },
	{ name: 'Mrs. Isadora Calloway', from: '1983', to: '1997' },
	{ name: 'Mr. Bertram Ostrander', from: '1984', to: 'May 28, 1987' },
	{ name: 'Mr. Conrad Pemberton', from: 'March 1, 1998', to: 'March 4, 1998' },
	{ name: 'Dr. F. Lisle Haddon', from: '2001', to: 'June 12, 2004' },
	{ name: 'Colonel Alder Penhallow', from: '2006', to: 'June 2, 2021' },
	{ name: 'Mrs. Harriet Gressingham', from: 'June 4, 2025', to: 'July 9, 2025' }
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
			'Mr. Everard Sallowes Wyck, as President',
			'Mr. Charles Ormsby Calloway',
			'Mrs. Margaret Haddon Pemberton'
		],
		remit:
			'Set up in 1974. Looks into the conduct of members, judges and officers, and reports what it finds to the Council.',
		record: ethicsRecord
	},
	{
		slug: 'admissions',
		name: 'The Admissions Committee',
		members: ['Mrs. Margaret Haddon Pemberton', 'Mr. Julian Ostrander', 'Mrs. Winifred Sallowes'],
		remit:
			'Keeps the list of families who have applied, and tells the Council when a place opens up.',
		record: [
			{
				year: 2026,
				entry: 'This year’s applications added to the list. No place opened.'
			},
			{ year: 2025, entry: 'No place opened.' },
			{ year: 2009, entry: 'One place opened and was filled.' }
		]
	},
	{
		slug: 'field-trials',
		name: 'The Field Trials Committee',
		members: ['Colonel Ashton Gressingham', 'Mr. Lucius Calloway', 'Mrs. Winifred Sallowes'],
		remit:
			'Picks the grounds, the game and the running order for every field trial, and collects the judges’ cards afterward.',
		record: [
			{ year: 2025, entry: 'Judges’ cards collected and entered.' },
			{ year: 2021, entry: 'Judges’ cards collected and entered.' }
		]
	},
	{
		slug: 'registers',
		name: 'The Stud Book Committee',
		members: ['Mr. Everard Sallowes Wyck, as Registrar', 'Mr. Edmund Fairlie'],
		remit:
			'Advises the Council on keeping the 17-year book, the 13-year book and the record of founding stock.',
		record: [
			{ year: 1972, entry: 'Asked the Council to rule on a pronunciation.' },
			{
				year: 1909,
				entry: 'Received the Council’s vote to open a 13-year book.'
			}
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
	{
		name: 'The Spoon',
		text: 'Handed on at supper every year. Some families have had it more than once.'
	},
	{ name: 'The Ninth Hole Salver', text: 'Large animals, Working Group.' },
	{ name: 'The Thorne Umbrella', text: 'For the snap.' },
	{ name: 'The Vail Cup', text: 'For punctuality.' },
	{ name: 'The Bellevue Bowl', text: 'Best of breed, Companion Group.' },
	{ name: 'The Foundation Plate', text: 'For the oldest unbroken line shown that year.' },
	{ name: 'The Gressingham Medal', text: 'For a miniature’s shell, judged under magnification.' },
	{ name: 'The Picket Shield', text: 'For a unit of forty, Personal Protection Group.' },
	{ name: 'The Haddon Candlesticks', text: 'Last awarded in 1974.' }
];

export const GOVERNANCE_PLATES: PlateRef[] = [
	{
		media: 'governance-1',
		caption: 'The trophies laid out before supper. The Society’s rooms, 1958.'
	},
	{
		media: 'governance-2',
		caption:
			'The Ethics Committee’s record book, open at 1974 through 1990. The Society’s rooms, 1990.'
	},
	{
		media: 'governance-3',
		caption: 'The Council room, set for a meeting. The Society’s rooms, 2024.'
	}
];

export const BYLAWS: BylawArticle[] = [
	{
		numeral: 'I',
		title: 'Of the Society',
		clauses: [
			{
				no: 'I.1',
				text: 'The Society is constituted as a charitable society, and all of its activities are undertaken for charitable purposes.'
			},
			{
				no: 'I.2',
				text: 'The Society is fully endowed. It solicits no contributions from the public and accepts none.'
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
				text: 'An application for membership is reviewed by the Admissions Committee not sooner than seventeen years after the date on which it is received.'
			},
			{
				no: 'II.3',
				text: 'No owner of an animal of the so-called Cicadoodle, and no descendant of such an owner, is eligible for membership.',
				amended: 'June 2, 1975'
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
				amended: 'March 3, 1998'
			}
		]
	},
	{
		numeral: 'IV',
		title: 'Of the Stud Book',
		clauses: [
			{
				no: 'IV.1',
				text: 'Every recognized breed is entered in one of two books of the Stud Book: the 17-year book, for lines of seventeen years, and the 13-year book, for lines of thirteen years.'
			},
			{
				no: 'IV.2',
				text: 'The 17-year book is listed first in every publication of the Society.',
				amended: 'October 11, 1909'
			},
			{
				no: 'IV.3',
				text: 'A cross between the 17-year book and the 13-year book is grounds for the permanent expulsion of the owner of record and for the removal of the animal and its issue from the Stud Book.'
			}
		]
	},
	{
		numeral: 'V',
		title: 'Of Registration',
		clauses: [
			{ no: 'V.1', text: 'A name is registered exactly as the owner submits it.' },
			{
				no: 'V.2',
				text: 'The Registrar makes no correction to any name or letter submitted by a member.'
			},
			{
				no: 'V.3',
				text: 'Ruling of the Council: “shrib” is pronounced to rhyme with “crib.”',
				amended: 'January 14, 1972'
			},
			{
				no: 'V.4',
				text: 'A registration letter is retained in the Registrar’s files and may be reproduced by the Society.'
			}
		]
	},
	{
		numeral: 'VI',
		title: 'Of the Hatch',
		clauses: [
			{
				no: 'VI.1',
				text: 'An animal that hatches in any year other than the year of its line is not eligible to be shown.'
			},
			{
				no: 'VI.2',
				text: 'An animal that hatches four years before the year of its line is disqualified and is so entered in the Stud Book.'
			},
			{ no: 'VI.3', text: 'Accelerated lines are prohibited.' }
		]
	},
	{
		numeral: 'VII',
		title: 'Of Attendance at the Hatch',
		clauses: [
			{ no: 'VII.1', text: 'The owner attends the hatch alone.' },
			{
				no: 'VII.2',
				text: 'Staff withdraw on the Registrar’s signal and do not re-enter until called.'
			},
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
			{ no: 'IX.3', text: 'A decision of the Council on any disciplinary matter is final.' }
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
				text: 'The snap is judged on a single snap of the owner’s fingers, given once, at a distance set by the judge.'
			},
			{
				no: 'XI.4',
				text: 'No judge shall carry an umbrella into the ring.',
				amended: 'April 12, 1913'
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
				amended: 'July 9, 1970'
			},
			{
				no: 'XII.3',
				text: 'The cards of the judges are entered in the Stud Book on the evening of the last day of the trial and are not afterward amended.'
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
			{
				no: 'XIV.2',
				text: 'The findings of the inspection are confidential to the Inspector and the Council.'
			}
		]
	}
];
