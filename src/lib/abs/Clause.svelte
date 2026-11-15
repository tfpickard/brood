<script lang="ts">
	import type { Clause } from '$content/types.ts';
	import Self from './Clause.svelte';

	let { clause }: { clause: Clause } = $props();
</script>

<li class="abs-clause">
	<span class="abs-clause__no">{clause.no}</span>
	<div class="abs-clause__body">
		<p>
			{#if clause.term}<span class="abs-clause__term">{clause.term},</span>{/if}{clause.text}
			{#if clause.disqualifying}<span class="abs-mark abs-mark--adverse">Disqualified</span>{/if}
		</p>
		{#if clause.clauses?.length}
			<ol>
				{#each clause.clauses as sub (sub.no)}<Self clause={sub} />{/each}
			</ol>
		{/if}
	</div>
</li>
