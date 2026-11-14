<script lang="ts">
	import { COLOPHON, FOOTER_ENDOWMENT, FOOTER_NAV } from '$content/site.ts';
</script>

<footer class="abs-footer">
	<ul>
		{#each FOOTER_NAV as item (item.href)}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
	</ul>
	<p class="abs-colophon">{FOOTER_ENDOWMENT}</p>
	<p class="abs-colophon">{COLOPHON}</p>
	<p class="abs-footer__fine">&copy; The American Brood Society. All rights reserved. Issued MMXXVI.</p>
	<p class="abs-footer__fine">
		<a href="/statement-on-the-so-called-cicadoodle">Statement on the So-Called Cicadoodle</a>
	</p>
</footer>
