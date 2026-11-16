<script lang="ts">
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { roman } from '$lib/format.ts';

	let { data } = $props();
	const sept = $derived(data.breeds.filter((b) => b.register === 'septendecim'));
	const tred = $derived(data.breeds.filter((b) => b.register === 'tredecim'));
</script>

<Head
	title={data.group.title}
	description="{data.group.title}: the breeds, and what they’re for."
/>

<Breadcrumb trail={[{ href: '/breeds', label: 'Breeds' }, { label: data.group.title }]} />

<SectionHeading numeral="Group {roman(data.group.order)}" title={data.group.title} level={1} />

<div class="abs-prose abs-prose--justified">
	{#each data.group.description as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
	{#each data.group.notes ?? [] as p, i (i)}<p>{p}</p>{/each}
</div>

<section aria-labelledby="sept">
	<SectionHeading numeral="Every seventeen years" title="17-year breeds" id="sept" />
	<div class="abs-gallery">
		{#each sept as b, i (b.slug)}
			<a href="/breeds/{b.slug}" class="plain">
				<Plate id={b.plate.media} number="Plate {roman(i + 1)}" caption={b.name} />
			</a>
		{/each}
	</div>
</section>

{#if tred.length}
	<section aria-labelledby="tred" class="abs-register--tredecim">
		<SectionHeading numeral="Every thirteen years" title="13-year breeds" id="tred" />
		<div class="abs-gallery">
			{#each tred as b, i (b.slug)}
				<a href="/breeds/{b.slug}" class="plain">
					<Plate id={b.plate.media} number="Plate {roman(sept.length + i + 1)}" caption={b.name} />
				</a>
			{/each}
		</div>
	</section>
{/if}

<style>
	.plain {
		color: inherit;
		text-decoration: none;
	}
	.plain:hover :global(.abs-plate__caption) {
		text-decoration: underline;
	}
</style>
