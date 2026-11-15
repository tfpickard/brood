import type { Notice } from './types.ts';

/** Signature on notices in the Council’s formal voice: discipline and objections. */
const COUNCIL = 'By order of the Council';
/** Signature on everyday notices. */
const FOR_COUNCIL = 'For the Council';

/** Notices of the Council, newest first. */
export const NOTICES: Notice[] = [
	{
		slug: 'the-next-hatch',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'The Next Hatch',
		date: '2026-09-02',
		dateLine: 'September 2, 2026',
		body: [
			'Next up is Brood I in the 17-year book and Brood XXII in the 13-year book, both expected in the spring of 2029.',
			'The Registrar will write to every owner of record. If you have a large animal, you still have to write to the clerk of every adjoining county, in the usual form, at least ninety days ahead. Please don’t leave it to the last week again.'
		],
		signature: FOR_COUNCIL,
		current: true
	},
	{
		slug: 'objection-to-a-designation',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Objection to a Designation',
		date: '2026-03-09',
		dateLine: 'March 9, 2026',
		body: [
			'The Council has lodged with the Brood-Google Working Group the Society’s formal objection to the designation “Gemini 17.0 Locus,” on the ground that “Locus” is liable to be confused with “locust,” a term the Society holds to be incorrect when applied to the periodical cicada.',
			'The objection was made in writing and delivered by hand. The Society reserves all of its rights in the matter.'
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
		dateLine: 'July 9, 2025',
		body: [
			'Mrs. Harriet Gressingham was appointed a judge of the Companion Group on June 4, 2025. The appointment ended on July 9, 2025.'
		],
		signature: FOR_COUNCIL,
		current: true
	},
	{
		slug: 'disqualification-in-brood-x',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Disqualification of an Animal',
		date: '2017-06-19',
		dateLine: 'June 19, 2017',
		body: [
			'S-17·00874 came up four years early. It’s disqualified, and the stud book says so.',
			'The rest of the line is fine.'
		],
		mark: 'Disqualified',
		signature: FOR_COUNCIL
	},
	{
		slug: 'notice-of-expulsion-2022',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '2022-02-02',
		dateLine: 'February 2, 2022',
		body: [
			'Following an inquiry under Article IX of the Bylaws, the Council finds that the animal entered as S-17·00702 was produced by a cross between the 17-year book and the 13-year book. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.',
			'The decision of the Council is final.'
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
		dateLine: 'May 1, 2009 (reissued, unchanged)',
		body: [
			'Accelerated lines are against the Bylaws. Don’t bring one to a show, and please stop asking us how it’s done.'
		]
	},
	{
		slug: 'disqualification-in-brood-ii',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Disqualification of an Animal',
		date: '2009-06-12',
		dateLine: 'June 12, 2009',
		body: ['S-17·00655 came up four years early. It’s disqualified, and the stud book says so.'],
		mark: 'Disqualified',
		signature: FOR_COUNCIL
	},
	{
		slug: 'inquiry-of-the-ethics-committee',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Inquiry of the Ethics Committee',
		date: '1998-03-05',
		dateLine: 'March 5, 1998',
		body: ['The Ethics Committee has finished its inquiry. No findings.'],
		signature: 'For the Ethics Committee'
	},
	{
		slug: 'petition-about-a-late-hatch',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Petition Concerning a Hatch',
		date: '1988-02-11',
		dateLine: 'February 11, 1988',
		body: [
			'Mr. Pelham Vail asked the Council to enter his 1987 hatch as on time. It came up two days late.',
			'The Council has said no. The hatch is entered on the day it happened, like everyone else’s.'
		],
		signature: FOR_COUNCIL
	},
	{
		slug: 'establishment-of-the-ethics-committee',
		kind: 'notice',
		kindLabel: 'Notice',
		title: 'Establishment of the Ethics Committee',
		date: '1974-04-02',
		dateLine: 'April 2, 1974',
		body: [
			'The Council has set up an Ethics Committee to look into the conduct of members, judges and officers.',
			'It reports to the Council, and whatever it finds will be posted here.'
		],
		signature: FOR_COUNCIL
	},
	{
		slug: 'notice-of-expulsion-1966',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '1966-10-20',
		dateLine: 'October 20, 1966',
		body: [
			'The Council finds that the animal entered as T-13·00140 was produced by a cross between the 17-year book and the 13-year book. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.',
			'The decision of the Council is final.'
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
		dateLine: 'July 1, 1958',
		body: [
			'THE ROOMS WILL BE CLOSED FROM AUGUST 1 TO SEPTEMBER 15 FOR THE ROOF. MAIL WILL BE OPENED WHEN WE ARE BACK.',
			'THE SECRETARY.'
		]
	},
	{
		slug: 'notice-of-expulsion-1931',
		kind: 'disciplinary',
		kindLabel: 'Disciplinary Notice',
		title: 'Notice of Expulsion',
		date: '1931-11-03',
		dateLine: 'November 3, 1931',
		body: [
			'The Council finds that the animal entered as S-17·00119 was produced by a cross between the 17-year book and the 13-year book. The animal and its issue are struck from the Stud Book. Its owner of record has ceased to be a member of the Society.'
		],
		mark: 'Struck from the Stud Book',
		signature: COUNCIL
	},
	{
		slug: 'opening-the-13-year-book',
		kind: 'typed',
		kindLabel: 'Notice to Members',
		title: 'The 13-Year Book',
		date: '1909-10-11',
		dateLine: 'October 11, 1909',
		body: [
			'THE COUNCIL HAS VOTED TO OPEN A SEPARATE BOOK FOR LINES OF THIRTEEN YEARS, TO BE CALLED THE 13-YEAR BOOK.',
			'THE 17-YEAR BOOK WILL BE LISTED FIRST.',
			'THE SECRETARY.'
		]
	}
];

export function noticeBySlug(slug: string): Notice | undefined {
	return NOTICES.find((n) => n.slug === slug);
}

export const CURRENT_NOTICES: Notice[] = NOTICES.filter((n) => n.current);
