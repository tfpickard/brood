<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Footer from '$lib/abs/Footer.svelte';
	import Masthead from '$lib/abs/Masthead.svelte';
	import Nav from '$lib/abs/Nav.svelte';
	import RunningHead from '$lib/abs/RunningHead.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const isIndex = $derived(page.url.pathname === '/');
	const section = $derived((page.data.section as string | undefined) ?? 'The Society');
</script>

<div class="abs-page">
	{#if isIndex}
		<Masthead />
	{:else}
		<header>
			<RunningHead {section} />
			<Nav />
		</header>
	{/if}
	<main id="main" class="pt-s7">
		{@render children()}
	</main>
	<Footer />
</div>
