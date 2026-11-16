/**
 * Rendered-site fixture for tests. Builds the site if no build output exists, starts the preview
 * server on a free port, and collects the HTML of every route: all prerendered pages plus the
 * server-rendered ones. Results are cached for the test run.
 */
import { execSync, spawn, type ChildProcess } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:net';
import { join, relative } from 'node:path';
import { CATALOGUE } from '../../../content/catalogue.ts';

const ROOT = new URL('../../../', import.meta.url).pathname;
const PRERENDERED = join(ROOT, '.svelte-kit/output/prerendered/pages');

export interface RenderedPage {
	route: string;
	html: string;
	text: string;
}

function walk(dir: string): string[] {
	return readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
	});
}

async function freePort(): Promise<number> {
	return new Promise((resolve) => {
		const s = createServer();
		s.listen(0, () => {
			const port = (s.address() as { port: number }).port;
			s.close(() => resolve(port));
		});
	});
}

/** Visible text: scripts, styles and tags removed; entities decoded. Title and meta kept. */
export function visibleText(html: string): string {
	const metas = [...html.matchAll(/<meta[^>]+content="([^"]*)"/g)].map((m) => m[1]).join(' \n ');
	const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
	const body = html
		.replace(/<script[\s\S]*?<\/script>/g, ' ')
		.replace(/<style[\s\S]*?<\/style>/g, ' ')
		.replace(/<svg[\s\S]*?<\/svg>/g, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ');
	const alts = [...html.matchAll(/\s(?:alt|aria-label)="([^"]*)"/g)].map((m) => m[1]).join(' \n ');
	return decode([title, metas, body, alts].join(' \n '))
		.replace(/[ \t]+/g, ' ')
		.replace(/\n\s+/g, '\n');
}

function decode(s: string): string {
	return s
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, ' ')
		.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

let cache: Promise<RenderedPage[]> | null = null;
let server: ChildProcess | null = null;

export const SSR_ROUTES = [
	'/stud-book',
	'/stud-book?page=2',
	'/stud-book?q=ormsby',
	'/membership',
	'/privacy',
	'/secretariat',
	'/equipment/does-not-exist',
	'/no-such-page',
	...CATALOGUE.map((c) => `/equipment/${c.slug}`)
];

export function renderedSite(): Promise<RenderedPage[]> {
	cache ??= (async () => {
		if (!existsSync(PRERENDERED)) execSync('npx vite build', { cwd: ROOT, stdio: 'ignore' });
		const pages: RenderedPage[] = walk(PRERENDERED).map((file) => {
			let route =
				'/' +
				relative(PRERENDERED, file)
					.replace(/\.html$/, '')
					.replace(/(^|\/)index$/, '');
			route = route.replace(/\/$/, '') || '/';
			const html = readFileSync(file, 'utf8');
			return { route: decodeURIComponent(route), html, text: visibleText(html) };
		});
		const port = await freePort();
		server = spawn('npx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
			cwd: ROOT,
			env: { ...process.env, PUBLIC_CORRESPONDENCE_ADDRESS: 'secretary@example.org' },
			stdio: 'ignore',
			detached: true
		});
		const base = `http://localhost:${port}`;
		for (let i = 0; i < 60; i++) {
			try {
				await fetch(base + '/robots.txt');
				break;
			} catch {
				await new Promise((r) => setTimeout(r, 250));
			}
		}
		for (const route of SSR_ROUTES) {
			const res = await fetch(base + route);
			const html = await res.text();
			pages.push({ route, html, text: visibleText(html) });
		}
		return pages;
	})();
	return cache;
}

export function stopSite(): void {
	if (server?.pid) {
		try {
			process.kill(-server.pid);
		} catch {
			/* already stopped */
		}
	}
	server = null;
}

export function routeOf(path: string): string {
	return path.split('?')[0] ?? path;
}
