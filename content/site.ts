/** Society-wide constants. */

export const SOCIETY = 'The American Brood Society';
export const MOTTO = 'Prime numbers. Prime stock.';

/** The Society's address of record. Every page names it as canonical, whichever address served it. */
export const SITE_URL = 'https://americanbroodsociety.org';

/** Appears verbatim on every page that discusses health (tested). */
export const MASSOSPORA =
	'The Society has never observed a case of Massospora in a sanctioned ring.';

export const NO_COMMENT = 'The Society has not commented.';
export const ENTERED_AS_RECEIVED = 'Entered as received.';

/** Pricing sentence for Gemini 17.0 Locus, verbatim. Nothing else is said on the subject. */
export const LOCUS_SENTENCE =
	'17 Locus is provided by invite only and at the exclusive discretion of the Brood-Google Working Group.';

/** The next sanctioned emergence: Brood I and the Tredecim Brood XXII, spring 2029. */
export const NEXT_EMERGENCE = {
	instant: '2029-05-14T09:00:00Z',
	label: 'Until the next sanctioned emergence',
	note: 'Brood I of the Septendecim Register and Brood XXII of the Tredecim Register. Expected in the spring of 2029.'
} as const;

export interface NavItem {
	href: string;
	label: string;
}

export const NAV: NavItem[] = [
	{ href: '/standard', label: 'The Standard' },
	{ href: '/breeds', label: 'Recognized Breeds' },
	{ href: '/stud-book', label: 'The Stud Book' },
	{ href: '/cabinet', label: 'The Cabinet' },
	{ href: '/husbandry', label: 'Husbandry' },
	{ href: '/governance', label: 'Governance' },
	{ href: '/supper-club', label: 'The Supper Club' },
	{ href: '/chapters', label: 'Chapters' },
	{ href: '/provisioner', label: 'Provisioner' }
];

export const FOOTER_NAV: NavItem[] = [
	{ href: '/from-the-membership', label: 'From the Membership' },
	{ href: '/founding', label: 'Literature Concerning the Founding' },
	{ href: '/membership', label: 'Membership' },
	{ href: '/legal', label: 'Legal Notices' },
	{ href: '/correspondence-policy', label: 'Correspondence Policy' },
	{ href: '/charitable-standing', label: 'Charitable Standing' }
];

export const FOOTER_ENDOWMENT =
	'The Society is fully endowed. It does not solicit, and it does not accept gifts from the public.';

export const COLOPHON =
	'Set in Garamond. Issued by the Society to its members and to such other persons as the Council may from time to time permit.';
