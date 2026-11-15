/**
 * Content schema for the American Brood Society site.
 *
 * Editorial content lives in typed data files under content/. The database holds only what
 * visitors create. Fields documented as author-only are never rendered; tests enforce that.
 */

export type GroupId = 'sporting' | 'working' | 'protection' | 'companion';
export type RegisterId = 'septendecim' | 'tredecim';
export type Variety = 'standard' | 'microcada' | 'kilocada';
export type Sex = 'male' | 'female';
export type EyeColor = 'red' | 'blue';
export type Standing = 'good' | 'disqualified' | 'struck';

/** A media manifest id. Every MediaRef used in content must exist in media/manifest.yaml. */
export type MediaRef = string;

/** A plate as placed on a page: the manifest id plus its page caption. */
export interface PlateRef {
	media: MediaRef;
	/** Italic caption sentence, ending with place and year. */
	caption: string;
}

export interface Group {
	id: GroupId;
	name: string;
	/** Short heading form, e.g. "The Sporting Group". */
	title: string;
	order: number;
	description: string[];
	/** Optional page-specific paragraphs placed after the description. */
	notes?: string[];
}

export interface Register {
	id: RegisterId;
	name: string;
	cycle: 17 | 13;
	prefix: 'S-17' | 'T-13';
}

/** The ten naming rules of the Registry. Author-only vocabulary; never rendered. */
export type NamingRule =
	| 'R1-form'
	| 'R2-dog-word'
	| 'R3-cicada'
	| 'R4-wit'
	| 'R5-society-noun'
	| 'R6-overt-cleverness'
	| 'R7-unshowy-seat'
	| 'R8-pre-1900'
	| 'R9-no-city'
	| 'R10-no-state';

export type SeatKind =
	| 'estate'
	| 'village'
	| 'river'
	| 'sound'
	| 'island'
	| 'region'
	| 'neighborhood'
	| 'harbor'
	| 'valley'
	| 'wing'
	| 'state'
	| 'city'
	| 'none';

/** Author-only naming metadata. NEVER rendered (tested). */
export interface NamingRecord {
	/** The seat portion of the name, or the wing descriptor. */
	seat: string;
	seatKind: SeatKind;
	/** Year the seat was founded or settled; required for non-wing seats. */
	seatFounded?: number;
	/** The type noun as registered. */
	typeNoun: string;
	/** Rules this name breaks. Empty for a conforming name. */
	violates: NamingRule[];
	/** Author's note on the breach, for consistency only. */
	note?: string;
}

export interface Clause {
	/** Clause number as printed, e.g. "II.1" or "(a)". */
	no: string;
	/** Defined term, rendered italic and followed by a comma, for lettered sub-clauses. */
	term?: string;
	text: string;
	/** Disqualifying clause: renders an adverse mark. */
	disqualifying?: boolean;
	clauses?: Clause[];
}

export interface BreedStandardText {
	appearance: string[];
	chorus: string[];
	temperament: string[];
	exuvia: string[];
}

export interface Breed {
	slug: string;
	name: string;
	group: GroupId;
	register: RegisterId;
	varieties: Variety[];
	/** Year of recognition by the Society. */
	recognized: number;
	hostTree: { common: string; botanical: string };
	/** Roman numeral of the brood; fixes the emergence phase. */
	brood: string;
	/** A year in which the breed's line emerges; all emergences are congruent to it mod cycle. */
	phaseYear: number;
	purpose: string;
	/** The lede paragraph for the breed page. */
	lede: string;
	standard: BreedStandardText;
	faults: string[];
	disqualifications: string[];
	history: string[];
	plate: PlateRef;
	photos: PlateRef[];
	diagram: DiagramId;
	/** Violators only. */
	registrationLetter?: { media: MediaRef; date: string; dateWritten: string };
	/** Contextual disclaimers shown on the breed page. */
	disclaimers: DisclaimerId[];
	/** Author-only. Never rendered. */
	naming: NamingRecord;
}

export type DiagramId =
	| 'dorsal-anatomy'
	| 'wing-venation'
	| 'clear-wing-venation'
	| 'smoke-wing-venation'
	| 'flat-wing-venation'
	| 'chorus-apparatus'
	| 'microcada-scale'
	| 'kilocada-perch'
	| 'summons-ring'
	| 'team-harness'
	| 'perimeter-deployment'
	| 'exuvia-mount';

/** The Foundation Register: root animals whose parentage is not of record. */
export interface FoundationAnimal {
	regNo: string;
	name: string;
	breed: string;
	variety: Variety;
	sex: Sex;
	broodYear: number;
	eyes: EyeColor;
	owner: string;
	note?: string;
}

export interface Individual {
	regNo: string;
	name: string;
	breed: string;
	variety: Variety;
	sex: Sex;
	/** The cohort year: sire and dam broodYear + cycle. */
	broodYear: number;
	/** Stragglers only: actual emergence, four years early. */
	actualEmergence?: number;
	sire: string;
	dam: string;
	eyes: EyeColor;
	titles: string[];
	exuvia: string;
	owner: string;
	standing: Standing;
	/** Required whenever standing is not 'good'. */
	disqualification?: string;
	/** Recorded without comment, e.g. Vigil attachment to staff. */
	remark?: string;
	/** Hand-authored notables are displayed in the Stud Book index; ancestors are reachable by link. */
	notable?: boolean;
	sale?: string;
}

export interface Exuvia {
	id: string;
	/** Registration number of the animal, Stud Book or Foundation Register. */
	individual: string;
	title: string;
	holder: string;
	cabinet: string;
	provenance: string[];
	lastSale?: string;
	plate: PlateRef;
}

export interface Officer {
	office: string;
	name: string;
	since: number;
}

export interface FormerJudge {
	name: string;
	from: string;
	to: string;
}

export interface Committee {
	slug: string;
	name: string;
	members: string[];
	remit: string;
	record: { year: number; entry: string }[];
	/** Rendered as dashes for the Working Group. */
	blank?: boolean;
}

export interface BylawArticle {
	numeral: string;
	title: string;
	clauses: { no: string; text: string; amended?: string }[];
}

export type NoticeKind = 'notice' | 'disciplinary' | 'statement' | 'typed';

export interface Notice {
	slug: string;
	kind: NoticeKind;
	kindLabel: string;
	title: string;
	/** ISO date of entry. */
	date: string;
	/** Written-out date line, e.g. "Entered the ninth of March, 2026". */
	dateLine: string;
	body: string[];
	mark?: string;
	signature?: string;
	current?: boolean;
}

export interface Testimonial {
	family: string;
	seat: string;
	since: number;
	body: string[];
	plate: PlateRef;
	era: PlateEra;
}

export interface CatalogueItem {
	slug: string;
	ref: string;
	name: string;
	category: CatalogueCategory;
	text: string;
	specification: { label: string; value: string }[];
	materials: string;
	leadTime: string;
	plates: PlateRef[];
	disclaimers: DisclaimerId[];
}

export type CatalogueCategory =
	| 'Cabinets'
	| 'Plinths and Perches'
	| 'The Vigil'
	| 'Handling and Protection'
	| 'Root Stewardship'
	| 'Emergence Day'
	| 'The Supper Club';

export interface Supper {
	slug: string;
	/** ISO date. */
	date: string;
	dateline: string;
	attendance: { label: string; value: string }[];
	items: string[];
	menu: string[];
	seating: string[];
	plates: PlateRef[];
}

export type FoundingForm =
	| 'Monograph'
	| 'Dissertation'
	| 'Pamphlet'
	| 'Newsletter'
	| 'Lecture'
	| 'Letter'
	| 'Article'
	| 'Memoir'
	| 'Catalogue';

export interface FoundingWork {
	author: string;
	/** Surname as used in attributed sentences, e.g. "Halloran". */
	surname: string;
	/** Citation text after the author, may contain the title. */
	title: string;
	citation: string;
	year: number;
	form: FoundingForm;
	kind: string;
	alleges: string;
	basis: string;
}

export type Continent =
	'North America' | 'South America' | 'Europe' | 'Africa' | 'Asia' | 'Oceania' | 'Antarctica';

export interface Chapter {
	name: string;
	continent: Continent;
	seat: string;
	chartered: number;
	secretary: string;
	meets: string;
	breeds: string[];
	nextEmergence: string;
	/** Map coordinates on the world plate, longitude and latitude in degrees. */
	lon: number;
	lat: number;
}

export type DisclaimerId =
	| 'hearing'
	| 'oxygen'
	| 'county-notification'
	| 'vigil-attendance'
	| 'bereavement'
	| 'resale'
	| 'home-inspection'
	| 'magnification'
	| 'use-of-name';

export interface Disclaimer {
	id: DisclaimerId;
	label: string;
	body: string[];
}

export type PlateEra = '1890s' | '1920s' | '1950s' | '1980s' | 'present';

/** A running reference among the membership. `origin` is author-only and never rendered. */
export interface RunningReference {
	id: string;
	label: string;
	/** Author-only. Never rendered (tested). */
	origin: string;
	/** Matches every rendered appearance. */
	marker: RegExp;
	/** Each place the reference surfaces; at least three distinct routes. */
	appearances: { route: string; where: string }[];
}
