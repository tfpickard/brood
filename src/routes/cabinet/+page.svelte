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
	title="The Cabinet"
	description="Notable exuviae of record: their provenance, their present holders and their last recorded sales."
/>

<SectionHeading numeral="Exuviae of record" title="The Cabinet" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each CABINET_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<Diagram id="cabinet-elevations" number="Fig. 1" caption="Cabinets of the Standard, Microcada and Kilocada varieties. Drawn for the Keeper of the Cabinet." />

{#each data.items as item, i (item.id)}
	<section class="abs-measure" aria-labelledby="ex-{item.id}">
		<Ornament />
		<header class="abs-heading abs-heading--plain">
			<span class="abs-heading__numeral">{item.breedName}{item.animal ? `, ${item.animal.year}` : ''}</span>
			<h2 class="abs-h3 abs-h3--centered" id="ex-{item.id}">{item.title}</h2>
		</header>
		<Plate id={item.plate.media} number="Plate {roman(i + 1)}" caption={item.plate.caption} />
		<dl class="abs-ledger abs-ledger--compact">
			<dt>Registration</dt>
			<dd>
				{#if item.animal}<a class="abs-link" href={href(item.animal)}>{item.animal.regNo}</a>{/if}
			</dd>
			<dt>Present holder</dt>
			<dd>{item.holder}</dd>
			<dt>Cabinet</dt>
			<dd>{item.cabinet}</dd>
			<dt>Provenance</dt>
			<dd>{item.provenance.join(' ')}</dd>
			<dt>Last recorded sale</dt>
			<dd>{item.lastSale ?? 'None recorded.'}</dd>
		</dl>
	</section>
{/each}

<Disclaimer disclaimer={disclaimerById('resale')} />
<Disclaimer disclaimer={disclaimerById('magnification')} />
