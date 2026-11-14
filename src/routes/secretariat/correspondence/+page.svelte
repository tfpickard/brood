<script lang="ts">
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { shortDate } from '$lib/format.ts';

	let { data } = $props();
	const filters = [
		{ v: '', label: 'All' },
		{ v: 'new', label: 'Unanswered' },
		{ v: 'answered', label: 'Answered' },
		{ v: 'set_aside', label: 'Set aside' }
	];
</script>

<Head title="The Correspondence Ledger" description="For officers of the Society." />

<SectionHeading numeral="The Secretariat" title="The Correspondence Ledger" level={1} />

<nav class="abs-nav" aria-label="Ledger">
	<ul>
		{#each filters as f (f.v)}
			<li>
				<a href={f.v ? `?status=${f.v}` : '?'} aria-current={data.filter === f.v ? 'page' : undefined}>{f.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<div class="abs-register">
	<table class="abs-register__table">
		<caption>{data.rows.length} {data.rows.length === 1 ? 'letter' : 'letters'} in the ledger.</caption>
		<thead>
			<tr>
				<th scope="col">Received</th>
				<th scope="col">From</th>
				<th scope="col" data-minor>Reference</th>
				<th scope="col">Particulars</th>
				<th scope="col">Standing</th>
			</tr>
		</thead>
		<tbody>
			{#each data.rows as r (r.id)}
				<tr data-inquiry={r.id}>
					<td data-label="Received">{shortDate(new Date(r.receivedAt))}</td>
					<td data-label="From" data-primary><a href="/secretariat/correspondence/{r.id}">{r.name}</a></td>
					<td data-label="Reference" data-minor>{r.itemRef ?? 'None'}</td>
					<td data-label="Particulars">{r.excerpt}</td>
					<td data-label="Standing"><span class="abs-mark" class:abs-mark--pending={r.status === 'new'} class:abs-mark--silent={r.status === 'set_aside'}>{data.labels[r.status]}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if data.rows.length === 0}
		<p class="abs-faded" style="text-align:center;font-style:italic">The ledger holds no letters answering to that description.</p>
	{/if}
</div>

<form method="POST" action="/secretariat?/signout" class="abs-measure" style="text-align:center">
	<button class="abs-card-button" type="submit">Leave the Secretariat</button>
</form>
