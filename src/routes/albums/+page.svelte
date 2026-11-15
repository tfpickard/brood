<script lang="ts">
	import { ALBUMS, ALBUMS_INTRO } from '$content/albums.ts';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { roman } from '$lib/format.ts';
</script>

<Head
	title="From the Albums"
	description="Snapshots from our members’ family albums, with their own captions."
/>

<SectionHeading numeral="Members’ snapshots" title="From the Albums" level={1} />

<div class="abs-prose">
	{#each ALBUMS_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

<div class="abs-gallery">
	{#each ALBUMS as plate, i (plate.media)}
		<Plate id={plate.media} number="Plate {roman(i + 1)}" caption={plate.caption} />
	{/each}
</div>
