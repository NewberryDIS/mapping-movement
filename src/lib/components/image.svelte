<script>
    import { base } from '$app/paths'
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	export let hero = false,
		index = 0;

	const homePageImages = [
		['2KXJ8ZSFRJRJR', 'United States of America', '2KXJ8ZSQ38UEJ', '2KXJ8ZWQ2ML7'],
		[
			'2KXJ8ZSFE74FY',
			'Nationalities map no. 1-4, Polk St. to Twelfth,...Chicago',
			'2KXJ8ZSQ388AA',
			'2KXJ8ZWQNUL5'
		]
	];
	// $: console.log('page.data.minis', $page.data.minis);
	$: mini = $page.data.mini || false;
	$: image = mini
		? [mini.meta.imageiiifid, mini.meta.imagetitle, mini.meta.manifest, mini.meta.imagelink]
		: $page.data.minis
		? $page.data.minis.map((i) => [i.imageiiifid, i.imagetitle, i.manifest, i.imagelink])[index]
		: homePageImages[index];

	// $: href = `https://digital.newberry.org/mirador?manifest=https://collections.newberry.org/IIIF3/Presentation/Manifest/${image[2]}`;
	$: href = `https://digital.newberry.org/mirador?manifest=https://collections.newberry.org/IIIF3/Presentation/Manifest/${image[2]}`;

	let tooltipVisible = false;

	function toggleTooltip() {
		tooltipVisible = !tooltipVisible;
	}
</script>

<div>
	<div class="image-container no-lines">
		<div
			class="space"
            style="background-image:  url('{base}/local-images/{image[0]}.jpg');"
		>
			{#if tooltipVisible}
				<div
					class="tooltip"
					on:click={() => (tooltipVisible = !tooltipVisible)}
					on:keydown={() => (tooltipVisible = !tooltipVisible)}
				>
					<p>
						<b>Newberry Digital Collections:</b> view descriptive information, <br />download high
						resolution images, browse related items
					</p>
					<p>
						<b>IIIF Map Viewer:</b> zoom, compare, and annotate images
					</p>
				</div>
			{/if}
			<button class="info-icon" on:click={() => (tooltipVisible = !tooltipVisible)}>
				<Icon icon="zondicons:question" width="32" color="var(--brand)" />
			</button>
		</div>
		<div class="caption-box">
			<div class="caption-title">
				<span>
					View <i class={hero && $page.data.essay ? 'hero-title' : ''}>{image[1]}</i>
					<a {href} target="_blank" class="llines"><b>in a IIIF Viewer</b></a>or at
					<a
						href="https://collections.newberry.org/asset-management/{image[3]}"
						target="_blank"
						class="llines"><b>Newberry Digital Collections</b></a
					>
				</span>
			</div>
			{#if hero && $page.data.essay}
				<div class="jump-link">
					<a href="#gallery-anchor">Jump to Essay Gallery</a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.info-icon {
		display: block;
		position: absolute;
		bottom: 11px;
		left: 11px;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 4px;
	}
	.tooltip {
		position: absolute;
		left: 10px;
		bottom: 10px;
		border: 1px solid var(--brand);
		background: var(--surface-1);
		padding: 8px 8px 4px 44px;
		/* padding: 8px; */
	}
	.tooltip p {
		margin: 4px;
	}
	.caption-box {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height: 30px;
		width: 100%;
	}
	.caption-title,
	.jump-link {
		line-height: 0.9rem;
		font-size: 0.85rem;
	}
	.caption-title {
		max-width: calc(100% - 140px);
	}
	.caption-title i {
		display: inline-block;
		vertical-align: bottom;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.caption-title span {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.caption-title:has(.hero-title) i {
		/* max-width: calc(90% - 140px); */
	}
	.caption-title:not(:has(.hero-title)) i {
		max-width: calc(90% - 140px);
		/* max-width: 95%; */
	}
	.hero-title {
		max-width: calc(100% - 400px);
	}
	.caption-title b {
		font-weight: bold;
		font-family: 'signifier-bold';
	}

	.jump-link {
		min-width: 150px;
		text-align: right;
	}
	div,
	a {
		position: relative;
	}
	.space {
		position: relative;
		border: 1px solid var(--brand);
		flex: 1;
		width: 100%;
		display: block;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
	.image-container {
		/* border: 1px solid var(--brand); */
		transform: none;
		height: 60vh;
		object-fit: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		padding: 0;
		position: relative;
	}
</style>
