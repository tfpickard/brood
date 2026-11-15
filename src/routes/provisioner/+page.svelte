<script lang="ts">
	import { CATALOGUE, PROVISIONER_INTRO } from '$content/catalogue.ts';
	import type { CatalogueCategory } from '$content/types.ts';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';

	/** The first sentence of a lead time, lowercased at the start, for a caption. */
	const shortLead = (t: string) =>
		(t.split(/(?<=\.)\s/)[0] ?? t).replace(/\.$/, '').replace(/^./, (c) => c.toLowerCase());

	const CATEGORY_LABEL: Record<CatalogueCategory, string> = {
		Cabinets: 'Cases and Cabinets',
		'Plinths and Perches': 'Plinths and Perches',
		'The Vigil': 'For the Hatch',
		'Handling and Protection': 'Handling and Protection',
		'Root Stewardship': 'Roots and Trees',
		'Emergence Day': 'Hatching Day',
		'The Supper Club': 'The Supper Club'
	};

	const CATEGORIES: CatalogueCategory[] = [
		'Cabinets',
		'Plinths and Perches',
		'The Vigil',
		'Handling and Protection',
		'Root Stewardship',
		'Emergence Day',
		'The Supper Club'
	];
</script>

<Head
	title="Equipment"
	description="Cases, perches, chairs and the rest, made to order for members. Ask about anything."
/>

<SectionHeading numeral="Made to order" title="Equipment" level={1} />

<div class="abs-prose">
	{#each PROVISIONER_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#each CATEGORIES as cat (cat)}
	{@const items = CATALOGUE.filter((c) => c.category === cat)}
	{#if items.length}
		<section aria-labelledby="cat-{cat.replace(/\W+/g, '-')}">
			<SectionHeading title={CATEGORY_LABEL[cat]} id="cat-{cat.replace(/\W+/g, '-')}" />
			<div class="abs-gallery">
				{#each items as item (item.slug)}
					<a class="plain" href="/provisioner/{item.slug}">
						<Plate
							id={item.plates[0]?.media ?? ''}
							number="No. {item.ref}"
							caption="{item.name}. Lead time: {shortLead(item.leadTime)}. Price on request."
						/>
					</a>
				{/each}
			</div>
		</section>
	{/if}
{/each}

<style>
	.plain {
		color: inherit;
		text-decoration: none;
	}
	.plain:hover :global(.abs-plate__caption) {
		text-decoration: underline;
	}
</style>
