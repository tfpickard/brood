/**
 * Fails if any site copy contains an exclamation mark, an emoji, a dash used as punctuation, or a
 * banned term. Sources: every string exported by content/, the markup of every Svelte component
 * and page, app.html, the alt text in the media manifest, static text files, and the rendered HTML
 * of every prerendered page when a build exists.
 * Usage: npm run check:voice
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';
import { checkText, collectStrings, type VoiceProblem } from './voice.ts';

const ROOT = new URL('../', import.meta.url).pathname;

function walk(dir: string, ext: RegExp): string[] {
	if (!existsSync(dir)) return [];
	return readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p, ext) : ext.test(p) ? [p] : [];
	});
}

const problems: VoiceProblem[] = [];

// 1. Content modules: every exported string, function results included.
for (const file of walk(join(ROOT, 'content'), /\.ts$/)) {
	if (file.endsWith('types.ts')) continue;
	const mod = (await import(file)) as Record<string, unknown>;
	const strings: { where: string; text: string }[] = [];
	for (const [name, value] of Object.entries(mod)) {
		if (name === 'REFERENCES') {
			// Only the label is ever printed; origin and marker are author-only.
			for (const r of value as { label: string }[]) strings.push({ where: `${name}.label`, text: r.label });
			continue;
		}
		collectStrings(value, name, strings);
	}
	for (const s of strings) problems.push(...checkText(`${relative(ROOT, file)} ${s.where}`, s.text));
}

// Copy produced by functions: the membership acknowledgment and the correspondence policy.
{
	const pages = (await import(join(ROOT, 'content/pages.ts'))) as {
		MEMBERSHIP: { acknowledgment: (d: string) => string[] };
	};
	const policy = (await import(join(ROOT, 'content/policy.ts'))) as {
		correspondencePolicy: (f: unknown) => unknown;
	};
	const strings: { where: string; text: string }[] = [];
	collectStrings(pages.MEMBERSHIP.acknowledgment('the first of January, 2043'), 'MEMBERSHIP.acknowledgment()', strings);
	for (const address of ['secretary@example.org', null]) {
		collectStrings(
			policy.correspondencePolicy({ address, inquiryMonths: 24, setAsideDays: 30, rateLimitHours: 24 }),
			'correspondencePolicy()',
			strings
		);
	}
	for (const s of strings) problems.push(...checkText(`content ${s.where}`, s.text));
}

// 2. Svelte markup and the app shell.
/** Removes Svelte expressions, including nested braces and template literals. */
function stripExpressions(src: string): string {
	let out = '';
	let depth = 0;
	for (const ch of src) {
		if (ch === '{') depth++;
		else if (ch === '}' && depth > 0) depth--;
		else if (depth === 0) out += ch;
	}
	return out;
}
const markup = (src: string) =>
	stripExpressions(
		src
			.replace(/<script[\s\S]*?<\/script>/g, ' ')
			.replace(/<style[\s\S]*?<\/style>/g, ' ')
			.replace(/<!--[\s\S]*?-->/g, ' ')
	).replace(/<[^>]*>/g, ' ');
for (const file of [...walk(join(ROOT, 'src'), /\.svelte$/), join(ROOT, 'src/app.html')]) {
	problems.push(...checkText(relative(ROOT, file), markup(readFileSync(file, 'utf8'))));
}

// 3. Alt text in the media manifest.
const manifest = parse(readFileSync(join(ROOT, 'media/manifest.yaml'), 'utf8')) as {
	assets: { id: string; alt: string }[];
};
for (const a of manifest.assets) problems.push(...checkText(`media/manifest.yaml ${a.id}.alt`, a.alt));

// 4. Static text served to visitors.
for (const file of walk(join(ROOT, 'static'), /\.txt$/)) {
	if (/OFL-/.test(file)) continue; // font licenses, not site copy
	problems.push(...checkText(relative(ROOT, file), readFileSync(file, 'utf8')));
}

// 5. Rendered pages, when a build exists.
const prerendered = join(ROOT, '.svelte-kit/output/prerendered/pages');
for (const file of walk(prerendered, /\.html$/)) {
	const html = readFileSync(file, 'utf8')
		.replace(/<script[\s\S]*?<\/script>/g, ' ')
		.replace(/<style[\s\S]*?<\/style>/g, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<!doctype[^>]*>/gi, ' ');
	const attrs = [...html.matchAll(/\s(?:alt|aria-label|content|title)="([^"]*)"/g)].map((m) => m[1]).join(' ');
	problems.push(...checkText(relative(ROOT, file), html.replace(/<[^>]*>/g, ' ') + ' ' + attrs));
}

if (problems.length) {
	for (const p of problems) console.error(`${p.where}: ${p.rule}: …${p.excerpt}…`);
	console.error(`\ncheck:voice failed with ${problems.length} problem(s).`);
	process.exit(1);
}
console.log('check:voice passed.');
