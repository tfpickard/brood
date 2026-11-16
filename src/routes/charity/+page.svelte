<script lang="ts">
	import { CHARITABLE_STANDING } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="Charity"
	description="The American Brood Society is a charity, and it’s fully endowed."
/>

<SectionHeading numeral="Where we stand" title="Charity" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each CHARITABLE_STANDING as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>
