<script lang="ts">
	import { href, STANDING_LABEL, VARIETY_LABEL, type RegisterRow } from '$lib/labels.ts';

	type SortKey = 'regNo' | 'name' | 'breed' | 'year' | 'standing';

	let {
		rows,
		showBreed = true,
		sort,
		dir,
		sortHref,
		caption = 'Tredecim entries are listed separately and after.'
	}: {
		rows: RegisterRow[];
		showBreed?: boolean;
		sort?: SortKey;
		dir?: 'asc' | 'desc';
		sortHref?: (key: SortKey) => string;
		caption?: string;
	} = $props();

	const sept = $derived(rows.filter((r) => r.regNo.startsWith('S-')));
	const tred = $derived(rows.filter((r) => r.regNo.startsWith('T-')));
	const cols = $derived(showBreed ? 9 : 8);

	const heads: { key?: SortKey; label: string; minor?: boolean; num?: boolean; breed?: boolean }[] = [
		{ key: 'regNo', label: 'Reg. No.' },
		{ key: 'name', label: 'Name' },
		{ key: 'breed', label: 'Breed', breed: true },
		{ label: 'Variety', minor: true },
		{ label: 'Sex', minor: true },
		{ key: 'year', label: 'Emerged', num: true },
		{ label: 'Eye', minor: true },
		{ label: 'Titles', minor: true },
		{ key: 'standing', label: 'Standing' }
	];
	const shown = $derived(heads.filter((h) => showBreed || !h.breed));
	const ariaSort = (key?: SortKey) =>
		key && key === sort ? (dir === 'desc' ? 'descending' : 'ascending') : undefined;
	const markKind = (s: RegisterRow['standing']) => (s === 'good' ? '' : ' abs-mark--adverse');
</script>

{#snippet body(list: RegisterRow[], label: string, tredecim: boolean)}
	{#if list.length}
		<tbody class:abs-register--tredecim={tredecim}>
			<tr class="abs-register__group"><th colspan={cols} scope="rowgroup">{label}</th></tr>
			{#each list as r (r.regNo)}
				<tr>
					<td data-label="Reg. No.">{r.regNo}</td>
					<td data-label="Name" data-primary><a href={href(r)}>{r.name}</a></td>
					{#if showBreed}<td data-label="Breed">{r.breedName}</td>{/if}
					<td data-label="Variety" data-minor>{VARIETY_LABEL[r.variety]}</td>
					<td data-label="Sex" data-minor>{r.sex === 'male' ? 'M' : 'F'}</td>
					<td data-label="Emerged" class="abs-num">{r.actualEmergence ?? r.broodYear}</td>
					<td data-label="Eye" data-minor>{r.eyes === 'blue' ? 'Blue' : 'Red'}</td>
					<td data-label="Titles" data-minor>{r.titles.length ? r.titles.join(' ') : 'None'}</td>
					<td data-label="Standing"
						><span class="abs-mark{markKind(r.standing)}">{STANDING_LABEL[r.standing]}</span></td
					>
				</tr>
			{/each}
		</tbody>
	{/if}
{/snippet}

<div class="abs-register">
	<hr class="abs-rule abs-rule--thick-thin" style="margin:0" />
	<table class="abs-register__table">
		<caption>{caption}</caption>
		<thead>
			<tr>
				{#each shown as h (h.label)}
					<th
						scope="col"
						data-minor={h.minor ? '' : undefined}
						class:abs-num={h.num}
						aria-sort={ariaSort(h.key)}
					>
						{#if h.key && sortHref}
							<a class="abs-sort" href={sortHref(h.key)}
								>{h.label}<span class="abs-sort__state"
									>{h.key === sort ? (dir === 'desc' ? 'desc.' : 'asc.') : ''}</span
								></a
							>
						{:else}
							{h.label}
						{/if}
					</th>
				{/each}
			</tr>
		</thead>
		{@render body(sept, 'Septendecim Register', false)}
		{@render body(tred, 'Tredecim Register', true)}
	</table>
	{#if rows.length === 0}
		<p class="abs-faded" style="font-style:italic;text-align:center;margin:1.5rem 0">
			No entry in the Stud Book answers to that description.
		</p>
	{/if}
</div>
