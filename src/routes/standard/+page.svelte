<script lang="ts">
	import { STANDARD, STANDARD_PREAMBLE } from '$content/standard.ts';
	import Clause from '$lib/abs/Clause.svelte';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="The General Standard"
	description="The General Standard of the American Brood Society, common to every recognized breed."
/>

<SectionHeading numeral="As amended by the Council" title="The General Standard" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each STANDARD_PREAMBLE as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<nav class="abs-toc" aria-labelledby="toc-title">
	<h2 class="abs-toc__title" id="toc-title">Contents</h2>
	<ol>
		{#each STANDARD as article (article.numeral)}
			<li>
				<a href="#article-{article.numeral}"
					><span class="abs-toc__num">{article.numeral}.</span><span>{article.title}</span></a>
			</li>
		{/each}
	</ol>
</nav>

<article class="abs-standard">
	<ol>
		{#each STANDARD as article (article.numeral)}
			<li class="abs-standard__article">
				<h2 class="abs-h3" id="article-{article.numeral}">
					<span class="abs-h3__numeral">{article.numeral}.</span>{article.title}
				</h2>
				<ol>
					{#each article.clauses as clause (clause.no)}<Clause {clause} />{/each}
				</ol>
			</li>
		{/each}
	</ol>
</article>
