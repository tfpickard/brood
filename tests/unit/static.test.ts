/** Source-level checks: the design system's rules, the Phase 2 seams, and the server boundary. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { RESERVED_ROUTES } from '../../src/lib/routes.ts';

function walk(dir: string): string[] {
	return readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : [p];
	});
}
const src = walk('src').filter((f) => /\.(svelte|ts|css|html)$/.test(f));

describe('the design system', () => {
	it('is used without parallel styles: no forbidden utilities in src', () => {
		for (const f of src.filter((f) => !f.startsWith('src/lib/abs/'))) {
			const text = readFileSync(f, 'utf8');
			expect(text, f).not.toMatch(
				/\b(rounded-|shadow-|blur-|animate-|font-sans|font-bold|bg-gradient)/
			);
			expect(text, f).not.toMatch(/\btransition(-|:)/);
			expect(text, f).not.toMatch(/linear-gradient|radial-gradient/);
		}
	});

	it('keeps hex colors inside the design system files', () => {
		for (const f of src.filter((f) => !f.startsWith('src/lib/abs/') && !f.endsWith('.ts'))) {
			expect(readFileSync(f, 'utf8'), f).not.toMatch(/#[0-9a-fA-F]{3,8}\b(?![\w-]*=)/);
		}
	});

	it('copies the design system exports verbatim, with only the documented pedigree extension', () => {
		const css = readFileSync('src/lib/abs/abs-components.css', 'utf8');
		expect(css).toMatch(/abs-pedigree--five/);
		for (const f of ['abs-tokens.css', 'abs-tailwind.css', 'abs-components.css']) {
			expect(existsSync(join('src/lib/abs', f)), f).toBe(true);
		}
	});
});

describe('Phase 2 seams', () => {
	it('reserves routes that no Phase 1 route occupies', () => {
		for (const routes of Object.values(RESERVED_ROUTES)) {
			for (const r of routes) {
				expect(existsSync(join('src/routes', r)), r).toBe(false);
			}
		}
	});

	it('reserves a migration for every flag', () => {
		const migrations = readdirSync('db/migrations').join(' ');
		for (const name of ['members', 'remarks', 'lists', 'following']) {
			expect(migrations).toMatch(new RegExp(`phase2_${name}`));
		}
	});

	it('maps every Phase 2 feature in the traceability document', () => {
		const doc = readFileSync('docs/traceability.md', 'utf8');
		for (const flag of Object.keys(RESERVED_ROUTES)) expect(doc).toContain(flag);
		for (const m of readdirSync('db/migrations').filter((f) => f.includes('phase2')))
			expect(doc).toContain(m);
	});
});

describe('the server boundary', () => {
	it('keeps database access out of routes and pages', () => {
		for (const f of walk('src/routes')) {
			const text = readFileSync(f, 'utf8');
			expect(text, f).not.toMatch(/\$lib\/server\/db|from ['"]postgres['"]/);
		}
		for (const f of walk('src/lib').filter((f) => !f.includes('/server/'))) {
			expect(readFileSync(f, 'utf8'), f).not.toMatch(/\$lib\/server|from ['"]postgres['"]/);
		}
	});
});
