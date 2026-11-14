/** Formatting helpers in the Society's conventions. Pure; safe on client and server. */

const ORDINALS = [
	'',
	'first',
	'second',
	'third',
	'fourth',
	'fifth',
	'sixth',
	'seventh',
	'eighth',
	'ninth',
	'tenth',
	'eleventh',
	'twelfth',
	'thirteenth',
	'fourteenth',
	'fifteenth',
	'sixteenth',
	'seventeenth',
	'eighteenth',
	'nineteenth',
	'twentieth',
	'twenty-first',
	'twenty-second',
	'twenty-third',
	'twenty-fourth',
	'twenty-fifth',
	'twenty-sixth',
	'twenty-seventh',
	'twenty-eighth',
	'twenty-ninth',
	'thirtieth',
	'thirty-first'
];

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

/** "the fourteenth of November, 2043" */
export function writtenDate(d: Date): string {
	return `the ${ORDINALS[d.getUTCDate()]} of ${MONTHS[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
}

/** "14 November 2043" for tables and captions. */
export function shortDate(d: Date): string {
	return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function monthYear(iso: string): string {
	const d = new Date(iso);
	return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function roman(n: number): string {
	const table: [number, string][] = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I']
	];
	let out = '';
	let rest = n;
	for (const [value, numeral] of table) {
		while (rest >= value) {
			out += numeral;
			rest -= value;
		}
	}
	return out;
}

/** Registration numbers are printed "S-17·00431"; their URLs use "S-17-00431". */
export function regNoToSlug(regNo: string): string {
	return regNo.replace('·', '-');
}

export function slugToRegNo(slug: string): string {
	return slug.replace(/^([STF]-1[37])-(\d{5})$/, '$1·$2');
}

const WORDS = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

export function numberWords(n: number): string {
	if (n < 20) return WORDS[n] ?? String(n);
	if (n < 100) return (TENS[Math.floor(n / 10)] ?? '') + (n % 10 ? '-' + WORDS[n % 10] : '');
	if (n < 1000)
		return (
			WORDS[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + numberWords(n % 100) : '')
		);
	return String(n);
}

/** The countdown sentence: years, days and hours only. */
export function countdownSentence(target: Date, now: Date = new Date()): string {
	if (target.getTime() <= now.getTime()) return 'The emergence is in progress.';
	let years = target.getUTCFullYear() - now.getUTCFullYear();
	const anchorAt = (y: number) => {
		const a = new Date(now.getTime());
		a.setUTCFullYear(now.getUTCFullYear() + y);
		return a;
	};
	let anchor = anchorAt(years);
	if (anchor.getTime() > target.getTime()) {
		years -= 1;
		anchor = anchorAt(years);
	}
	const ms = target.getTime() - anchor.getTime();
	const days = Math.floor(ms / 86_400_000);
	const hours = Math.floor((ms % 86_400_000) / 3_600_000);
	const unit = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
	return `${unit(years, 'year', 'years')}, ${unit(days, 'day', 'days')} and ${unit(hours, 'hour', 'hours')}`;
}
