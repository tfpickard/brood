<script lang="ts">
	import { MOTTO } from '$content/site.ts';
	import Nav from './Nav.svelte';
</script>

<header class="abs-masthead">
	<span class="abs-crest" role="img" aria-label="The arms of the Society"></span>
	<p class="abs-masthead__article">The</p>
	<h1 class="abs-masthead__name">American Brood Society</h1>
	<p class="abs-masthead__motto">{MOTTO}</p>
	<hr class="abs-rule abs-rule--thick-thin" style="margin:0 auto" />
	<Nav />
</header>
