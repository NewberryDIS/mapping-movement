<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import Newberry from "$comps/newberry.svelte";
    import { y, x, maxX, scrollPoint } from "$lib/stores";
    $: $scrollPoint = $maxX * 0.6;
    $: sc = $y < $scrollPoint ? "lg" : "sm";
    // $: console.log('base', `"${base}/"`);
    // $: console.log('x', $x);
    // $: console.log('y', $y);
</script>

<svelte:window
    bind:scrollY={$y}
    bind:innerWidth={$x}
    bind:innerHeight={$maxX}
/>
<header class="wedgie {$y > 45 ? 'shadow' : ''}">
    <div class="logo">
        <a href="https://www.newberry.org" target="_blank" class="linklogo" aria-label="Link to Newberry Library's home page">
            <Newberry />
        </a>
    </div>
    {#if $page.url.pathname !== `${base}/`}
        <h2 class="backup-title linklogo {sc}">
            <a href="{base}/" class="no-lines">Mapping Movement</a>
        </h2>
    {/if}
</header>

<!-- {$page.params.miniessay
	? $page.data.mini.minititle
	: $page.params.essay
	? $page.data.essay.essaytitle
	: 'Mapping Movement'} -->

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 64px;
        padding-right: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: 100ms;
    }

    .backup-title {
        width: 300px;
        height: 65px;

        padding-left: 20px;
        justify-content: center;
        align-items: center;
    }
    .backup-title.lg {
        display: flex;
    }
    .backup-title a {
        margin: 0;
    }
    .shadow {
        box-shadow: var(--shadow-3);
    }

    @media (max-width: 999px) {
        .sm.backup-title {
            display: none;
        }
    }
    @media (min-width: 1000px) {
        .sm.backup-title {
            display: flex;
        }
    }
</style>
