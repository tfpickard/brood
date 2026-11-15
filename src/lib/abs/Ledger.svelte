<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		rows,
		compact = false,
		value
	}: {
		rows: { label: string; value: string; key?: string }[];
		compact?: boolean;
		value?: Snippet<[{ label: string; value: string; key?: string }]>;
	} = $props();
</script>

<dl class="abs-ledger" class:abs-ledger--compact={compact}>
	{#each rows as row, i (i)}
		<dt>{row.label}</dt>
		<dd>
			{#if value}{@render value(row)}{:else}{row.value}{/if}
		</dd>
	{/each}
</dl>
