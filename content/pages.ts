/** Short page copy that is not large enough to warrant its own module. */

export const HOME_PURPOSE: string[] = [
	'The American Brood Society keeps the Stud Book of the pedigreed periodical cicada, sanctions each emergence held under its rules, and maintains the Standard by which every recognized breed is judged. It has done so without interruption since the first volume of the Stud Book was closed. The Society does not seek members. Families whose lines are already of record are written to when a place falls vacant, and are otherwise not troubled.'
];

export const CHARITABLE_STANDING: string[] = [
	'The American Brood Society is a nonprofit charitable organization. It is recognized as such in many countries, and it conducts all of its affairs in furtherance of its charitable objects.',
	'The Society is fully endowed. Its endowment is held and administered by the Treasurer under the direction of the Council, and its income is applied to the Society’s charitable objects and to no other purpose.',
	'The Society does not solicit. It does not accept gifts from the public, and any gift received from a person who is not a member is returned.',
	'The Society does not publish its accounts beyond the Council and the members.'
];

export const CICADOODLE: { issued: string; reissued: string[]; body: string[] } = {
	issued: 'Issued the second of June, 1975.',
	reissued: [
		'Reissued without amendment, 1992.',
		'Reissued without amendment, 2009.',
		'Reissued without amendment, 2026.'
	],
	body: [
		'The Society does not recognize the animal sold to the public as the Cicadoodle.',
		'The exuvia is the purpose of the fancy. An animal bred so that it does not shed leaves nothing, and the Society does not register animals that leave nothing.',
		'Owners of such animals are not eligible for membership of the Society. Neither are their descendants.',
		'The Society will not correspond on the matter.'
	]
};

export const MEMBERSHIP: { intro: string[]; acknowledgment: (reviewDate: string) => string[] } = {
	intro: [
		'Membership of the Society is by invitation of the Council. An application may nevertheless be made by the head of a family on the form below. It is received and referred to the Committee on Admissions.',
		'Applicants should not expect correspondence.'
	],
	acknowledgment: (reviewDate: string) => [
		'The family has been placed under consideration.',
		`The Committee on Admissions will review the application on ${reviewDate}.`,
		'No acknowledgment of this notice is required.'
	]
};

export const LEGAL_INTRO: string[] = [
	'The notices below are given by the Society in respect of the keeping, showing and transfer of animals and exuviae registered with it. Each is repeated on the pages to which it applies.',
	'Nothing on these pages varies the Bylaws.'
];

export const CABINET_INTRO: string[] = [
	'The exuviae described here are among those recorded by the Keeper of the Cabinet as of particular note. Each remains in the keeping of the family named.',
	'Transfers of title are recorded with the price where it was disclosed to the Society.'
];

export const STUD_BOOK_INTRO: string[] = [
	'The Stud Book is kept by the Registrar and closed on the last day of each emergence. Entries received after that day are held for the following volume.',
	'Animals whose parentage is not of record are entered in the Foundation Register.'
];

export const BREEDS_INTRO: string[] = [
	'The Society recognizes the breeds listed below. Each is kept in one Register and classified in one Group.',
	'Breeds of the Septendecim Register are listed first. Breeds of the Tredecim Register follow.'
];

export const FOUNDING_HEADING = 'Literature Concerning the Founding';

export const NOT_FOUND = {
	title: 'No Such Page Is Kept',
	body: 'The address requested does not correspond to any page in the Society’s keeping. It may have been withdrawn. The Society does not maintain a record of withdrawn pages.'
} as const;

export const SERVER_ERROR = {
	title: 'The Page Could Not Be Issued',
	body: 'The page requested could not be issued at this time. The matter has been noted.'
} as const;
