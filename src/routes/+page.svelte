<script lang="ts">
	import { CURRENT_NOTICES } from '$content/notices.ts';
	import { HOME_PURPOSE } from '$content/pages.ts';
	import { NEXT_EMERGENCE } from '$content/site.ts';
	import Countdown from '$lib/abs/Countdown.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Notice from '$lib/abs/Notice.svelte';
	import Ornament from '$lib/abs/Ornament.svelte';

	let { data } = $props();
</script>

<Head
	title="The American Brood Society"
	description="The Stud Book, the General Standard and the sanctioned emergences of the pedigreed periodical cicada."
/>

<div class="abs-prose">
	{#each HOME_PURPOSE as p, i (i)}
		<p class:abs-lede={i === 0} class:abs-initial={i === 0}>{p}</p>
	{/each}
</div>

<Countdown
	instant={NEXT_EMERGENCE.instant}
	label={NEXT_EMERGENCE.label}
	note={NEXT_EMERGENCE.note}
	initial={data.countdown}
/>

<Ornament />

<section aria-labelledby="notices-heading" class="abs-measure">
	<header class="abs-heading">
		<span class="abs-heading__numeral">Entered</span>
		<h2 class="abs-h2" id="notices-heading">Current Notices</h2>
	</header>
	{#each CURRENT_NOTICES as notice (notice.slug)}
		<Notice {notice} headingLevel={3} />
	{/each}
	<p class="abs-sc" style="text-align:center">
		<a class="abs-link" href="/governance/notices">The Notices of the Council</a>
	</p>
</section>
