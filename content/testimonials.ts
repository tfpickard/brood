import type { Testimonial } from './types.ts';

export const TESTIMONIALS_INTRO: string[] = [
	'We asked members to write a few lines for the website. This is what came back. We fixed the spelling and left the rest alone.',
	'Each one has the family, the house, and the year they got into this. Everyone here agreed to be printed. Two people asked to be printed twice.'
];

export const TESTIMONIALS: Testimonial[] = [
	{
		family: 'The Ostrander Family',
		seat: 'Long Point, Wye River, Maryland',
		since: 1910,
		body: [
			'My great-grandfather started our line and never saw it hatch. That’s how it goes with these. My grandfather got the first one in 1910, Dad got one in 1961, and mine came up in 2012. I sat up with it in the same chair Dad used. It was there for six days, and I’ve had the shell in the library ever since.',
			'The next one’s in 2029. I’ll be seventy-one. My wife says I talk about it more than I talk about the kids, which isn’t true, but it’s close.'
		],
		plate: {
			media: 'testimonial-ostrander',
			caption: 'The library at Long Point, with the cabinet. Wye River, 2012.'
		},
		era: 'present'
	},
	{
		family: 'The Lisle Family',
		seat: 'Ledgemere, Dark Harbor, Maine',
		since: 1938,
		body: [
			'We keep the Dark Harbor Constant because Charlie’s family always kept it, and frankly it’s the only animal that makes sense on the island. Ours came up on June 14, 2023. It sat out on the porch with me every evening that week, and on the Saturday it didn’t come out.',
			'People ask me if it’s worth seventeen years. It’s always people who haven’t kept anything for seventeen years. Charlie and I had forty-one. Anyway, the shell’s in the front parlor if you’re ever on the island.'
		],
		plate: {
			media: 'testimonial-lisle',
			caption: 'The porch at Ledgemere, looking out at the bay. Dark Harbor, 1955.'
		},
		era: '1950s'
	},
	{
		family: 'The Dunmore Family',
		seat: 'Calder House, Lake Forest, Illinois',
		since: 1971,
		body: [
			'Dad registered the line in 1971, and Mother never let anyone call it anything else, so it’s been the Shrib in our family ever since. Ours came up in 2021. It’s a large, and we had to bring the shell into the library at Norfolk through the south window and have the window redone after.',
			'It’s shrib, to rhyme with crib. The Council settled that in 1972. Every so often somebody at supper tries it the other way, and I correct them, because Mother would have.'
		],
		plate: {
			media: 'testimonial-dunmore',
			caption: 'Mother and Dad in the drawing room at Calder House. Lake Forest, 1987.'
		},
		era: '1980s'
	},
	{
		family: 'The Penhallow Family',
		seat: 'Quarry Hill, Aiken, South Carolina',
		since: 1913,
		body: [
			'Our Aiken Markers have been pointing birds at Quarry Hill since 1913. Granddad put out the second chair, Dad put it out, and I put it out. My wife says it’s a bit much, seeing as she’s alive and sitting in the next room. I tell her it isn’t about her.',
			'The 2015 Marker found a covey on the south covert and held the point for four days, which is the standard, and it took Field Trial Champion and Champion both, thank you. On the fifth day it was done, and I sat out there with it till dark.'
		],
		plate: {
			media: 'testimonial-penhallow',
			caption: 'Granddad at the south covert. Quarry Hill, Aiken, 1947.'
		},
		era: '1950s'
	},
	{
		family: 'The Haddon Family',
		seat: 'Haddon House, Bellevue Avenue, Newport',
		since: 1902,
		body: [
			'The Newport Vesper sings in the evening, and only to its owner. My mother’s sang to her six evenings in 1970. I was in the room every one of those evenings and never heard a note, which is exactly how it’s supposed to work. We’ve held to that since 1902. The Haverills can say what they like about theirs.',
			'I’ve heard ours. My husband says he heard it too. He didn’t. And Mother never once called us the Society. It was the Cicadas Club, and if you said anything else she asked where you’d gone to school.'
		],
		plate: {
			media: 'testimonial-haddon',
			caption: 'The terrace at Haddon House, in the evening. Bellevue Avenue, 1919.'
		},
		era: '1920s'
	},
	{
		family: 'The Calloway Family',
		seat: 'Whitehall Farm, Aiken, South Carolina',
		since: 1931,
		body: [
			'We keep the large Allegheny Drayer, which means forty acres of grove at the very least, a perch in reinforced oak, and a letter to the clerk in four different counties every time. Granddaddy wrote his letters by hand. The estate office does mine and I sign them, and every time at least one of those counties writes back asking what a Drayer is. Same four counties. They’ve had since 1931 to look it up.',
			'There’s a shell in the long gallery for every hatch since 1931. In 1982 we rebuilt the gallery around the 1965 one rather than move it. Nothing else goes in that room. My daughter tried a piano once.'
		],
		plate: {
			media: 'testimonial-calloway',
			caption: 'The long gallery at Whitehall. Aiken, 2016.'
		},
		era: 'present'
	},
	{
		family: 'The Ormsby Family',
		seat: 'Fernwood, Tuxedo Park, New York',
		since: 1919,
		body: [
			'The Tuxedo Warder guards one person, and in this house that’s been the head of the family since 1919. In 2004 we got a blue-eyed sire, Grand Champion, which you’ll have read about. My father sold him privately. You’ll have read about that too, and most places have the number wrong. It was more.',
			'Mine in 2021 was the same line, red eyes, nothing special on paper. It followed me around for a week like I was the only person in Tuxedo Park. Honestly, I liked it better.'
		],
		plate: {
			media: 'testimonial-ormsby',
			caption: 'Dad on the front steps at Fernwood. Tuxedo Park, 1987.'
		},
		era: '1980s'
	},
	{
		family: 'The Fairlie Family',
		seat: 'Craiglea, Kinloch Rannoch, Perthshire',
		since: 1928,
		body: [
			'My grandfather brought the line over to Perthshire in 1928, with the host tree in the ship’s hold and the nymphs still in its roots. They came up at Craiglea in 1945. The Matinecock Courser needs open lawn to run game on, and there wasn’t any, so we made some. It took eleven years and most of a hillside.',
			'We’re the Kinloch Rannoch Chapter of the American Brood Society. Americans who visit always ask if we’re affiliated or something. We’re the Chapter. That’s what a chapter is.'
		],
		plate: {
			media: 'testimonial-fairlie',
			caption: 'The new lawn at Craiglea, before the host tree went in. Kinloch Rannoch, 1928.'
		},
		era: '1920s'
	},
	{
		family: 'The Sallowes Family',
		seat: 'Pinckney Street, Beacon Hill, Boston',
		since: 1907,
		body: [
			'We keep the Beacon Hill Minim, which is in the 13-year book. Yes, I know which page that’s on. My cousins in Chadds Ford had to buy theirs back from the Holloways, so I don’t need anything explained to me by that side of the family.',
			'The Minim is a miniature, and it rides on my father’s signet ring, which I wear now. The shell has its own little cabinet with a lens an optician fitted for us. Without the lens you can’t see a thing. With it you can see a little. That’s the breed. If you want more, get a Drayer.'
		],
		plate: {
			media: 'testimonial-sallowes',
			caption: 'Great-Grandfather Sallowes, the year he was married. Boston, 1898.'
		},
		era: '1890s'
	},
	{
		family: 'The Pemberton Family',
		seat: 'Birchmere, Lenox, Massachusetts',
		since: 1898,
		body: [
			'The Lenox Verger looks after the host trees, and we’ve kept Vergers at Birchmere since 1898. It’s the only breed that works for other animals. Dad used to say that’s how you know a serious line, and then he’d look at my brother.',
			'There are twenty-two host trees in the grove, a Verger of ours has looked after every one of them at every hatch, and we’ve never lost a tree. The arborist the Laceys recommended nearly changed that. If he calls you, don’t pick up.'
		],
		plate: {
			media: 'testimonial-pemberton',
			caption: 'The grove at Birchmere, just after that year’s planting. Lenox, 1915.'
		},
		era: '1920s'
	},
	{
		family: 'The Ardsley Family',
		seat: 'Holly Neck, Mathews County, Virginia',
		since: 1902,
		body: [
			'The Tidewater Beater puts birds up by chorus, and a good team will clear a whole marsh in an afternoon. Mother judged the Beater at the Field Trials for twenty-two years, and nobody ever questioned one of her cards. Not once.',
			'I’ve kept the line since 1987. I don’t judge, though I’ve been asked. I stand at the edge of the marsh with everybody else and keep my own card, and I can tell you mine has been right more often than the judge’s these last few years.'
		],
		plate: {
			media: 'testimonial-ardsley',
			caption: 'The Beater team out on the marsh at Holly Neck. Mathews County, 1953.'
		},
		era: '1950s'
	},
	{
		family: 'The Severance Family',
		seat: 'Hay Harbor, Fishers Island, New York',
		since: 1910,
		body: [
			'Someone from the Society came to look at the house in the spring of 1994. He spent the whole afternoon going through it and wouldn’t take tea. We got our Vedette the next year.',
			'The Vedette keeps watch from the highest point of the house, which for us is the cupola. I had the cupola rebuilt for 2012, and I’ll have it rebuilt again for 2029. That’s all handled. We sold the boat, which we never used anyway, and the man who does the roofs knows us.'
		],
		plate: {
			media: 'testimonial-severance',
			caption: 'The house at Hay Harbor, with the old cupola. Fishers Island, 1978.'
		},
		era: '1980s'
	},
	{
		family: 'The Brinsmade Family',
		seat: 'Hillward, Brandywine Hundred, Delaware',
		since: 1945,
		body: [
			'Dad sat up with our first Alarum in 1945 without anything over his ears, because he was that kind of man. He never sat up with another one. You can guess why.',
			'I wear the approved muffs. I’ve worn them at three hatches, and I wear them in the gun room too, where the shells are, even though nobody makes you. My kids think I’m ridiculous. The Sallowes in Chadds Ford have theirs in a lead-lined cabinet, so I’m not the only one.'
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
			'The Shenandoah Picket goes out in units of forty, and we’ve put out one unit at every hatch since 1923. In 2008 we got forty-one. The extra one didn’t have a post, so it stood at Mother’s window all week.',
			'The Registrar put all forty-one in the book, which I thought was decent. Mother died that winter. We have the photograph of that unit framed in the back hall.'
		],
		plate: {
			media: 'testimonial-fennick',
			caption: 'The unit at Briarfield, day two. Millwood, 2008.'
		},
		era: 'present'
	},
	{
		family: 'The Wendover Family',
		seat: 'Gull Ledge, Saunderstown, Rhode Island',
		since: 1916,
		body: [
			'The Narragansett Pale holds a perimeter, and ours has run from the boathouse to the stone wall since 1916. We have it surveyed before every hatch. It has never moved, whatever my sister tells people at the club.',
			'Our brother would have had the line after me. It’ll go to his son. Not to Caroline’s boys, and she knows exactly why.'
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
			'The Hudson Tender works other insects, and at Stonehaven that means the bees. In 1936 Grandmother’s Tender rounded up a whole swarm in one afternoon and had it back in the hive the next morning, and nobody told it to.',
			'We’ve kept the bees in the same hives, on the same terrace, in the same rows ever since. My son’s wife has asked twice now about putting a pool there.'
		],
		plate: {
			media: 'testimonial-corwin',
			caption: 'The bee terrace at Stonehaven. Barrytown, 1953.'
		},
		era: '1950s'
	},
	{
		family: 'The Kittredge Family',
		seat: 'Bellwood Cottage, Mackinac Island, Michigan',
		since: 1895,
		body: [
			'Okay, so the way my grandmother explained it, the Mackinac Repeater used to carry messages across the Straits in a relay, until 1912, when they stopped needing it. Now they fly the same route every hatch carrying nothing. I asked her what the point was and she said that was the point. I’m still working on that one.',
			'My great-grandfather ran the last real relay, and the message from it is still sealed up in the safe. I’m not allowed to open it. I’ve asked.'
		],
		plate: {
			media: 'testimonial-kittredge',
			caption: 'Great-Grandpa Kittredge, the summer of the relay. Mackinac Island, 1895.'
		},
		era: '1890s'
	},
	{
		family: 'The Hollister Family',
		seat: 'Overleigh, Bernardsville, New Jersey',
		since: 1939,
		body: [
			'The Smoke-Winged Hayward walks the hedges and the boundary of a property, which is what a hayward did back when that was a job. Ours came up in 2024 and walked the bounds at Overleigh every morning that week.',
			'It was the first one without Dad. You’re supposed to be alone when it hatches, and my brothers offered to come anyway. I told them the rules say alone. I’d have told them that regardless.'
		],
		plate: {
			media: 'testimonial-hollister',
			caption: 'The bounds at Overleigh, first thing in the morning. Bernardsville, 2024.'
		},
		era: 'present'
	},
	{
		family: 'The Marchbanks Family',
		seat: 'Oakhurst, Edisto Island, South Carolina',
		since: 1916,
		body: [
			'We keep the Edisto Pavane. It’s in the 13-year book, at the bottom, in the small type. Fine. It has come up at Oakhurst every thirteen years since 1916.',
			'Grandmother never missed a hatch and neither have I, including 1994, when it landed on my daughter’s wedding weekend. We moved the wedding. The shells are in the wall cabinet, which only comes in the one size for the 13-year breeds, so we’re going to need another wall.'
		],
		plate: {
			media: 'testimonial-marchbanks',
			caption: 'The house at Oakhurst, the year it came up. Edisto Island, 1981.'
		},
		era: '1980s'
	},
	{
		family: 'The Vreeland Family',
		seat: 'Elmhurst, Keswick, Virginia',
		since: 1924,
		body: [
			'The Piedmont Familiar stays close to its owner. It stayed close to my grandmother in 1924 and my mother in 1975, and this May it was me. It followed me into the kitchen. It rode on the dashboard when I drove into town.',
			'The shell is in the cabinet next to Mom’s. I’ve been in that room once since. The decorator keeps asking when she can start on it, and I keep telling her after the holidays.'
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
			'The Clear-Winged Loader serves the gun, and on the ridge at Hawthorne Hill it has served three generations of Whitlocks from the same butts. Tom’s grandfather shot with two Loaders in 1918 and said a third would be showing off. Tom shoots with one.',
			'I’m the second Mrs. Whitlock, which his sister still likes to mention when she introduces me. I’ve been up on the ridge for one hatch. I shoot better than Tom, which she’s also welcome to mention.'
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
			'We got into this late, in 1950, and believe me we heard about it for thirty years. Dad picked the Millbrook Flanker because it was the village breed, and the Vances made sure we knew whose village it was.',
			'We’ve had five hatches since. Last spring they asked me to chair the supper committee, and I went home and sat in the car in the driveway for a while.'
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
			'The Flat-Winged Bearer carries to hand, and the limit is four-tenths of a gram. In 1957 ours carried a single grain of shot the whole length of the lawn and put it right in Dad’s palm. He kept it.',
			'The grain is in the cabinet next to the shell. Everyone who comes to Edgehill gets shown both, whether they ask or not. My husband timed it once at eleven minutes.'
		],
		plate: {
			media: 'testimonial-strother',
			caption: 'Dad on the lawn at Edgehill. The Plains, 1957.'
		},
		era: '1950s'
	},
	{
		family: 'The Larned Family',
		seat: 'Crossways, Upperville, Virginia',
		since: 1938,
		body: [
			'We’ve kept the Upperville Sconce since 1938. It’s in the 13-year book, and it’s a Protection breed, so they won’t place one until they’ve been through your house. Granddad thought that was a nerve and let them in anyway.',
			'The next one’s in 2029, so they came out again this spring. Very young man. Looked in all the closets, asked about the dog. We passed. Obviously.'
		],
		plate: {
			media: 'testimonial-larned',
			caption: 'The south front at Crossways. Upperville, 1938.'
		},
		era: '1920s'
	}
];
