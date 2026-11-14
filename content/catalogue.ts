import type { CatalogueItem } from './types.ts';

export const PROVISIONER_INTRO: string[] = [
	'The Provisioner to the Society supplies the furniture, instruments and attire required for the keeping and display of registered animals and their exuviae. Each article is made to the Society’s pattern and to the breed for which it is intended.',
	'Articles are not held in stock. Each is made on commission, and lead times are stated from the date the commission is accepted. The Provisioner does not supply articles for unregistered animals, and does not supply cabinets for the exuviae of any animal not entered in the Stud Book.',
	'Particulars of any article are given on inquiry.'
];

export const CATALOGUE: CatalogueItem[] = [
	// Cabinets
	{
		slug: 'exuvia-cabinet-pattern-17',
		ref: 'P-0412',
		name: 'Exuvia Cabinet, Pattern 17',
		category: 'Cabinets',
		text: 'A standing cabinet for the display of a family’s exuviae in the sequence of their emergence. Each shelf is fitted to the breed. The Provisioner does not supply cabinets for the exuviae of unregistered animals.',
		specification: [
			{ label: 'Dimensions', value: '42 by 18 by 64 inches' },
			{ label: 'Capacity', value: 'Seventeen exuviae on three shelves' },
			{ label: 'Glazing', value: 'Hand-drawn crystal, single panes' },
			{ label: 'Lock', value: 'Cast bronze, one key' }
		],
		materials: 'Cuban mahogany, leaded crystal, cast bronze',
		leadTime: 'Three years',
		plates: [
			{
				media: 'product-exuvia-cabinet-pattern-17-1',
				caption: 'Exuvia cabinet, Pattern 17, in Cuban mahogany. The Provisioner’s rooms, 2024.'
			},
			{
				media: 'product-exuvia-cabinet-pattern-17-2',
				caption: 'The bronze lock and key of the same. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'exuvia-cabinet-pattern-13',
		ref: 'P-0413',
		name: 'Exuvia Cabinet, Pattern 13',
		category: 'Cabinets',
		text: 'A wall cabinet for the exuviae of the Tredecim Register. It is supplied in one size.',
		specification: [
			{ label: 'Dimensions', value: '24 by 9 by 30 inches' },
			{ label: 'Capacity', value: 'Thirteen exuviae on two shelves' },
			{ label: 'Glazing', value: 'Crystal, single pane' },
			{ label: 'Mounting', value: 'To a wall of masonry or of paneled oak' }
		],
		materials: 'Black walnut, crystal, brass',
		leadTime: 'Two years',
		plates: [
			{
				media: 'product-exuvia-cabinet-pattern-13-1',
				caption: 'Exuvia cabinet, Pattern 13, in black walnut. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'inheritance-cabinet-pattern-34',
		ref: 'P-0434',
		name: 'Inheritance Cabinet, Pattern 34',
		category: 'Cabinets',
		text: 'A cabinet of double depth, built to receive the exuviae of two generations. A further shelf is fitted by the Provisioner at each emergence of the line, on notice from the owner of record.',
		specification: [
			{ label: 'Dimensions', value: '48 by 30 by 84 inches' },
			{ label: 'Capacity', value: 'Thirty-four exuviae, with provision for further shelves' },
			{ label: 'Glazing', value: 'Hand-drawn crystal, front and returns' },
			{ label: 'Keys', value: 'Two, held separately' }
		],
		materials: 'Quartersawn English oak, leaded crystal, gilt bronze',
		leadTime: 'Five years',
		plates: [
			{
				media: 'product-inheritance-cabinet-pattern-34-1',
				caption:
					'Inheritance cabinet, Pattern 34, with its second key. The Provisioner’s rooms, 2023.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'microcada-cabinet-octagonal',
		ref: 'P-0501',
		name: 'Microcada Cabinet, Octagonal Pattern',
		category: 'Cabinets',
		text: 'An octagonal cabinet for a single Microcada exuvia, with a lens of certified grinding set into the lid. The exuvia is mounted on a velvet pedestal at the focal point of the lens.',
		specification: [
			{ label: 'Dimensions', value: '4 inches across the flats, 5 inches high' },
			{ label: 'Capacity', value: 'One exuvia' },
			{ label: 'Magnification', value: 'Twelve diameters' },
			{ label: 'Optician', value: 'Certified by the Society' }
		],
		materials: 'Crystal, gilt brass, silk velvet, optical glass',
		leadTime: 'Eighteen months',
		plates: [
			{
				media: 'product-microcada-cabinet-octagonal-1',
				caption:
					'Microcada cabinet, octagonal pattern, with a signet ring for scale. The Provisioner’s rooms, 2024.'
			},
			{
				media: 'product-microcada-cabinet-octagonal-2',
				caption: 'The same, viewed through the lens. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'microcada-cabinet-standing-lens',
		ref: 'P-0502',
		name: 'Microcada Cabinet with Standing Lens',
		category: 'Cabinets',
		text: 'A table cabinet for up to seventeen Microcada exuviae, with a standing lens on a brass arm that traverses the shelf. Each exuvia is presented to the lens in turn.',
		specification: [
			{ label: 'Dimensions', value: '20 by 8 by 14 inches' },
			{ label: 'Capacity', value: 'Seventeen exuviae on one shelf' },
			{ label: 'Magnification', value: 'Twenty diameters' },
			{ label: 'Optician', value: 'Certified by the Society' }
		],
		materials: 'Rosewood, crystal, lacquered brass, optical glass',
		leadTime: 'Three years',
		plates: [
			{
				media: 'product-microcada-cabinet-standing-lens-1',
				caption: 'Microcada cabinet with standing lens, in rosewood. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'exuvia-travelling-case',
		ref: 'P-0520',
		name: 'Exuvia Travelling Case',
		category: 'Cabinets',
		text: 'A fitted case for the conveyance of a single exuvia between houses on inheritance. The exuvia travels with its certificate of registration, for which a pocket is provided in the lid.',
		specification: [
			{ label: 'Dimensions', value: '9 by 6 by 5 inches' },
			{ label: 'Capacity', value: 'One exuvia and its certificate' },
			{ label: 'Lining', value: 'Silk over horsehair, molded to the breed' },
			{ label: 'Fastening', value: 'Two brass catches and a lock' }
		],
		materials: 'Bridle leather, silk, horsehair, brass',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-exuvia-travelling-case-1',
				caption:
					'Exuvia travelling case, open, with the certificate pocket. The Provisioner’s rooms, 2022.'
			}
		],
		disclaimers: ['resale']
	},

	// Plinths and perches
	{
		slug: 'kilocada-plinth-ninth-pattern',
		ref: 'P-0609',
		name: 'Kilocada Plinth, the Ninth Pattern',
		category: 'Plinths and Perches',
		text: 'A low plinth of turned oak with a bronze collar, for the freestanding display of a Kilocada exuvia. It is supplied with a felt underlay for floors of polished wood.',
		specification: [
			{ label: 'Dimensions', value: '36 inches in diameter, 9 inches high' },
			{ label: 'Load', value: 'Rated to the heaviest Kilocada of record' },
			{ label: 'Finish', value: 'Waxed, unstained' },
			{ label: 'Collar', value: 'Cast bronze, chased' }
		],
		materials: 'English oak, cast bronze, wool felt',
		leadTime: 'Two years',
		plates: [
			{
				media: 'product-kilocada-plinth-ninth-pattern-1',
				caption: 'Kilocada plinth, the Ninth Pattern, in waxed oak. The Provisioner’s rooms, 2021.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'kilocada-plinth-gallery',
		ref: 'P-0610',
		name: 'Kilocada Plinth, Gallery Pattern',
		category: 'Plinths and Perches',
		text: 'A rectangular plinth of veined marble for the long gallery, made to stand in line with others of its pattern. Plinths of this pattern are supplied singly and matched to those already in the house.',
		specification: [
			{ label: 'Dimensions', value: '48 by 30 by 14 inches' },
			{ label: 'Load', value: 'Rated to the heaviest Kilocada of record' },
			{ label: 'Matching', value: 'To existing plinths, by survey' },
			{ label: 'Installation', value: 'By the Provisioner’s men' }
		],
		materials: 'Veined white marble, bronze feet',
		leadTime: 'Four years',
		plates: [
			{
				media: 'product-kilocada-plinth-gallery-1',
				caption: 'Kilocada plinths, gallery pattern, installed in a long gallery. Aiken, 2016.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'reinforced-perch-kilocada',
		ref: 'P-0620',
		name: 'Reinforced Perch, Kilocada',
		category: 'Plinths and Perches',
		text: 'The perch on which a Kilocada completes its emergence. It is set in the grove by the Provisioner in the year before emergence and is not moved afterwards.',
		specification: [
			{ label: 'Height', value: 'Eleven feet above grade' },
			{ label: 'Core', value: 'Steel, sheathed in oak' },
			{ label: 'Footing', value: 'Concrete, below the frost line' },
			{ label: 'Inspection', value: 'Annually for seventeen years' }
		],
		materials: 'Steel, white oak, concrete',
		leadTime: 'Seventeen years, from commission',
		plates: [
			{
				media: 'product-reinforced-perch-kilocada-1',
				caption: 'Reinforced perch, Kilocada, set in a grove of white oak. Ligonier, 2015.'
			}
		],
		disclaimers: ['county-notification', 'oxygen']
	},
	{
		slug: 'signet-ring-perch',
		ref: 'P-0631',
		name: 'Signet-Ring Perch',
		category: 'Plinths and Perches',
		text: 'A perch of gold fitted to the bezel of the owner’s existing signet ring, on which a Microcada is carried during its week. The ring is not engraved or altered except at the point of attachment.',
		specification: [
			{ label: 'Dimensions', value: 'Three millimeters high' },
			{ label: 'Fitting', value: 'To the owner’s ring, which is sent to the Provisioner' },
			{ label: 'Removal', value: 'Without trace, on request' },
			{ label: 'Gold', value: 'Matched to the ring' }
		],
		materials: 'Gold, matched to the ring',
		leadTime: 'Six months',
		plates: [
			{
				media: 'product-signet-ring-perch-1',
				caption: 'Signet-ring perch, fitted to a member’s ring. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'vigil-perch-stand',
		ref: 'P-0640',
		name: 'Vigil Perch Stand',
		category: 'Plinths and Perches',
		text: 'A waist-high stand for the Vigil room, on which the nymph fixes itself before emergence. It is placed so that the owner, seated, faces the animal at the height of the eye.',
		specification: [
			{ label: 'Height', value: '38 inches' },
			{ label: 'Perch', value: 'Turned from the wood of the host tree, where supplied' },
			{ label: 'Base', value: 'Weighted, on three feet' },
			{ label: 'Varieties', value: 'Standard and Microcada' }
		],
		materials: 'Mahogany, lead, host-tree wood',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-vigil-perch-stand-1',
				caption: 'Vigil perch stand in mahogany. The Provisioner’s rooms, 2023.'
			}
		],
		disclaimers: ['vigil-attendance']
	},

	// The Vigil
	{
		slug: 'vigil-chair',
		ref: 'P-0701',
		name: 'Vigil Chair',
		category: 'The Vigil',
		text: 'A wing chair for the Vigil, upholstered so as to make no sound when the occupant shifts. The owner attends the Vigil alone, and the chair is made for one.',
		specification: [
			{ label: 'Dimensions', value: '32 by 34 by 46 inches' },
			{ label: 'Upholstery', value: 'Wool, in a single color chosen by the owner' },
			{ label: 'Springing', value: 'Hand-tied, silent' },
			{ label: 'Arms', value: 'Closed, without fittings' }
		],
		materials: 'Beech frame, horsehair, wool',
		leadTime: 'Two years',
		plates: [
			{
				media: 'product-vigil-chair-1',
				caption: 'Vigil chair, upholstered in gray wool. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'vigil-chair-pair',
		ref: 'P-0702',
		name: 'Vigil Chairs, a Pair',
		category: 'The Vigil',
		text: 'The Vigil chair, supplied as a matched pair. The second chair is supplied by arrangement only.',
		specification: [
			{ label: 'Dimensions', value: '32 by 34 by 46 inches, each' },
			{ label: 'Upholstery', value: 'Wool, matched' },
			{ label: 'Springing', value: 'Hand-tied, silent' },
			{ label: 'Arrangement', value: 'With the Provisioner, in person' }
		],
		materials: 'Beech frame, horsehair, wool',
		leadTime: 'Two years',
		plates: [
			{
				media: 'product-vigil-chair-pair-1',
				caption: 'Vigil chairs, a pair, in a Vigil room. Aiken, 2015.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'vigil-lamp',
		ref: 'P-0710',
		name: 'Vigil Lamp, Shaded',
		category: 'The Vigil',
		text: 'A low lamp for the Vigil room, shaded so that the light falls on the perch and not on the owner. The light is fixed in intensity and cannot be raised.',
		specification: [
			{ label: 'Height', value: '22 inches' },
			{ label: 'Shade', value: 'Pleated silk, lined' },
			{ label: 'Light', value: 'Fixed, warm, low' },
			{ label: 'Switch', value: 'At the base, silent' }
		],
		materials: 'Bronze, pleated silk, linen',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-vigil-lamp-1',
				caption: 'Vigil lamp, shaded, lit. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'end-of-week-case',
		ref: 'P-0720',
		name: 'End-of-Week Case',
		category: 'The Vigil',
		text: 'A small case of silver lined with silk, for the adult at the conclusion of its week. It is made to the breed and variety and is engraved with the registration number only.',
		specification: [
			{ label: 'Dimensions', value: 'To the breed and variety' },
			{ label: 'Lining', value: 'Undyed silk' },
			{ label: 'Engraving', value: 'Registration number, in roman capitals and figures' },
			{ label: 'Fastening', value: 'Friction lid, no catch' }
		],
		materials: 'Sterling silver, silk',
		leadTime: 'Delivered with the Vigil chair or within the year of emergence',
		plates: [
			{
				media: 'product-end-of-week-case-1',
				caption: 'End-of-week case in sterling silver. The Provisioner’s rooms, 2021.'
			}
		],
		disclaimers: ['bereavement']
	},

	// Handling and protection
	{
		slug: 'handler-hearing-protection',
		ref: 'P-0801',
		name: 'Handler’s Hearing Protection, Approved Pattern',
		category: 'Handling and Protection',
		text: 'Hearing protection of the pattern approved by the Society for handlers and attendants of the Personal Protection breeds. It is fitted to the wearer and is not supplied in sizes.',
		specification: [
			{ label: 'Fitting', value: 'To the wearer, at the Provisioner’s rooms' },
			{ label: 'Attenuation', value: 'To the Society’s standard for the Brandywine Alarum' },
			{ label: 'Band', value: 'Sprung steel, leather-covered' },
			{ label: 'Approval', value: 'Renewed at each emergence' }
		],
		materials: 'Felt, lambskin, sprung steel, bridle leather',
		leadTime: 'Six months',
		plates: [
			{
				media: 'product-handler-hearing-protection-1',
				caption: 'Handler’s hearing protection, approved pattern. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: ['hearing']
	},
	{
		slug: 'picket-unit-board',
		ref: 'P-0810',
		name: 'Unit Board for the Shenandoah Picket',
		category: 'Handling and Protection',
		text: 'A board of forty brass pegs on which the handler records the position of each animal of a unit during deployment. A unit is forty animals; the board has no forty-first peg.',
		specification: [
			{ label: 'Dimensions', value: '30 by 20 inches' },
			{ label: 'Pegs', value: 'Forty, numbered' },
			{ label: 'Mounting', value: 'On an easel, for the field' },
			{ label: 'Record', value: 'Transferred nightly to the handler’s book' }
		],
		materials: 'Oak, brass, ivory-colored enamel',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-picket-unit-board-1',
				caption: 'Unit board for the Shenandoah Picket, on its easel. Millwood, 2025.'
			}
		],
		disclaimers: ['hearing', 'home-inspection']
	},
	{
		slug: 'summons-glove',
		ref: 'P-0820',
		name: 'Summons Glove',
		category: 'Handling and Protection',
		text: 'An unlined glove of kid leather, open at the tips of the thumb and second finger so as to permit the Summons. It is worn on the right hand at the ring.',
		specification: [
			{ label: 'Hand', value: 'Right only' },
			{ label: 'Fitting', value: 'To the wearer' },
			{ label: 'Color', value: 'Gray or black' },
			{ label: 'Use', value: 'At the ring and at the Vigil' }
		],
		materials: 'Kid leather',
		leadTime: 'Six months',
		plates: [
			{
				media: 'product-summons-glove-1',
				caption: 'Summons glove, gray kid. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'ring-umbrella',
		ref: 'P-0830',
		name: 'Ring Umbrella, Society Pattern',
		category: 'Handling and Protection',
		text: 'A black silk umbrella of the Society pattern, for owners and stewards at the ringside. Judges do not carry an umbrella into the ring; Article XI.4 of the Bylaws applies.',
		specification: [
			{ label: 'Canopy', value: 'Black silk, sixteen ribs' },
			{ label: 'Shaft', value: 'Malacca, in one piece' },
			{ label: 'Handle', value: 'Crook, unadorned' },
			{ label: 'Ferrule', value: 'Brass' }
		],
		materials: 'Silk, malacca cane, steel, brass',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-ring-umbrella-1',
				caption: 'Ring umbrella, Society pattern, furled. The Provisioner’s rooms, 2023.'
			}
		],
		disclaimers: []
	},

	// Root stewardship
	{
		slug: 'root-probe-long-pattern',
		ref: 'P-0901',
		name: 'Root Probe, Long Pattern',
		category: 'Root Stewardship',
		text: 'A probe of solid brass for the inspection of the soil about the roots of the host tree. It is graduated in feet and inches and is used by the root steward at each quarter-day for seventeen years.',
		specification: [
			{ label: 'Length', value: 'Six feet' },
			{ label: 'Graduation', value: 'Feet and inches, engraved' },
			{ label: 'Handle', value: 'Turned lignum vitae' },
			{ label: 'Case', value: 'Oak, lined with baize' }
		],
		materials: 'Brass, lignum vitae, oak, baize',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-root-probe-long-pattern-1',
				caption: 'Root probe, long pattern, in its case. The Provisioner’s rooms, 2022.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'soil-thermometer-seventeen-year',
		ref: 'P-0910',
		name: 'Soil Thermometer, Seventeen-Year Pattern',
		category: 'Root Stewardship',
		text: 'A soil thermometer set permanently at the depth of the nymph, read through a brass housing at grade. It is supplied with a log ruled for seventeen years of daily readings.',
		specification: [
			{ label: 'Depth', value: 'To the nymph, by survey' },
			{ label: 'Housing', value: 'Brass, with hinged cover' },
			{ label: 'Log', value: 'Bound vellum, seventeen years' },
			{ label: 'Tredecim', value: 'Supplied with a log of thirteen years' }
		],
		materials: 'Brass, glass, vellum',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-soil-thermometer-seventeen-year-1',
				caption: 'Soil thermometer and its log, at the foot of a host tree. Lenox, 2017.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'grove-ledger',
		ref: 'P-0920',
		name: 'Grove Ledger',
		category: 'Root Stewardship',
		text: 'A ledger bound in vellum for the record of each host tree in a grove: planting, inspection, root work and emergence. It is ruled for one cycle and is not continued into a second volume.',
		specification: [
			{ label: 'Pages', value: 'Four hundred, ruled' },
			{ label: 'Binding', value: 'Full vellum, sewn on tapes' },
			{ label: 'Ruling', value: 'For one cycle of the line' },
			{ label: 'Title', value: 'Blind-stamped, without lettering' }
		],
		materials: 'Vellum, laid paper, linen thread',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-grove-ledger-1',
				caption: 'Grove ledger, open at the year of planting. The Provisioner’s rooms, 2020.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'root-stewardship-instruments-cased',
		ref: 'P-0930',
		name: 'Root Stewardship Instruments, Cased Set',
		category: 'Root Stewardship',
		text: 'The instruments of the root steward, cased: a short probe, a trowel, a hand lens, a soil sieve and a pair of root shears. The set is issued to the steward and passes with the office.',
		specification: [
			{ label: 'Dimensions', value: '22 by 12 by 4 inches' },
			{ label: 'Contents', value: 'Five instruments, fitted' },
			{ label: 'Lining', value: 'Green baize' },
			{ label: 'Engraving', value: 'The name of the grove, inside the lid' }
		],
		materials: 'Mahogany, brass, steel, optical glass, baize',
		leadTime: 'Eighteen months',
		plates: [
			{
				media: 'product-root-stewardship-instruments-cased-1',
				caption: 'Root stewardship instruments, cased set, open. The Provisioner’s rooms, 2023.'
			}
		],
		disclaimers: []
	},

	// Emergence day
	{
		slug: 'emergence-watch',
		ref: 'P-1001',
		name: 'Emergence Watch, Thirteen-Hour Dial',
		category: 'Emergence Day',
		text: 'A pocket watch in a plain gold case with a thirteen-hour dial. It is supplied to members of either Register.',
		specification: [
			{ label: 'Case', value: 'Gold, hunter, plain' },
			{ label: 'Dial', value: 'Enamel, thirteen-hour' },
			{ label: 'Movement', value: 'Keyless, jeweled' },
			{ label: 'Chain', value: 'Supplied on request' }
		],
		materials: 'Gold, enamel, steel',
		leadTime: 'Three years',
		plates: [
			{
				media: 'product-emergence-watch-1',
				caption: 'Emergence watch, thirteen-hour dial, open. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'emergence-day-hat',
		ref: 'P-1010',
		name: 'Emergence-Day Hat',
		category: 'Emergence Day',
		text: 'A wide-brimmed hat of fine straw for the garden on the day of emergence, made to the Ashby pattern. The brim is stiffened to bear a load.',
		specification: [
			{ label: 'Brim', value: 'Five inches, stiffened' },
			{ label: 'Crown', value: 'Low, with grosgrain band' },
			{ label: 'Straw', value: 'Fine, natural color' },
			{ label: 'Fitting', value: 'To the wearer' }
		],
		materials: 'Straw, silk grosgrain, buckram',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-emergence-day-hat-1',
				caption: 'Emergence-day hat, Ashby pattern. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'emergence-day-coat',
		ref: 'P-1020',
		name: 'Emergence-Day Coat',
		category: 'Emergence Day',
		text: 'A morning coat of gray barathea for the day of emergence and the days of the week that follow. An inside pocket is fitted for the signet-ring case.',
		specification: [
			{ label: 'Cloth', value: 'Gray barathea' },
			{ label: 'Cut', value: 'Single-breasted, one button' },
			{ label: 'Pocket', value: 'Inside left, fitted' },
			{ label: 'Fitting', value: 'Three, at the Provisioner’s rooms' }
		],
		materials: 'Wool barathea, silk lining, horn buttons',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-emergence-day-coat-1',
				caption: 'Emergence-day coat in gray barathea. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'county-notification-stationery',
		ref: 'P-1030',
		name: 'Notification Stationery, County Pattern',
		category: 'Emergence Day',
		text: 'Engraved stationery for the owner’s notice of emergence to the clerks of adjoining counties. It is supplied in sets sufficient for the counties concerned, with one sheet over.',
		specification: [
			{ label: 'Paper', value: 'Laid, heavy, cream' },
			{ label: 'Engraving', value: 'The owner’s address, die-stamped' },
			{ label: 'Envelopes', value: 'Lined, matching' },
			{ label: 'Quantity', value: 'By the number of adjoining counties' }
		],
		materials: 'Cotton laid paper',
		leadTime: 'Three months',
		plates: [
			{
				media: 'product-county-notification-stationery-1',
				caption:
					'Notification stationery, county pattern, with envelopes. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: ['county-notification']
	},

	// The Supper Club
	{
		slug: 'presentation-spoon',
		ref: 'P-1101',
		name: 'The Spoon, Presentation Pattern',
		category: 'The Supper Club',
		text: 'A sterling spoon on a walnut base, engraved with the year of presentation. The making and engraving of the Spoon are undertaken for the Supper Club only.',
		specification: [
			{ label: 'Bowl', value: 'Gilt' },
			{ label: 'Base', value: 'Walnut, waxed' },
			{ label: 'Engraving', value: 'The year, in figures' },
			{ label: 'Supply', value: 'To the Supper Club only' }
		],
		materials: 'Sterling silver, gilt, walnut',
		leadTime: 'One year',
		plates: [
			{
				media: 'product-presentation-spoon-1',
				caption: 'The Spoon, presentation pattern, on its base. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'necktie-club-pattern',
		ref: 'P-1105',
		name: 'Necktie, Club Pattern',
		category: 'The Supper Club',
		text: 'A silk necktie, woven to the Cicadas Club pattern. Supplied to members only. The Provisioner does not describe the pattern.',
		specification: [
			{ label: 'Width', value: 'Three and one-quarter inches' },
			{ label: 'Weave', value: 'Jacquard, seven-fold' },
			{ label: 'Lining', value: 'Self-tipped' },
			{ label: 'Supply', value: 'To members only, on proof of standing' }
		],
		materials: 'Silk',
		leadTime: 'Six months',
		plates: [
			{
				media: 'product-necktie-club-pattern-1',
				caption: 'Necktie, club pattern, folded. The Provisioner’s rooms, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'boxwood-place-card-holder',
		ref: 'P-1110',
		name: 'Place-Card Holder, Boxwood Pattern',
		category: 'The Supper Club',
		text: 'A silver place-card holder in the form of a sprig of boxwood. Supplied in sets of forty-eight.',
		specification: [
			{ label: 'Height', value: 'Two inches' },
			{ label: 'Set', value: 'Forty-eight' },
			{ label: 'Case', value: 'Oak, fitted' },
			{ label: 'Hallmark', value: 'Under the base' }
		],
		materials: 'Sterling silver, oak',
		leadTime: 'Two years',
		plates: [
			{
				media: 'product-boxwood-place-card-holder-1',
				caption:
					'Place-card holders, boxwood pattern, laid for supper. The Provisioner’s rooms, 2024.'
			}
		],
		disclaimers: []
	}
];
