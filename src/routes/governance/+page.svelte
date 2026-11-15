<script lang="ts">
	import {
		COMMITTEES,
		FORMER_JUDGES,
		GOVERNANCE_INTRO,
		GOVERNANCE_PLATES,
		OFFICERS,
		TROPHIES
	} from '$content/governance.ts';
	import Head from '$lib/abs/Head.svelte';
	import Ornament from '$lib/abs/Ornament.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { roman } from '$lib/format.ts';
</script>

<Head
	title="Governance"
	description="The officers, committees, trophies and Bylaws of the American Brood Society, and the Notices of the Council."
/>

<SectionHeading numeral="The Council and its officers" title="Governance" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each GOVERNANCE_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
	<p>
		The <a href="/governance/bylaws">Bylaws</a> and the
		<a href="/governance/notices">Notices of the Council</a>
		are published separately.
	</p>
</div>

<section class="abs-measure" aria-labelledby="officers">
	<SectionHeading numeral="Article I" title="Officers of the Society" id="officers" />
	<dl class="abs-ledger">
		{#each OFFICERS as o (o.office)}
			<dt>{o.office}</dt>
			<dd>{o.name}, since {o.since}</dd>
		{/each}
	</dl>
</section>

<Plate
	id={GOVERNANCE_PLATES[2]?.media ?? ''}
	number="Plate I"
	caption={GOVERNANCE_PLATES[2]?.caption ?? ''}
/>

<section class="abs-measure" aria-labelledby="committees">
	<SectionHeading numeral="Article II" title="Committees" id="committees" />
	{#each COMMITTEES as c (c.slug)}
		<section aria-labelledby="c-{c.slug}" class="committee">
			<h3 class="abs-h3" id="c-{c.slug}">{c.name}</h3>
			<dl class="abs-ledger abs-ledger--compact">
				<dt>Members</dt>
				<dd>{c.blank || c.members.length === 0 ? 'None named.' : c.members.join('; ')}</dd>
				<dt>Charter</dt>
				<dd>{c.blank || !c.remit ? 'None published.' : c.remit}</dd>
				{#if c.blank}
					<dt>Correspondence</dt>
					<dd>None.</dd>
				{/if}
			</dl>
			{#if c.record.length}
				<details>
					<summary class="abs-sc">The record of the {c.name}</summary>
					<dl class="abs-ledger abs-ledger--compact">
						{#each c.record as r, i (i)}
							<dt>{r.year}</dt>
							<dd>{r.entry}</dd>
						{/each}
					</dl>
				</details>
			{/if}
		</section>
	{/each}
</section>

<Plate
	id={GOVERNANCE_PLATES[1]?.media ?? ''}
	number="Plate II"
	caption={GOVERNANCE_PLATES[1]?.caption ?? ''}
/>

<section class="abs-measure" aria-labelledby="judges">
	<SectionHeading numeral="Article III" title="Former Judges" id="judges" />
	<dl class="abs-ledger abs-ledger--compact">
		{#each FORMER_JUDGES as j (j.name + j.from)}
			<dt>{j.name}</dt>
			<dd>{j.from} to {j.to}</dd>
		{/each}
	</dl>
</section>

<Ornament />

<section class="abs-measure" aria-labelledby="trophies">
	<SectionHeading numeral="Article IV" title="Trophies of the Society" id="trophies" />
	<dl class="abs-ledger abs-ledger--compact">
		{#each TROPHIES as t (t.name)}
			<dt>{t.name}</dt>
			<dd>{t.text}</dd>
		{/each}
	</dl>
</section>

<Plate
	id={GOVERNANCE_PLATES[0]?.media ?? ''}
	number="Plate {roman(3)}"
	caption={GOVERNANCE_PLATES[0]?.caption ?? ''}
/>

<style>
	.committee {
		margin-bottom: var(--space-6);
	}
	details summary {
		cursor: pointer;
		margin: var(--space-2) 0;
	}
</style>
