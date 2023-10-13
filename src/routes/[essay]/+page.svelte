<script>
	import { page } from '$app/stores';
	import SelGal from '$comps/selgal.svelte';
	// $: console.log('$page.data', $page.data);
	$: ({ essay } = $page.data);
</script>

<svelte:head>
	<title>{essay.meta.essaytitle}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={essay.meta.essaytitle} />
</svelte:head>

<svelte:component this={essay.content} />

<div id="gallery-anchor">
	<SelGal />
</div>
