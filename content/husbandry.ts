import type { DisclaimerId, PlateRef } from './types.ts';
import { LOCUS_SENTENCE, MASSOSPORA } from './site.ts';

export interface HusbandryTable {
	caption: string;
	columns: string[];
	rows: string[][];
}

export interface HusbandrySection {
	numeral: string;
	heading: string;
	paragraphs: string[];
	table?: HusbandryTable;
}

export interface HusbandryPage {
	slug: string;
	title: string;
	numeral: string;
	/** One sentence for the Husbandry index. */
	summary: string;
	lede: string;
	sections: HusbandrySection[];
	plates: PlateRef[];
	disclaimers: DisclaimerId[];
	discussesHealth: boolean;
}

export const HUSBANDRY_INTRO: string[] = [
	'This is how we keep them, from the day you commission a line to the day it hatches, and then for the week it’s with you. Most of it is common sense. The rest is here because somebody got it wrong.',
	'If your breed standard says something different, go by the breed standard. For that breed, it wins.'
];

export const HUSBANDRY: HusbandryPage[] = [
	{
		slug: 'host-trees',
		title: 'The Tree',
		numeral: 'I',
		summary: 'Picking the tree your line grows up on, planting it, and having it staked.',
		lede: 'Every animal we register, apart from the large ones, grows up on the roots of one tree, and that tree is picked for it when you commission the line. It’s that animal’s tree and it isn’t for anything else. No swing, no hammock, no lights at Christmas.',
		sections: [
			{
				numeral: 'I.1',
				heading: 'Picking the tree',
				paragraphs: [
					'Your breed standard tells you the species. If it allows more than one, you pick, and we write your pick down when you commission the line. You can’t change it later. People ask every year.',
					'The tree has to be at least forty years old when you commission, with sound roots, in ground nobody has dug or planted in the last seventeen years. So the old rose garden is out. We know. It also has to stand at least sixty feet from any other host tree of the same brood, yours or your neighbor’s.'
				],
				table: {
					caption: 'The species we usually approve.',
					columns: ['Species', 'Botanical name', 'Book'],
					rows: [
						['White oak', 'Quercus alba', '17-year'],
						['Copper beech', 'Fagus sylvatica f. purpurea', '17-year'],
						['Sugar maple', 'Acer saccharum', '17-year'],
						['Black walnut', 'Juglans nigra', '17-year'],
						['Tulip tree', 'Liriodendron tulipifera', '17-year'],
						['American beech', 'Fagus grandifolia', '17-year'],
						['Southern live oak', 'Quercus virginiana', '13-year'],
						['Water oak', 'Quercus nigra', '13-year']
					]
				}
			},
			{
				numeral: 'I.2',
				heading: 'Staking it',
				paragraphs: [
					'When you commission, the Registrar or his deputy comes out and drives an iron stake at the foot of the tree with the line’s registration number on it. The stake stays in as long as the line is in the ground. Don’t let the landscapers move it. They will try.',
					'Nobody else’s line goes on that tree. It doesn’t get pruned unless your root steward says so, and it doesn’t get cut down. If it comes down on its own, in a storm, say, it goes in the stud book with the date it fell.'
				]
			},
			{
				numeral: 'I.3',
				heading: 'Keeping the tree healthy',
				paragraphs: [
					'From the day you commission to the day it hatches, the health of that tree is your problem. If it starts looking worse, tell the Registrar within the week. Don’t wait to see if it perks up. ' +
						MASSOSPORA,
					'Large ones aren’t raised on a single tree. That’s a whole other project, and it has its own page.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-host-trees-1',
				caption: 'Brood X host trees, each with its stake. Bellevue Avenue, 1921.'
			},
			{
				media: 'husbandry-host-trees-2',
				caption: 'The Registrar’s deputy staking a host tree. Aiken, 1964.'
			},
			{
				media: 'husbandry-host-trees-3',
				caption: 'A copper beech staked for a line of Newport Vesper. Newport, 2021.'
			}
		],
		disclaimers: [],
		discussesHealth: true
	},
	{
		slug: 'root-stewardship',
		title: 'Root Stewards',
		numeral: 'II',
		summary: 'Who looks after the nymph underground for seventeen years, and how.',
		lede: 'The nymph spends all seventeen years underground on the roots of its tree. A root steward looks after it the whole time and never once sees it. That’s the job.',
		sections: [
			{
				numeral: 'II.1',
				heading: 'The steward',
				paragraphs: [
					'Every line in the ground has a root steward. You pick one and the Registrar approves them. A steward can keep more than one line, but never two from the same brood, however good they are and however much your neighbor is paying them.',
					'The steward comes out to the tree on the first of every month and writes it down in the steward’s book. The book goes to the Registrar when the line hatches.'
				]
			},
			{
				numeral: 'II.2',
				heading: 'What the steward uses',
				paragraphs: [
					'Stewards get a brass root probe, a sap gauge, soil thermometers for three depths and a listening tube. All of it comes from Equipment, and none of it gets lent out. If your steward borrowed a probe from the people next door, find a new steward.',
					'The probe goes in on each of the four sides of the tree in turn, and never twice in the same spot in the same year.'
				],
				table: {
					caption: 'What the steward measures, and how often.',
					columns: ['Reading', 'Instrument', 'How often'],
					rows: [
						['Soil temperature at one, three and five feet', 'Soil thermometers', 'Monthly'],
						['Moisture around the roots', 'Root probe', 'Monthly'],
						['Rise of sap', 'Sap gauge', 'Monthly, March to October'],
						['Movement around the roots', 'Listening tube', 'Every three months'],
						['Girth of the trunk at chest height', 'Steel tape', 'Once a year']
					]
				}
			},
			{
				numeral: 'II.3',
				heading: 'Leave the nymph alone',
				paragraphs: [
					'Nobody digs it up, uncovers it or takes a look at it before it hatches. Not once, not for a photo. A steward who uncovers a nymph is taken off the line, and the line goes in the book as disturbed. That stays on it.',
					'If the steward hears movement around the roots in the seventeenth year, the Registrar hears about it the same day.'
				]
			},
			{
				numeral: 'II.4',
				heading: 'When something looks off',
				paragraphs: [
					'If the tree starts looking poorly, or water’s standing around the roots, or something’s growing on the bark, the steward lets the Registrar know that week. He can send one of our officers out to look. ' +
						MASSOSPORA
				]
			}
		],
		plates: [
			{
				media: 'husbandry-root-stewardship-1',
				caption: 'A root steward out on the first of the month. Lenox, 1927.'
			},
			{
				media: 'husbandry-root-stewardship-2',
				caption: 'Listening at the roots by lantern in the seventeenth year. Sewickley, 1985.'
			},
			{
				media: 'husbandry-root-stewardship-3',
				caption: 'The steward’s instruments in their case. At the instrument maker’s, 2019.'
			}
		],
		disclaimers: [],
		discussesHealth: true
	},
	{
		slug: 'when-it-hatches',
		title: 'Being There When It Hatches',
		numeral: 'III',
		summary: 'The first few hours out of the shell, when you need to be in the room by yourself.',
		lede: 'Be there when it hatches, and be there by yourself. For the first few hours it latches on to whoever’s in the room. Every year somebody leaves to take a phone call and comes back to find it’s bonded with the caterer. We put the caterer’s name in the stud book. Rules are rules.',
		sections: [
			{
				numeral: 'III.1',
				heading: 'How long you’re in there',
				paragraphs: [
					'It starts when the nymph has hooked itself onto the perch and the shell splits down the back. It’s over when the adult has hardened and gotten its color, which usually takes four to six hours. Whoever it sees first in that time is who it’s attached to.',
					'Don’t touch the perch after the second drop.'
				]
			},
			{
				numeral: 'III.2',
				heading: 'The room',
				paragraphs: [
					'Use a room you’ve set aside for it. Medium-sized, one door, curtains drawn. The perch goes at the height of your hand when you’re sitting down. One lamp on, with a shade.',
					'The room gets set up the evening the Registrar tells you. Once you’re in, nothing else comes in. Not coffee, not the dog.',
					'If you want a second chair in there, put one in.'
				]
			},
			{
				numeral: 'III.3',
				heading: 'Everybody else',
				paragraphs: [
					'You go in alone. When the Registrar gives the signal, staff go out to the next room and stay there until you call them. The Registrar, or his deputy, waits out there too and writes down when the shell split and when you came out.',
					'Once the shell has split, you don’t leave the room until the adult has hardened. Not for the phone, not for the door, not for anything.'
				]
			},
			{
				numeral: 'III.4',
				heading: 'If you weren’t there',
				paragraphs: [
					'If you weren’t in the room, it’s entered under whoever it attached to.',
					'We don’t reverse it, and nobody but that person gets to show the animal. If that’s your brother-in-law, your brother-in-law shows it.'
				]
			},
			{
				numeral: 'III.5',
				heading: 'The shell',
				paragraphs: [
					'The shell stays on the perch until the next morning. Then you lift it off with the Registrar watching, it gets entered, and it goes in your cabinet.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-the-vigil-1',
				caption: 'A hatching room at dawn, before anybody’s come in. Tuxedo Park, 2021.'
			},
			{
				media: 'husbandry-the-vigil-2',
				caption: 'A room made up for the night of the hatch. Prides Crossing, 1920.'
			},
			{
				media: 'husbandry-the-vigil-3',
				caption: 'Everybody else, waiting in the next room during a hatch. Fishers Island, 1978.'
			}
		],
		disclaimers: ['vigil-attendance'],
		discussesHealth: false
	},
	{
		slug: 'end-of-week',
		title: 'The End of the Week',
		numeral: 'IV',
		summary: 'What we all do when the week is up.',
		lede: 'The adult lives about a week after it hatches. This is what every one of us does when that week is up.',
		sections: [
			{
				numeral: 'IV.1',
				heading: 'The last evening',
				paragraphs: [
					'On the last evening you stay with it. Tell the household, and keep them out of the room. Working and Sporting animals don’t go out on their last day, however close you are to a ribbon.',
					'Write the time down in the book you keep for it.'
				]
			},
			{
				numeral: 'IV.2',
				heading: 'Burying it',
				paragraphs: [
					'Lay it on linen in a walnut box, and bury it the next morning at the foot of its tree, on the side it came up. You go yourself. Keep it short. Other members don’t come unless they’re family.',
					'Large ones are buried in the grove. Leave the perch up until the end of the season.'
				]
			},
			{
				numeral: 'IV.3',
				heading: 'The shell',
				paragraphs: [
					'You’ll have lifted the shell the morning after it hatched, so it’s already in the cabinet. Don’t move it during the week, and don’t move it on the day you bury the animal.'
				]
			},
			{
				numeral: 'IV.4',
				heading: 'The record',
				paragraphs: [
					'The Registrar closes the entry. The stud book goes by the date it hatched. That’s the one people remember.',
					'We don’t write to you when the week is up. Nobody wants that letter.'
				]
			},
			{
				numeral: 'IV.5',
				heading: 'If it looks unwell',
				paragraphs: [
					'If it looks unwell during its week, you can ask one of our officers to come and look at it. The visit goes in the stud book. ' +
						MASSOSPORA
				]
			}
		],
		plates: [
			{
				media: 'husbandry-end-of-week-1',
				caption:
					'The walnut box and linen, laid out the morning of the burial. Little Compton, 2015.'
			},
			{
				media: 'husbandry-end-of-week-2',
				caption: 'A family at the tree the morning after the week. Millbrook, 1950.'
			}
		],
		disclaimers: ['bereavement', 'resale'],
		discussesHealth: true
	},
	{
		slug: 'large-ones',
		title: 'Large Cicadas',
		numeral: 'V',
		summary: 'What you have to build before we’ll register a large one.',
		lede: 'If you want a large one, this is what you have to build. All of it applies from the day you commission the line to the day it hatches, and if you don’t meet it, we don’t register the animal. I’m the one who had ours built, so I’m the one writing this. Read the whole thing before you hire anybody.',
		sections: [
			{
				numeral: 'V.1',
				heading: 'The grove',
				paragraphs: [
					'A large one is raised in a grove of at least twelve trees of whatever species your breed standard says, never on a single tree. The whole root zone goes under a sealed structure. Our contractor wanted to seal “most” of it. Most is not a number.',
					'The perch is steel with an oak core, on a footing of reinforced concrete, and it has to hold at least four times what the adult is expected to weigh when it hatches. Get the engineer’s letter before they pour, not after.'
				]
			},
			{
				numeral: 'V.2',
				heading: 'The air',
				paragraphs: [
					'The air in there stays at 55% oxygen, all day, every day, for the full seventeen years.',
					'You get plus or minus 0.5 percentage points, at every sensor.',
					'If any sensor reads outside that even once, for any length of time, the registration is void. One reading. That’s all it takes.'
				]
			},
			{
				numeral: 'V.3',
				heading: 'The logs',
				paragraphs: [
					'Every sensor logs the oxygen once a second (1 Hz). Every log is written to two separate stores in two separate buildings, and you keep all of it for the life of the line, which is seventeen years. The contractor’s first proposal kept ninety days and called that “industry standard.”',
					'When it hatches, the Registrar gets all of it. A gap in the log counts as an excursion, so a gap voids you too.'
				]
			},
			{
				numeral: 'V.4',
				heading: 'Fire',
				paragraphs: [
					'At 55% oxygen, things that don’t normally burn will burn, so the fire suppression has to be serious. Ours floods the space with inert gas and runs high-pressure water mist on top of that. It’s split into separate zones, and the zones are interlocked so none of them discharges into another and no discharge pushes up the oxygen next door. It took our contractor three meetings to understand why that last part matters.',
					'Every zone has multi-spectrum flame detectors, and the oxygen sensors count as detection too.'
				]
			},
			{
				numeral: 'V.5',
				heading: 'What runs it',
				paragraphs: [
					'The air and the fire system are run by a compute cluster on site, built from Nvidia system-on-modules. It’s about the size of a small data center. It gets its own hall past the fire line, in ordinary air.',
					'The cluster runs a specialized model leased from Google, called Gemini 17.0 Locus. It keeps the oxygen balanced, spots fires, and releases suppressant in every zone.',
					LOCUS_SENTENCE,
					'We’ve objected to the name of the model. The objection is in the Notices.'
				]
			},
			{
				numeral: 'V.6',
				heading: 'The parts list',
				paragraphs: [
					'Here’s the full parts list for a standard facility. Print it, hand it to your contractor, and make him initial every line.'
				],
				table: {
					caption: 'Parts list for a standard facility with one grove.',
					columns: ['Item', 'Quantity', 'Notes'],
					rows: [
						['Nvidia system-on-module, current generation', '2,048', 'Four per carrier board'],
						['Carrier boards', '512', 'Conformally coated'],
						['Rack enclosures', '32', 'Sealed, positive pressure'],
						['Network switches, top of rack', '64', 'Two per rack'],
						['Network switches, spine', '8', 'Redundant pairs'],
						['Fiber links, hall to grove', '96', 'Run along two separate routes'],
						['Solid-state storage units', '192', 'Split between the two stores'],
						['Uninterruptible power supplies, 500 kVA', '4', 'Two per feed'],
						['Standby generators, 2 MW', '3', 'Thirty days of fuel'],
						['Precision cooling units', '12', 'For the compute hall'],
						['Oxygen sensors, electrochemical', '1,536', 'Three per measuring point'],
						['Oxygen sensors, paramagnetic, reference', '96', 'Calibrated every three months'],
						['Multi-spectrum flame detectors', '384', 'In every zone'],
						['Inert-gas cylinders', '640', 'Manifolded by zone'],
						['High-pressure water-mist pumps', '8', 'Duty and standby'],
						['Suppression zone valves', '288', 'Interlocked'],
						['Oxygen concentrators', '24', 'For the grove'],
						['Steel and oak perch, reinforced', '1', 'On a reinforced concrete footing']
					]
				}
			},
			{
				numeral: 'V.7',
				heading: 'Inspections, and the county',
				paragraphs: [
					'One of our officers inspects the place once a year for all seventeen years, and again the day before it hatches.',
					'At least ninety days before it’s expected to hatch, you have to send written notice to the clerk of every county that borders yours. We don’t do it for you. Our contractor said he would. He didn’t.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-kilocada-1',
				caption: 'The sealed enclosure over a grove for a large line. Allegheny County, 2016.'
			},
			{
				media: 'husbandry-kilocada-2',
				caption: 'The compute hall past the fire line. Ligonier, 2024.'
			},
			{
				media: 'husbandry-kilocada-3',
				caption: 'The oxygen plant for the grove. Allegheny County, 2016.'
			},
			{
				media: 'husbandry-kilocada-4',
				caption: 'A reinforced perch in its footing, before the hatch. Aiken, 1965.'
			}
		],
		disclaimers: ['oxygen', 'county-notification'],
		discussesHealth: false
	}
];

export function husbandryBySlug(slug: string): HusbandryPage | undefined {
	return HUSBANDRY.find((p) => p.slug === slug);
}
