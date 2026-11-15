<script lang="ts">
	let { trail }: { trail: { href?: string; label: string }[] } = $props();
</script>

<nav class="abs-breadcrumb" aria-label="Location">
	<ol>
		{#each trail as crumb, i (i)}
			<li>
				{#if crumb.href && i < trail.length - 1}
					<a href={crumb.href}>{crumb.label}</a>
				{:else}
					<span aria-current="page">{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
