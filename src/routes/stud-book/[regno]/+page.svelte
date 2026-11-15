<script lang="ts">
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Pedigree from '$lib/abs/Pedigree.svelte';
	import { href } from '$lib/labels.ts';

	let { data } = $props();
	const a = $derived(data.animal);
	const adverse = $derived(!a.foundation && a.standing !== 'good');
</script>

<Head
	title="{a.name}, {a.regNo}"
	description="{a.name}, {data.breed.name}, entered in the {a.foundation
		? 'Foundation Register'
		: 'Stud Book'} as {a.regNo}."
/>

<Breadcrumb
	trail={[
		a.foundation
			? { href: '/stud-book/foundation-register', label: 'The Foundation Register' }
			: { href: '/stud-book', label: 'The Stud Book' },
		{ label: a.name }
	]}
/>

<article class="abs-entry">
	<header class="abs-entry__head">
		<span class="abs-entry__regno"
			>{a.foundation ? 'Foundation Register' : data.register.name} &nbsp;·&nbsp; {a.regNo}</span
		>
		<h1 class="abs-entry__name">{a.name}</h1>
		<span class="abs-entry__breed"
			><a class="abs-link" href="/breeds/{data.breed.slug}">{data.breed.name}</a>{a.variety !==
			'standard'
				? `, ${data.varietyLabel}`
				: ''}</span
		>
		{#if !a.foundation && a.titles.length}
			<span class="abs-mark abs-mark--formal">{a.titles.join(' ')}</span>
		{/if}
	</header>
	<dl class="abs-ledger">
		<dt>Registration No.</dt>
		<dd>{a.regNo}</dd>
		<dt>Breed</dt>
		<dd>{data.breed.name}</dd>
		<dt>Variety</dt>
		<dd>{data.varietyLabel}</dd>
		<dt>Sex</dt>
		<dd>{a.sex === 'male' ? 'Male' : 'Female'}</dd>
		<dt>Year of the line</dt>
		<dd>{a.broodYear}</dd>
		{#if !a.foundation && a.actualEmergence}
			<dt>Emerged</dt>
			<dd>{a.actualEmergence}</dd>
		{/if}
		<dt>Sire</dt>
		<dd>
			{#if data.sire}<a class="abs-link" href={href(data.sire)}>{data.sire.name}</a>, {data.sire
					.regNo}{:else}Not of record{/if}
		</dd>
		<dt>Dam</dt>
		<dd>
			{#if data.dam}<a class="abs-link" href={href(data.dam)}>{data.dam.name}</a>, {data.dam
					.regNo}{:else}Not of record{/if}
		</dd>
		<dt>Eye color</dt>
		<dd>{a.eyes === 'blue' ? 'Blue' : 'Red'}</dd>
		<dt>Host tree</dt>
		<dd>{data.breed.hostTree.common}, <i class="abs-latin">{data.breed.hostTree.botanical}</i></dd>
		{#if !a.foundation}
			<dt>Titles</dt>
			<dd>{a.titles.length ? a.titles.join('; ') : 'None'}</dd>
			<dt>Owner of record</dt>
			<dd>{a.owner}</dd>
			<dt>Exuvia</dt>
			<dd>{a.exuvia}</dd>
		{:else}
			<dt>Entered by</dt>
			<dd>{a.owner}</dd>
		{/if}
		{#if !a.foundation && a.sale}
			<dt>Transfer</dt>
			<dd>{a.sale}</dd>
		{/if}
		{#if !a.foundation && a.remark}
			<dt>Remark</dt>
			<dd>{a.remark}</dd>
		{/if}
		<dt>Standing</dt>
		<dd>
			<span class="abs-mark" class:abs-mark--adverse={adverse} class:abs-mark--silent={a.foundation}
				>{data.standingLabel}</span
			>
			{#if !a.foundation && a.disqualification}<br />{a.disqualification}{/if}
		</dd>
	</dl>
</article>

{#if !a.foundation}
	<Pedigree
		entries={data.pedigree}
		caption="Pedigree of {a.name}, the subject and four generations. Sires above, dams below."
	/>
{:else}
	<p class="abs-measure abs-faded" style="text-align:center;font-style:italic">
		Parentage not of record.
	</p>
{/if}
