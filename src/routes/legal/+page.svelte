<script lang="ts">
	import { DISCLAIMERS } from '$content/disclaimers.ts';
	import { LEGAL_INTRO } from '$content/pages.ts';
	import { MASSOSPORA } from '$content/site.ts';
	import Disclaimer from '$lib/abs/Disclaimer.svelte';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="Legal Notices"
	description="Legal notices of the American Brood Society concerning its name, its animals, its shows and their shells."
/>

<SectionHeading numeral="Given by the Society" title="Legal Notices" level={1} />

<div class="abs-prose">
	{#each LEGAL_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#each DISCLAIMERS as d (d.id)}<Disclaimer disclaimer={d} />{/each}

<aside class="abs-disclaimer" aria-label="Health">
	<span class="abs-disclaimer__label">Health</span>
	<p>{MASSOSPORA}</p>
</aside>

<p class="abs-measure abs-faded" style="text-align:center;font-size:var(--size-footnote)">
	The Society’s handling of personal information is set out in its <a
		class="abs-link"
		href="/correspondence-policy">privacy policy</a
	>.
</p>
