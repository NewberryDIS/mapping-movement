<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    $: ({ minis } = $page.data);
</script>

{#if minis.length > 0}
    <details open>
        <summary> Essay Gallery </summary>
        <ul class="selgal">
            {#each minis as g, idx}
                {#if g.manifest && g.imageiiifid}
                    <a
                        id="{g.essayno}-{g.minino}"
                        href="{base}/{g.essayslug}/{g.minislug}#top"
                        class="no-lines"
                        style="background-image: url('{base}/600/{g.imageiiifid}_600w.webp');"
                    >
                        <li>
                            <span>
                                {g.minititle}
                            </span>
                        </li>
                    </a>
                {:else}
                    <div
                        style="background-image: url('jordan-peele-nope.jpg');"
                    >
                        <li>
                            <span>
                                {g.minititle}
                            </span>
                        </li>
                    </div>
                {/if}
            {/each}
        </ul>
    </details>
{/if}

<style>
    .selgal {
        margin-block: 16px 64px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--size-2);
        list-style-type: none;
    }
    .selgal a,
    .selgal div {
        border-radius: var(--radius-2);
        background-position: center;
        width: 200px;
        height: 200px;
        overflow: hidden;
        box-shadow: var(--shadow-4);
    }
    .selgal div {
        background-size: contain;
        cursor: not-allowed;
    }
    .selgal a:hover {
        box-shadow: var(--shadow-6);
    }
    .selgal a,
    .selgal li {
        transition: 200ms;
        padding: 0;
        margin: 0;
    }
    .selgal li {
        background: rgba(255, 255, 255, 0.8);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
    }
    span {
        padding: 8px;
        font-size: var(--size-3);
        text-align: center;
    }
</style>
