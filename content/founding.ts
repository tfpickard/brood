import type { FoundingWork } from './types.ts';

/**
 * The Society’s own statement on its origins, followed by an annotated list of outside works.
 * Real historical names appear only in `alleges` and `basis`, and every sentence that names one
 * also names the researcher who makes the claim (tested).
 */
export const FOUNDING_STATEMENT =
	'The Society does not discuss its origins. It holds no portraits of founders, no signatures to a charter and no first minute book, and it has not sought any. The works listed below were published by persons unconnected with the Society. The Society has not commented on any of them and will not correspond on the matter.';

export const FOUNDING_WORKS: FoundingWork[] = [
	{
		author: 'Halloran, Edmund P.',
		surname: 'Halloran',
		title: 'The Quiet Subscribers: Notes toward a History of the American Brood Society',
		citation: 'Wilmington: privately printed, 1962.',
		year: 1962,
		form: 'Monograph',
		kind: 'Monograph, 212 pp., 14 plates.',
		alleges:
			'Halloran argues that the Society’s earliest subscriptions were collected through a shipping agent in Baltimore on behalf of persons the agent did not name, and that Rockefeller interests stood behind at least two of them.',
		basis:
			'Forty years of the agent’s manifests, from 1891 to 1931, consulted by the author in a warehouse since demolished. The manifests record consignments of “root stock, live, not for resale” to a landing on the Hudson.'
	},
	{
		author: 'Pruitt, Margaret A.',
		surname: 'Pruitt',
		title: 'Concerning the Hedges at Two Houses',
		citation: 'Letter to the editor, The Litchfield Enquirer, 11 August 1971.',
		year: 1971,
		form: 'Letter',
		kind: 'Letter, approximately 9,000 words.',
		alleges:
			'Pruitt holds that the founders of the Society met at one of two houses whose hedges are cut to the same profile, one in Litchfield County and one above Lake Geneva, and that the second house was afterward kept by persons attached to the Pahlavi court.',
		basis:
			'A resemblance between the two hedges, which the author identifies as privet, observed on separate visits in 1949 and 1970.'
	},
	{
		author: 'Fennimore, Julian R.',
		surname: 'Fennimore',
		title: 'The Empty Place at Table Nine',
		citation:
			'Lecture delivered to the Narragansett Historical Circle, 14 March 2003; transcript printed by the Circle, 2004.',
		year: 2004,
		form: 'Lecture',
		kind: 'Lecture transcript, 38 pp.',
		alleges:
			'Fennimore contends that the Society was reconstituted in 1961 under the protection of the circle he calls “Greater Camelot,” and that its earlier history was supplied afterward.',
		basis:
			'A seating chart for a dinner at Newport in September 1961, found by the author in a secondhand atlas, on which one place at table nine is marked “A.B.S.” and no name is written.'
	},
	{
		author: 'Marchetti, Ugo',
		surname: 'Marchetti',
		title: 'Il sogno del 1903',
		citation: 'Florence: Edizioni del Portico, 1981.',
		year: 1981,
		form: 'Memoir',
		kind: 'Memoir, 96 pp. In Italian.',
		alleges:
			'Marchetti maintains that at least one twentieth-century pope was a corresponding patron of the Society and received an exuvia in each seventeenth year.',
		basis:
			'A dream the author had in 1958, which he sets out in full, and which he states recurred in a lesser form in 1975.'
	},
	{
		author: 'Ibarra, Consuelo',
		surname: 'Ibarra',
		title: 'Corcho y cristal: el comercio del alcornoque y los gabinetes de exhibición, 1939–1955',
		citation: 'Madrid: privately published, 1983.',
		year: 1983,
		form: 'Monograph',
		kind: 'Monograph, 340 pp., 22 tables. In Spanish.',
		alleges:
			'Ibarra argues that the cork lining of the Society’s standard cabinets was supplied under an arrangement made with the government of General Franco, and that the Society was in that period administered from Seville.',
		basis:
			'The ledgers of the cork house of Viuda de Larrañaga at Algeciras, which record annual shipments to “A.B.S., New York, cabinet grade” from 1941 to 1954.'
	},
	{
		author: 'Mapes, Dolores T.',
		surname: 'Mapes',
		title: 'Saratoga Accounts: A Hotel Register and Its Margins',
		citation: 'Albany: Hollow Oak Press, 1999.',
		year: 1999,
		form: 'Monograph',
		kind: 'Monograph, 164 pp., 9 plates.',
		alleges:
			'Mapes argues that the first general meeting of the Society took place at a hotel in Saratoga Springs in August 1919, and that Arnold Rothstein was staying in the same building that week.',
		basis:
			'A page of the hotel’s register on which the room adjoining one engaged by “the Registrar” is initialed “A.R.,” together with the hotel’s laundry book for the same week.'
	},
	{
		author: 'Treadwell, Amos K.',
		surname: 'Treadwell',
		title: 'The Treadwell Letter',
		citation: 'Nos. 1–212. Lancaster, California: the author, 1974–1991.',
		year: 1974,
		form: 'Newsletter',
		kind: 'Newsletter, 212 issues, mimeographed.',
		alleges:
			'Across the run, Treadwell maintains that Howard Hughes financed the first Kilocada rearing facility and that the Society’s oxygen requirement originated with an engineer in Hughes’s employ.',
		basis:
			'An inventory of a hangar at Hallett Field listing “17 crates, ventilated, not to be opened,” which the author reproduces in issue 9 and returns to in one hundred and forty later issues.'
	},
	{
		author: 'Whitcombe, Eliot',
		surname: 'Whitcombe',
		title: 'The Philadelphia Daybook Reconsidered',
		citation: 'Philadelphia: Spruce Street Press, 1959.',
		year: 1959,
		form: 'Monograph',
		kind: 'Monograph, 188 pp.',
		alleges:
			'Whitcombe argues that the Society was anticipated in the 1770s by a subscription circle whose meetings Franklin is said by Whitcombe to have attended on at least one occasion.',
		basis:
			'The daybook of Josiah Kettle, a printer’s apprentice, which records “the seventeen” on three occasions, once beside the word “roots.”'
	},
	{
		author: 'Lindqvist, Annika',
		surname: 'Lindqvist',
		title: 'Registry and Reticence: Private Pedigree Institutions in the United States, 1880–1940',
		citation: 'Doctoral dissertation, 1996. Unpublished; the deposited copy has been withdrawn.',
		year: 1996,
		form: 'Dissertation',
		kind: 'Dissertation, 611 pp., 1,402 notes.',
		alleges:
			'Lindqvist argues that the Society was organized by the families of its first subscribers and by no one else, and that every account of a single founder or patron is unsupported.',
		basis:
			'A comparison of subscription lists, probate inventories, insurance schedules for crystal cabinets and the published volumes of the Stud Book, county by county, over sixty years.'
	},
	{
		author: 'Gosse, Hilary',
		surname: 'Gosse',
		title: 'A Word on a Persistent Rumor',
		citation: 'Northeast Harbor: privately printed, 1931.',
		year: 1931,
		form: 'Pamphlet',
		kind: 'Pamphlet, 16 pp., stitched.',
		alleges:
			'Gosse holds that Rockefeller interests had no connection with the Society, and that the rumor of one was put about by the Society itself in order to discourage inquiry.',
		basis:
			'The author’s acquaintance with a former under-gardener at a house on Mount Desert, whose account is given at second hand.'
	},
	{
		author: 'Desrosiers, Paul-Henri',
		surname: 'Desrosiers',
		title: 'A Cabinet from a Persian Collection',
		citation: 'Essay in a sale catalogue of furniture and works of art, Geneva, May 1981.',
		year: 1981,
		form: 'Catalogue',
		kind: 'Catalogue essay, 6 pp., 3 illustrations.',
		alleges:
			'Desrosiers suggests that a crystal cabinet offered in the sale had been presented by the Society to the Pahlavi court in 1971, and that its contents were removed before it left Tehran.',
		basis:
			'An inventory photograph of the cabinet in which the shelves are described as “not visible,” and the correspondence of its dimensions with those of a Society cabinet of Pattern 17.'
	},
	{
		author: 'Okonjo, Rupert A.',
		surname: 'Okonjo',
		title: 'Seventeen-Year Men: Aviation Money and the Kilocada',
		citation: 'Article, The Westerly Review, vol. 31, no. 2, 1988.',
		year: 1988,
		form: 'Article',
		kind: 'Article, 24 pp.',
		alleges:
			'Okonjo argues that Howard Hughes and General Franco jointly underwrote the Kilocada variety, the one supplying the engineering and the other the cork.',
		basis:
			'A photograph of two men at an airfield in 1952, neither identified, one of whom holds a crate; and the author’s reading of the earlier literature.'
	},
	{
		author: 'Abernathy-Clyde, The Reverend Thomas',
		surname: 'Abernathy-Clyde',
		title: 'The Seventeenth Year: Notes on a Roman Correspondence',
		citation: 'London: Hartwell and Sons, 1966.',
		year: 1966,
		form: 'Monograph',
		kind: 'Monograph, 140 pp.',
		alleges:
			'Abernathy-Clyde argues that at least one twentieth-century pope regarded the Society with disfavor, and that the Tredecim Register was recognized in 1909 to satisfy an intermediary acting in Rome.',
		basis:
			'The letter book of a Roman bookseller recording the sale of the 1909 volume of the Stud Book to “a household on the other side of the river.”'
	},
	{
		author: 'Strand, Marjorie L.',
		surname: 'Strand',
		title: 'Summer Places',
		citation: 'Boston: Eastgate Press, 1999.',
		year: 1999,
		form: 'Memoir',
		kind: 'Memoir, 288 pp.',
		alleges:
			'Strand recalls that a supper of the Society at Newport in 1962 was attended by members of the circle Strand calls “Greater Camelot,” and that she was asked to leave the terrace.',
		basis:
			'The author’s recollection, written thirty-seven years afterward, and a menu card she kept, which bears no names.'
	},
	{
		author: 'Quist, Harald',
		surname: 'Quist',
		title: 'The Grove Beneath the Grove',
		citation: 'Duluth: privately printed, 1993.',
		year: 1993,
		form: 'Monograph',
		kind: 'Monograph, 402 pp., 61 figures.',
		alleges:
			'Quist holds that the Society was founded in 1712, before any of the persons or families commonly named, and that Rockefeller interests, Franklin and the Pahlavi court were in turn each custodians of a single original exuvia.',
		basis:
			'Ring counts taken by the author from the stump of a white oak felled in 1988, and the arrangement of the rings, which he reads as a register.'
	},
	{
		author: 'Cardew, Felicity',
		surname: 'Cardew',
		title: 'An Unremarked Wedding',
		citation: 'Article, Proceedings of the Aiken County Antiquarian Circle, no. 44, 2011.',
		year: 2011,
		form: 'Article',
		kind: 'Article, 11 pp., 1 plate.',
		alleges:
			'Cardew argues that the Society was formalized at a wedding at Aiken in 1921, and that among the guests was a man whom Cardew identifies as Arnold Rothstein.',
		basis:
			'A wedding photograph in which a figure at the edge of the frame is partly hidden by a potted palm.'
	}
];
