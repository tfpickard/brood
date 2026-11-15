<script lang="ts">
	import { CICADOODLE } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
</script>

<Head
	title="Statement on the So-Called Cicadoodle"
	description="A statement of the Council of the American Brood Society, reissued without amendment."
/>

<section class="abs-notice abs-notice--statement abs-measure" aria-labelledby="st-title">
	<p class="abs-notice__kind">Statement</p>
	<h1 class="abs-notice__title" id="st-title">On the So-Called Cicadoodle</h1>
	<p class="abs-notice__date">{CICADOODLE.issued}</p>
	{#each CICADOODLE.body as p, i (i)}<p>{p}</p>{/each}
	{#each CICADOODLE.reissued as r (r)}<p class="abs-notice__date">{r}</p>{/each}
</section>
