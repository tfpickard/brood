<script lang="ts">
	import { countdownSentence } from '$lib/format.ts';
	import { onMount } from 'svelte';

	let { instant, label, note, initial }: { instant: string; label: string; note: string; initial: string } =
		$props();

	// The sentence is rendered on the server; the client repaints it once a minute, without transition.
	let sentence = $state('');
	const shown = $derived(sentence || initial);

	onMount(() => {
		const target = new Date(instant);
		sentence = countdownSentence(target);
		const timer = setInterval(() => (sentence = countdownSentence(target)), 60_000);
		return () => clearInterval(timer);
	});
</script>

<section class="abs-countdown" aria-labelledby="cd-label">
	<p class="abs-countdown__label" id="cd-label">{label}</p>
	<hr />
	<p class="abs-countdown__value" data-countdown={instant}>{shown}</p>
	<p class="abs-countdown__note">{note}</p>
</section>
