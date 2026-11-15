import type { Notice } from './types.ts';

const COUNCIL = 'By order of the Council';

/** Notices of the Council, newest first. */
export const NOTICES: Notice[] = [
	{
		slug: 'next-sanctioned-emergence',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'The Next Sanctioned Emergence',
		date: '2026-09-02',
		dateLine: 'Entered the second of September, 2026',
		body: [
			'The next sanctioned emergence will be that of Brood I of the Septendecim Register and Brood XXII of the Tredecim Register, expected in the spring of 2029.',
			'Owners of record will be written to by the Registrar. Owners of Kilocada will give notice to the clerks of the adjoining counties in the usual form and within the usual time.'
		],
		signature: COUNCIL,
		current: true
	},
	{
		slug: 'objection-to-a-designation',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Objection to a Designation',
		date: '2026-03-09',
		dateLine: 'Entered the ninth of March, 2026',
		body: [
			'The Council has lodged with the Brood-Google Working Group its formal objection to the designation “Gemini 17.0 Locus,” on the ground that the word resembles one that members do not use.',
			'The objection was lodged in writing and delivered by hand. No reply has been recorded.'
		],
		signature: COUNCIL,
		current: true
	},
	{
		slug: 'appointment-of-a-judge',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Appointment of a Judge',
		date: '2025-07-09',
		dateLine: 'Entered the ninth of July, 2025',
		body: [
			'The appointment of a judge of the Companion Group, entered the fourth of June, 2025, ended on the ninth of July, 2025.'
		],
		signature: COUNCIL,
		current: true
	},
	{
		slug: 'disqualification-in-brood-x',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Disqualification of an Animal',
		date: '2017-06-19',
		dateLine: 'Entered the nineteenth of June, 2017',
		body: [
			'The animal entered as S-17·00874 emerged four years before the year of its line. It is disqualified and entered as such.',
			'The line is otherwise unaffected.'
		],
		mark: 'Disqualified',
		signature: COUNCIL
	},
	{
		slug: 'notice-of-expulsion-2022',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '2022-02-02',
		dateLine: 'Entered the second of February, 2022',
		body: [
			'Following an inquiry under Article IX of the Bylaws, the Council finds that the animal entered as S-17·00702 was produced by a cross between Registers. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.',
			'The Society will not correspond on the matter.'
		],
		mark: 'Struck from the Stud Book',
		signature: COUNCIL
	},
	{
		slug: 'on-accelerated-lines',
		kind: 'statement',
		kindLabel: 'Statement',
		title: 'On Accelerated Lines',
		date: '2009-05-01',
		dateLine: 'Reissued without amendment',
		body: ['The Society does not discuss accelerated lines.']
	},
	{
		slug: 'disqualification-in-brood-ii',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Disqualification of an Animal',
		date: '2009-06-12',
		dateLine: 'Entered the twelfth of June, 2009',
		body: [
			'The animal entered as S-17·00655 emerged four years before the year of its line. It is disqualified and entered as such.'
		],
		mark: 'Disqualified',
		signature: COUNCIL
	},
	{
		slug: 'inquiry-of-the-ethics-committee',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Inquiry of the Ethics Committee',
		date: '1998-03-05',
		dateLine: 'Entered the fifth of March, 1998',
		body: ['The Committee has concluded its inquiry. No findings.'],
		signature: 'By order of the Ethics Committee'
	},
	{
		slug: 'petition-concerning-an-emergence',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Petition Concerning an Emergence',
		date: '1988-02-11',
		dateLine: 'Entered the eleventh of February, 1988',
		body: [
			'The Council has considered the petition of an owner of record of the Companion Group that an emergence two days late be entered as on time.',
			'The petition is declined. The emergence is entered on the date on which it occurred.',
			'The Society will not correspond on the matter.'
		],
		signature: COUNCIL
	},
	{
		slug: 'establishment-of-the-ethics-committee',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Establishment of the Ethics Committee',
		date: '1974-04-02',
		dateLine: 'Entered the second of April, 1974',
		body: [
			'The Council has established an Ethics Committee to inquire into any matter touching the conduct of members, judges and officers of the Society.',
			'The Committee will report its findings to the Council. Its findings will be published as notices.'
		],
		signature: COUNCIL
	},
	{
		slug: 'notice-of-expulsion-1966',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '1966-10-20',
		dateLine: 'Entered the twentieth of October, 1966',
		body: [
			'The Council finds that the animal entered as T-13·00140 was produced by a cross between Registers. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.',
			'The Society will not correspond on the matter.'
		],
		mark: 'Struck from the Stud Book',
		signature: COUNCIL
	},
	{
		slug: 'closure-of-the-rooms',
		kind: 'typed',
		kindLabel: 'Notice to Members',
		title: 'Closure of the Rooms',
		date: '1958-07-01',
		dateLine: '1 July 1958',
		body: [
			'THE ROOMS WILL BE CLOSED FROM 1 AUGUST TO 15 SEPTEMBER. CORRESPONDENCE RECEIVED DURING THAT PERIOD WILL BE ENTERED AS RECEIVED.',
			'BY ORDER. THE SECRETARY.'
		]
	},
	{
		slug: 'notice-of-expulsion-1931',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '1931-11-03',
		dateLine: 'Entered the third of November, 1931',
		body: [
			'The Council finds that the animal entered as S-17·00119 was produced by a cross between Registers. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.'
		],
		mark: 'Struck from the Stud Book',
		signature: COUNCIL
	},
	{
		slug: 'recognition-of-the-tredecim-register',
		kind: 'typed',
		kindLabel: 'Notice to Members',
		title: 'The Tredecim Register',
		date: '1909-10-11',
		dateLine: '11 October 1909',
		body: [
			'THE COUNCIL HAS RESOLVED TO RECOGNIZE A REGISTER OF LINES OF THIRTEEN YEARS, TO BE KNOWN AS THE TREDECIM REGISTER. THE RESOLUTION IS NOT PUBLISHED.',
			'THE SEPTENDECIM REGISTER WILL BE LISTED FIRST.',
			'BY ORDER. THE SECRETARY.'
		]
	}
];

export function noticeBySlug(slug: string): Notice | undefined {
	return NOTICES.find((n) => n.slug === slug);
}

export const CURRENT_NOTICES: Notice[] = NOTICES.filter((n) => n.current);
