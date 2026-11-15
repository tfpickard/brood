<script lang="ts">
	import { page } from '$app/state';
	import { SITE_URL } from '$content/site.ts';
	let { title, description }: { title: string; description: string } = $props();
	const canonical = $derived(SITE_URL + (page.url.pathname === '/' ? '' : page.url.pathname));
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
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
</svelte:head>
