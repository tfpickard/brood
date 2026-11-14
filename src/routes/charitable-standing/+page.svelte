<script lang="ts">
	import { CHARITABLE_STANDING } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head title="Charitable Standing" description="The charitable standing and endowment of the American Brood Society." />

<SectionHeading numeral="Of the Society’s standing" title="Charitable Standing" level={1} />

<div class="abs-prose abs-prose--justified">
	{#each CHARITABLE_STANDING as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>
