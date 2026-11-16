<script lang="ts">
	import type { Chapter } from '$content/types.ts';
	import { WORLD_LAND } from './world.ts';

	let { chapters }: { chapters: Chapter[] } = $props();
	const x = (lon: number) => ((lon + 180) / 360) * 600;
	const y = (lat: number) => ((90 - lat) / 180) * 300;
	const graticule = [
		...[-120, -60, 0, 60, 120].map((lon) => `M${x(lon)} 0 L${x(lon)} 300`),
		...[-60, -30, 0, 30, 60].map((lat) => `M0 ${y(lat)} L600 ${y(lat)}`)
	].join(' ');
</script>

<figure class="abs-diagram" style="max-width:var(--measure-wide)">
	<div class="abs-diagram__drawing">
		<svg viewBox="0 0 600 300" role="img" aria-labelledby="world-cap">
			<rect class="ln" stroke-width="1.2" x="0" y="0" width="600" height="300" />
			<path class="ln" stroke-width=".3" stroke-dasharray="1 3" d={graticule} />
			<path class="ln" stroke-width=".6" d={WORLD_LAND} />
			{#each chapters as c (c.name)}
				<g transform="translate({x(c.lon)} {y(c.lat)})">
					<circle class="ln" stroke-width="1.1" r="3.2" />
					<circle r="1.1" fill="currentColor" />
				</g>
			{/each}
		</svg>
	</div>
	<figcaption id="world-cap">
		<span class="abs-plate__no">Plate I</span>
		<span class="abs-plate__caption">Where our chapters are. Drawn up for the Secretary, 2026.</span
		>
	</figcaption>
</figure>
