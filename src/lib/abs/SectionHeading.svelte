<script lang="ts">
	let {
		numeral,
		title,
		level = 2,
		plain = false,
		id
	}: { numeral?: string; title: string; level?: 1 | 2; plain?: boolean; id?: string } = $props();
</script>

<header class="abs-heading" class:abs-heading--plain={plain}>
	{#if numeral}<span class="abs-heading__numeral">{numeral}</span>{/if}
	{#if level === 1}
		<h1 class="abs-h1" {id}>{title}</h1>
	{:else}
		<h2 class="abs-h2" {id}>{title}</h2>
	{/if}
</header>
