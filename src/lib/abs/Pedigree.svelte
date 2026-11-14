<script lang="ts">
	import type { PedigreeEntry } from '$lib/labels.ts';

	let { entries, caption }: { entries: PedigreeEntry[]; caption: string } = $props();
	const five = $derived(entries.some((e) => e.g === 5));
	const heads = $derived(
		five
			? ['Subject', 'Parents', 'Grandparents', 'Great-grandparents', 'Great-great-grandparents']
			: ['Subject', 'Parents', 'Grandparents', 'Great-grandparents']
	);
</script>

<figure class="abs-pedigree" class:abs-pedigree--five={five} aria-labelledby="ped-cap">
	<div class="abs-pedigree__gens" aria-hidden="true">
		{#each heads as h (h)}<span>{h}</span>{/each}
	</div>
	<ol>
		{#each entries as e, i (i)}
			<li
				style="--g:{e.g};--r:{e.r};--s:{e.s}"
				data-side={e.side}
				data-subject={e.g === 1 ? '' : undefined}
			>
				<span class="abs-pedigree__name"
					>{#if e.href && e.g > 1}<a class="abs-link" href={e.href}>{e.name}</a>{:else}{e.name}{/if}</span
				>
				<span class="abs-pedigree__meta">{e.meta}</span>
			</li>
		{/each}
	</ol>
	<figcaption
		id="ped-cap"
		class="abs-plate__caption"
		style="display:block;margin-top:1rem;text-align:center;font-size:var(--size-caption)"
	>
		{caption}
	</figcaption>
</figure>
