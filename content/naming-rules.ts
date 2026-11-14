/**
 * The Registry's naming rules, in mechanical form, for the test suite. Author-only; never rendered.
 * R4 (no joke) and R6 (no overt cleverness) cannot be decided mechanically; a conforming name
 * satisfies them by using a type noun from the Society's lexicon.
 */
import type { NamingRule } from './types.ts';

export const ALL_RULES: NamingRule[] = [
	'R1-form',
	'R2-dog-word',
	'R3-cicada',
	'R4-wit',
	'R5-society-noun',
	'R6-overt-cleverness',
	'R7-unshowy-seat',
	'R8-pre-1900',
	'R9-no-city',
	'R10-no-state'
];

/** The Society's own type nouns: shooting, estate service, church office, music, horology, old military. */
export const SOCIETY_NOUNS = [
	'Marker',
	'Beater',
	'Bearer',
	'Courser',
	'Flanker',
	'Loader',
	'Stop',
	'Drayer',
	'Tender',
	'Repeater',
	'Verger',
	'Sexton',
	'Hayward',
	'Ostler',
	'Alarum',
	'Picket',
	'Warder',
	'Pale',
	'Vedette',
	'Tiler',
	'Linstock',
	'Sconce',
	'Vesper',
	'Familiar',
	'Constant',
	'Canticle',
	'Pavane',
	'Minim'
];

export const DOG_WORDS = [
	'pointer',
	'setter',
	'retriever',
	'spaniel',
	'terrier',
	'hound',
	'mastiff',
	'shepherd',
	'collie',
	'springer',
	'toy',
	'lap'
];

export const WING_DESCRIPTORS = ['Flat-Winged', 'Clear-Winged', 'Smoke-Winged'];

export const US_STATES = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
];

export const UNSHOWY_SEAT_KINDS = [
	'estate',
	'village',
	'river',
	'sound',
	'island',
	'region',
	'neighborhood',
	'harbor',
	'valley',
	'wing'
];
