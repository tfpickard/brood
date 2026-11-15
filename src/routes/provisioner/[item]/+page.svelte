<script lang="ts">
	import { enhance } from '$app/forms';
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Disclaimer from '$lib/abs/Disclaimer.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Plate from '$lib/abs/Plate.svelte';
	import { tick } from 'svelte';

	let { data, form } = $props();
	const item = $derived(data.item);
	let ack: HTMLElement | undefined = $state();

	type Field = 'name' | 'email' | 'message' | 'itemRef';
	const err = (k: Field) => (form && 'errors' in form ? form.errors?.[k] : undefined);
	const val = (k: string, fallback = '') =>
		(form && 'values' in form ? (form.values as Record<string, string>)?.[k] : undefined) ??
		fallback;
</script>

<Head title={item.name} description="{item.name}, No. {item.ref}. {item.text}" />

<Breadcrumb trail={[{ href: '/provisioner', label: 'Equipment' }, { label: item.name }]} />

<article class="abs-catalogue" aria-labelledby="cat-name">
	<Plate
		id={item.plates[0]?.media ?? ''}
		number="Plate {item.ref}"
		caption={item.plates[0]?.caption ?? ''}
		eager
	/>
	<div>
		<span class="abs-catalogue__ref">No. {item.ref}</span>
		<h1 class="abs-catalogue__name" id="cat-name">{item.name}</h1>
		<p class="abs-catalogue__text">{item.text}</p>
		<dl class="abs-ledger abs-ledger--compact">
			{#each item.specification as s (s.label)}
				<dt>{s.label}</dt>
				<dd>{s.value}</dd>
			{/each}
			<dt>Materials</dt>
			<dd>{item.materials}</dd>
			<dt>Lead time</dt>
			<dd>{item.leadTime}</dd>
			<dt>Price</dt>
			<dd class="abs-on-inquiry">On request</dd>
		</dl>
		<a class="abs-catalogue__inquire" href="#inquiry">Ask about this</a>
	</div>
</article>

{#each item.plates.slice(1) as plate, i (plate.media)}
	<Plate id={plate.media} number="Plate {item.ref}-{i + 2}" caption={plate.caption} />
{/each}

{#each data.disclaimers as d (d.id)}<Disclaimer disclaimer={d} />{/each}

<section id="inquiry" aria-label="Ask about this">
	{#if form && 'received' in form && form.received}
		<section
			class="abs-notice abs-notice--statement abs-measure"
			aria-labelledby="ack-t"
			tabindex="-1"
			bind:this={ack}
		>
			<p class="abs-notice__kind">Received</p>
			<h2 class="abs-notice__title" id="ack-t">We’ve Got It</h2>
			<p>We answer these in the order they come in. No exceptions, whoever you are.</p>
		</section>
	{:else}
		<form
			method="POST"
			class="abs-form"
			novalidate
			use:enhance={() =>
				async ({ update }) => {
					await update({ reset: false });
					await tick();
					ack?.focus();
				}}
		>
			<fieldset>
				<legend>Ask about this</legend>
				{#if form && 'limited' in form && form.limited}
					<p class="abs-field__error" role="alert">
						<b>That’s enough for now.</b> You’ve sent us several of these in the last hour. Try again
						in an hour.
					</p>
				{/if}
				<div class="abs-field" data-invalid={err('name') ? '' : undefined}>
					<label for="f-name">Name</label>
					<input
						id="f-name"
						name="name"
						class="abs-input"
						autocomplete="name"
						maxlength="200"
						value={val('name')}
						aria-invalid={err('name') ? 'true' : undefined}
						aria-describedby={err('name') ? 'f-name-err' : undefined}
					/>
					{#if err('name')}<span class="abs-field__error" id="f-name-err">{err('name')}</span>{/if}
				</div>
				<div class="abs-field" data-invalid={err('email') ? '' : undefined}>
					<label for="f-email">Email</label>
					<input
						id="f-email"
						name="email"
						class="abs-input"
						type="email"
						autocomplete="email"
						maxlength="320"
						value={val('email')}
						aria-invalid={err('email') ? 'true' : undefined}
						aria-describedby={err('email') ? 'f-email-err' : undefined}
					/>
					{#if err('email')}<span class="abs-field__error" id="f-email-err">{err('email')}</span
						>{/if}
				</div>
				<div class="abs-field" data-invalid={err('itemRef') ? '' : undefined}>
					<label for="f-ref"
						>Item number <span class="abs-field__optional">(if you know it)</span></label
					>
					<input
						id="f-ref"
						name="item"
						class="abs-input"
						maxlength="120"
						value={val('item', item.ref)}
						aria-invalid={err('itemRef') ? 'true' : undefined}
						aria-describedby={err('itemRef') ? 'f-ref-err' : undefined}
					/>
					{#if err('itemRef')}<span class="abs-field__error" id="f-ref-err">{err('itemRef')}</span
						>{/if}
				</div>
				<div class="abs-field" data-invalid={err('message') ? '' : undefined}>
					<label for="f-msg">Your question</label>
					<textarea
						id="f-msg"
						name="message"
						class="abs-input"
						rows="5"
						maxlength="5000"
						aria-invalid={err('message') ? 'true' : undefined}
						aria-describedby={err('message') ? 'f-msg-err' : 'f-msg-hint'}
						>{val('message')}</textarea
					>
					{#if err('message')}<span class="abs-field__error" id="f-msg-err">{err('message')}</span>
					{:else}<span class="abs-field__hint" id="f-msg-hint"
							>Tell us which breed and size it’s for, if that matters for this one.</span
						>{/if}
				</div>
				<div class="abs-honeypot" aria-hidden="true">
					<label for="f-hp">Leave this field empty</label>
					<input id="f-hp" name="website" tabindex="-1" autocomplete="off" />
				</div>
			</fieldset>
			<div class="abs-submit-row">
				<button class="abs-card-button" type="submit">Send</button>
				<p class="abs-policy-line">
					What we keep, and for how long, is in our <a href="/correspondence-policy"
						>privacy policy</a
					>.
				</p>
			</div>
		</form>
	{/if}
</section>
