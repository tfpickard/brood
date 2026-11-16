<script lang="ts">
	import { FOUNDING_STATEMENT, FOUNDING_WORKS } from '$content/founding.ts';
	import { FOUNDING_HEADING } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import Ornament from '$lib/abs/Ornament.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';

	const works = [...FOUNDING_WORKS].sort((a, b) => a.author.localeCompare(b.author));
</script>

<Head
	title={FOUNDING_HEADING}
	description="Everything other people have written about how the American Brood Society started."
/>

<SectionHeading numeral="Other people’s theories" title={FOUNDING_HEADING} level={1} />

<div class="abs-prose">
	<p class="abs-lede">{FOUNDING_STATEMENT}</p>
</div>

<Ornament />

<section aria-labelledby="bib">
	<SectionHeading numeral="What’s out there" title="The Reading List" id="bib" />
	<ol class="abs-bib abs-measure">
		{#each works as w (w.author + w.year)}
			<li class="abs-bib__entry">
				<p class="abs-bib__cite">
					<span class="abs-bib__author">{w.author}</span>
					<cite>{w.title}.</cite>
					{w.citation}
					<span class="abs-bib__kind">{w.kind}</span>
				</p>
				<dl class="abs-bib__note">
					<dt>Claims</dt>
					<dd>{w.alleges}</dd>
					<dt>Based on</dt>
					<dd>{w.basis}</dd>
				</dl>
			</li>
		{/each}
	</ol>
</section>
