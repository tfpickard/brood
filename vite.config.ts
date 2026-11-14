import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { defineConfig, type Plugin } from 'vite';

/**
 * Exposes the media manifest to the site as `virtual:media`: for each asset id, its alt text,
 * plate era, aspect, and the committed file's URL if one exists. Pages render a placeholder plate
 * when no file exists, so the site builds and reads fully with no generated images present.
 * Read-only: this plugin never generates anything and has no network access.
 */
function mediaIndex(): Plugin {
	const id = 'virtual:media';
	const resolved = '\0' + id;
	return {
		name: 'abs-media-index',
		resolveId(source) {
			return source === id ? resolved : null;
		},
		load(source) {
			if (source !== resolved) return null;
			const manifestPath = 'media/manifest.yaml';
			const style = parse(readFileSync('media/style.yaml', 'utf8')) as {
				eras: Record<string, { plate_era: string }>;
				aspects: Record<string, string>;
			};
			const config = parse(readFileSync('media/config.yaml', 'utf8')) as {
				output_dir: string;
				params: { output_format: string };
			};
			const manifest = existsSync(manifestPath)
				? (parse(readFileSync(manifestPath, 'utf8')) as {
						assets: { id: string; alt: string; era: string; aspect: string }[];
					})
				: { assets: [] };
			const index: Record<
				string,
				{ alt: string; era: string; ratio: string; src: string | null; width: number; height: number }
			> = {};
			for (const a of manifest.assets) {
				const file = `${config.output_dir}/${a.id}.${config.params.output_format}`;
				const [w, h] = (style.aspects[a.aspect] ?? '1024x1024').split('x').map(Number);
				index[a.id] = {
					alt: a.alt,
					era: style.eras[a.era]?.plate_era ?? 'present',
					ratio: `${w} / ${h}`,
					width: w ?? 1024,
					height: h ?? 1024,
					src: existsSync(file) ? `/${file.replace(/^static\//, '')}` : null
				};
			}
			return `export default ${JSON.stringify(index)};`;
		}
	};
}

export default defineConfig({
	plugins: [mediaIndex(), tailwindcss(), sveltekit()],
	test: {
		include: ['tests/unit/**/*.test.ts'],
		environment: 'node',
		testTimeout: 60_000,
		hookTimeout: 120_000
	}
});
