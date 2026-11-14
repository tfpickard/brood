<script lang="ts">
	import media from 'virtual:media';

	let {
		id,
		number,
		caption,
		credit,
		slideLabel,
		eager = false
	}: {
		id: string;
		number: string;
		caption: string;
		credit?: string;
		slideLabel?: string;
		eager?: boolean;
	} = $props();

	const asset = $derived(media[id]);
	const era = $derived(asset?.era ?? 'present');
</script>

{#if asset}
	<figure class="abs-plate abs-plate--{asset.src ? era : 'pending'}" style:--plate-ratio={asset.ratio}>
		<div class="abs-plate__mount">
			{#if asset.src}
				<div class="abs-plate__image">
					<img
						src={asset.src}
						alt={asset.alt}
						width={asset.width}
						height={asset.height}
						loading={eager ? 'eager' : 'lazy'}
						fetchpriority={eager ? 'high' : 'auto'}
						decoding="async"
					/>
				</div>
				{#if slideLabel && era === '1950s'}<span class="abs-plate__slide-label">{slideLabel}</span>{/if}
			{:else}
				<div class="abs-plate__image" role="img" aria-label={asset.alt}>
					<span class="abs-plate__pending-text">{asset.alt}</span>
				</div>
			{/if}
		</div>
		<figcaption>
			<span class="abs-plate__no">{number}</span>
			<span class="abs-plate__caption">{caption}</span>
			{#if credit}<span class="abs-plate__credit">{credit}</span>{/if}
		</figcaption>
	</figure>
{/if}
