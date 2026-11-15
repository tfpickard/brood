<script lang="ts">
	import type { Notice } from '$content/types.ts';
	let { notice, headingLevel = 2 }: { notice: Notice; headingLevel?: 2 | 3 } = $props();
	const titleId = $derived(`notice-${notice.slug}`);
</script>

<section
	class="abs-notice"
	class:abs-notice--disciplinary={notice.kind === 'disciplinary'}
	class:abs-notice--statement={notice.kind === 'statement'}
	class:abs-notice--typed={notice.kind === 'typed'}
	aria-labelledby={titleId}
>
	<p class="abs-notice__kind">{notice.kindLabel}</p>
	{#if headingLevel === 2}
		<h2 class="abs-notice__title" id={titleId}>{notice.title}</h2>
	{:else}
		<h3 class="abs-notice__title" id={titleId}>{notice.title}</h3>
	{/if}
	<p class="abs-notice__date">{notice.dateLine}</p>
	{#each notice.body as p, i (i)}<p>{p}</p>{/each}
	{#if notice.mark}
		<p class="abs-notice__mark"><span class="abs-mark abs-mark--adverse">{notice.mark}</span></p>
	{/if}
	{#if notice.signature}
		<p class="abs-notice__sig">{notice.signature}<span>The Secretary</span></p>
	{/if}
</section>
