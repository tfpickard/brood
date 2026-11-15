<script lang="ts">
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { href, VARIETY_LABEL } from '$lib/labels.ts';

	let { data } = $props();
	const sept = $derived(data.rows.filter((r) => r.regNo.startsWith('F-17')));
	const tred = $derived(data.rows.filter((r) => r.regNo.startsWith('F-13')));
</script>

<Head
	title="Founding Stock"
	description="The first animal in every line we’ve registered. Every pedigree ends with one of these."
/>

<Breadcrumb trail={[{ href: '/stud-book', label: 'Stud Book' }, { label: 'Founding Stock' }]} />

<SectionHeading numeral="Where the lines start" title="Founding Stock" level={1} />

<div class="abs-prose">
	<p class="abs-lede">
		These are the first animals in every line we’ve registered, going back to the 1890s. Every
		pedigree in the stud book ends with one of them.
	</p>
</div>

{#snippet body(list: typeof data.rows, label: string, tredecim: boolean)}
	<tbody class:abs-register--tredecim={tredecim}>
		<tr class="abs-register__group"><th colspan="6" scope="rowgroup">{label}</th></tr>
		{#each list as r (r.regNo)}
			<tr>
				<td data-label="Reg. No.">{r.regNo}</td>
				<td data-label="Name" data-primary><a href={href(r)}>{r.name}</a></td>
				<td data-label="Breed">{r.breedName}</td>
				<td data-label="Size" data-minor>{VARIETY_LABEL[r.variety]}</td>
				<td data-label="Sex" data-minor>{r.sex === 'male' ? 'M' : 'F'}</td>
				<td data-label="Year" class="abs-num">{r.broodYear}</td>
			</tr>
		{/each}
	</tbody>
{/snippet}

<div class="abs-register">
	<hr class="abs-rule abs-rule--thick-thin" style="margin:0" />
	<table class="abs-register__table">
		<caption>Founding stock. 17-year lines first, then 13-year.</caption>
		<thead>
			<tr>
				<th scope="col">Reg. No.</th>
				<th scope="col">Name</th>
				<th scope="col">Breed</th>
				<th scope="col" data-minor>Size</th>
				<th scope="col" data-minor>Sex</th>
				<th scope="col" class="abs-num">Year</th>
			</tr>
		</thead>
		{@render body(sept, '17-year lines', false)}
		{@render body(tred, '13-year lines', true)}
	</table>
</div>
