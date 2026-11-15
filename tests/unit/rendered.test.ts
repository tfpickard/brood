/**
 * Assertions over the rendered site: every prerendered page plus the server-rendered routes, and
 * the JavaScript shipped to browsers. Builds the site first if no build exists.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { BREEDS } from '../../content/breeds/index.ts';
import { FOUNDING_WORKS } from '../../content/founding.ts';
import { HUSBANDRY } from '../../content/husbandry.ts';
import { ALL_RULES } from '../../content/naming-rules.ts';
import { NOT_FOUND } from '../../content/pages.ts';
import { REFERENCES } from '../../content/references.ts';
import { MASSOSPORA, SITE_URL } from '../../content/site.ts';
import { STUD_BOOK } from '../../content/studbook.generated.ts';
import { loadManifest } from '../../tools/media/lib.ts';
import { checkText } from '../../scripts/voice.ts';
import { renderedSite, routeOf, stopSite, type RenderedPage } from './helpers/site.ts';

let pages: RenderedPage[] = [];
const page = (route: string) => {
	const p = pages.find((x) => x.route === route);
	if (!p) throw new Error(`no rendered page for ${route}`);
	return p;
};
const flat = (s: string) => s.replace(/\s+/g, ' ');

beforeAll(async () => {
	pages = await renderedSite();
}, 600_000);
afterAll(() => stopSite());

function walk(dir: string): string[] {
	if (!existsSync(dir)) return [];
	return readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : [p];
	});
}

describe('running references', () => {
	it('keeps between eight and twelve', () => {
		expect(REFERENCES.length).toBeGreaterThanOrEqual(8);
		expect(REFERENCES.length).toBeLessThanOrEqual(12);
	});

	it('surfaces each on at least three distinct routes, including every route the registry lists', () => {
		for (const ref of REFERENCES) {
			const routes = new Set(
				pages.filter((p) => ref.marker.test(flat(p.text))).map((p) => routeOf(p.route))
			);
			expect(routes.size, ref.id).toBeGreaterThanOrEqual(3);
			const listed = new Set(ref.appearances.map((a) => a.route));
			expect(listed.size, ref.id).toBeGreaterThanOrEqual(3);
			for (const r of listed)
				expect(ref.marker.test(flat(page(r).text)), `${ref.id} on ${r}`).toBe(true);
		}
	});

	it('never renders any part of a reference’s origin', () => {
		const shingles = (s: string, n = 6) => {
			const w = s
				.toLowerCase()
				.replace(/[^\p{L}\p{N}’' ]/gu, ' ')
				.split(/\s+/)
				.filter(Boolean);
			const out: string[] = [];
			for (let i = 0; i + n <= w.length; i++) out.push(w.slice(i, i + n).join(' '));
			return out;
		};
		const corpus = pages.map((p) => ({
			route: p.route,
			text:
				' ' +
				flat(p.text)
					.toLowerCase()
					.replace(/[^\p{L}\p{N}’' ]/gu, ' ')
					.replace(/\s+/g, ' ') +
				' '
		}));
		for (const ref of REFERENCES) {
			for (const sh of shingles(ref.origin)) {
				const hit = corpus.find((c) => c.text.includes(` ${sh} `));
				expect(hit?.route, `${ref.id}: “${sh}”`).toBeUndefined();
			}
		}
	});
});

describe('naming records', () => {
	it('are never rendered and never shipped to a browser', () => {
		const shipped = walk('.svelte-kit/output/client').filter((f) => /\.(js|json|html)$/.test(f));
		const corpora = [
			...pages.map((p) => ({ where: p.route, text: p.html })),
			...shipped.map((f) => ({ where: f, text: readFileSync(f, 'utf8') }))
		];
		const needles = [...ALL_RULES, 'seatKind', 'seatFounded', 'typeNoun', 'violates'];
		for (const b of BREEDS) if (b.naming.note) needles.push(b.naming.note);
		for (const ref of REFERENCES) needles.push(ref.origin.slice(0, 60));
		for (const { where, text } of corpora) {
			for (const n of needles) expect(text.includes(n), `${n} in ${where}`).toBe(false);
		}
	});
});

describe('breed pages', () => {
	it('list only their own stock', () => {
		const breedOf = new Map(STUD_BOOK.map((i) => [i.regNo, i.breed]));
		for (const b of BREEDS) {
			const html = page(`/breeds/${b.slug}`).html;
			const table = html.slice(html.indexOf('abs-register__table'));
			const regs = [...table.matchAll(/data-label="Reg\. No\.">([ST]-1[37]·\d{5})</g)].map(
				(m) => m[1]
			);
			expect(regs.length, b.slug).toBeGreaterThan(0);
			for (const r of regs) expect(breedOf.get(r as string), `${r} on ${b.slug}`).toBe(b.slug);
		}
	});

	it('show the registration letter of a violating breed, captioned only with its date', () => {
		for (const b of BREEDS.filter((x) => x.registrationLetter)) {
			const text = flat(page(`/breeds/${b.slug}`).text);
			expect(text, b.slug).toMatch(/Entered as received\./);
		}
	});
});

describe('health', () => {
	const HEALTH =
		/\b(health|disease|diseased|fungal|fungus|infection|infected|illness|ailment|parasites?|sickness)\b/i;

	it('carries the Massospora sentence verbatim on every page that discusses health', () => {
		const required = [
			'/standard',
			'/legal',
			...BREEDS.map((b) => `/breeds/${b.slug}`),
			...HUSBANDRY.filter((h) => h.discussesHealth).map((h) => `/husbandry/${h.slug}`)
		];
		for (const r of required) expect(flat(page(r).text), r).toContain(MASSOSPORA);
		for (const p of pages) {
			const body = flat(p.text).replace(MASSOSPORA, '');
			if (HEALTH.test(body)) expect(flat(p.text), p.route).toContain(MASSOSPORA);
		}
	});
});

describe('the historical names in canon', () => {
	const NAMES =
		/\b(Rockefellers?|Franklin|Camelot|Hughes|Franco|Pahlavi|Rothstein|pope|papal|pontiff)\b/i;

	it('appear only on the founding literature route', () => {
		for (const p of pages) {
			if (p.route === '/founding') continue;
			expect(NAMES.test(flat(p.text)), p.route).toBe(false);
		}
	});

	it('appear there only in sentences attributed to an invented researcher', () => {
		const text = flat(page('/founding').text);
		const surnames = FOUNDING_WORKS.map((w) => w.surname);
		const sentences = text.split(/(?<=[.?])\s+(?=[A-Z“])/);
		let named = 0;
		for (const s of sentences) {
			if (!NAMES.test(s)) continue;
			named++;
			expect(
				surnames.some((n) => s.includes(n)),
				s
			).toBe(true);
		}
		expect(named).toBeGreaterThanOrEqual(8);
		// The entries stand without rebuttal: no line answers them, and none announces a silence.
		expect(text).not.toMatch(/has not commented|no comment|declines to comment/i);
		expect(FOUNDING_WORKS.length).toBeGreaterThanOrEqual(14);
	});

	it('appear in no media prompt, alt text or image', () => {
		for (const a of loadManifest().assets)
			expect(NAMES.test(`${a.prompt} ${a.alt}`), a.id).toBe(false);
	});
});

describe('money and registration', () => {
	it('has no route, form or dependency for payment or donation', () => {
		const routes = walk('src/routes').map((f) => f.replace(/\\/g, '/'));
		for (const r of routes)
			expect(r).not.toMatch(
				/pay|cart|checkout|donat|giving|\/give|shop|purchase|basket|pledge|bequest|order/i
			);
		const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as Record<
			string,
			Record<string, string>
		>;
		const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies });
		for (const d of deps)
			expect(d).not.toMatch(
				/stripe|paypal|braintree|square|adyen|checkout|payment|donat|shopify|commerce/i
			);
		for (const p of pages) {
			expect(p.html, p.route).not.toMatch(
				/name="(card|cardnumber|cvc|cvv|amount|price|donation|quantity)"/i
			);
			expect(p.html, p.route).not.toMatch(/autocomplete="cc-/);
		}
	});

	it('contains no registration-number pattern, deductibility claim or appeal for gifts', () => {
		for (const p of pages) {
			const t = flat(p.text);
			expect(t, p.route).not.toMatch(/tax[- ]deductible/i);
			expect(t, p.route).not.toMatch(/\b\d{2}-\d{7}\b/);
			expect(t, p.route).not.toMatch(
				/\b(EIN|501\s*\(c\)|charity (no|number)|registered charity number|company number|registration number \d)\b/i
			);
			expect(t, p.route).not.toMatch(
				/\b(donate|donation|support us|give now|make a gift|bequest)\b/i
			);
		}
		for (const p of pages.filter((x) => x.route.startsWith('/provisioner'))) {
			expect(flat(p.text), p.route).not.toMatch(/\$\s?\d/);
		}
	});
});

describe('the fourth wall', () => {
	it('gives every page an in-character title and description', () => {
		for (const p of pages) {
			const title = p.html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
			const desc = p.html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
			expect(title.length, p.route).toBeGreaterThan(5);
			expect(desc.length, p.route).toBeGreaterThan(10);
			expect(p.html, p.route).toMatch(/property="og:title"/);
		}
	});

	it('passes the voice rules on every rendered page, metadata and alt text included', () => {
		for (const p of pages) expect(checkText(p.route, p.text), p.route).toEqual([]);
	});

	it('answers an unknown address in character', () => {
		const p = page('/no-such-page');
		expect(p.text).toContain(NOT_FOUND.title);
		expect(p.text).toContain('Folio 404');
	});
});

describe('inquiries', () => {
	it('place the privacy policy line beside every inquiry submit button', () => {
		const forms = pages.filter(
			(p) => p.route.startsWith('/provisioner/') && p.html.includes('name="website"')
		);
		expect(forms.length).toBeGreaterThanOrEqual(24);
		for (const p of forms) {
			const row = p.html.match(/<div class="abs-submit-row[^"]*">([\s\S]*?)<\/div>/)?.[1] ?? '';
			expect(row, p.route).toMatch(/type="submit">Send</);
			expect(row, p.route).toMatch(/href="\/correspondence-policy"/);
			expect(p.html, p.route).toMatch(/name="website"/);
		}
	});

	it('list at least twenty-four catalogue items, none with a price', () => {
		const items = pages.filter(
			(p) => /^\/provisioner\/[a-z0-9-]+$/.test(p.route) && p.html.includes('On request')
		);
		expect(items.length).toBeGreaterThanOrEqual(24);
	});
});

describe('the build without generated images', () => {
	it('renders every plate as a placeholder when no generated image is present', () => {
		const files = existsSync('static/media')
			? readdirSync('static/media').filter((f) => f.endsWith('.webp'))
			: [];
		if (files.length > 0) return; // images present: placeholders are not expected
		for (const p of pages) {
			expect(p.html, p.route).not.toMatch(/<img[^>]+src="\/media\//);
		}
		expect(pages.some((p) => p.html.includes('abs-plate--pending'))).toBe(true);
	});
});

describe('site structure', () => {
	it('names the Society’s address of record as canonical on every page', () => {
		for (const p of pages) {
			const href = p.html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '';
			expect(href.startsWith(SITE_URL), p.route).toBe(true);
			expect(p.html, p.route).toContain(`property="og:url" content="${SITE_URL}`);
		}
	});

	it('leaves the Cicadas Club to the members: never in a document in the Society’s own voice', () => {
		const societyVoice = [
			'/',
			'/standard',
			'/governance',
			'/governance/bylaws',
			'/governance/notices',
			'/charitable-standing',
			'/statement-on-the-so-called-cicadoodle',
			'/legal',
			'/correspondence-policy',
			'/founding',
			'/chapters'
		];
		for (const r of societyVoice) expect(flat(page(r).text), r).not.toMatch(/Cicadas Club/);
		for (const p of pages.filter((x) => x.route.startsWith('/governance/notices/'))) {
			expect(flat(p.text), p.route).not.toMatch(/Cicadas Club/);
		}
	});

	it('has a page for every required section', () => {
		for (const r of [
			'/',
			'/standard',
			'/breeds',
			'/groups/sporting',
			'/stud-book',
			'/cabinet',
			'/husbandry',
			'/husbandry/kilocada',
			'/husbandry/the-vigil',
			'/governance',
			'/governance/bylaws',
			'/governance/notices',
			'/from-the-membership',
			'/legal',
			'/statement-on-the-so-called-cicadoodle',
			'/supper-club',
			'/founding',
			'/chapters',
			'/charitable-standing',
			'/membership',
			'/provisioner',
			'/correspondence-policy'
		]) {
			expect(page(r).html.length, r).toBeGreaterThan(500);
		}
	});

	it('links the Cicadoodle statement only from the footer', () => {
		for (const p of pages) {
			const html = p.html.replace(/<footer[\s\S]*?<\/footer>/, '');
			expect(html.includes('href="/statement-on-the-so-called-cicadoodle"'), p.route).toBe(false);
		}
	});

	it('shows Antarctica with no scheduled emergence, and chapters on all seven continents', () => {
		const t = flat(page('/chapters').text);
		for (const c of [
			'North America',
			'South America',
			'Europe',
			'Africa',
			'Asia',
			'Oceania',
			'Antarctica'
		])
			expect(t).toContain(c);
		expect(t).toMatch(/The Antarctic Chapter[\s\S]*None scheduled\./);
	});

	it('prints the Locus pricing sentence verbatim and nothing else on pricing', () => {
		const t = flat(page('/husbandry/kilocada').text);
		expect(t).toContain(
			'17 Locus is provided by invite only and at the exclusive discretion of the Brood-Google Working Group.'
		);
		expect(t).not.toMatch(/\$\s?\d/);
	});
});
