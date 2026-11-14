<script lang="ts">
	import { NOTICES } from '$content/notices.ts';
	import Breadcrumb from '$lib/abs/Breadcrumb.svelte';
	import Head from '$lib/abs/Head.svelte';
	import Notice from '$lib/abs/Notice.svelte';
	import SectionHeading from '$lib/abs/SectionHeading.svelte';
</script>

<Head
	title="Notices of the Council"
	description="Notices entered by the Council of the American Brood Society, newest first."
/>

<Breadcrumb trail={[{ href: '/governance', label: 'Governance' }, { label: 'Notices of the Council' }]} />

<SectionHeading numeral="As entered" title="Notices of the Council" level={1} />

<div class="abs-measure">
	{#each NOTICES as notice (notice.slug)}
		<Notice {notice} />
		<p class="abs-sc" style="text-align:center;margin-top:calc(-1 * var(--space-5))">
			<a class="abs-link" href="/governance/notices/{notice.slug}">The notice as entered</a>
		</p>
	{/each}
</div>
