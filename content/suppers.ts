import type { Supper } from './types.ts';

export const SUPPER_CLUB_INTRO: string[] = [
	'The Supper Club meets biannually, at the Society’s rooms or at the house of a member. Its minutes are kept by the Secretary, confirmed at the following supper and printed here as confirmed. They are not annotated.'
];

export const SUPPERS: Supper[] = [
	{
		slug: 'november-1913',
		date: '1913-11-14',
		dateline:
			'Held at the Society’s rooms on the fourteenth of November, 1913. The President in the chair. The members sat down at a quarter past thirteen.',
		attendance: [
			{ label: 'Present', value: 'Thirty-four members' },
			{ label: 'Apologies', value: 'Two, received' },
			{ label: 'Guests', value: 'None' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast was proposed, to general approval.',
			'Article XI.4 of the Bylaws having been adopted in the spring, the umbrella was returned to Judge Thorne by the President. Judge Thorne did not open it.',
			'The Registrar reported that the Stud Book for the year had been closed. Mr. Lowell gave the times of entry by his own reckoning and was not asked to repeat them.',
			'The Secretary read the names of members whose lines had emerged in the year. There were no remarks.',
			'The matter of the Tredecim seating was raised and deferred.',
			'There being no further business, the members rose.'
		],
		menu: [
			'Clear turtle soup',
			'Filets of sole, sauce Joinville',
			'Terrapin, Maryland style',
			'Saddle of mutton, red-currant jelly',
			'Canvasback duck, fried hominy',
			'Iced pudding'
		],
		seating: ['The Tredecim members were seated at the side table, pending a decision.'],
		plates: [
			{
				media: 'supper-november-1913-1',
				caption: 'The head table laid for supper. The Society’s rooms, 1913.'
			}
		]
	},
	{
		slug: 'may-1937',
		date: '1937-05-08',
		dateline: 'Held at the Society’s rooms on the eighth of May, 1937. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Fifty-two members' },
			{ label: 'Apologies', value: 'Four, received and not read' },
			{ label: 'Absent', value: 'One, noted' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast was proposed, to general approval.',
			'Mrs. Haverill was presented with the Spoon.',
			'The Registrar reported eleven registrations for Brood X entered as received.',
			'The tenure of Judge Harwell on the panel was noted as concluded, with effect from the previous evening.',
			'The matter of the Tredecim seating was again deferred.',
			'The members rose at a quarter to midnight.'
		],
		menu: [
			'Consommé madrilène',
			'Shad roe and bacon',
			'Breast of guinea hen, bread sauce',
			'Asparagus, sauce hollandaise',
			'Strawberry shortcake',
			'Coffee'
		],
		seating: ['Mr. and Mrs. Haverill were seated at the President’s right.'],
		plates: [
			{
				media: 'supper-may-1937-1',
				caption: 'Members assembled before supper. The Society’s rooms, 1937.'
			}
		]
	},
	{
		slug: 'november-1947',
		date: '1947-11-15',
		dateline:
			'Held at Fairlie on the fifteenth of November, 1947, by invitation of Major and Mrs. Fairlie. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Forty-seven members' },
			{ label: 'Apologies', value: 'Six, received' },
			{ label: 'Guests', value: 'The Chaplain' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The President spoke briefly of the members lost in the years since the last supper held at Fairlie. The members stood.',
			'The usual toast was proposed, to general approval.',
			'The Registrar reported the entries for Brood IV closed.',
			'The Ethics Committee reported no findings.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at eleven.'
		],
		menu: [
			'Clam broth',
			'Lobster Newburg',
			'Roast saddle of lamb, mint sauce',
			'Peas, French style',
			'Floating island',
			'Coffee'
		],
		seating: [
			'A second chair was set at the head table.',
			'The Tredecim members were seated in the library, by arrangement with the house.'
		],
		plates: [
			{
				media: 'supper-november-1947-1',
				caption: 'Supper in the long room. Fairlie, 1947.'
			}
		]
	},
	{
		slug: 'november-1953',
		date: '1953-11-21',
		dateline:
			'Held at the Society’s rooms on the twenty-first of November, 1953. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Fifty-eight members' },
			{ label: 'Apologies', value: 'Three, received and not read' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast was proposed, to general approval.',
			'Mrs. Ashby’s hat was remarked upon.',
			'The Cicadas Club was toasted from the floor. The Chair did not rise.',
			'The Registrar reported the Stud Book for Brood X closed at thirty-one entries.',
			'The amendment of the standard of the Newport Vesper in respect of the exuvia was confirmed.',
			'The tenure of Judge Ellery Coe on the panel was noted as concluded, with effect from the fourteenth.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at half past eleven.'
		],
		menu: [
			'Vichyssoise',
			'Dover sole meunière',
			'Fillet of beef in pastry',
			'Pommes Anna',
			'Charlotte russe',
			'Coffee'
		],
		seating: ['The Tredecim members were seated as before.'],
		plates: [
			{
				media: 'supper-november-1953-1',
				caption: 'The President’s table. The Society’s rooms, 1953.'
			}
		]
	},
	{
		slug: 'may-1966',
		date: '1966-05-14',
		dateline:
			'Held at the Society’s rooms on the fourteenth of May, 1966. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty members' },
			{ label: 'Apologies', value: 'Five, received' },
			{ label: 'Guests', value: 'Two, at the invitation of the President' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The toast to the Ninth was proposed by Mr. Ormsby and carried.',
			'The usual toast was proposed, to general approval.',
			'The Registrar reported nineteen registrations entered as received.',
			'The Committee on Admissions reported two families placed under consideration.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at midnight.'
		],
		menu: [
			'Crabmeat cocktail',
			'Beef consommé, cheese straws',
			'Roast tenderloin, sauce béarnaise',
			'Wild rice',
			'Baked Alaska',
			'Coffee'
		],
		seating: ['Mr. Ormsby was seated at the President’s right.'],
		plates: [
			{
				media: 'supper-may-1966-1',
				caption: 'Members on the terrace before supper. The Society’s rooms, 1966.'
			}
		]
	},
	{
		slug: 'november-1971',
		date: '1971-11-20',
		dateline:
			'Held at the Society’s rooms on the twentieth of November, 1971. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty-one members' },
			{ label: 'Apologies', value: 'Five, received and not read' },
			{ label: 'Absent', value: 'Two, noted' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast was proposed, to general approval.',
			'The report of the Field Trials was received. The ruling of the Council concerning pigeon was read.',
			'Mr. Dunmore’s letter of registration was read and entered as received.',
			'A shrib was declared by the Chair.',
			'The umbrella was not raised.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at a quarter to one.'
		],
		menu: [
			'Oysters on the half shell',
			'Turtle soup',
			'Roast pheasant, bread sauce',
			'Purée of chestnuts',
			'Trifle',
			'Coffee'
		],
		seating: ['Mr. and Mrs. Dunmore were seated at the second table.'],
		plates: [
			{
				media: 'supper-november-1971-1',
				caption: 'Supper at the long table. The Society’s rooms, 1971.'
			}
		]
	},
	{
		slug: 'may-1978',
		date: '1978-05-13',
		dateline:
			'Held at the Society’s rooms on the thirteenth of May, 1978. The President in the chair. Supper was called at half past thirteen.',
		attendance: [
			{ label: 'Present', value: 'Sixty-four members' },
			{ label: 'Apologies', value: 'Seven, received' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast to the Ninth was proposed, to general approval.',
			'A reading was given by Mr. Haddon. There were no questions.',
			'Mrs. Ardsley observed that it was boxwood, to general approval.',
			'The Registrar reported the entries for Brood I closed.',
			'The Ethics Committee reported no findings.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at a quarter to one.'
		],
		menu: [
			'Cold cucumber soup',
			'Poached salmon, sauce verte',
			'Rack of lamb',
			'New potatoes',
			'Strawberries and cream',
			'Coffee',
			'Boxwood at each place.'
		],
		seating: ['Mrs. Ardsley was seated at the President’s left.'],
		plates: [
			{
				media: 'supper-may-1978-1',
				caption: 'Late in the evening. The Society’s rooms, 1978.'
			}
		]
	},
	{
		slug: 'november-1988',
		date: '1988-11-19',
		dateline:
			'Held at the Society’s rooms on the nineteenth of November, 1988. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty-six members' },
			{ label: 'Apologies', value: 'Four, received and not read' },
			{ label: 'Absent', value: 'One, noted' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast was proposed, to general approval.',
			'Mrs. Pemberton was presented with the Spoon.',
			'Mr. Ardsley reported a pigeon, to general approval.',
			'The amendment of Article IX, made by the Council on the fourteenth, was reported. The tenure of Judge Corliss on the panel was noted as concluded.',
			'Mr. Vail arrived two days.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at one.'
		],
		menu: [
			'Smoked trout, horseradish cream',
			'Consommé',
			'Roast loin of veal',
			'Gratin dauphinois',
			'Crème brûlée',
			'Coffee'
		],
		seating: ['A second chair was set at the head table, as is customary.'],
		plates: [
			{
				media: 'supper-november-1988-1',
				caption: 'After supper. The Society’s rooms, 1988.'
			},
			{
				media: 'supper-november-1988-2',
				caption: 'The head table. The Society’s rooms, 1988.'
			}
		]
	},
	{
		slug: 'may-2026',
		date: '2026-05-16',
		dateline:
			'Held at the Society’s rooms on the sixteenth of May, 2026. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Seventy-three members' },
			{ label: 'Apologies', value: 'Six, received and not read' },
			{ label: 'Absent', value: 'One, noted' }
		],
		items: [
			'Grace was said by the Chaplain.',
			'The usual toast to the Ninth was proposed, to general approval.',
			'Mrs. Haverill-Wyck was again presented with the Spoon.',
			'The hat was passed, and returned.',
			'Mr. Pemberton arrived two days, to general approval.',
			'Mr. Ormsby referred to the Cicadas Club. The reference was not minuted.',
			'The Registrar reported the entries for Brood XV closed.',
			'The objection of the Council concerning the designation of a leased model was reported as lodged. No reply has been recorded.',
			'The Ethics Committee reported no findings.',
			'The matter of the Tredecim seating was deferred.',
			'The members rose at a quarter past one.'
		],
		menu: [
			'Chilled pea soup',
			'Soft-shell crab, brown butter',
			'Spring lamb, morels',
			'Rhubarb fool',
			'Angels on horseback',
			'Coffee',
			'Boxwood at each place.'
		],
		seating: ['A second chair was set at the head table, as is customary.'],
		plates: [
			{
				media: 'supper-may-2026-1',
				caption: 'The long table laid for supper. The Society’s rooms, 2026.'
			},
			{
				media: 'supper-may-2026-2',
				caption: 'Members leaving at the end of the evening. The Society’s rooms, 2026.'
			}
		]
	}
];
