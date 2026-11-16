<script lang="ts">
	import { BYLAWS } from '$content/governance.ts';
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="The Bylaws"
	description="Excerpts from the Bylaws of the American Brood Society, as amended."
/>

<Breadcrumb trail={[{ href: '/governance', label: 'Club Business' }, { label: 'The Bylaws' }]} />

<SectionHeading numeral="Excerpts, as amended" title="The Bylaws" level={1} />

<article class="abs-standard">
	<ol>
		{#each BYLAWS as art (art.numeral)}
			<li class="abs-standard__article">
				<h2 class="abs-h3">
					<span class="abs-h3__numeral">Article {art.numeral}.</span>{art.title}
				</h2>
				<ol>
					{#each art.clauses as c (c.no)}
						<li class="abs-clause">
							<span class="abs-clause__no">{c.no}</span>
							<div class="abs-clause__body">
								<p>{c.text}</p>
								{#if c.amended}<p
										class="abs-faded"
										style="font-size:var(--size-footnote);font-style:italic"
									>
										Amended {c.amended}.
									</p>{/if}
							</div>
						</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
</article>
