<script lang="ts">
	import { STUD_BOOK_INTRO } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import RegisterTable from '$lib/components/RegisterTable.svelte';
	import { numberWords } from '$lib/format.ts';

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
	const count = $derived(data.total === 1 ? 'One entry.' : `${data.total} entries.`);
</script>

<Head
	title="The Stud Book"
	description="The Stud Book of the American Brood Society: every registered animal, its line and its standing."
/>

<SectionHeading numeral="Kept by the Registrar" title="The Stud Book" level={1} />

<div class="abs-prose">
	{#each STUD_BOOK_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
	<p>
		Animals whose parentage is not of record are entered in <a href="/stud-book/foundation-register"
			>the Foundation Register</a
		>.
	</p>
</div>

<section class="abs-register" aria-labelledby="reg-title">
	<h2 id="reg-title" class="abs-visually-hidden">Search the Stud Book</h2>
	<form method="GET" action="/stud-book" class="abs-register__tools">
		<div class="abs-field">
			<label for="reg-q">Search the Stud Book</label>
			<input
				id="reg-q"
				name="q"
				class="abs-input"
				type="search"
				value={data.params.q}
				autocomplete="off"
			/>
			<span class="abs-field__hint">By name, breed, owner or registration number.</span>
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
			<label for="reg-variety">Variety</label>
			<select id="reg-variety" name="variety" class="abs-input">
				<option value="">All varieties</option>
				<option value="standard" selected={data.params.variety === 'standard'}>Standard</option>
				<option value="microcada" selected={data.params.variety === 'microcada'}>Microcada</option>
				<option value="kilocada" selected={data.params.variety === 'kilocada'}>Kilocada</option>
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
		<button class="abs-card-button" type="submit">Search the register</button>
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
				<a class="abs-pagination__step" href={link({ page: data.page - 1 })} rel="prev"
					>Preceding page</a
				>
			{:else}
				<span class="abs-pagination__step" aria-disabled="true">Preceding page</span>
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
				<a class="abs-pagination__step" href={link({ page: data.page + 1 })} rel="next"
					>Following page</a
				>
			{:else}
				<span class="abs-pagination__step" aria-disabled="true">Following page</span>
			{/if}
		</nav>
	{/if}
	<p class="abs-faded abs-measure" style="text-align:center;font-size:var(--size-footnote)">
		The Stud Book holds {numberWords(Math.min(data.total, 999))} entries answering to this description.
	</p>
</section>
