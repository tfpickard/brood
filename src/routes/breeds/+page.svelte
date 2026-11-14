<script lang="ts">
	import { BREEDS_INTRO } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { roman } from '$lib/format.ts';

	let { data } = $props();
</script>

<Head
	title="Recognized Breeds"
	description="The breeds recognized by the American Brood Society, by Group and by Register."
/>

<SectionHeading numeral="By Group and by Register" title="Recognized Breeds" level={1} />

<div class="abs-prose">
	{#each BREEDS_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#each data.groups as { group, breeds } (group.id)}
	{@const sept = breeds.filter((b) => b.register === 'septendecim')}
	{@const tred = breeds.filter((b) => b.register === 'tredecim')}
	<section class="abs-measure" aria-labelledby="group-{group.id}">
		<SectionHeading numeral="Group {roman(group.order)}" title={group.title} id="group-{group.id}" />
		<p class="abs-sc abs-faded">Septendecim Register</p>
		<ul class="breed-list">
			{#each sept as b (b.slug)}
				<li><a class="abs-link" href="/breeds/{b.slug}">{b.name}</a></li>
			{/each}
		</ul>
		{#if tred.length}
			<div class="abs-register--tredecim">
				<p class="abs-sc abs-faded">Tredecim Register</p>
				<ul class="breed-list">
					{#each tred.filter((b) => b.slug !== 'beacon-hill-minim') as b (b.slug)}
						<li><a class="abs-link" href="/breeds/{b.slug}">{b.name}</a></li>
					{/each}
				</ul>
			</div>
		{/if}
		<p class="abs-sc" style="text-align:center">
			<a class="abs-link" href="/groups/{group.id}">{group.title}</a>
		</p>
	</section>
{/each}

<section class="abs-measure abs-register--tredecim" aria-labelledby="last">
	<p class="abs-sc abs-faded" id="last">Tredecim Register, listed last</p>
	<ul class="breed-list">
		<li><a class="abs-link" href="/breeds/beacon-hill-minim">Beacon Hill Minim</a></li>
	</ul>
</section>

<style>
	.breed-list {
		list-style: none;
		padding: 0;
		margin: var(--space-3) 0 var(--space-6);
		columns: 2 14em;
		column-gap: var(--space-7);
	}
	.breed-list li {
		padding: var(--space-1) 0;
		border-bottom: var(--stroke-hairline) solid var(--rule-soft);
		break-inside: avoid;
	}
</style>
