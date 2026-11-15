<script lang="ts">
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import { monthYear, roman } from '$lib/format.ts';

	let { data } = $props();
	const s = $derived(data.supper);
</script>

<Head title="Minutes of the Supper, {monthYear(s.date)}" description={s.dateline} />

<Breadcrumb
	trail={[{ href: '/supper-club', label: 'The Supper Club' }, { label: monthYear(s.date) }]}
/>

<article class="abs-minutes">
	<h1 class="abs-minutes__heading">Minutes of the Supper</h1>
	<p class="abs-minutes__dateline">{s.dateline}</p>
	<dl class="abs-ledger abs-ledger--compact abs-minutes__attendance">
		{#each s.attendance as a (a.label)}
			<dt>{a.label}</dt>
			<dd>{a.value}</dd>
		{/each}
		{#each s.seating as note, i (i)}
			<dt>{i === 0 ? 'Seating' : ''}</dt>
			<dd>{note}</dd>
		{/each}
	</dl>
	<ol class="abs-minutes__items">
		{#each s.items as item, i (i)}
			<li><span class="abs-minutes__no">{i + 1}.</span><span>{item}</span></li>
		{/each}
	</ol>
	<div class="abs-minutes__menu">
		<h2>Menu</h2>
		{#each s.menu as course, i (i)}<p>{course}</p>{/each}
	</div>
	<p class="abs-minutes__confirm">Confirmed as a true record.<span>The Secretary</span></p>
</article>

{#each s.plates as plate, i (plate.media)}
	<Plate id={plate.media} number="Plate {roman(i + 1)}" caption={plate.caption} />
{/each}

<nav class="abs-pagination" aria-label="Minutes of other suppers">
	{#if data.prev}
		<a class="abs-pagination__step" href="/supper-club/{data.prev.slug}" rel="prev"
			>Preceding supper</a
		>
	{:else}
		<span class="abs-pagination__step" aria-disabled="true">Preceding supper</span>
	{/if}
	<span class="abs-pagination__status">{monthYear(s.date)}</span>
	{#if data.next}
		<a class="abs-pagination__step" href="/supper-club/{data.next.slug}" rel="next"
			>Following supper</a
		>
	{:else}
		<span class="abs-pagination__step" aria-disabled="true">Following supper</span>
	{/if}
</nav>
