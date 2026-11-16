<script lang="ts">
	import { TESTIMONIALS, TESTIMONIALS_INTRO } from '$content/testimonials.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import Testimonial from '$lib/abs/Testimonial.svelte';
	import { roman } from '$lib/format.ts';
</script>

<Head title="From Our Members" description="Our member families, in their own words." />

<SectionHeading numeral="In their own words" title="From Our Members" level={1} />

<div class="abs-prose">
	{#each TESTIMONIALS_INTRO as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#each TESTIMONIALS as t, i (t.family)}
	<Testimonial {t} number="Plate {roman(i + 1)}" />
{/each}
