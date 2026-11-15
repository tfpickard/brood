<script lang="ts">
	import { enhance } from '$app/forms';
	import { MEMBERSHIP } from '$content/pages.ts';
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { tick } from 'svelte';

	let { form } = $props();
	let ack: HTMLElement | undefined = $state();

	const err = (k: 'family' | 'seat' | 'line') => form?.errors?.[k];
	const val = (k: string) => (form?.values as Record<string, string> | undefined)?.[k] ?? '';
</script>

<Head
	title="Membership"
	description="Membership in the American Brood Society is by invitation. You can apply anyway."
/>

<SectionHeading numeral="By invitation" title="Membership" level={1} />

<div class="abs-prose">
	{#each MEMBERSHIP.intro as p, i (i)}<p class:abs-lede={i === 0}>{p}</p>{/each}
</div>

{#if form?.acknowledged}
	<section
		class="abs-notice abs-notice--statement abs-measure"
		aria-labelledby="ack-t"
		tabindex="-1"
		bind:this={ack}
	>
		<p class="abs-notice__kind">Received</p>
		<h2 class="abs-notice__title" id="ack-t">Thanks for Applying</h2>
		{#each form.paragraphs as p, i (i)}<p>{p}</p>{/each}
	</section>
{:else}
	<form
		method="POST"
		class="abs-form"
		novalidate
		use:enhance={() =>
			async ({ update }) => {
				await update();
				await tick();
				ack?.focus();
			}}
	>
		<fieldset>
			<legend>Apply anyway</legend>
			<div class="abs-field" data-invalid={err('family') ? '' : undefined}>
				<label for="m-family">Family name</label>
				<input
					id="m-family"
					name="family"
					class="abs-input"
					autocomplete="family-name"
					value={val('family')}
					aria-invalid={err('family') ? 'true' : undefined}
					aria-describedby={err('family') ? 'm-family-err' : undefined}
				/>
				{#if err('family')}<span class="abs-field__error" id="m-family-err">{err('family')}</span
					>{/if}
			</div>
			<div class="abs-field" data-invalid={err('seat') ? '' : undefined}>
				<label for="m-seat">Where the family lives</label>
				<input
					id="m-seat"
					name="seat"
					class="abs-input"
					value={val('seat')}
					aria-invalid={err('seat') ? 'true' : undefined}
					aria-describedby={err('seat') ? 'm-seat-err' : undefined}
				/>
				{#if err('seat')}<span class="abs-field__error" id="m-seat-err">{err('seat')}</span>{/if}
			</div>
			<div class="abs-field" data-invalid={err('line') ? '' : undefined}>
				<label for="m-line">Your line</label>
				<input
					id="m-line"
					name="line"
					class="abs-input"
					value={val('line')}
					aria-invalid={err('line') ? 'true' : undefined}
					aria-describedby={err('line') ? 'm-line-err' : 'm-line-hint'}
				/>
				{#if err('line')}<span class="abs-field__error" id="m-line-err">{err('line')}</span>
				{:else}<span class="abs-field__hint" id="m-line-hint"
						>Which breed, and the year your family started the line.</span
					>{/if}
			</div>
		</fieldset>
		<div class="abs-submit-row">
			<button class="abs-card-button" type="submit">Apply</button>
			<p class="abs-policy-line">
				We don’t keep applications. See our <a href="/correspondence-policy">privacy policy</a>.
			</p>
		</div>
	</form>
{/if}
