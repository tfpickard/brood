<script lang="ts">
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { roman } from '$lib/format.ts';

	let { data } = $props();
</script>

<Head
	title="Correspondence Policy"
	description="What the Society keeps when an inquiry is made, why, for how long, and how to have it removed."
/>

<SectionHeading numeral="Of correspondence received" title="Correspondence Policy" level={1} />

<div class="abs-prose">
	<p class="abs-lede">
		The Society keeps the correspondence addressed to it in the manner set out below, and in no other
		manner.
	</p>
</div>

{#each data.sections as s, i (s.heading)}
	<section class="abs-measure" aria-labelledby="p-{i}">
		<h2 class="abs-h3" id="p-{i}"><span class="abs-h3__numeral">{roman(i + 1)}.</span>{s.heading}</h2>
		<div class="abs-prose abs-prose--justified">
			{#each s.paragraphs as p, j (j)}<p>{p}</p>{/each}
		</div>
	</section>
{/each}
