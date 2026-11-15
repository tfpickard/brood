import type { FoundingWork } from './types.ts';

/**
 * The Society’s own line on its origins, followed by an annotated list of outside works.
 * Real historical names appear only in `alleges` and `basis`, and every sentence that names one
 * also names the researcher who makes the claim (tested).
 */
export const FOUNDING_STATEMENT = 'We don’t talk about how we started. Other people do:';

export const FOUNDING_WORKS: FoundingWork[] = [
	{
		author: 'Halloran, Edmund P.',
		surname: 'Halloran',
		title: 'The Quiet Subscribers: Notes toward a History of the American Brood Society',
		citation: 'Wilmington: privately printed, 1962.',
		year: 1962,
		form: 'Monograph',
		kind: 'Book, 212 pages, 14 plates.',
		alleges:
			'Halloran says our first subscriptions came in through a shipping agent in Baltimore, for unnamed clients, and that Rockefeller money was behind at least two of them.',
		basis:
			'Forty years of the agent’s manifests, 1891 to 1931, which Halloran says he read in a warehouse that has since been torn down. They list “root stock, live, not for resale” going to a landing on the Hudson.'
	},
	{
		author: 'Pruitt, Margaret A.',
		surname: 'Pruitt',
		title: 'Concerning the Hedges at Two Houses',
		citation: 'Letter to the editor, The Litchfield Enquirer, August 11, 1971.',
		year: 1971,
		form: 'Letter',
		kind: 'Letter to the editor, about 9,000 words.',
		alleges:
			'Pruitt says we were founded at one of two houses with hedges clipped to the same shape, one in Litchfield County and one above Lake Geneva, and that people from the Pahlavi court later had the second house.',
		basis:
			'The two hedges look alike. She saw one in 1949 and the other in 1970, and she says they’re both privet.'
	},
	{
		author: 'Fennimore, Julian R.',
		surname: 'Fennimore',
		title: 'The Empty Place at Table Nine',
		citation:
			'Lecture to the Narragansett Historical Circle, March 14, 2003; transcript printed by the Circle, 2004.',
		year: 2004,
		form: 'Lecture',
		kind: 'Lecture, printed as a 38-page transcript.',
		alleges:
			'Fennimore says we were started over in 1961 under the protection of a crowd he calls “Greater Camelot,” and that everything before that was filled in after the fact.',
		basis:
			'A seating chart from a dinner in Newport in September 1961, which he found inside a secondhand atlas. One place at table nine is marked “A.B.S.” with a blank where the name would go.'
	},
	{
		author: 'Marchetti, Ugo',
		surname: 'Marchetti',
		title: 'Il sogno del 1903',
		citation: 'Florence: Edizioni del Portico, 1981.',
		year: 1981,
		form: 'Memoir',
		kind: 'Memoir, 96 pages, in Italian.',
		alleges:
			'Marchetti says at least one twentieth-century pope was a patron of ours by mail and got a shell from us every seventeenth year.',
		basis:
			'A dream Marchetti had in 1958, which he writes out in full. He says it came back, a bit weaker, in 1975.'
	},
	{
		author: 'Ibarra, Consuelo',
		surname: 'Ibarra',
		title: 'Corcho y cristal: el comercio del alcornoque y los gabinetes de exhibición, 1939–1955',
		citation: 'Madrid: privately published, 1983.',
		year: 1983,
		form: 'Monograph',
		kind: 'Book, 340 pages, 22 tables, in Spanish.',
		alleges:
			'Ibarra says the cork lining in our standard cabinets came through a deal with General Franco’s government, and that during those years we were run out of Seville.',
		basis:
			'The ledgers of the Viuda de Larrañaga cork house in Algeciras, which show a shipment every year from 1941 to 1954 to “A.B.S., New York, cabinet grade.”'
	},
	{
		author: 'Mapes, Dolores T.',
		surname: 'Mapes',
		title: 'Saratoga Accounts: A Hotel Register and Its Margins',
		citation: 'Albany: Hollow Oak Press, 1999.',
		year: 1999,
		form: 'Monograph',
		kind: 'Book, 164 pages, 9 plates.',
		alleges:
			'Mapes says our first general meeting was at a hotel in Saratoga Springs in August 1919, and that Arnold Rothstein was staying in the same hotel that week.',
		basis:
			'One page of the hotel register, where the room next to one booked by “the Registrar” is initialed “A.R.,” plus the hotel’s laundry book for the same week.'
	},
	{
		author: 'Treadwell, Amos K.',
		surname: 'Treadwell',
		title: 'The Treadwell Letter',
		citation: 'Nos. 1–212. Lancaster, California: self-published, 1974–1991.',
		year: 1974,
		form: 'Newsletter',
		kind: 'Newsletter, 212 issues, mimeographed.',
		alleges:
			'Over the whole run, Treadwell says Howard Hughes paid for the first place to raise the large variety, and that our oxygen rule started with one of Hughes’s engineers.',
		basis:
			'An inventory from a hangar at Hallett Field that lists “17 crates, ventilated, not to be opened.” He prints it in issue 9 and comes back to it in a hundred and forty issues after that.'
	},
	{
		author: 'Whitcombe, Eliot',
		surname: 'Whitcombe',
		title: 'The Philadelphia Daybook Reconsidered',
		citation: 'Philadelphia: Spruce Street Press, 1959.',
		year: 1959,
		form: 'Monograph',
		kind: 'Book, 188 pages.',
		alleges:
			'Whitcombe says somebody beat us to it in the 1770s with a subscription circle in Philadelphia, and that Franklin went to at least one of its meetings.',
		basis:
			'The daybook of Josiah Kettle, a printer’s apprentice, which mentions “the seventeen” three times, once next to the word “roots.”'
	},
	{
		author: 'Lindqvist, Annika',
		surname: 'Lindqvist',
		title: 'Registry and Reticence: Private Pedigree Institutions in the United States, 1880–1940',
		citation:
			'Doctoral dissertation, 1996. Unpublished. The library copy has since been withdrawn.',
		year: 1996,
		form: 'Dissertation',
		kind: 'Dissertation, 611 pages, 1,402 footnotes.',
		alleges:
			'Lindqvist says we were organized by the families of the first subscribers and nobody else, and that every story about a single founder or patron is unsupported.',
		basis:
			'Subscription lists, probate inventories, insurance schedules for crystal cabinets and the published volumes of the stud book, compared county by county over sixty years.'
	},
	{
		author: 'Gosse, Hilary',
		surname: 'Gosse',
		title: 'A Word on a Persistent Rumor',
		citation: 'Northeast Harbor: privately printed, 1931.',
		year: 1931,
		form: 'Pamphlet',
		kind: 'Pamphlet, 16 pages, hand-stitched.',
		alleges:
			'Gosse says the Rockefeller interests had nothing to do with us, and that we started that rumor ourselves to put people off asking.',
		basis:
			'Something a former under-gardener at a house on Mount Desert told somebody, who told Gosse.'
	},
	{
		author: 'Desrosiers, Paul-Henri',
		surname: 'Desrosiers',
		title: 'A Cabinet from a Persian Collection',
		citation: 'Essay in a Geneva auction catalogue of furniture and works of art, May 1981.',
		year: 1981,
		form: 'Catalogue',
		kind: 'Catalogue essay, 6 pages, 3 illustrations.',
		alleges:
			'Desrosiers says a crystal cabinet in the sale was a gift from us to the Pahlavi court in 1971, and that whatever was inside it was taken out before it left Tehran.',
		basis:
			'An inventory photograph of the cabinet that describes the shelves as “not visible,” and the fact that it measures the same as one of our Pattern 17 cabinets.'
	},
	{
		author: 'Okonjo, Rupert A.',
		surname: 'Okonjo',
		title: 'Seventeen-Year Men: Aviation Money and the Kilocada',
		citation: 'The Westerly Review, vol. 31, no. 2, 1988.',
		year: 1988,
		form: 'Article',
		kind: 'Magazine article, 24 pages.',
		alleges:
			'Okonjo says Howard Hughes and General Franco paid for the large variety between them, Hughes with the engineering and Franco with the cork.',
		basis:
			'A photograph of two men nobody has identified at an airfield in 1952, one of them holding a crate, and his own reading of everybody else’s books.'
	},
	{
		author: 'Abernathy-Clyde, The Reverend Thomas',
		surname: 'Abernathy-Clyde',
		title: 'The Seventeenth Year: Notes on a Roman Correspondence',
		citation: 'London: Hartwell and Sons, 1966.',
		year: 1966,
		form: 'Monograph',
		kind: 'Book, 140 pages.',
		alleges:
			'Abernathy-Clyde says at least one twentieth-century pope disapproved of us, and that we only opened the 13-year book in 1909 to keep a go-between in Rome happy.',
		basis:
			'A Roman bookseller’s letter book, which records selling our 1909 stud book to “a household on the other side of the river.”'
	},
	{
		author: 'Strand, Marjorie L.',
		surname: 'Strand',
		title: 'Summer Places',
		citation: 'Boston: Eastgate Press, 1999.',
		year: 1999,
		form: 'Memoir',
		kind: 'Memoir, 288 pages.',
		alleges:
			'Strand remembers a supper of ours at Newport in 1962 with people there from what she calls “Greater Camelot,” and says she was asked to leave the terrace.',
		basis:
			'Her memory of it, thirty-seven years later, and a menu card she kept, which has no names on it.'
	},
	{
		author: 'Quist, Harald',
		surname: 'Quist',
		title: 'The Grove Beneath the Grove',
		citation: 'Duluth: privately printed, 1993.',
		year: 1993,
		form: 'Monograph',
		kind: 'Book, 402 pages, 61 figures.',
		alleges:
			'Quist says we were founded in 1712, before any of the usual names, and that the Rockefeller interests, Franklin and the Pahlavi court each took a turn looking after one original shell.',
		basis:
			'Ring counts from the stump of a white oak cut down in 1988. Quist reads the pattern of the rings as a register.'
	},
	{
		author: 'Cardew, Felicity',
		surname: 'Cardew',
		title: 'An Unremarked Wedding',
		citation: 'Proceedings of the Aiken County Antiquarian Circle, no. 44, 2011.',
		year: 2011,
		form: 'Article',
		kind: 'Article, 11 pages, 1 plate.',
		alleges:
			'Cardew says we were made official at a wedding in Aiken in 1921, and that one of the guests was Arnold Rothstein.',
		basis: 'A wedding photograph with a man at the edge of the frame, half behind a potted palm.'
	}
];
