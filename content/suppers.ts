import type { Supper } from './types.ts';

export const SUPPER_CLUB_INTRO: string[] = [
	'The Supper Club meets twice a year, in May and November, at our rooms or at a member’s house. The Secretary takes the minutes. It’s the worst part of the job. They’re approved at the next supper and printed here exactly as approved, which means they’ve already been argued over once.'
];

export const SUPPERS: Supper[] = [
	{
		slug: 'november-1913',
		date: '1913-11-14',
		dateline:
			'Friday, the fourteenth of November, 1913, at the Society’s rooms. The President in the chair. We sat down at a quarter past thirteen.',
		attendance: [
			{ label: 'Present', value: 'Thirty-four members' },
			{ label: 'Regrets', value: 'Two, both by letter' },
			{ label: 'Guests', value: 'None' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The usual toast.',
			'Article XI.4 having passed in the spring, the President returned Judge Thorne’s umbrella to him. The Judge thanked him and put it under his chair.',
			'The Registrar reports the Stud Book closed for the year. Mr. Lowell gave the hatching times by his own watch, as is now his habit.',
			'I read out the names of the members whose lines hatched this year, and the room drank to each.',
			'The seating of the thirteen-year members came up again and was put off.',
			'That was all the business, and we rose.'
		],
		menu: [
			'Clear turtle soup',
			'Sole, Joinville sauce',
			'Terrapin, Maryland style',
			'Saddle of mutton, red currant jelly',
			'Canvasback duck, fried hominy',
			'Iced pudding'
		],
		seating: ['The thirteen-year members at the side table, for now.'],
		plates: [
			{
				media: 'supper-november-1913-1',
				caption: 'The head table, set for supper. The Society’s rooms, 1913.'
			}
		]
	},
	{
		slug: 'may-1937',
		date: '1937-05-08',
		dateline:
			'Saturday, the eighth of May, 1937, at the Society’s rooms. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Fifty-two members' },
			{ label: 'Regrets', value: 'Four, filed' },
			{ label: 'Absent', value: 'One, and we know who' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The usual toast.',
			'The President presented Mrs. Haverill with the Spoon. Mr. Haverill has had it mounted on walnut. She kept it in her lap through dinner.',
			'Eleven new registrations for Brood X.',
			'Judge Harwell is off the panel, as of last night.',
			'Thirteen-year seating put off again.',
			'We rose at a quarter to twelve.'
		],
		menu: [
			'Jellied consommé',
			'Shad roe and bacon',
			'Guinea hen, bread sauce',
			'Asparagus, hollandaise',
			'Strawberry shortcake',
			'Coffee'
		],
		seating: ['Mr. and Mrs. Haverill on the President’s right.'],
		plates: [
			{
				media: 'supper-may-1937-1',
				caption: 'Members gathered before supper. The Society’s rooms, 1937.'
			}
		]
	},
	{
		slug: 'november-1947',
		date: '1947-11-15',
		dateline:
			'Saturday, the fifteenth of November, 1947, at Fairlie, as guests of Major and Mrs. Fairlie. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Forty-seven members' },
			{ label: 'Regrets', value: 'Six' },
			{ label: 'Guests', value: 'The Chaplain' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The President said a few words about the members we’ve lost since we last had supper at Fairlie, and we all stood.',
			'The usual toast.',
			'Brood IV entries are closed.',
			'Ethics Committee: all clear.',
			'Thirteen-year seating put off.',
			'We rose at eleven.'
		],
		menu: [
			'Clam broth',
			'Lobster Newburg',
			'Saddle of lamb, mint sauce',
			'Peas with lettuce and onions',
			'Floating island',
			'Coffee'
		],
		seating: [
			'A second chair at the head table.',
			'The thirteen-year members ate in the library. The Fairlies offered it.'
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
			'Saturday, the twenty-first of November, 1953, at the Society’s rooms. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Fifty-eight members' },
			{ label: 'Regrets', value: 'Three, filed' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The usual toast.',
			'Everybody had something to say about Mrs. Ashby’s hat, and Mrs. Ashby had something to say back.',
			'Somebody at the back table proposed a toast to the Cicadas Club. Most of the room drank it.',
			'Brood X closed at thirty-one entries.',
			'The change to the Newport Vesper standard on shells is confirmed.',
			'Judge Ellery Coe is off the panel, effective the fourteenth.',
			'Thirteen-year seating put off.',
			'We rose at half past eleven.'
		],
		menu: [
			'Vichyssoise',
			'Dover sole, brown butter',
			'Fillet of beef in pastry',
			'Potatoes Anna',
			'Charlotte russe',
			'Coffee'
		],
		seating: ['The thirteen-year members where they were last time.'],
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
		dateline: 'Saturday, May 14, 1966, at the Society’s rooms. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty members' },
			{ label: 'Regrets', value: 'Five' },
			{ label: 'Guests', value: 'Two, the President’s' }
		],
		items: [
			'Grace, by the Chaplain.',
			'Mr. Ormsby stood up and gave us a toast to the Ninth. Everybody drank it, the Calloways included.',
			'Then the usual toast.',
			'Nineteen new registrations.',
			'Admissions is looking at two families.',
			'Thirteen-year seating put off.',
			'We rose at midnight.'
		],
		menu: [
			'Crabmeat cocktail',
			'Beef consommé, cheese straws',
			'Roast tenderloin, béarnaise',
			'Wild rice',
			'Baked Alaska',
			'Coffee'
		],
		seating: ['Mr. Ormsby on the President’s right.'],
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
		dateline: 'Saturday, November 20, 1971, at the Society’s rooms. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty-one members' },
			{ label: 'Regrets', value: 'Five, filed' },
			{ label: 'Absent', value: 'Two, and they know who they are' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The usual toast.',
			'Field Trials report. The Council’s ruling on pigeon was read out, and the pigeon talk went on until I put up the umbrella.',
			'Mr. Dunmore’s registration letter was read out and sent on to the Registrar.',
			'The President declared a shrib.',
			'Thirteen-year seating put off.',
			'We rose at a quarter to one.'
		],
		menu: [
			'Oysters on the half shell',
			'Turtle soup',
			'Roast pheasant, bread sauce',
			'Chestnut purée',
			'Trifle',
			'Coffee'
		],
		seating: ['Mr. and Mrs. Dunmore at the second table.'],
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
			'Saturday, May 13, 1978, at the Society’s rooms. The President in the chair. Supper at half past thirteen.',
		attendance: [
			{ label: 'Present', value: 'Sixty-four members' },
			{ label: 'Regrets', value: 'Seven' }
		],
		items: [
			'Grace, by the Chaplain.',
			'Toast to the Ninth.',
			'Mr. Haddon read aloud from something he’d cut out of a newspaper.',
			'Mrs. Ardsley said it’s boxwood. Agreed all round.',
			'Brood I entries are closed.',
			'Ethics Committee: all clear.',
			'Thirteen-year seating put off.',
			'We rose at a quarter to one.'
		],
		menu: [
			'Cold cucumber soup',
			'Poached salmon, green sauce',
			'Rack of lamb',
			'New potatoes',
			'Strawberries and cream',
			'Coffee',
			'A sprig of boxwood at every place'
		],
		seating: ['Mrs. Ardsley on the President’s left.'],
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
		dateline: 'Saturday, November 19, 1988, at the Society’s rooms. The President in the chair.',
		attendance: [
			{ label: 'Present', value: 'Sixty-six members' },
			{ label: 'Regrets', value: 'Four, filed' },
			{ label: 'Absent', value: 'One (see item 6)' }
		],
		items: [
			'Grace, by the Chaplain.',
			'The usual toast.',
			'Mrs. Pemberton got the Spoon.',
			'Mr. Ardsley reported a pigeon. Applause.',
			'The Council’s change to Article IX, made on the fourteenth, was reported. Judge Corliss is off the panel.',
			'Mr. Vail arrived two days.',
			'Thirteen-year seating put off.',
			'We rose at one.'
		],
		menu: [
			'Smoked trout, horseradish cream',
			'Consommé',
			'Roast loin of veal',
			'Potatoes au gratin',
			'Crème brûlée',
			'Coffee'
		],
		seating: ['The second chair at the head table, as always.'],
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
		dateline: 'Saturday, May 16, 2026, at the Society’s rooms. Everard Wyck in the chair.',
		attendance: [
			{ label: 'Present', value: 'Seventy-three members' },
			{ label: 'Regrets', value: 'Six, filed' },
			{ label: 'Absent', value: 'One (see item 5)' }
		],
		items: [
			'Grace, by the Chaplain.',
			'Toast to the Ninth.',
			'Mrs. Haverill-Wyck got the Spoon again.',
			'The hat was passed, and came back.',
			'Mr. Pemberton arrived two days. Big round of applause.',
			'Mr. Ormsby called us the Cicadas Club during the lamb and got a laugh.',
			'Brood XV entries are closed.',
			'Treasurer’s report. Dues stay where they are unless we go back to quarter-rate.',
			'The Council has filed its objection about the leased model and the name it’s using.',
			'Ethics Committee: all clear.',
			'Thirteen-year seating put off again. We’ve been putting it off since before any of us were born.',
			'We rose at a quarter past one.'
		],
		menu: [
			'Chilled pea soup',
			'Soft-shell crab, brown butter',
			'Spring lamb with morels',
			'Rhubarb fool',
			'Angels on horseback',
			'Coffee',
			'Boxwood at every place'
		],
		seating: ['The second chair at the head table, as always.'],
		plates: [
			{
				media: 'supper-may-2026-1',
				caption: 'The long table, set for supper. The Society’s rooms, 2026.'
			},
			{
				media: 'supper-may-2026-2',
				caption: 'Members heading home at the end of the night. The Society’s rooms, 2026.'
			}
		]
	}
];
