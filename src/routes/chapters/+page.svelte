<script lang="ts">
	import { CHAPTERS, CHAPTERS_INTRO } from '$content/chapters.ts';
	import type { Continent } from '$content/types.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import WorldPlate from '$lib/diagrams/WorldPlate.svelte';

	const CONTINENTS: Continent[] = [
		'North America',
		'South America',
		'Europe',
		'Africa',
		'Asia',
		'Oceania',
		'Antarctica'
	];
	const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
</script>

<Head
	title="Chapters"
	description="The chapters of the American Brood Society on every continent: seats, secretaries, meetings and emergences."
/>

<SectionHeading numeral="On every continent" title="Chapters of the Society" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each CHAPTERS_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<WorldPlate chapters={CHAPTERS} />

{#each CONTINENTS as continent (continent)}
	{@const list = CHAPTERS.filter((c) => c.continent === continent)}
	{#if list.length}
		<section aria-labelledby="ct-{slug(continent)}">
			<SectionHeading title={continent} id="ct-{slug(continent)}" />
			<div class="abs-directory">
				{#each list as c (c.name)}
					<section class="abs-chapter" aria-labelledby="ch-{slug(c.name)}">
						<div class="abs-chapter__head">
							<h3 class="abs-h3" id="ch-{slug(c.name)}">{c.name}</h3>
							<span class="abs-chapter__continent">The American Brood Society</span>
						</div>
						<dl class="abs-ledger abs-ledger--compact">
							<dt>Seat</dt>
							<dd>{c.seat}</dd>
							<dt>Chartered</dt>
							<dd>{c.chartered}</dd>
							<dt>Secretary</dt>
							<dd>{c.secretary}</dd>
							<dt>Meets</dt>
							<dd>{c.meets}</dd>
							<dt>Breeds principally kept</dt>
							<dd>{c.breeds.join('; ')}</dd>
							<dt>Next scheduled emergence</dt>
							<dd>{c.nextEmergence}</dd>
						</dl>
					</section>
				{/each}
			</div>
		</section>
	{/if}
{/each}
