<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import { toc } from '$lib/stores'
    // $: console.log('$page.data', $page.data);
    // export let toc = [
    //     { essayslug: "asdf", essaytitle: "qwer" },
    //     { essayslug: "asssdf", essaytitle: "qwsser" },
    // ];
</script>

<ul class="side bar">

    <a
        href="/{base}"
        class={$page.url.pathname == `/${base}`
            ? "active no-lines"
            : "no-lines"}
    >
        <li>Home</li>
    </a>
    {#each toc as c}
        <a
            href="/{c.essayslug}"
            class={$page.url.pathname !== "/" &&
            $page.url.pathname.indexOf(c.essayslug) > -1
                ? "active no-lines"
                : "no-lines"}
        >
            <li>{c.essaytitle}</li>
        </a>
    {/each}
    <a
        href="https://archive.org/details/newberry?query=%22mapping+movement%22&sort=date"
        class="no-lines"
        target="_blank"
    >
        <li>Browse all maps at our digital collections</li>
    </a>
</ul>

<style>
    .bar {
        list-style-type: none;
        overflow: auto;
        padding: 0 0 32px 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .side {
        position: sticky;
        top: 65px;
        height: calc(100vh - 65px);
    }

    .bar a {
        width: calc(100% - 18px);
        margin: 4px;
        padding: 4px;
        border: 1px solid transparent;
        color: var(--brand);
    }
    .bar a:hover,
    .active {
        border-color: var(--brand) !important;
        /* border: 1px solid var(--brand); */
    }
</style>
