<script lang="ts">
	import Head from '$lib/abs/Head.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
	import { shortDate } from '$lib/format.ts';

	let { data } = $props();
	const r = $derived(data.inquiry);
	const notified = $derived(
		r.notifyResult === 'sent' ? 'Notified by electronic mail' : r.notifyResult === 'failed' ? 'Notification failed' : 'Not notified'
	);
</script>

<Head title="A Letter in the Ledger" description="For officers of the Society." />

<SectionHeading numeral="The Correspondence Ledger" title="A Letter in the Ledger" level={1} />

<article class="abs-entry">
	<dl class="abs-ledger">
		<dt>Received</dt>
		<dd>{shortDate(new Date(r.receivedAt))}</dd>
		<dt>From</dt>
		<dd>{r.name}</dd>
		<dt>Correspondence address</dt>
		<dd>{r.email}</dd>
		<dt>Provisioner’s reference</dt>
		<dd>{r.itemRef ?? 'None given'}</dd>
		<dt>Standing</dt>
		<dd><span class="abs-mark">{data.labels[r.status]}</span></dd>
		<dt>Notification</dt>
		<dd>{notified}</dd>
	</dl>
	<div class="abs-prose" style="white-space:pre-wrap">
		<p>{r.message}</p>
	</div>
</article>

<div class="abs-measure actions">
	<form method="POST" action="?/status">
		<input type="hidden" name="status" value="answered" />
		<button class="abs-card-button" type="submit">Mark answered</button>
	</form>
	<form method="POST" action="?/status">
		<input type="hidden" name="status" value="set_aside" />
		<button class="abs-card-button" type="submit">Set aside as unsolicited</button>
	</form>
	<form method="POST" action="?/status">
		<input type="hidden" name="status" value="new" />
		<button class="abs-card-button" type="submit">Return to unanswered</button>
	</form>
	<form method="POST" action="?/remove">
		<button class="abs-card-button" type="submit">Remove from the ledger</button>
	</form>
</div>
<p class="abs-measure" style="text-align:center"><a class="abs-link" href="/secretariat/correspondence">Return to the ledger</a></p>

<style>
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		justify-content: center;
		margin-block: var(--space-7);
	}
</style>
