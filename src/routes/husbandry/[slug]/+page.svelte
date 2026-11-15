<script lang="ts">
	import { MASSOSPORA } from '$content/site.ts';
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Disclaimer from '$lib/abs/Disclaimer.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import Diagram from '$lib/diagrams/Diagram.svelte';
	import { roman } from '$lib/format.ts';

	let { data } = $props();
	const p = $derived(data.page);
	const plateAfter = (i: number) => p.plates[i];
	const mentionsHealth = $derived(
		p.sections.some((s) => s.paragraphs.some((x) => x.includes(MASSOSPORA)))
	);
</script>

<Head title={p.title} description={p.summary} />

<Breadcrumb trail={[{ href: '/husbandry', label: 'Husbandry' }, { label: p.title }]} />

<SectionHeading numeral="Husbandry {p.numeral}" title={p.title} level={1} />

<div class="abs-prose abs-prose--justified">
	<p class="abs-lede abs-initial">{p.lede}</p>
</div>

{#if p.slug === 'kilocada'}
	<Diagram
		id="kilocada-facility"
		number="Fig. 1"
		caption="A Kilocada rearing facility, plan. Not to scale."
	/>
{/if}

{#each p.sections as s, i (s.heading)}
	<section class="abs-measure" aria-labelledby="s-{i}">
		<h2 class="abs-h3" id="s-{i}"><span class="abs-h3__numeral">{s.numeral}</span>{s.heading}</h2>
		<div class="abs-prose abs-prose--justified">
			{#each s.paragraphs as para, j (j)}<p>{para}</p>{/each}
		</div>
		{#if s.table}
			<div class="abs-register">
				<hr class="abs-rule abs-rule--thick-thin" style="margin:0" />
				<table class="abs-register__table">
					<caption>{s.table.caption}</caption>
					<thead>
						<tr
							>{#each s.table.columns as c (c)}<th scope="col">{c}</th>{/each}</tr
						>
					</thead>
					<tbody>
						{#each s.table.rows as row, r (r)}
							<tr>
								{#each row as cell, c (c)}<td data-label={s.table.columns[c]}>{cell}</td>{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</section>
	{#if plateAfter(i)}
		{@const plate = plateAfter(i)}
		{#if plate}<Plate id={plate.media} number="Plate {roman(i + 1)}" caption={plate.caption} />{/if}
	{/if}
{/each}

{#each p.plates.slice(p.sections.length) as plate, k (plate.media)}
	<Plate
		id={plate.media}
		number="Plate {roman(p.sections.length + k + 1)}"
		caption={plate.caption}
	/>
{/each}

{#each data.disclaimers as d (d.id)}<Disclaimer disclaimer={d} />{/each}

{#if p.discussesHealth && !mentionsHealth}
	<div class="abs-prose"><p class="abs-italic" style="text-align:center">{MASSOSPORA}</p></div>
{/if}
