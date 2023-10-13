<script>
    import { page } from "$app/stores";
    import SelGal from "$comps/selgal.svelte";
    // $: console.log('$page.data', $page.data);
    $: ({ mini } = $page.data);
</script>

<svelte:head>
    <title>{mini.meta.miniessaytitle}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={mini.meta.miniessaytitle} />
</svelte:head>

<svelte:component this={mini.content} />

<div id="gallery-anchor">
    <SelGal />
</div>
