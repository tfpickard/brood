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
	'Husbandry under the Society’s rules is the care of the line from the day of commission to the day of emergence, and of the animal for its week. The pages below set out the requirements of the General Standard in that respect.',
	'Where a breed standard provides otherwise, the breed standard governs in respect of that breed alone.'
];

export const HUSBANDRY: HusbandryPage[] = [
	{
		slug: 'host-trees',
		title: 'Of Host Trees',
		numeral: 'Part I',
		summary: 'The selection, planting and dedication of the tree on whose roots a line is raised.',
		lede: 'Every animal registered with the Society is raised on the roots of a single tree dedicated to it at commission. The tree is chosen, planted and kept for that animal and for no other purpose.',
		sections: [
			{
				numeral: 'I.1',
				heading: 'Of Selection',
				paragraphs: [
					'The species of the host tree is set by the breed standard. Where the standard permits more than one species, the owner chooses, and the choice is entered at commission and not afterwards changed.',
					'A host tree shall be not less than forty years old at commission, sound in the root and standing in ground that has not been cultivated in the preceding seventeen years. It shall stand not less than sixty feet from any other host tree of the same brood.'
				],
				table: {
					caption: 'Species ordinarily approved for the host tree.',
					columns: ['Species', 'Botanical name', 'Register'],
					rows: [
						['White oak', 'Quercus alba', 'Septendecim'],
						['Copper beech', 'Fagus sylvatica f. purpurea', 'Septendecim'],
						['Sugar maple', 'Acer saccharum', 'Septendecim'],
						['Black walnut', 'Juglans nigra', 'Septendecim'],
						['Tulip tree', 'Liriodendron tulipifera', 'Septendecim'],
						['American beech', 'Fagus grandifolia', 'Septendecim'],
						['Southern live oak', 'Quercus virginiana', 'Tredecim'],
						['Water oak', 'Quercus nigra', 'Tredecim']
					]
				}
			},
			{
				numeral: 'I.2',
				heading: 'Of Dedication',
				paragraphs: [
					'The tree is dedicated at commission by the Registrar or his deputy, who sets an iron stake at its foot bearing the registration number of the line. The stake is not removed while the line is in the ground.',
					'A dedicated tree is not shared, not pruned except under the direction of the root steward, and not felled. A host tree that falls is entered in the Stud Book with the date of its fall.'
				]
			},
			{
				numeral: 'I.3',
				heading: 'Of the Health of the Tree',
				paragraphs: [
					'The owner is responsible for the health of the host tree from commission to emergence. Any change in its vigor is reported to the Registrar within the week. ' +
						MASSOSPORA,
					'Kilocada are not raised on a single tree. Their requirements are set out in the specification for Kilocada facilities.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-host-trees-1',
				caption: 'Dedicated host trees of Brood X, each with its stake. Bellevue Avenue, 1921.'
			},
			{
				media: 'husbandry-host-trees-2',
				caption: 'The dedication of a host tree by the Registrar’s deputy. Aiken, 1964.'
			},
			{
				media: 'husbandry-host-trees-3',
				caption: 'A copper beech dedicated to a line of Newport Vesper. Newport, 2021.'
			}
		],
		disclaimers: [],
		discussesHealth: true
	},
	{
		slug: 'root-stewardship',
		title: 'Of Root Stewardship',
		numeral: 'Part II',
		summary: 'The keeping of the nymph on the roots of its host tree for seventeen years.',
		lede: 'The nymph is raised underground on the roots of its host tree for the whole of its seventeen years. It is kept by a root steward, who does not see it.',
		sections: [
			{
				numeral: 'II.1',
				heading: 'Of the Root Steward',
				paragraphs: [
					'Each line in the ground is kept by a root steward appointed by the owner and approved by the Registrar. A steward may keep more than one line but not more than one line of the same brood.',
					'The steward attends the tree on the first day of each month. The attendance is entered in the steward’s book, which is submitted to the Registrar at emergence.'
				]
			},
			{
				numeral: 'II.2',
				heading: 'Of Instruments',
				paragraphs: [
					'The steward is provided with a root probe of brass, a sap gauge, a set of soil thermometers at three depths and a listening tube. Instruments are supplied by the Provisioner and are not lent.',
					'The probe is set at the four quarters of the tree in turn and is not set twice in the same place within a year.'
				],
				table: {
					caption: 'Schedule of readings taken by the root steward.',
					columns: ['Reading', 'Instrument', 'Frequency'],
					rows: [
						['Soil temperature at one, three and five feet', 'Soil thermometers', 'Monthly'],
						['Moisture of the root zone', 'Root probe', 'Monthly'],
						['Rise of sap', 'Sap gauge', 'Monthly, March to October'],
						['Movement in the root zone', 'Listening tube', 'Quarterly'],
						['Girth of the tree at breast height', 'Steel tape', 'Annually']
					]
				}
			},
			{
				numeral: 'II.3',
				heading: 'Of the Nymph',
				paragraphs: [
					'The nymph is not disturbed, not exposed and not examined at any time before emergence. A steward who uncovers a nymph is relieved of the line, and the line is entered as disturbed.',
					'Movement heard in the root zone in the seventeenth year is reported to the Registrar the same day.'
				]
			},
			{
				numeral: 'II.4',
				heading: 'Of Health',
				paragraphs: [
					'The steward reports to the Registrar within the week any change in the vigor of the host tree, any standing water in the root zone and any growth upon the bark. The Registrar may send an officer of the Society to examine the tree. ' +
						MASSOSPORA
				]
			}
		],
		plates: [
			{
				media: 'husbandry-root-stewardship-1',
				caption: 'A root steward at the monthly attendance. Lenox, 1927.'
			},
			{
				media: 'husbandry-root-stewardship-2',
				caption:
					'A reading of the root zone taken by lantern in the seventeenth year. Sewickley, 1985.'
			},
			{
				media: 'husbandry-root-stewardship-3',
				caption: 'The steward’s instruments in their case. Supplied by the Provisioner, 2019.'
			}
		],
		disclaimers: [],
		discussesHealth: true
	},
	{
		slug: 'the-vigil',
		title: 'Of the Vigil',
		numeral: 'Part III',
		summary: 'The hours after the molt, during which the owner attends alone.',
		lede: 'The Vigil begins when the nymph has fixed itself to the perch and the dorsal split has opened, and it ends when the adult has hardened and taken its color, ordinarily between four and six hours later. During that interval the animal will attach to the first person it apprehends. The owner is therefore to be present, alone, and awake.',
		sections: [
			{
				numeral: 'III.1',
				heading: 'Of the Room',
				paragraphs: [
					'The Vigil is kept in a room set aside for it, of moderate size, with a single door and the curtains drawn. The perch stands at the height of the owner’s hand when seated. One lamp is lit and shaded.',
					'The room is prepared on the evening the Registrar names. Nothing is brought into it after the owner has entered.',
					'The Society does not prohibit the placing of a second chair.'
				]
			},
			{
				numeral: 'III.2',
				heading: 'Of Attendance',
				paragraphs: [
					'The owner attends alone. Staff withdraw to the anteroom on the Registrar’s signal and do not re-enter until called. The Registrar, or his deputy, waits in the anteroom and records the hour at which the dorsal split opened and the hour at which the owner came out.',
					'The owner does not leave the room for any reason between the opening of the split and the hardening of the adult.'
				]
			},
			{
				numeral: 'III.3',
				heading: 'Of Attachment',
				paragraphs: [
					'Where the owner has not attended, the animal is entered in the Stud Book under the name of the person to whom it attached. The Society makes no further entry.',
					'An entry so made is not reversed, and the animal is not shown by any other person.'
				]
			},
			{
				numeral: 'III.4',
				heading: 'Of the Exuvia',
				paragraphs: [
					'The exuvia remains on the perch until the morning after the Vigil, when it is lifted by the owner in the presence of the Registrar, entered and taken to the cabinet.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-the-vigil-1',
				caption: 'A Vigil room at dawn, prepared and unoccupied. Tuxedo Park, 2021.'
			},
			{
				media: 'husbandry-the-vigil-2',
				caption: 'A Vigil room as prepared for the night of emergence. Prides Crossing, 1920.'
			},
			{
				media: 'husbandry-the-vigil-3',
				caption: 'The anteroom during a Vigil. Fishers Island, 1978.'
			}
		],
		disclaimers: ['vigil-attendance'],
		discussesHealth: false
	},
	{
		slug: 'end-of-week',
		title: 'Of the End of the Week',
		numeral: 'Part IV',
		summary: 'The protocol observed at the conclusion of the adult’s week.',
		lede: 'The adult lives for approximately one week after the Vigil. The protocol below is observed at the end of that week by every member of the Society.',
		sections: [
			{
				numeral: 'IV.1',
				heading: 'Of the Last Evening',
				paragraphs: [
					'On the last evening the owner remains with the animal. The household is informed and does not enter the room. Working and Sporting animals are not taken out on the last day.',
					'The owner records the hour in the book kept for the purpose.'
				]
			},
			{
				numeral: 'IV.2',
				heading: 'Of the Animal',
				paragraphs: [
					'The animal is laid on linen in a box of walnut and is interred the following morning at the foot of its host tree, at the quarter from which it emerged. The owner attends. The interment is brief and is not attended by members of the Society unless they are of the family.',
					'Kilocada are interred in the grove. The perch is left standing until the end of the season.'
				]
			},
			{
				numeral: 'IV.3',
				heading: 'Of the Exuvia',
				paragraphs: [
					'The exuvia will have been lifted on the morning after the Vigil and is already in the cabinet. It is not moved during the week and is not moved on the day of interment.'
				]
			},
			{
				numeral: 'IV.4',
				heading: 'Of the Record',
				paragraphs: [
					'The Registrar closes the entry. The Stud Book records the date of emergence. It does not record the date of death.',
					'The Society does not write to members at the end of the week.'
				]
			},
			{
				numeral: 'IV.5',
				heading: 'Of Health During the Week',
				paragraphs: [
					'An animal that appears unwell during its week may be examined at the owner’s request by an officer of the Society. The examination is entered in the Stud Book. ' +
						MASSOSPORA
				]
			}
		],
		plates: [
			{
				media: 'husbandry-end-of-week-1',
				caption:
					'The walnut box and linen, laid out on the morning of interment. Little Compton, 2015.'
			},
			{
				media: 'husbandry-end-of-week-2',
				caption: 'A family at the host tree on the morning after the week. Millbrook, 1950.'
			}
		],
		disclaimers: ['bereavement', 'resale'],
		discussesHealth: true
	},
	{
		slug: 'kilocada',
		title: 'Specification for Kilocada Facilities',
		numeral: 'Part V',
		summary: 'The facilities specification binding on every owner of a Kilocada line.',
		lede: 'This specification applies to every rearing environment in which a Kilocada nymph is raised. It binds the owner of record from the date of commission to the date of emergence. Compliance is a condition of registration.',
		sections: [
			{
				numeral: 'V.1',
				heading: 'Of the Grove',
				paragraphs: [
					'A Kilocada is raised in a grove of not fewer than twelve trees of the species set by the breed standard, and not on a single host tree. The grove is enclosed by a sealed structure over the whole of its root zone.',
					'The perch is of steel cored with oak, set on a footing of reinforced concrete and rated to bear not less than four times the expected weight of the adult at emergence.'
				]
			},
			{
				numeral: 'V.2',
				heading: 'Of the Atmosphere',
				paragraphs: [
					'The rearing environment shall be held at fifty-five per cent oxygen saturation, continuously, for the whole of the seventeen years.',
					'The tolerance is plus or minus 0.5 percentage points, measured at every sensor.',
					'A single excursion beyond tolerance, of any duration, at any sensor, voids registration.'
				]
			},
			{
				numeral: 'V.3',
				heading: 'Of Logging',
				paragraphs: [
					'The oxygen concentration is logged at every sensor once each second (1 Hz). Every log is written to two independent stores housed in separate buildings and is retained for the life of the line.',
					'The logs are submitted to the Registrar in full at emergence. An interruption in the log is treated as an excursion.'
				]
			},
			{
				numeral: 'V.4',
				heading: 'Of Suppression',
				paragraphs: [
					'An atmosphere of fifty-five per cent oxygen requires a system of fire suppression of corresponding seriousness. The system combines inert-gas flooding with high-pressure water mist. It is divided into independent zones, and the zones are interlocked so that no zone discharges into another and no discharge raises the oxygen concentration of an adjoining zone.',
					'Detection is by multi-spectrum flame detectors in every zone and by the oxygen sensors themselves.'
				]
			},
			{
				numeral: 'V.5',
				heading: 'Of Control',
				paragraphs: [
					'The atmosphere and the system of suppression are controlled by an on-site compute cluster built from Nvidia system-on-modules, comparable in scale to a small data center. The cluster is housed in a hall of its own beyond the fire line and is held in ordinary air.',
					'The cluster runs a specialized model leased from Google, designated Gemini 17.0 Locus. The model governs the oxygen balance, the detection of fire and the release of suppressant in every zone.',
					LOCUS_SENTENCE,
					'The Society’s objection to the designation of the model is recorded in the Notices.'
				]
			},
			{
				numeral: 'V.6',
				heading: 'Of the Bill of Materials',
				paragraphs: [
					'The Society publishes the bill of materials for a standard Kilocada facility in full.'
				],
				table: {
					caption: 'Bill of materials for a standard Kilocada facility of one grove.',
					columns: ['Item', 'Quantity', 'Remarks'],
					rows: [
						['Nvidia system-on-module, current generation', '2,048', 'Four to each carrier board'],
						['Carrier boards', '512', 'Conformally coated'],
						['Rack enclosures', '32', 'Sealed, positive pressure'],
						['Network switches, top of rack', '64', 'Two to each rack'],
						['Network switches, spine', '8', 'Redundant pairs'],
						['Fiber links between the hall and the grove', '96', 'Laid in two routes'],
						['Solid-state storage units', '192', 'Two independent stores'],
						['Uninterruptible power supplies, 500 kVA', '4', 'Two to each feed'],
						['Standby generators, 2 MW', '3', 'Fuel for thirty days'],
						['Precision cooling units', '12', 'For the compute hall'],
						['Oxygen sensors, electrochemical', '1,536', 'Three to each measuring point'],
						['Oxygen sensors, paramagnetic, reference', '96', 'Calibrated quarterly'],
						['Multi-spectrum flame detectors', '384', 'Every zone'],
						['Inert-gas cylinders', '640', 'Manifolded by zone'],
						['High-pressure water-mist pumps', '8', 'Duty and standby'],
						['Suppression zone valves', '288', 'Interlocked'],
						['Oxygen concentrators', '24', 'For the rearing environment'],
						['Steel and oak perch, reinforced', '1', 'Footing of reinforced concrete']
					]
				}
			},
			{
				numeral: 'V.7',
				heading: 'Of Inspection and Notification',
				paragraphs: [
					'The facility is inspected by an officer of the Society once in each year of the seventeen and on the day before emergence.',
					'The owner gives written notice of the expected emergence to the clerk of each adjoining county not fewer than ninety days before the expected date.'
				]
			}
		],
		plates: [
			{
				media: 'husbandry-kilocada-1',
				caption: 'The sealed enclosure of a Kilocada grove. Allegheny County, 2016.'
			},
			{
				media: 'husbandry-kilocada-2',
				caption: 'The compute hall beyond the fire line. Ligonier, 2024.'
			},
			{
				media: 'husbandry-kilocada-3',
				caption: 'The oxygen plant serving the rearing environment. Allegheny County, 2016.'
			},
			{
				media: 'husbandry-kilocada-4',
				caption: 'A reinforced perch set in its footing before emergence. Aiken, 1965.'
			}
		],
		disclaimers: ['oxygen', 'county-notification'],
		discussesHealth: false
	}
];

export function husbandryBySlug(slug: string): HusbandryPage | undefined {
	return HUSBANDRY.find((p) => p.slug === slug);
}
