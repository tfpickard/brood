<script lang="ts">
	import { page } from '$app/state';
	let { title, description }: { title: string; description: string } = $props();
	const full = $derived(
		title === 'The American Brood Society' ? title : `${title} · The American Brood Society`
	);
</script>

<svelte:head>
	<title>{full}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={full} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="The American Brood Society" />
	<meta property="og:url" content={page.url.pathname} />
</svelte:head>
