<script lang="ts">
	import { HUSBANDRY, HUSBANDRY_INTRO } from '$content/husbandry.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="Care and Keeping"
	description="Trees, roots, being there when it hatches, the last day, and what you need to build for the large ones."
/>

<SectionHeading numeral="How it’s done" title="Care and Keeping" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each HUSBANDRY_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<nav class="abs-toc" aria-labelledby="toc-title">
	<h2 class="abs-toc__title" id="toc-title">Contents</h2>
	<ol>
		{#each HUSBANDRY as h (h.slug)}
			<li>
				<a href="/care/{h.slug}"
					><span class="abs-toc__num">{h.numeral}.</span><span>{h.title}</span></a
				>
				<p class="abs-faded" style="margin:0 0 var(--space-3) 2.5em;font-size:var(--size-caption)">
					{h.summary}
				</p>
			</li>
		{/each}
	</ol>
</nav>
