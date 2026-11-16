<script lang="ts">
	import { SUPPER_CLUB_INTRO, SUPPERS } from '$content/suppers.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { monthYear } from '$lib/format.ts';
</script>

<Head
	title="The Supper Club"
	description="Minutes from the Supper Club, which meets twice a year, more or less."
/>

<SectionHeading numeral="The minutes" title="The Supper Club" level={1} />

<div class="abs-prose">
	{#each SUPPER_CLUB_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<nav class="abs-toc" aria-labelledby="toc-title">
	<h2 class="abs-toc__title" id="toc-title">Past suppers</h2>
	<ol>
		{#each SUPPERS as s (s.slug)}
			<li>
				<a href="/supper-club/{s.slug}"
					><span>{monthYear(s.date)}</span><span class="abs-toc__leader"></span><span
						class="abs-toc__folio">{s.items.length} items</span
					></a
				>
			</li>
		{/each}
	</ol>
</nav>
