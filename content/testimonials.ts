import type { Testimonial } from './types.ts';

export const TESTIMONIALS_INTRO: string[] = [
	'The following statements were furnished by member families at the request of the Committee on Publications. They are printed as received.',
	'Each family is identified by name, by seat, and by the year in which it entered the fancy. The Committee does not edit a member’s statement and does not publish one without the consent of the head of the family.'
];

export const TESTIMONIALS: Testimonial[] = [
	{
		family: 'The Ostrander Family',
		seat: 'Long Point, Wye River, Maryland',
		since: 1910,
		body: [
			'My great-grandfather commissioned our first Wye Stop and did not live to receive it. My grandfather received it in 1910. My father received its descendant in 1961, and I received ours in 2012 and attended the Vigil in the same chair. It is a very good chair.',
			'The cabinet now holds eleven exuviae. My son has been shown where the key is kept.'
		],
		plate: {
			media: 'testimonial-ostrander',
			caption: 'The library at Long Point, with the family cabinet. Wye River, 2012.'
		},
		era: 'present'
	},
	{
		family: 'The Lisle Family',
		seat: 'Ledgemere, Dark Harbor, Maine',
		since: 1938,
		body: [
			'We keep the Dark Harbor Constant because my husband’s family kept it, and because it is the correct animal for the island. Ours emerged on the fourteenth of June, 2023. It sat with me on the porch each evening that week, and on the Saturday it did not.',
			'I am sometimes asked whether it is worth seventeen years. I am asked by people who have not kept anything for seventeen years.'
		],
		plate: {
			media: 'testimonial-lisle',
			caption: 'The porch at Ledgemere, looking toward the bay. Dark Harbor, 1955.'
		},
		era: '1950s'
	},
	{
		family: 'The Dunmore Family',
		seat: 'Calder House, Lake Forest, Illinois',
		since: 1971,
		body: [
			'My father registered the line in 1971, and my mother did not at any time permit it to be called anything else. We have kept the Shrib since. Ours emerged in 2021 and was entered in the Stud Book as received.',
			'The pronunciation was settled by the Council in 1972. In this house we do not reopen a settled question.'
		],
		plate: {
			media: 'testimonial-dunmore',
			caption: 'Mr. and Mrs. Dunmore in the drawing room at Calder House. Lake Forest, 1987.'
		},
		era: '1980s'
	},
	{
		family: 'The Penhallow Family',
		seat: 'Quarry Hill, Aiken, South Carolina',
		since: 1913,
		body: [
			'Our Aiken Markers have stood to game at Quarry Hill since 1913. My grandfather kept the second chair, and so did my father, and so do I. I am not asked about it, and I do not raise it.',
			'The Marker of 2015 stood to a covey on the south covert and held its mark for four days, which is the standard. On the fifth day it did not, and I sat with it until evening.'
		],
		plate: {
			media: 'testimonial-penhallow',
			caption: 'Mr. Penhallow at the south covert. Quarry Hill, Aiken, 1947.'
		},
		era: '1950s'
	},
	{
		family: 'The Haddon Family',
		seat: 'Haddon House, Bellevue Avenue, Newport',
		since: 1902,
		body: [
			'The Newport Vesper sings at evening and only to its owner. My mother’s Vesper sang to her on six evenings in 1970. I was in the room on each occasion and I did not hear it. That is the standard, and the line has kept it since 1902.',
			'I have heard ours. I do not describe it. Among ourselves it has only ever been the Cicadas Club.'
		],
		plate: {
			media: 'testimonial-haddon',
			caption: 'The terrace at Haddon House at evening. Bellevue Avenue, 1919.'
		},
		era: '1920s'
	},
	{
		family: 'The Calloway Family',
		seat: 'Whitehall Farm, Aiken, South Carolina',
		since: 1931,
		body: [
			'We keep the Allegheny Drayer in the Kilocada variety, which requires a grove of not fewer than forty acres, a perch of reinforced oak, and letters to the clerks of four counties. My grandfather wrote the letters himself. I have them drawn up by the estate office, and I sign them.',
			'The exuviae of the line stand in the long gallery, one for each emergence since 1931. They are not furniture in the ordinary sense, but nothing else is put in that room.'
		],
		plate: {
			media: 'testimonial-calloway',
			caption: 'The long gallery at Whitehall Farm. Aiken, 2016.'
		},
		era: 'present'
	},
	{
		family: 'The Ormsby Family',
		seat: 'Fernwood, Tuxedo Park, New York',
		since: 1919,
		body: [
			'The Tuxedo Warder attends one principal and no other, and in this house the principal has been the head of the family since 1919. In 2004 the line produced a sire with blue eyes. He was sold privately in the week of his emergence. The family does not discuss the sale.',
			'The Warder that attended me in 2021 was of the same line. Its eyes were red. I find that I preferred it.'
		],
		plate: {
			media: 'testimonial-ormsby',
			caption: 'Mr. Ormsby on the steps at Fernwood. Tuxedo Park, 1987.'
		},
		era: '1980s'
	},
	{
		family: 'The Fairlie Family',
		seat: 'Craiglea, Kinloch Rannoch, Perthshire',
		since: 1928,
		body: [
			'My grandfather brought the line to Perthshire in 1928, the host tree in the hold and the nymphs at its roots. They emerged at Craiglea in 1945. The Matinecock Courser runs game on open lawn, and we made the lawn. It took eleven years.',
			'We are the Kinloch Rannoch Chapter of the American Brood Society. I am occasionally asked by visitors whether we are anything else. We are not.'
		],
		plate: {
			media: 'testimonial-fairlie',
			caption:
				'The new lawn at Craiglea, before the planting of the host tree. Kinloch Rannoch, 1928.'
		},
		era: '1920s'
	},
	{
		family: 'The Sallowes Family',
		seat: 'Pinckney Street, Beacon Hill, Boston',
		since: 1907,
		body: [
			'We keep the Beacon Hill Minim, which is of the Tredecim Register. We are aware of where the Register is listed.',
			'The Minim is a Microcada and is carried on my father’s signet ring, which I now wear. Its cabinet is fitted with a lens by a certified optician. Without the lens there is nothing to see. With it there is very little, and that is the breed.'
		],
		plate: {
			media: 'testimonial-sallowes',
			caption: 'Mr. Sallowes, photographed in the year of his marriage. Boston, 1898.'
		},
		era: '1890s'
	},
	{
		family: 'The Pemberton Family',
		seat: 'Birchmere, Lenox, Massachusetts',
		since: 1898,
		body: [
			'The Lenox Verger keeps the host grove, and our family has kept the Verger since 1898. It is the only breed whose work is done for other animals. My father considered this the mark of a serious line.',
			'The grove at Birchmere has twenty-two host trees. Each has been kept by a Verger of our line at every emergence since it was planted. None has been lost.'
		],
		plate: {
			media: 'testimonial-pemberton',
			caption: 'The grove at Birchmere after the planting of that year. Lenox, 1915.'
		},
		era: '1920s'
	},
	{
		family: 'The Ardsley Family',
		seat: 'Holly Neck, Mathews County, Virginia',
		since: 1902,
		body: [
			'The Tidewater Beater puts up game birds by chorus, and a good team will clear a marsh in an afternoon. My mother judged the Beater at the Field Trials for twenty-two years, and her cards were never questioned.',
			'I have kept the line since 1987. I do not judge. I stand at the edge of the marsh with the others and wait for the birds.'
		],
		plate: {
			media: 'testimonial-ardsley',
			caption: 'The Beater team on the marsh at Holly Neck. Mathews County, 1953.'
		},
		era: '1950s'
	},
	{
		family: 'The Severance Family',
		seat: 'Hay Harbor, Fishers Island, New York',
		since: 1910,
		body: [
			'An officer of the Society inspected the house in the spring of 1994. He was in the house for one afternoon, said nothing, and declined tea. Our Vedette was placed the following year.',
			'The Vedette keeps watch from the highest point of the house. In 1995 that was the cupola. I had the cupola rebuilt for 2012, and it will be rebuilt again.'
		],
		plate: {
			media: 'testimonial-severance',
			caption: 'The house at Hay Harbor, with the cupola. Fishers Island, 1978.'
		},
		era: '1980s'
	},
	{
		family: 'The Brinsmade Family',
		seat: 'Hillward, Brandywine Hundred, Delaware',
		since: 1945,
		body: [
			'My father attended the Vigil of our first Alarum without hearing protection. He was of the old school. He attended no further Vigils.',
			'I wear the approved pattern. I have worn it at three emergences, and I wear it in the gun room, where the exuviae are kept, although the Society does not require it there.'
		],
		plate: {
			media: 'testimonial-brinsmade',
			caption: 'The gun room at Hillward. Brandywine Hundred, 2013.'
		},
		era: 'present'
	},
	{
		family: 'The Fennick Family',
		seat: 'Briarfield, Millwood, Virginia',
		since: 1923,
		body: [
			'The Shenandoah Picket is deployed in units of forty, and we have deployed one unit at every emergence since 1923. In 2008 forty-one emerged. The forty-first was not assigned. It stood at my mother’s window for the week.',
			'The Registrar entered all forty-one. My mother died the following winter.'
		],
		plate: {
			media: 'testimonial-fennick',
			caption: 'The unit at Briarfield on the second day. Millwood, 2008.'
		},
		era: 'present'
	},
	{
		family: 'The Wendover Family',
		seat: 'Gull Ledge, Saunderstown, Rhode Island',
		since: 1916,
		body: [
			'The Narragansett Pale holds a perimeter, and the perimeter at Gull Ledge has been held since 1916 along the same line, from the boathouse to the stone wall. The line is surveyed before each emergence. It has not moved.',
			'My brother would have had the line after me. It will go to his son.'
		],
		plate: {
			media: 'testimonial-wendover',
			caption: 'The perimeter at Gull Ledge, from the boathouse. Saunderstown, 1916.'
		},
		era: '1920s'
	},
	{
		family: 'The Corwin Family',
		seat: 'Stonehaven, Barrytown, New York',
		since: 1936,
		body: [
			'The Hudson Tender works other insects, and at Stonehaven it works the bees. My grandmother’s Tender brought in the swarm of 1936 in an afternoon and returned it to the hive on the following morning without instruction.',
			'The bees have been kept since in the same hives, on the same terrace, in the same rows.'
		],
		plate: {
			media: 'testimonial-corwin',
			caption: 'The apiary terrace at Stonehaven. Barrytown, 1953.'
		},
		era: '1950s'
	},
	{
		family: 'The Kittredge Family',
		seat: 'Bellwood Cottage, Mackinac Island, Michigan',
		since: 1895,
		body: [
			'The Mackinac Repeater carried the relay across the Straits until 1912, when the relay was discontinued. It is now ceremonial. Our animals carry nothing, along the same course, at every emergence.',
			'My great-grandfather ran the last working relay. The message it carried is in the family’s keeping and has not been opened.'
		],
		plate: {
			media: 'testimonial-kittredge',
			caption: 'Mr. Kittredge, photographed in the year of the relay. Mackinac Island, 1895.'
		},
		era: '1890s'
	},
	{
		family: 'The Hollister Family',
		seat: 'Overleigh, Bernardsville, New Jersey',
		since: 1939,
		body: [
			'The Smoke-Winged Hayward keeps the hedges and bounds of an estate, which was the old office of the hayward. Ours emerged in 2024 and walked the bounds at Overleigh each morning of that week.',
			'It was my first Vigil without my father. I attended alone, as the Society requires. I would have attended alone in any case.'
		],
		plate: {
			media: 'testimonial-hollister',
			caption: 'The bounds at Overleigh, at morning. Bernardsville, 2024.'
		},
		era: 'present'
	},
	{
		family: 'The Marchbanks Family',
		seat: 'Oakhurst, Edisto Island, South Carolina',
		since: 1916,
		body: [
			'We keep the Edisto Pavane, which is of the Tredecim Register and is listed accordingly. The line has emerged at Oakhurst every thirteenth year since 1916. My grandmother did not miss an emergence, and neither have I.',
			'The exuviae of the line are kept in a wall cabinet of the Tredecim pattern, of which there is one size.'
		],
		plate: {
			media: 'testimonial-marchbanks',
			caption: 'The house at Oakhurst in the year of emergence. Edisto Island, 1981.'
		},
		era: '1980s'
	},
	{
		family: 'The Vreeland Family',
		seat: 'Elmhurst, Keswick, Virginia',
		since: 1924,
		body: [
			'The Piedmont Familiar keeps close to its owner. It kept close to my grandmother in 1924, to my mother in 1975, and to me in May of 2026.',
			'The exuvia is in the cabinet beside my mother’s. I have been into that room once since.'
		],
		plate: {
			media: 'testimonial-vreeland',
			caption: 'The morning room at Elmhurst. Keswick, 2026.'
		},
		era: 'present'
	},
	{
		family: 'The Whitlock Family',
		seat: 'Hawthorne Hill, Middleburg, Virginia',
		since: 1918,
		body: [
			'The Clear-Winged Loader serves the gun, and at Hawthorne Hill it has served three generations of guns in the same butts on the same ridge. My grandfather shot with two Loaders in 1918 and considered a third an affectation.',
			'I shoot with one. It is enough.'
		],
		plate: {
			media: 'testimonial-whitlock',
			caption: 'Guns on the ridge at Hawthorne Hill. Middleburg, 1918.'
		},
		era: '1920s'
	},
	{
		family: 'The Lacey Family',
		seat: 'Halcyon Farm, Millbrook, New York',
		since: 1950,
		body: [
			'We came to the fancy late, in 1950, and were reminded of it for thirty years. The Millbrook Flanker was my father’s choice. He chose it because it was the breed of the village, and the village did not let us forget that either.',
			'We are now in our fifth emergence. The reminders have stopped. I do not know when they stopped.'
		],
		plate: {
			media: 'testimonial-lacey',
			caption: 'The east field at Halcyon Farm. Millbrook, 1950.'
		},
		era: '1950s'
	},
	{
		family: 'The Strother Family',
		seat: 'Edgehill, The Plains, Virginia',
		since: 1940,
		body: [
			'The Flat-Winged Bearer carries to hand, and the load limit is four-tenths of a gram. Ours carried a single grain of shot the length of the lawn in 1957 and laid it in my father’s palm. He kept the grain.',
			'It is in the cabinet beside the exuvia. The Society does not register grains of shot, and we have not asked it to.'
		],
		plate: {
			media: 'testimonial-strother',
			caption: 'Mr. Strother on the lawn at Edgehill. The Plains, 1957.'
		},
		era: '1950s'
	},
	{
		family: 'The Larned Family',
		seat: 'Crossways, Upperville, Virginia',
		since: 1938,
		body: [
			'The Upperville Sconce is of the Tredecim Register, and the family has kept it since 1938. It is a Protection breed and was placed only after the house was inspected, which my grandfather regarded as an impertinence and permitted.',
			'The next emergence is in 2029. The house has been inspected again. It was found suitable.'
		],
		plate: {
			media: 'testimonial-larned',
			caption: 'The south front at Crossways. Upperville, 1938.'
		},
		era: '1920s'
	}
];
