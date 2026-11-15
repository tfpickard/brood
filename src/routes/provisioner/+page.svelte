<script lang="ts">
	import { CATALOGUE, PROVISIONER_INTRO } from '$content/catalogue.ts';
	import type { CatalogueCategory } from '$content/types.ts';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';

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
	title="Provisioner to the Society"
	description="Cabinets, perches, Vigil chairs and instruments made on commission for members of the Society. Particulars on inquiry."
/>

<SectionHeading numeral="By appointment" title="Provisioner to the Society" level={1} />

<div class="abs-prose">
	{#each PROVISIONER_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#each CATEGORIES as cat (cat)}
	{@const items = CATALOGUE.filter((c) => c.category === cat)}
	{#if items.length}
		<section aria-labelledby="cat-{cat.replace(/\W+/g, '-')}">
			<SectionHeading title={cat} id="cat-{cat.replace(/\W+/g, '-')}" />
			<div class="abs-gallery">
				{#each items as item (item.slug)}
					<a class="plain" href="/provisioner/{item.slug}">
						<Plate
							id={item.plates[0]?.media ?? ''}
							number="Provisioner’s reference {item.ref}"
							caption="{item.name}. Lead time: {item.leadTime.toLowerCase()}. On inquiry."
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
