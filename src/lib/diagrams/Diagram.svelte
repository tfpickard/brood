<script lang="ts">
	import { DRAWINGS, type DrawingId } from './drawings.ts';

	let { id, number, caption }: { id: DrawingId; number: string; caption: string } = $props();
	const drawing = $derived(DRAWINGS[id]);
	const capId = $derived(`fig-${id}-${number.replace(/\W+/g, '')}`);
</script>

<figure class="abs-diagram">
	<div class="abs-diagram__drawing">
		<svg viewBox={drawing.viewBox} role="img" aria-labelledby={capId}>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html drawing.body}
		</svg>
	</div>
	<dl class="abs-diagram__key">
		{#each drawing.key as k (k.letter)}
			<div><dt>{k.letter}</dt><dd>{k.label}</dd></div>
		{/each}
	</dl>
	<figcaption id={capId}>
		<span class="abs-plate__no">{number}</span>
		<span class="abs-plate__caption">{caption}</span>
	</figcaption>
</figure>
