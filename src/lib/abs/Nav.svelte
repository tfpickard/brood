<script lang="ts">
	import { page } from '$app/state';
	import { NAV } from '$content/site.ts';

	const current = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<nav class="abs-nav" aria-label="The Society">
	<ul>
		{#each NAV as item (item.href)}
			<li>
				<a href={item.href} aria-current={current(item.href) ? 'page' : undefined}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>
