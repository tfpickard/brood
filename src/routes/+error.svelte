<script lang="ts">
	import { page } from '$app/state';
	import { NOT_FOUND, SERVER_ERROR } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';

	const copy = $derived(page.status === 404 ? NOT_FOUND : SERVER_ERROR);
</script>

<Head title={copy.title} description={copy.body} />

<section class="abs-error">
	<span class="abs-crest" role="img" aria-label="The arms of the Society"></span>
	<p class="abs-error__folio">Folio {page.status}</p>
	<h1 class="abs-h2">{copy.title}</h1>
	<p>{copy.body}</p>
	<a class="abs-error__return" href="/">Back to the home page</a>
</section>
