<script lang="ts">
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';

	let { data, form } = $props();
</script>

<Head title="The Secretariat" description="For officers of the Society." />

<SectionHeading numeral="For officers of the Society" title="The Secretariat" level={1} />

{#if !data.configured}
	<p class="abs-measure abs-faded" style="text-align:center">The Secretariat is closed.</p>
{:else}
	<form method="POST" action="?/signin" class="abs-form">
		<fieldset>
			<legend>Admission</legend>
			<div class="abs-field" data-invalid={form?.message ? '' : undefined}>
				<label for="s-secret">The word of the day</label>
				<input
					id="s-secret"
					name="secret"
					type="password"
					class="abs-input"
					autocomplete="current-password"
					aria-invalid={form?.message ? 'true' : undefined}
					aria-describedby={form?.message ? 's-err' : undefined}
				/>
				{#if form?.message}<span class="abs-field__error" id="s-err">{form.message}</span>{/if}
			</div>
		</fieldset>
		<div class="abs-submit-row">
			<button class="abs-card-button" type="submit">Enter</button>
		</div>
	</form>
{/if}
