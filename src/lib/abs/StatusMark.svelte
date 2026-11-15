<script lang="ts">
	import type { Snippet } from 'svelte';
	type Kind = 'recorded' | 'formal' | 'pending' | 'silent' | 'adverse';
	let { kind = 'recorded', children }: { kind?: Kind; children: Snippet } = $props();
</script>

<span
	class="abs-mark"
	class:abs-mark--formal={kind === 'formal'}
	class:abs-mark--pending={kind === 'pending'}
	class:abs-mark--silent={kind === 'silent'}
	class:abs-mark--adverse={kind === 'adverse'}>{@render children()}</span
>
