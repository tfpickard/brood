<script lang="ts">
	import type { Testimonial } from '$content/types.ts';
	import Plate from './Plate.svelte';

	let { t, number }: { t: Testimonial; number: string } = $props();
</script>

<figure class="abs-testimonial abs-testimonial--with-plate">
	<Plate id={t.plate.media} {number} caption={t.plate.caption} />
	<div>
		<blockquote>
			{#each t.body as p, i (i)}<p>{p}</p>{/each}
		</blockquote>
		<p class="abs-attribution">
			<span class="abs-attribution__family">{t.family}</span>
			<span class="abs-attribution__seat">{t.seat}</span>
			<span class="abs-attribution__years">Members since {t.since}</span>
		</p>
	</div>
</figure>
