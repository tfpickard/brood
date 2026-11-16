<script lang="ts">
	import { MASSOSPORA } from '$content/site.ts';
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Disclaimer from '$lib/abs/Disclaimer.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Ledger from '$lib/abs/Ledger.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import RegisterTable from '$lib/components/RegisterTable.svelte';
	import Diagram from '$lib/diagrams/Diagram.svelte';
	import { numberWords, roman } from '$lib/format.ts';
	import { VARIETY_LABEL } from '$lib/labels.ts';

	let { data } = $props();
	const b = $derived(data.breed);
	const tredecim = $derived(b.register === 'tredecim');

	const sizes = $derived(b.varieties.filter((v) => v !== 'standard').map((v) => VARIETY_LABEL[v]));

	const particulars = $derived([
		{ label: 'Group', value: data.group.name },
		{ label: 'Cycle', value: data.register.name },
		...(sizes.length ? [{ label: 'Also bred', value: sizes.join(' and ').toLowerCase() }] : []),
		{ label: 'Recognized', value: String(b.recognized) },
		{ label: 'Host tree', value: `${b.hostTree.common}|${b.hostTree.botanical}`, key: 'tree' },
		{ label: 'Brood', value: `Brood ${b.brood}` },
		{ label: 'What it’s for', value: b.purpose }
	]);

	const articles = $derived([
		{ n: 'I', title: 'Looks', paras: b.standard.appearance },
		{ n: 'II', title: 'Song', paras: b.standard.chorus },
		{ n: 'III', title: 'Temperament', paras: b.standard.temperament },
		{ n: 'IV', title: 'The Shell', paras: b.standard.exuvia }
	]);
</script>

<Head
	title={b.name}
	description="The {b.name}: {data.group.name} group, {data.register
		.name}. What we look for, where it came from, and every one in the stud book."
/>

<Breadcrumb
	trail={[
		{ href: '/breeds', label: 'Breeds' },
		{ href: `/groups/${data.group.id}`, label: data.group.title },
		{ label: b.name }
	]}
/>

<header class="abs-heading" class:abs-register--tredecim={tredecim}>
	<span class="abs-heading__numeral">{data.group.title} · {data.register.name}</span>
	<h1 class="abs-h1">{b.name}</h1>
</header>

<div class="abs-measure">
	<Ledger rows={particulars}>
		{#snippet value(row)}
			{#if row.key === 'tree'}
				{row.value.split('|')[0]}, <i class="abs-latin">{row.value.split('|')[1]}</i>
			{:else}
				{row.value}
			{/if}
		{/snippet}
	</Ledger>
</div>

<Plate id={b.plate.media} number="Plate I" caption={b.plate.caption} eager />

<div class="abs-prose abs-prose--justified">
	<p class="abs-lede abs-initial">{b.lede}</p>
</div>

<article class="abs-standard" aria-labelledby="standard-heading">
	<SectionHeading numeral="Breed standard" title="What We Look For" id="standard-heading" />
	<ol>
		{#each articles as a (a.n)}
			<li class="abs-standard__article">
				<h3 class="abs-h3"><span class="abs-h3__numeral">{a.n}.</span>{a.title}</h3>
				<ol>
					{#each a.paras as p, i (i)}
						<li class="abs-clause">
							<span class="abs-clause__no">{a.n}.{i + 1}</span>
							<div class="abs-clause__body"><p>{p}</p></div>
						</li>
					{/each}
				</ol>
			</li>
		{/each}
		<li class="abs-standard__article">
			<h3 class="abs-h3"><span class="abs-h3__numeral">V.</span>What Gets Marked Down</h3>
			<ol>
				{#each b.faults as p, i (i)}
					<li class="abs-clause">
						<span class="abs-clause__no">V.{i + 1}</span>
						<div class="abs-clause__body"><p>{p}</p></div>
					</li>
				{/each}
			</ol>
		</li>
		<li class="abs-standard__article">
			<h3 class="abs-h3"><span class="abs-h3__numeral">VI.</span>What Disqualifies</h3>
			<ol>
				{#each b.disqualifications as p, i (i)}
					<li class="abs-clause">
						<span class="abs-clause__no">VI.{i + 1}</span>
						<div class="abs-clause__body">
							<p>{p} <span class="abs-mark abs-mark--adverse">Disqualified</span></p>
						</div>
					</li>
				{/each}
			</ol>
		</li>
	</ol>
</article>

<section aria-labelledby="history-heading">
	<SectionHeading numeral="The line" title="History" id="history-heading" />
	<div class="abs-prose abs-prose--justified">
		{#each b.history as p, i (i)}<p>{p}</p>{/each}
	</div>
</section>

{#each b.photos as photo, i (photo.media)}
	<Plate id={photo.media} number="Plate {roman(i + 2)}" caption={photo.caption} />
{/each}

<Diagram id={b.diagram} number="Fig. 1" caption="The {b.name}, drawn for the judges." />

{#if b.registrationLetter}
	<section aria-labelledby="letter-heading">
		<SectionHeading numeral="From the files" title="The Registration Letter" id="letter-heading" />
		<Plate
			id={b.registrationLetter.media}
			number="Plate {roman(b.photos.length + 2)}"
			caption="{b.registrationLetter.dateWritten.replace(/^the /, 'The ')}. Entered as received."
		/>
	</section>
{/if}

{#each data.disclaimers as d (d.id)}
	<Disclaimer disclaimer={d} />
{/each}

<div class="abs-prose">
	<p class="abs-italic" style="text-align:center">{MASSOSPORA}</p>
</div>

<section aria-labelledby="stock-heading">
	<SectionHeading numeral="Stud Book" title="Registered Stock" id="stock-heading" />
	<p class="abs-measure abs-faded" style="text-align:center">
		{numberWords(data.stock.length).replace(/^./, (c) => c.toUpperCase())}
		{data.stock.length === 1 ? 'entry' : 'entries'} for the {b.name} in the stud book.
	</p>
	<RegisterTable rows={data.stock} showBreed={false} />
</section>
