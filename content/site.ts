/** Society-wide constants. */

export const SOCIETY = 'The American Brood Society';
export const MOTTO = 'Prime numbers. Prime stock.';

/** The Society's address of record. Every page names it as canonical, whichever address served it. */
export const SITE_URL = 'https://americanbroodsociety.org';

/** Appears verbatim on every page that discusses health (tested). */
export const MASSOSPORA = 'We’ve never seen Massospora at one of our shows.';

export const ENTERED_AS_RECEIVED = 'Entered as received.';

/** Pricing sentence for Gemini 17.0 Locus, verbatim. Nothing else is said on the subject. */
export const LOCUS_SENTENCE =
	'17 Locus is provided by invite only and at the exclusive discretion of the Brood-Google Working Group.';

/** The next hatch: Brood I and the 13-year Brood XXII, spring 2029. */
export const NEXT_EMERGENCE = {
	instant: '2029-05-14T09:00:00Z',
	label: 'Until the next hatch',
	note: 'Brood I in the 17-year book and Brood XXII in the 13-year book. Spring of 2029, if the weather cooperates.'
} as const;

export interface NavItem {
	href: string;
	label: string;
}

export const NAV: NavItem[] = [
	{ href: '/standard', label: 'Standards' },
	{ href: '/breeds', label: 'Breeds' },
	{ href: '/stud-book', label: 'Stud Book' },
	{ href: '/shells', label: 'Shells' },
	{ href: '/care', label: 'Care' },
	{ href: '/governance', label: 'Club Business' },
	{ href: '/supper-club', label: 'Suppers' },
	{ href: '/chapters', label: 'Chapters' },
	{ href: '/equipment', label: 'Equipment' }
];

export const FOOTER_NAV: NavItem[] = [
	{ href: '/from-the-membership', label: 'From Our Members' },
	{ href: '/albums', label: 'From the Albums' },
	{ href: '/founding', label: 'How We Started' },
	{ href: '/membership', label: 'Membership' },
	{ href: '/legal', label: 'Legal Notices' },
	{ href: '/privacy', label: 'Privacy' },
	{ href: '/charity', label: 'Charity' }
];

export const FOOTER_ENDOWMENT =
	'We’re fully endowed. We don’t ask for money, and we don’t take it from the public.';

export const COLOPHON =
	'Set in Garamond. If you’re reading this on any other website, it isn’t us.';
