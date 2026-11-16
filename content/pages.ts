/** Short page copy that is not large enough to warrant its own module. */

export const HOME_PURPOSE: string[] = [
	'We’re the American Brood Society. We’ve kept the stud book on pedigreed cicadas since 1896, we run the shows, and we write the breed standards. There isn’t another registry. If somebody tells you there is, our lawyers would love to hear about it.',
	'Our breed names and our stud book numbers belong to us, and so does calling a cicada “pedigreed.” If you want to use any of them, you need our permission in writing. We don’t hand it out much, and yes, we do go after people.'
];

export const CHARITABLE_STANDING: string[] = [
	'It’s for charity.',
	'We’re fully endowed. The Treasurer looks after the endowment, the Council tells the Treasurer what to do with it, and every bit of the income goes to the charity.',
	'We don’t ask anybody for money. We don’t take gifts from the public, and if you send us one anyway, it comes back to you.',
	'Our accounts go to the Council and the members. Nobody else sees them. People ask what the money’s for. It’s for charity.'
];

export const CICADOODLE: { issued: string; reissued: string[]; body: string[] } = {
	issued: 'Issued June 2, 1975.',
	reissued: ['Reissued 1992, 2009 and 2026. Text unchanged.'],
	body: [
		'The animal sold to the public as the “Cicadoodle” is not a breed recognized by the American Brood Society.',
		'The shell is the object of the fancy. An animal bred not to shed leaves no shell, and the Society registers no animal that leaves nothing behind.',
		'Owners of such animals are ineligible for membership in the Society. So are their descendants.'
	]
};

export const MEMBERSHIP: { intro: string[]; acknowledgment: (reviewDate: string) => string[] } = {
	intro: [
		'Membership is by invitation. You can apply anyway. We’ll look at it in seventeen years.',
		'The head of the family fills in the form below, and it goes to the Admissions Committee. Don’t wait by the phone.'
	],
	acknowledgment: (reviewDate: string) => [
		'We have your application.',
		`The Admissions Committee will look at it on ${reviewDate}.`,
		'You don’t need to do anything until then.'
	]
};

export const LEGAL_INTRO: string[] = [
	'The notices below are given by the Society in respect of the keeping, showing and transfer of animals and shells registered with it. Each notice is repeated on the pages to which it applies.',
	'Nothing on these pages varies the Bylaws.'
];

export const CABINET_INTRO: string[] = [
	'These are the shells the Keeper of the Cabinet thinks are worth knowing about, and who has each one now.',
	'When one changes hands, we write down the price if they told us. They don’t always tell us.'
];

export const STUD_BOOK_INTRO: string[] = [
	'The Registrar keeps the stud book and closes it on the last day of each hatch. Anything that comes in after that waits for the next volume, so don’t call him about it.',
	'The first animal in each line is listed as founding stock. Lines that went wide in ’87 are flagged.'
];

export const BREEDS_INTRO: string[] = [
	'These are the breeds we recognize. Each one belongs to one group and goes in one book, the 17-year or the 13-year. If it isn’t on this list, it isn’t a breed, whatever the person who sold it to you said.',
	'The 17-year breeds are listed first. The 13-year breeds come after.'
];

export const FOUNDING_HEADING = 'How We Started';

export const NOT_FOUND = {
	title: 'There’s nothing here.',
	body: 'Either the address is wrong or the page is gone. Check the spelling, or start again from the home page.'
} as const;

export const SERVER_ERROR = {
	title: 'Something went wrong.',
	body: 'That page didn’t load. It’s on our end, and we know about it. Try again in a few minutes.'
} as const;
