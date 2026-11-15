/**
 * Hand-authored Stud Book entries. scripts/build-studbook.ts places each seed into the cohort of
 * its breed and year, gives it parents from the previous cohort, and generates everything else.
 */
import type { EyeColor, Sex, Standing, Variety } from './types.ts';

export interface Seed {
	breed: string;
	year: number;
	sex: Sex;
	name: string;
	family: string;
	regNo?: string;
	variety?: Variety;
	eyes?: EyeColor;
	titles?: string[];
	owner?: string;
	exuvia?: string;
	standing?: Standing;
	disqualification?: string;
	straggler?: boolean;
	remark?: string;
	sale?: string;
	notable?: boolean;
	/** Set by the generator. */
	claimed?: boolean;
}

/** Numbers of animals struck from the Stud Book. Recorded in Notices; never issued again. */
export const RESERVED_NUMBERS = ['S-17·00702', 'S-17·00119', 'T-13·00140'];

export const SEEDS: Seed[] = [
	// The first animal of record in the Foundation Register.
	{
		breed: 'allegheny-drayer',
		year: 1897,
		sex: 'male',
		name: 'Sallowes Provost',
		family: 'Sallowes',
		regNo: 'F-17·00001',
		variety: 'kilocada'
	},
	{
		breed: 'tuxedo-warder',
		year: 2004,
		sex: 'male',
		name: 'Ormsby Lantern',
		family: 'Ormsby',
		regNo: 'S-17·00772',
		eyes: 'blue',
		variety: 'standard',
		titles: ['Gr. Ch.'],
		owner: 'A private collector in the aerospace sector',
		exuvia: 'Cabinet, private collection',
		sale: 'Sold privately in 2005 for a sum in excess of twelve million dollars.',
		notable: true
	},
	{
		breed: 'newport-vesper',
		year: 1936,
		sex: 'male',
		name: 'Haverill Hesperus',
		family: 'Haverill',
		regNo: 'S-17·00115',
		owner: 'Mrs. Cordelia Haverill, Bellevue Avenue',
		exuvia: 'Cabinet, the Haverill collection, Bellevue Avenue',
		titles: ['Ch.'],
		notable: true
	},
	{
		breed: 'newport-vesper',
		year: 1953,
		sex: 'male',
		name: 'Ashby Evensong',
		family: 'Ashby',
		regNo: 'S-17·00260',
		owner: 'Mrs. Lavinia Ashby, Bellevue Avenue',
		exuvia: 'Hatbox, the Ashby collection, Bellevue Avenue',
		notable: true
	},
	{
		breed: 'newport-vesper',
		year: 2021,
		sex: 'male',
		name: 'Haverill-Wyck Nocturne',
		family: 'Haverill',
		regNo: 'S-17·00922',
		owner: 'Mrs. Haverill-Wyck, Bellevue Avenue',
		titles: ['Ch.'],
		notable: true
	},
	{
		breed: 'allegheny-drayer',
		year: 1965,
		sex: 'female',
		name: 'Calloway Diligence',
		family: 'Calloway',
		regNo: 'S-17·00357',
		variety: 'kilocada',
		owner: 'The Calloway family, Aiken',
		exuvia: 'Freestanding, the long gallery at Aiken',
		titles: ['W.M.'],
		notable: true
	},
	{
		breed: 'wye-stop',
		year: 2012,
		sex: 'male',
		name: 'Ostrander Steadfast',
		family: 'Ostrander',
		regNo: 'S-17·00820',
		owner: 'The Ostrander family, Wye River',
		exuvia: 'Cabinet, the Ostrander collection, Wye River',
		titles: ['F.T.Ch.'],
		notable: true
	},
	{
		breed: 'dark-harbor-constant',
		year: 2023,
		sex: 'female',
		name: 'Lisle Abiding',
		family: 'Lisle',
		regNo: 'S-17·00952',
		owner: 'Mrs. Eleanor Thackery Lisle, Dark Harbor',
		exuvia: 'Cabinet, the Lisle collection, Dark Harbor',
		notable: true
	},
	{
		breed: 'northern-shrib-locust',
		year: 2021,
		sex: 'male',
		name: 'Dunmore Composure',
		family: 'Dunmore',
		regNo: 'S-17·00928',
		variety: 'kilocada',
		owner: 'The Dunmore family, Norfolk',
		exuvia: 'Freestanding, the library at Norfolk',
		notable: true
	},
	{
		breed: 'aiken-marker',
		year: 2015,
		sex: 'male',
		name: 'Penhallow Stands-Fast',
		family: 'Penhallow',
		regNo: 'S-17·00849',
		owner: 'The Penhallow family, Aiken',
		titles: ['F.T.Ch.', 'Ch.'],
		notable: true
	},
	{
		breed: 'brandywine-alarum',
		year: 1962,
		sex: 'male',
		name: 'Sallowes Tocsin',
		family: 'Sallowes',
		regNo: 'S-17·00320',
		eyes: 'blue',
		titles: ['Ch.'],
		owner: 'The Sallowes family, Chadds Ford',
		notable: true
	},
	{
		breed: 'maryland-molt-liquor',
		year: 2019,
		sex: 'male',
		name: 'Breckin Sidecar',
		family: 'Breckin',
		regNo: 'S-17·00892',
		owner: 'The Breckin family, Talbot County',
		titles: ['Ch.'],
		notable: true
	},
	{
		breed: 'palm-beach-water-retriever',
		year: 2022,
		sex: 'female',
		name: 'Treadway Undertow',
		family: 'Treadway',
		regNo: 'S-17·00946',
		owner: 'The Treadway family, Palm Beach',
		notable: true
	},
	{
		breed: 'dutchess-taffy-cicada',
		year: 2014,
		sex: 'female',
		name: 'Vance Sweetmeat',
		family: 'Vance',
		regNo: 'S-17·00838',
		variety: 'microcada',
		owner: 'The Vance family, Millbrook',
		notable: true
	},
	{
		breed: 'beacon-hill-minim',
		year: 2024,
		sex: 'female',
		name: 'Sallowes Minor',
		family: 'Sallowes',
		regNo: 'T-13·00165',
		variety: 'microcada',
		owner: 'The Sallowes family, Louisburg Square',
		notable: true
	},
	// Stragglers. Numbers as cited in Notices.
	{
		breed: 'tidewater-beater',
		year: 2021,
		sex: 'male',
		name: 'Garrick Forward',
		family: 'Garrick',
		regNo: 'S-17·00874',
		straggler: true,
		notable: true
	},
	{
		breed: 'brandywine-alarum',
		year: 2013,
		sex: 'female',
		name: 'Corwin Haste',
		family: 'Corwin',
		regNo: 'S-17·00655',
		straggler: true,
		notable: true
	},
	{
		breed: 'edisto-pavane',
		year: 2020,
		sex: 'male',
		name: 'Ravenel Overture',
		family: 'Ravenel',
		regNo: 'T-13·00158',
		straggler: true,
		notable: true
	},
	// Attendance at the Vigil. Entered under the name of the person in attendance.
	{
		breed: 'dark-harbor-constant',
		year: 2006,
		sex: 'male',
		name: 'Lisle Tenant',
		family: 'Lisle',
		regNo: 'S-17·00784',
		owner: 'Mr. R. Ames, under-gardener, Dark Harbor',
		remark: 'Entered under the name of the person in attendance at the Vigil.',
		notable: true
	},
	{
		breed: 'aiken-marker',
		year: 1964,
		sex: 'female',
		name: 'Holloway Vigilance',
		family: 'Holloway',
		regNo: 'S-17·00345',
		owner: 'Mr. D. Kerrigan, night footman, Aiken',
		remark: 'Entered under the name of the person in attendance at the Vigil.',
		notable: true
	},
	{
		breed: 'piedmont-familiar',
		year: 2026,
		sex: 'female',
		name: 'Merriman Biddable',
		family: 'Merriman',
		regNo: 'S-17·00976',
		owner: 'Mrs. J. Okafor, housekeeper, Upperville',
		remark: 'Entered under the name of the person in attendance at the Vigil.',
		notable: true
	},
	// Entered by Registrar Lowell.
	{
		breed: 'ligonier-ostler',
		year: 1933,
		sex: 'male',
		name: 'Ridley Groom',
		family: 'Ridley',
		regNo: 'T-13·00004',
		owner: 'The Ridley family, Ligonier',
		remark: 'Emerged at a quarter past thirteen on the eleventh of May.',
		notable: true
	}
];
