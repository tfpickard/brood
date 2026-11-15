<script lang="ts">
	import { CABINET_INTRO } from '$content/pages.ts';
	import { disclaimerById } from '$content/disclaimers.ts';
	import Disclaimer from '$lib/abs/Disclaimer.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Ornament from '$lib/abs/Ornament.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import Diagram from '$lib/diagrams/Diagram.svelte';
	import { roman } from '$lib/format.ts';
	import { href } from '$lib/labels.ts';

	let { data } = $props();
</script>

<Head
	title="Shells"
	description="The notable shells: whose they were, who has them now, and what they went for last."
/>

<SectionHeading numeral="The notable ones" title="Shells" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each CABINET_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<Diagram
	id="cabinet-elevations"
	number="Fig. 1"
	caption="Cases for regular, miniature and large shells."
/>

{#each data.items as item, i (item.id)}
	<section class="abs-measure" aria-labelledby="ex-{item.id}">
		<Ornament />
		<header class="abs-heading abs-heading--plain">
			<span class="abs-heading__numeral"
				>{item.breedName}{item.animal ? `, ${item.animal.year}` : ''}</span
			>
			<h2 class="abs-h3 abs-h3--centered" id="ex-{item.id}">{item.title}</h2>
		</header>
		<Plate id={item.plate.media} number="Plate {roman(i + 1)}" caption={item.plate.caption} />
		<dl class="abs-ledger abs-ledger--compact">
			<dt>Registration</dt>
			<dd>
				{#if item.animal}<a class="abs-link" href={href(item.animal)}>{item.animal.regNo}</a>{/if}
			</dd>
			<dt>Who has it</dt>
			<dd>{item.holder}</dd>
			<dt>Where it’s kept</dt>
			<dd>{item.cabinet}</dd>
			<dt>History</dt>
			<dd>{item.provenance.join(' ')}</dd>
			<dt>Last sold</dt>
			<dd>{item.lastSale ?? 'Never sold.'}</dd>
		</dl>
	</section>
{/each}

<Disclaimer disclaimer={disclaimerById('resale')} />
<Disclaimer disclaimer={disclaimerById('magnification')} />
