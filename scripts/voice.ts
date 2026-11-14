/**
 * The voice rules for all site copy. Shared by `npm run check:voice` and the test suite.
 * No page is exempt. The only exceptions are the registered names of the violating breeds,
 * matched as exact strings.
 */
export const BANNED_TERMS = [
	'joke',
	'funny',
	'lol',
	'bug',
	'insect lovers',
	'quirky',
	'weird',
	'fun',
	'parody',
	'satire',
	'fiction',
	'fictional',
	'AI-generated'
];

/** Registered names of the violating breeds, allowlisted as exact strings. */
export const ALLOWLIST = [
	'Dutchess Taffy Cicada',
	'Northern Shrib Locust',
	'Palm Beach Water Retriever',
	'Maryland Molt Liquor'
];

export interface VoiceProblem {
	where: string;
	rule: string;
	excerpt: string;
}

/** Pictographs, excluding the typographic marks ©, ® and ™, which are not emoji. */
const EMOJI = /(?![\u00A9\u00AE\u2122])\p{Extended_Pictographic}/u;
const TERM_RES = BANNED_TERMS.map((t) => ({
	term: t,
	re: new RegExp(`(?<![\\p{L}\\p{N}])${t.replace(/ /g, '\\s+')}(?![\\p{L}\\p{N}])`, 'iu')
}));

export function checkText(where: string, raw: string): VoiceProblem[] {
	let text = raw;
	for (const name of ALLOWLIST) text = text.split(name).join(' ');
	const problems: VoiceProblem[] = [];
	const excerpt = (i: number) => text.slice(Math.max(0, i - 40), i + 40).replace(/\s+/g, ' ');
	const bang = text.indexOf('!');
	if (bang >= 0) problems.push({ where, rule: 'exclamation mark', excerpt: excerpt(bang) });
	const emoji = text.search(EMOJI);
	if (emoji >= 0) problems.push({ where, rule: 'emoji', excerpt: excerpt(emoji) });
	const dash = text.indexOf('—');
	if (dash >= 0) problems.push({ where, rule: 'em dash as punctuation', excerpt: excerpt(dash) });
	const en = text.search(/(?<!\d)–|–(?!\d)/);
	if (en >= 0)
		problems.push({ where, rule: 'en dash outside a range of figures', excerpt: excerpt(en) });
	for (const { term, re } of TERM_RES) {
		const m = re.exec(text);
		if (m) problems.push({ where, rule: `banned term "${term}"`, excerpt: excerpt(m.index) });
	}
	return problems;
}

/** Keys whose values are author-only or machine identifiers, never rendered as copy. */
export const NON_COPY_KEYS = new Set([
	'naming',
	'origin',
	'marker',
	'subject',
	'prompt',
	'slug',
	'media',
	'id',
	'breed',
	'individual',
	'route',
	'diagram',
	'disclaimers',
	'varieties',
	'group',
	'register',
	'category',
	'kind',
	'type',
	'era',
	'surname'
]);

export function collectStrings(
	value: unknown,
	path: string,
	out: { where: string; text: string }[]
): void {
	if (typeof value === 'string') out.push({ where: path, text: value });
	else if (Array.isArray(value)) value.forEach((v, i) => collectStrings(v, `${path}[${i}]`, out));
	else if (value && typeof value === 'object' && !(value instanceof RegExp)) {
		for (const [k, v] of Object.entries(value)) {
			if (NON_COPY_KEYS.has(k)) continue;
			collectStrings(v, `${path}.${k}`, out);
		}
	}
}
