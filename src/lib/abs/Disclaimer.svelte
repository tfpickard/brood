<script lang="ts">
	import type { Disclaimer } from '$content/types.ts';
	let { disclaimer }: { disclaimer: Disclaimer } = $props();
</script>

<aside class="abs-disclaimer" aria-label={disclaimer.label}>
	<span class="abs-disclaimer__label">{disclaimer.label}</span>
	{#each disclaimer.body as p, i (i)}<p>{p}</p>{/each}
</aside>
