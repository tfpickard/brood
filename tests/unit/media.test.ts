/** The media manifest against the content, and its prompts against the house style. */
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { mediaUsage } from '../../content/media-usage.ts';
import { composePrompt, loadConfig, loadManifest, loadStyle } from '../../tools/media/lib.ts';

const manifest = loadManifest();
const style = loadStyle();
const config = loadConfig();
const usage = mediaUsage();
const ids = new Set(manifest.assets.map((a) => a.id));

describe('the media manifest', () => {
	it('lists at least 150 assets with unique ids', () => {
		expect(manifest.assets.length).toBeGreaterThanOrEqual(150);
		expect(ids.size).toBe(manifest.assets.length);
	});

	it('has every image referenced by content, each with alt text', () => {
		for (const id of usage.keys()) {
			expect(ids.has(id), id).toBe(true);
			const a = manifest.assets.find((x) => x.id === id);
			expect(a?.alt?.trim().length ?? 0, id).toBeGreaterThan(10);
		}
	});

	it('uses every manifest entry somewhere, and records where', () => {
		for (const a of manifest.assets) {
			expect(usage.has(a.id), a.id).toBe(true);
			expect(a.used_by.sort(), a.id).toEqual((usage.get(a.id) ?? []).slice().sort());
		}
	});

	it('records each full prompt as composed from the house style', () => {
		for (const a of manifest.assets) {
			expect(style.eras[a.era], a.id).toBeDefined();
			expect(style.aspects[a.aspect], a.id).toBeDefined();
			expect(a.prompt, a.id).toBe(composePrompt(style, a.era, a.subject));
			expect(a.prompt, a.id).toContain('no children');
		}
	});

	it('puts at least one cicada in every image, and says so in the alt text', () => {
		for (const a of manifest.assets) {
			expect(a.subject, a.id).toMatch(/cicada|exuvi/i);
			expect(a.alt, a.id).toMatch(/cicada|shell|Vesper|Marker|Familiar|plate of/i);
		}
		expect(loadStyle().global_suffix).toMatch(
			/Every image\s+contains at least one periodical cicada/
		);
	});

	it('spans the eras of the archive', () => {
		const eras = new Set(manifest.assets.map((a) => style.eras[a.era]?.plate_era));
		for (const e of ['1890s', '1920s', '1950s', '1980s', 'present'])
			expect(eras.has(e as never), e).toBe(true);
	});

	it('pins the model and parameters exactly, with no alias and no seed', () => {
		const raw = parse(readFileSync('media/config.yaml', 'utf8')) as Record<string, unknown>;
		expect(config.model).toBe('gpt-image-2.6-flare');
		expect(String(raw.model)).not.toMatch(/latest/i);
		expect(config.params.n).toBe(1);
		expect(config.params.quality).toBeTruthy();
		expect(config.params.output_format).toBe('webp');
		expect(config.max_per_run).toBeGreaterThan(0);
		expect(config.seed).toBeNull();
	});

	it('names no real brand in any prompt or alt text', () => {
		for (const a of manifest.assets) {
			expect(`${a.prompt} ${a.alt}`, a.id).not.toMatch(
				/\b(nvidia|google|kodak|leica|rolex|cartier|tiffany|hermes|ralph lauren)\b/i
			);
		}
	});

	it('keeps a lockfile entry only for files that exist', () => {
		const lock = existsSync('media/lock.json')
			? JSON.parse(readFileSync('media/lock.json', 'utf8'))
			: {};
		for (const [id, entry] of Object.entries(lock as Record<string, { file: string }>)) {
			expect(ids.has(id), id).toBe(true);
			expect(existsSync(entry.file), entry.file).toBe(true);
		}
	});
});
