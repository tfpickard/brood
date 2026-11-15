<script lang="ts">
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Notice from '$lib/abs/Notice.svelte';

	let { data } = $props();
</script>

<Head title={data.notice.title} description="{data.notice.kindLabel}. {data.notice.dateLine}." />

<Breadcrumb
	trail={[
		{ href: '/governance', label: 'Club Business' },
		{ href: '/governance/notices', label: 'Notices' },
		{ label: data.notice.title }
	]}
/>

<h1 class="abs-visually-hidden">{data.notice.title}</h1>
<div class="abs-measure">
	<Notice notice={data.notice} />
</div>
