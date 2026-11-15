<script lang="ts">
	import { STUD_BOOK_INTRO } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import RegisterTable from '$lib/components/RegisterTable.svelte';

	let { data } = $props();

	function link(overrides: Record<string, string | number>): string {
		const merged: Record<string, string | number> = {
			...data.params,
			page: data.page,
			...overrides
		};
		const s = Object.entries(merged)
			.filter(
				([k, v]) =>
					!(
						v === '' ||
						(k === 'page' && v === 1) ||
						(k === 'sort' && v === 'regNo') ||
						(k === 'dir' && v === 'asc')
					)
			)
			.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
			.join('&');
		return s ? `/stud-book?${s}` : '/stud-book';
	}

	const sortHref = (key: string) =>
		link({
			sort: key,
			dir: data.params.sort === key && data.params.dir === 'asc' ? 'desc' : 'asc',
			page: 1
		});
	const count = $derived(data.total === 1 ? 'One match.' : `${data.total} matches.`);
</script>

<Head
	title="Stud Book"
	description="Every cicada we’ve registered since 1896: who bred it, who owns it, and whether it’s still in good standing."
/>

<SectionHeading numeral="Since 1896" title="The Stud Book" level={1} />

<div class="abs-prose">
	{#each STUD_BOOK_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<section class="abs-register" aria-labelledby="reg-title">
	<h2 id="reg-title" class="abs-visually-hidden">Search the stud book</h2>
	<form method="GET" action="/stud-book" class="abs-register__tools">
		<div class="abs-field">
			<label for="reg-q">Search the stud book</label>
			<input
				id="reg-q"
				name="q"
				class="abs-input"
				type="search"
				value={data.params.q}
				autocomplete="off"
			/>
			<span class="abs-field__hint">Name, breed, owner or registration number.</span>
		</div>
		<div class="abs-field">
			<label for="reg-breed">Breed</label>
			<select id="reg-breed" name="breed" class="abs-input">
				<option value="">All breeds</option>
				{#each data.breeds as b (b.slug)}
					<option value={b.slug} selected={data.params.breed === b.slug}>{b.name}</option>
				{/each}
			</select>
		</div>
		<div class="abs-field">
			<label for="reg-variety">Size</label>
			<select id="reg-variety" name="variety" class="abs-input">
				<option value="">Any size</option>
				<option value="standard" selected={data.params.variety === 'standard'}>Regular</option>
				<option value="microcada" selected={data.params.variety === 'microcada'}>Miniature</option>
				<option value="kilocada" selected={data.params.variety === 'kilocada'}>Large</option>
			</select>
		</div>
		<div class="abs-field">
			<label for="reg-eye">Eye</label>
			<select id="reg-eye" name="eye" class="abs-input">
				<option value="">Either</option>
				<option value="red" selected={data.params.eye === 'red'}>Red</option>
				<option value="blue" selected={data.params.eye === 'blue'}>Blue</option>
			</select>
		</div>
		<div class="abs-field">
			<label for="reg-standing">Standing</label>
			<select id="reg-standing" name="standing" class="abs-input">
				<option value="">Any</option>
				<option value="good" selected={data.params.standing === 'good'}>In good standing</option>
				<option value="disqualified" selected={data.params.standing === 'disqualified'}
					>Disqualified</option
				>
			</select>
		</div>
		<input type="hidden" name="sort" value={data.params.sort} />
		<input type="hidden" name="dir" value={data.params.dir} />
		<button class="abs-card-button" type="submit">Search</button>
		<p class="abs-register__count">{count}</p>
	</form>

	<RegisterTable
		rows={data.rows}
		sort={data.params.sort}
		dir={data.params.dir === 'desc' ? 'desc' : 'asc'}
		{sortHref}
	/>

	{#if data.pages > 1}
		<nav class="abs-pagination" aria-label="Pages of the Stud Book">
			{#if data.page > 1}
				<a class="abs-pagination__step" href={link({ page: data.page - 1 })} rel="prev">Previous</a>
			{:else}
				<span class="abs-pagination__step" aria-disabled="true">Previous</span>
			{/if}
			<ol>
				{#each Array.from({ length: data.pages }, (_, i) => i + 1) as n (n)}
					<li>
						<a href={link({ page: n })} aria-current={n === data.page ? 'page' : undefined}>{n}</a>
					</li>
				{/each}
			</ol>
			<span class="abs-pagination__status">Page {data.page} of {data.pages}</span>
			{#if data.page < data.pages}
				<a class="abs-pagination__step" href={link({ page: data.page + 1 })} rel="next">Next</a>
			{:else}
				<span class="abs-pagination__step" aria-disabled="true">Next</span>
			{/if}
		</nav>
	{/if}
	<p class="abs-sc" style="text-align:center">
		<a class="abs-link" href="/stud-book/founding-stock">Founding stock</a>
	</p>
</section>
