import type { CatalogueItem } from './types.ts';

export const PROVISIONER_INTRO: string[] = [
	'This is our equipment list: the cabinets, perches, chairs, instruments and clothes you need to keep a registered line properly and show it. I run it. Everything on it is made to our pattern, for the breed it’s going to, by people we’ve used for years.',
	'Nothing is in stock. Everything is made to order, and the lead time starts when the maker says yes, not when you ask. Most of these makers are very old and there’s nobody coming up behind them, so if you’re thinking about it, think faster. We only make things for registered animals. If your animal isn’t in the stud book, we won’t build a cabinet for its shell.',
	'Every item has an “Ask about this” form at the bottom of the page. Use that. Please don’t call the house.'
];

export const CATALOGUE: CatalogueItem[] = [
	// Cabinets
	{
		slug: 'exuvia-cabinet-pattern-17',
		ref: 'P-0412',
		name: 'Shell Cabinet, Pattern 17',
		category: 'Cabinets',
		text: 'The standing cabinet for a family’s shells, kept in the order they hatched. Every shelf is cut to the breed, so a Vesper shelf won’t take a Drayer, and nobody should be trying. The Fairlies have had theirs since before the war and the glass still looks new. We only build these for registered animals.',
		specification: [
			{ label: 'Dimensions', value: '42 by 18 by 64 inches' },
			{ label: 'Capacity', value: 'Seventeen shells on three shelves' },
			{ label: 'Glazing', value: 'Hand-drawn crystal, single panes' },
			{ label: 'Lock', value: 'Cast bronze, one key' }
		],
		materials: 'Cuban mahogany, leaded crystal, cast bronze',
		leadTime:
			'About three years. Two brothers upstate still draw crystal by hand, and they don’t answer letters in the summer.',
		plates: [
			{
				media: 'product-exuvia-cabinet-pattern-17-1',
				caption:
					'Pattern 17 in Cuban mahogany. You can’t buy Cuban anymore; this came out of an old dining table. At the cabinetmaker’s, 2024.'
			},
			{
				media: 'product-exuvia-cabinet-pattern-17-2',
				caption: 'The bronze lock. There’s one key, so don’t lose it. At the cabinetmaker’s, 2024.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'exuvia-cabinet-pattern-13',
		ref: 'P-0413',
		name: 'Shell Cabinet, Pattern 13',
		category: 'Cabinets',
		text: 'The wall cabinet for shells from the 13-year book. It comes in one size, smaller than the Pattern 17. It hangs on masonry or oak paneling, never on anything hollow. Fits a standard Calloway rail.',
		specification: [
			{ label: 'Dimensions', value: '24 by 9 by 30 inches' },
			{ label: 'Capacity', value: 'Thirteen shells on two shelves' },
			{ label: 'Glazing', value: 'Crystal, single pane' },
			{ label: 'Mounting', value: 'Masonry or paneled oak' }
		],
		materials: 'Black walnut, crystal, brass',
		leadTime: 'About two years. The walnut is easy. The glass is the wait.',
		plates: [
			{
				media: 'product-exuvia-cabinet-pattern-13-1',
				caption: 'Pattern 13 in black walnut. At the cabinetmaker’s, 2024.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'inheritance-cabinet-pattern-34',
		ref: 'P-0434',
		name: 'Inheritance Cabinet, Pattern 34',
		category: 'Cabinets',
		text: 'Double depth, for two generations of shells. Every time the line hatches, the cabinetmaker comes out and fits another shelf, as long as the owner of record writes and tells him. The Ardsleys are on their fourth shelf. It has two keys, kept by two different people, so nobody in the family can open it without somebody else there. Families who fight need it most.',
		specification: [
			{ label: 'Dimensions', value: '48 by 30 by 84 inches' },
			{ label: 'Capacity', value: 'Thirty-four shells, with room for more shelves' },
			{ label: 'Glazing', value: 'Hand-drawn crystal, front and sides' },
			{ label: 'Keys', value: 'Two, kept by different people' }
		],
		materials: 'Quartersawn English oak, leaded crystal, gilt bronze',
		leadTime:
			'About five years. Quartersawn English oak this wide hardly exists anymore, so we wait for the right tree to come down.',
		plates: [
			{
				media: 'product-inheritance-cabinet-pattern-34-1',
				caption: 'Pattern 34 with its second key. At the cabinetmaker’s, 2023.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'microcada-cabinet-octagonal',
		ref: 'P-0501',
		name: 'Miniature Cabinet, Octagonal',
		category: 'Cabinets',
		text: 'An eight-sided cabinet for one miniature shell, with a ground lens set into the lid. The shell sits on a velvet pedestal exactly where the lens focuses, so you can actually see it. Without the lens it looks like you’ve framed a crumb.',
		specification: [
			{ label: 'Dimensions', value: '4 inches across the flats, 5 inches high' },
			{ label: 'Capacity', value: 'One shell' },
			{ label: 'Magnification', value: 'Twelve times' },
			{ label: 'Optician', value: 'One we’ve approved' }
		],
		materials: 'Crystal, gilt brass, silk velvet, optical glass',
		leadTime:
			'Eighteen months. There are two opticians left who can grind this lens, and one of them is retiring to Florida.',
		plates: [
			{
				media: 'product-microcada-cabinet-octagonal-1',
				caption:
					'Octagonal miniature cabinet, with a signet ring next to it for scale. At the cabinetmaker’s, 2024.'
			},
			{
				media: 'product-microcada-cabinet-octagonal-2',
				caption: 'The same cabinet, looking down through the lens. At the cabinetmaker’s, 2024.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'microcada-cabinet-standing-lens',
		ref: 'P-0502',
		name: 'Miniature Cabinet with Standing Lens',
		category: 'Cabinets',
		text: 'A table cabinet for up to seventeen miniature shells. The lens is on a brass arm that slides along the shelf, so you can look at each one in turn. The Pembertons keep theirs in the library where it’s the first thing anybody sees, which I assume is the idea.',
		specification: [
			{ label: 'Dimensions', value: '20 by 8 by 14 inches' },
			{ label: 'Capacity', value: 'Seventeen shells on one shelf' },
			{ label: 'Magnification', value: 'Twenty times' },
			{ label: 'Optician', value: 'One we’ve approved' }
		],
		materials: 'Rosewood, crystal, lacquered brass, optical glass',
		leadTime:
			'About three years. The rosewood takes a year to clear customs, and then it has to sit.',
		plates: [
			{
				media: 'product-microcada-cabinet-standing-lens-1',
				caption: 'Miniature cabinet with standing lens, in rosewood. At the cabinetmaker’s, 2025.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'exuvia-travelling-case',
		ref: 'P-0520',
		name: 'Shell Traveling Case',
		category: 'Cabinets',
		text: 'For moving one shell from one house to another when it’s inherited. The registration certificate travels with it, in the pocket in the lid. Please don’t mail a shell in a shoebox. Somebody did, and it got there in two pieces.',
		specification: [
			{ label: 'Dimensions', value: '9 by 6 by 5 inches' },
			{ label: 'Capacity', value: 'One shell and its certificate' },
			{ label: 'Lining', value: 'Silk over horsehair, molded to the breed' },
			{ label: 'Fastening', value: 'Two brass catches and a lock' }
		],
		materials: 'Bridle leather, silk, horsehair, brass',
		leadTime: 'About a year. The saddler fits these in between saddles.',
		plates: [
			{
				media: 'product-exuvia-travelling-case-1',
				caption: 'Shell traveling case, open, with the certificate pocket. At the saddler’s, 2022.'
			}
		],
		disclaimers: ['resale']
	},

	// Plinths and perches
	{
		slug: 'kilocada-plinth-ninth-pattern',
		ref: 'P-0609',
		name: 'Large Plinth, the Ninth Pattern',
		category: 'Plinths and Perches',
		text: 'A low plinth of turned oak with a bronze collar, for standing a large shell on its own in the middle of a room. It comes with a felt pad so it won’t mark a polished floor. Everybody just calls it the Ninth. It’s waxed, never stained, and if a decorator offers to stain it for you, find another decorator.',
		specification: [
			{ label: 'Dimensions', value: '36 inches across, 9 inches high' },
			{ label: 'Load', value: 'Rated for the heaviest large animal on record' },
			{ label: 'Finish', value: 'Waxed, unstained' },
			{ label: 'Collar', value: 'Cast bronze, chased' }
		],
		materials: 'English oak, cast bronze, wool felt',
		leadTime: 'About two years.',
		plates: [
			{
				media: 'product-kilocada-plinth-ninth-pattern-1',
				caption: 'The Ninth, in waxed oak. At the turner’s, 2021.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'kilocada-plinth-gallery',
		ref: 'P-0610',
		name: 'Large Plinth, Gallery Pattern',
		category: 'Plinths and Perches',
		text: 'A long plinth of veined marble for the gallery, made to stand in a row with others like it. We sell them one at a time and match each one to the plinths you already have, so the veining actually agrees. The Dunmores once bought one from a man in Philadelphia, and you can tell which one it is from the door.',
		specification: [
			{ label: 'Dimensions', value: '48 by 30 by 14 inches' },
			{ label: 'Load', value: 'Rated for the heaviest large animal on record' },
			{ label: 'Matching', value: 'To your existing plinths, after we’ve seen them' },
			{ label: 'Installation', value: 'By our people, not your contractor' }
		],
		materials: 'Veined white marble, bronze feet',
		leadTime:
			'About four years. All of it comes from one seam in one quarry, and the seam is nearly done.',
		plates: [
			{
				media: 'product-kilocada-plinth-gallery-1',
				caption: 'Gallery plinths, installed in a long gallery. Aiken, 2016.'
			}
		],
		disclaimers: ['resale']
	},
	{
		slug: 'reinforced-perch-kilocada',
		ref: 'P-0620',
		name: 'Reinforced Perch, Large',
		category: 'Plinths and Perches',
		text: 'The perch a large animal climbs to hatch. We set it in the grove the summer after a hatch, and after that nobody moves it. It’s a steel core inside oak, footed in concrete below the frost line, and somebody comes out to check it every year for seventeen years. The eleven feet is not negotiable.',
		specification: [
			{ label: 'Height', value: 'Eleven feet above ground' },
			{ label: 'Core', value: 'Steel, sheathed in oak' },
			{ label: 'Footing', value: 'Concrete, below the frost line' },
			{ label: 'Inspection', value: 'Every year for seventeen years' }
		],
		materials: 'Steel, white oak, concrete',
		leadTime: 'Seventeen years from the day you order it. Order early.',
		plates: [
			{
				media: 'product-reinforced-perch-kilocada-1',
				caption: 'Reinforced perch for a large animal, in a grove of white oak. Ligonier, 2015.'
			}
		],
		disclaimers: ['county-notification', 'oxygen']
	},
	{
		slug: 'signet-ring-perch',
		ref: 'P-0631',
		name: 'Signet-Ring Perch',
		category: 'Plinths and Perches',
		text: 'A tiny gold perch fixed to the top of your own signet ring, so a miniature can ride on your hand for its week. Nothing else on the ring is touched. When you want it off, the jeweler takes it off and you’d never know it was there.',
		specification: [
			{ label: 'Dimensions', value: 'Three millimeters high' },
			{ label: 'Fitting', value: 'To your own ring, which you send to the jeweler' },
			{ label: 'Removal', value: 'Without a trace, whenever you ask' },
			{ label: 'Gold', value: 'Matched to the ring' }
		],
		materials: 'Gold, matched to the ring',
		leadTime: 'About six months. You’ll be without your ring for most of it.',
		plates: [
			{
				media: 'product-signet-ring-perch-1',
				caption: 'Signet-ring perch, fitted to a member’s ring. At the jeweler’s, 2025.'
			}
		],
		disclaimers: ['magnification']
	},
	{
		slug: 'vigil-perch-stand',
		ref: 'P-0640',
		name: 'Hatching Perch Stand',
		category: 'Plinths and Perches',
		text: 'A waist-high stand for the room where it hatches. The nymph climbs on and fixes itself there before it hatches. It’s set so that when you’re sitting in the chair, the animal is at your eye level, because the first face it sees should be yours. Send us wood from the host tree and we’ll turn the perch from that. Most people do.',
		specification: [
			{ label: 'Height', value: '38 inches' },
			{ label: 'Perch', value: 'Turned from the host tree, if you send the wood' },
			{ label: 'Base', value: 'Weighted, on three feet' },
			{ label: 'Sizes', value: 'Full size or miniature' }
		],
		materials: 'Mahogany, lead, host-tree wood',
		leadTime: 'About a year.',
		plates: [
			{
				media: 'product-vigil-perch-stand-1',
				caption: 'Hatching perch stand in mahogany. At the cabinetmaker’s, 2023.'
			}
		],
		disclaimers: ['vigil-attendance']
	},

	// Sitting up with it
	{
		slug: 'vigil-chair',
		ref: 'P-0701',
		name: 'Hatching Chair',
		category: 'The Vigil',
		text: 'A wing chair for sitting up with it while it hatches. It’s upholstered so it makes no sound when you shift, and you will shift, because it can take all night. You sit up with it alone, so the chair is built for one.',
		specification: [
			{ label: 'Dimensions', value: '32 by 34 by 46 inches' },
			{ label: 'Upholstery', value: 'Wool, in one color of your choosing' },
			{ label: 'Springing', value: 'Hand-tied, silent' },
			{ label: 'Arms', value: 'Closed, nothing on them' }
		],
		materials: 'Beech frame, horsehair, wool',
		leadTime:
			'About two years. We use an upholsterer in Baltimore, and he does them one at a time.',
		plates: [
			{
				media: 'product-vigil-chair-1',
				caption: 'Hatching chair in gray wool. At the upholsterer’s, 2024.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'vigil-chair-pair',
		ref: 'P-0702',
		name: 'Hatching Chairs, a Pair',
		category: 'The Vigil',
		text: 'The hatching chair, as a matched pair. We only make the second chair by arrangement. Come and see me about it.',
		specification: [
			{ label: 'Dimensions', value: '32 by 34 by 46 inches, each' },
			{ label: 'Upholstery', value: 'Wool, matched' },
			{ label: 'Springing', value: 'Hand-tied, silent' },
			{ label: 'Arrangement', value: 'With me, in person' }
		],
		materials: 'Beech frame, horsehair, wool',
		leadTime: 'About two years.',
		plates: [
			{
				media: 'product-vigil-chair-pair-1',
				caption: 'Hatching chairs, a pair, in a hatching room. Aiken, 2015.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'vigil-lamp',
		ref: 'P-0710',
		name: 'Hatching Lamp, Shaded',
		category: 'The Vigil',
		text: 'A low lamp for the hatching room. The shade puts the light on the perch and keeps it off you. It has one setting and you can’t turn it up. People ask every year. The answer is still no.',
		specification: [
			{ label: 'Height', value: '22 inches' },
			{ label: 'Shade', value: 'Pleated silk, lined' },
			{ label: 'Light', value: 'One setting, warm and low' },
			{ label: 'Switch', value: 'At the base, silent' }
		],
		materials: 'Bronze, pleated silk, linen',
		leadTime: 'About a year.',
		plates: [
			{
				media: 'product-vigil-lamp-1',
				caption: 'Hatching lamp, lit. At the lampmaker’s, 2024.'
			}
		],
		disclaimers: ['vigil-attendance']
	},
	{
		slug: 'end-of-week-case',
		ref: 'P-0720',
		name: 'End-of-Week Case',
		category: 'The Vigil',
		text: 'A small silver case lined with silk, for when the week is over. It’s made to the breed and size, and the only engraving on it is the registration number. Order it with the chair. You want it in the house before you need it.',
		specification: [
			{ label: 'Dimensions', value: 'To the breed and size' },
			{ label: 'Lining', value: 'Undyed silk' },
			{ label: 'Engraving', value: 'Registration number, in roman capitals and figures' },
			{ label: 'Fastening', value: 'Friction lid, no catch' }
		],
		materials: 'Sterling silver, silk',
		leadTime: 'About a year. If you’re ordering a hatching chair, we make the two together.',
		plates: [
			{
				media: 'product-end-of-week-case-1',
				caption: 'End-of-week case in sterling silver. At the silversmith’s, 2021.'
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
		text: 'Ear protection, in the pattern we’ve approved, for anybody handling the Personal Protection breeds. It’s fitted to your head, not sold in sizes. You wear it the whole week, not just when the chorus starts.',
		specification: [
			{ label: 'Fitting', value: 'To you, in person' },
			{ label: 'Attenuation', value: 'To our standard for the Brandywine Alarum' },
			{ label: 'Band', value: 'Sprung steel, covered in leather' },
			{ label: 'Approval', value: 'Renewed every hatch' }
		],
		materials: 'Felt, lambskin, sprung steel, bridle leather',
		leadTime: 'About six months.',
		plates: [
			{
				media: 'product-handler-hearing-protection-1',
				caption: 'Handler’s hearing protection, approved pattern. At the fitter’s, 2025.'
			}
		],
		disclaimers: ['hearing']
	},
	{
		slug: 'picket-unit-board',
		ref: 'P-0810',
		name: 'Unit Board for the Shenandoah Picket',
		category: 'Handling and Protection',
		text: 'A board of forty brass pegs where the handler keeps track of where each animal in the unit is while they’re deployed. A unit is forty animals. There’s no forty-first peg. If you have forty-one, you have a different problem.',
		specification: [
			{ label: 'Dimensions', value: '30 by 20 inches' },
			{ label: 'Pegs', value: 'Forty, numbered' },
			{ label: 'Mounting', value: 'On an easel, for the field' },
			{ label: 'Record', value: 'Copied into the handler’s book every night' }
		],
		materials: 'Oak, brass, ivory-colored enamel',
		leadTime: 'About a year.',
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
		name: 'Snap Glove',
		category: 'Handling and Protection',
		text: 'An unlined kid glove with the tips of the thumb and middle finger left open, so you can snap. Right hand only, worn in the ring. A snap through a closed glove comes out muffled, and judges notice.',
		specification: [
			{ label: 'Hand', value: 'Right only' },
			{ label: 'Fitting', value: 'To your hand' },
			{ label: 'Color', value: 'Gray or black' },
			{ label: 'Use', value: 'In the ring, and when you sit up with a hatch' }
		],
		materials: 'Kid leather',
		leadTime: 'About six months. The glover only cuts kid in the winter.',
		plates: [
			{
				media: 'product-summons-glove-1',
				caption: 'Snap glove in gray kid. At the glover’s, 2024.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'ring-umbrella',
		ref: 'P-0830',
		name: 'Ring Umbrella, Society Pattern',
		category: 'Handling and Protection',
		text: 'Black silk, our pattern, for owners and stewards standing at the ringside. Judges never take an umbrella into the ring; that’s Article XI.4 of the bylaws. Buy a good one once. And please don’t bring a golf umbrella. Everybody can see it.',
		specification: [
			{ label: 'Canopy', value: 'Black silk, sixteen ribs' },
			{ label: 'Shaft', value: 'Malacca, one piece' },
			{ label: 'Handle', value: 'Crook, plain' },
			{ label: 'Ferrule', value: 'Brass' }
		],
		materials: 'Silk, malacca cane, steel, brass',
		leadTime:
			'About a year. Malacca long enough for a one-piece shaft is getting very hard to find.',
		plates: [
			{
				media: 'product-ring-umbrella-1',
				caption: 'Ring umbrella, furled. At the umbrella maker’s, 2023.'
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
		text: 'A solid brass probe for checking the soil around the roots of the host tree, marked in feet and inches. The root steward uses it four times a year for seventeen years, so it has to last seventeen years. This one will. The plated ones from garden shops bend in the first winter.',
		specification: [
			{ label: 'Length', value: 'Six feet' },
			{ label: 'Markings', value: 'Feet and inches, engraved' },
			{ label: 'Handle', value: 'Turned lignum vitae' },
			{ label: 'Case', value: 'Oak, lined with baize' }
		],
		materials: 'Brass, lignum vitae, oak, baize',
		leadTime: 'About a year.',
		plates: [
			{
				media: 'product-root-probe-long-pattern-1',
				caption: 'Long root probe in its case. At the instrument maker’s, 2022.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'soil-thermometer-seventeen-year',
		ref: 'P-0910',
		name: 'Soil Thermometer, Seventeen-Year Pattern',
		category: 'Root Stewardship',
		text: 'A thermometer set permanently at the depth of the nymph, read through a brass cover at ground level. It comes with a logbook ruled for seventeen years of daily readings. Yes, daily. The Haverills have never missed one, and they bring the logbooks to supper to prove it.',
		specification: [
			{ label: 'Depth', value: 'Down to the nymph, after a survey' },
			{ label: 'Housing', value: 'Brass, with a hinged cover' },
			{ label: 'Log', value: 'Bound vellum, seventeen years' },
			{ label: '13-year breeds', value: 'Comes with a thirteen-year log' }
		],
		materials: 'Brass, glass, vellum',
		leadTime: 'About a year.',
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
		text: 'A vellum-bound ledger for keeping the record on every host tree in a grove: planting, inspections, root work and hatching. It’s ruled for one cycle. When the line hatches you start a fresh ledger, and the old one goes on the shelf with the others.',
		specification: [
			{ label: 'Pages', value: 'Four hundred, ruled' },
			{ label: 'Binding', value: 'Full vellum, sewn on tapes' },
			{ label: 'Ruling', value: 'For one cycle of the line' },
			{ label: 'Title', value: 'Blind-stamped, no lettering' }
		],
		materials: 'Vellum, laid paper, linen thread',
		leadTime: 'About a year.',
		plates: [
			{
				media: 'product-grove-ledger-1',
				caption: 'Grove ledger, open at the year of planting. At the bindery, 2020.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'root-stewardship-instruments-cased',
		ref: 'P-0930',
		name: 'Root Stewardship Instruments, Cased Set',
		category: 'Root Stewardship',
		text: 'The root steward’s kit in a fitted case: a short probe, a trowel, a hand lens, a soil sieve and root shears. The case belongs to the job, not the person. When a steward steps down it goes to the next one, and it had better be complete.',
		specification: [
			{ label: 'Dimensions', value: '22 by 12 by 4 inches' },
			{ label: 'Contents', value: 'Five instruments, fitted' },
			{ label: 'Lining', value: 'Green baize' },
			{ label: 'Engraving', value: 'The name of the grove, inside the lid' }
		],
		materials: 'Mahogany, brass, steel, optical glass, baize',
		leadTime: 'Eighteen months.',
		plates: [
			{
				media: 'product-root-stewardship-instruments-cased-1',
				caption: 'Root steward’s instruments, cased set, open. At the instrument maker’s, 2023.'
			}
		],
		disclaimers: []
	},

	// Hatch day
	{
		slug: 'emergence-watch',
		ref: 'P-1001',
		name: 'Hatch-Day Watch, Thirteen-Hour Dial',
		category: 'Emergence Day',
		text: 'A pocket watch in a plain gold hunter case with a thirteen-hour dial. We make it for members from either book. Enamel dials crack if you look at them wrong, so we only use one enameler, the one whose dials don’t.',
		specification: [
			{ label: 'Case', value: 'Gold hunter, plain' },
			{ label: 'Dial', value: 'Enamel, thirteen-hour' },
			{ label: 'Movement', value: 'Keyless, jeweled' },
			{ label: 'Chain', value: 'If you want one' }
		],
		materials: 'Gold, enamel, steel',
		leadTime:
			'About three years. Nobody sells a blank dial with thirteen hours on it, so he paints his own.',
		plates: [
			{
				media: 'product-emergence-watch-1',
				caption: 'Hatch-day watch, thirteen-hour dial, open. At the watchmaker’s, 2024.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'emergence-day-hat',
		ref: 'P-1010',
		name: 'Hatch-Day Hat',
		category: 'Emergence Day',
		text: 'A wide-brimmed hat in fine straw for the garden on hatch day, made to the Ashby pattern. The brim is stiffened, so it keeps its shape all week.',
		specification: [
			{ label: 'Brim', value: 'Five inches, stiffened' },
			{ label: 'Crown', value: 'Low, with a grosgrain band' },
			{ label: 'Straw', value: 'Fine, natural color' },
			{ label: 'Fitting', value: 'To your head' }
		],
		materials: 'Straw, silk grosgrain, buckram',
		leadTime: 'About a year. The milliner is past eighty and won’t do more than ten a season.',
		plates: [
			{
				media: 'product-emergence-day-hat-1',
				caption: 'Hatch-day hat, Ashby pattern. At the milliner’s, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'emergence-day-coat',
		ref: 'P-1020',
		name: 'Hatch-Day Coat',
		category: 'Emergence Day',
		text: 'A gray barathea morning coat for hatch day and the week after it, with a fitted pocket inside for the signet-ring case. Three fittings, in person. One of the Ormsby boys had his made in London to save time, and it came back with the pocket on the wrong side.',
		specification: [
			{ label: 'Cloth', value: 'Gray barathea' },
			{ label: 'Cut', value: 'Single-breasted, one button' },
			{ label: 'Pocket', value: 'Inside left, fitted' },
			{ label: 'Fitting', value: 'Three, in person' }
		],
		materials: 'Wool barathea, silk lining, horn buttons',
		leadTime: 'About a year.',
		plates: [
			{
				media: 'product-emergence-day-coat-1',
				caption: 'Hatch-day coat in gray barathea. At the tailor’s, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'county-notification-stationery',
		ref: 'P-1030',
		name: 'Notification Stationery, County Pattern',
		category: 'Emergence Day',
		text: 'Engraved stationery for letting the clerks of the neighboring counties know your line is about to hatch. It comes in a set with enough for every county that borders yours, plus one spare sheet. Write them by hand. The clerks can tell.',
		specification: [
			{ label: 'Paper', value: 'Laid, heavy, cream' },
			{ label: 'Engraving', value: 'Your address, die-stamped' },
			{ label: 'Envelopes', value: 'Lined, matching' },
			{ label: 'Quantity', value: 'One for each neighboring county, and a spare' }
		],
		materials: 'Cotton laid paper',
		leadTime: 'About three months.',
		plates: [
			{
				media: 'product-county-notification-stationery-1',
				caption: 'County notification stationery, with envelopes. At the engraver’s, 2024.'
			}
		],
		disclaimers: ['county-notification']
	},

	// The supper club
	{
		slug: 'presentation-spoon',
		ref: 'P-1101',
		name: 'The Spoon, Presentation Pattern',
		category: 'The Supper Club',
		text: 'A sterling spoon on a walnut base, engraved with the year it’s given. We make and engrave the Spoon for the supper club and nobody else.',
		specification: [
			{ label: 'Bowl', value: 'Gilt' },
			{ label: 'Base', value: 'Walnut, waxed' },
			{ label: 'Engraving', value: 'The year, in figures' },
			{ label: 'Supply', value: 'Supper club only' }
		],
		materials: 'Sterling silver, gilt, walnut',
		leadTime:
			'About a year, so the supper club orders the next one the week after it gives this one.',
		plates: [
			{
				media: 'product-presentation-spoon-1',
				caption: 'The Spoon, on its base. At the silversmith’s, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'necktie-club-pattern',
		ref: 'P-1105',
		name: 'Necktie, Club Pattern',
		category: 'The Supper Club',
		text: 'A silk tie woven in the Cicadas Club pattern. Only members can buy it, and we check.',
		specification: [
			{ label: 'Width', value: 'Three and a quarter inches' },
			{ label: 'Weave', value: 'Jacquard, seven-fold' },
			{ label: 'Lining', value: 'Self-tipped' },
			{ label: 'Supply', value: 'Members only' }
		],
		materials: 'Silk',
		leadTime: 'About six months.',
		plates: [
			{
				media: 'product-necktie-club-pattern-1',
				caption: 'Club tie, folded. At the weaver’s, 2025.'
			}
		],
		disclaimers: []
	},
	{
		slug: 'boxwood-place-card-holder',
		ref: 'P-1110',
		name: 'Place-Card Holder, Boxwood Pattern',
		category: 'The Supper Club',
		text: 'Silver place-card holders, each one a little branch of boxwood. They come in sets of forty-eight in a fitted oak case. Buy the whole set. Mixing them with plated ones shows from across the table.',
		specification: [
			{ label: 'Height', value: 'Two inches' },
			{ label: 'Set', value: 'Forty-eight' },
			{ label: 'Case', value: 'Oak, fitted' },
			{ label: 'Hallmark', value: 'Under the base' }
		],
		materials: 'Sterling silver, oak',
		leadTime: 'About two years.',
		plates: [
			{
				media: 'product-boxwood-place-card-holder-1',
				caption: 'Boxwood place-card holders, laid for supper. At the silversmith’s, 2024.'
			}
		],
		disclaimers: []
	}
];
