<script>
    import { page } from '$app/stores'
    export let hero = false, index = 0, id
    import Icon from '@iconify/svelte' 
    const { minis } = $page.data
    const useit = minis[69]
    console.log(useit)
    const bgurl = `/1200/${useit.imageiiifid}_1200w.jpg`
    // const bgurl = `https://iiif.archivelab.org/iiif/${useit.iaid}$0000/full/,600/0/default.jpg`
    const iiifurl ="https://iiif.archivelab.org/iiif/" + useit.iaid
    const dcurl ="https://iiif.archivelab.org/iiif/" + useit.iaid
    // https://iiif.archivelab.org/iiif/x991462688805867$0/full/600,/0/default.jpg
    // https://iiif.archivelab.org/iiif/x998713388805867$0/full/600,/0/default.jpg
    let tooltipVisible = false;

    function toggleTooltip() {
        tooltipVisible = !tooltipVisible;
    }
</script>
{id}
<figure>
    <div class="spacer" style="background-image: url('{bgurl}');" >
        {#if tooltipVisible}
            <div
                class="tooltip q"
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

        <a href="#blap" class="info-icon tooltip no-lines">
            <Icon icon="emojione-monotone:down-arrow" color="fuchsia" width="32" />
            <p class="tooltip">
                Jump to Essay Gallery
            </p>
        </a>

    </div>

    <figcaption class="outer-container">
        <div class="inner-container">View <em>"</em></div>
        <div class="inner-container center-container"><em>{useit.imagetitle}</em></div>
        <div class="inner-container"><em>"</em> in a <a href={iiifurl} class="llines bold">IIIF Vewer</a> or in our <a href={dcurl} class="llines bold">Digital Collections</a></div>
    </figcaption>
</figure>
<style>
    figure {
        height: 60vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: stretch;
    }
    .spacer {
        flex: 1;
        border: 1px solid var(--brand);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: relative;
    }
    .bold { 
        font-weight: bold;
    }
    .outer-container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        white-space: nowrap; 
        overflow: hidden; 
        font-size: 0.85rem;
    }

    .inner-container {
        flex: 0 1 auto; 
        white-space: nowrap;
    }

    .center-container {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    button.info-icon {
        left: 11px;
    }
    a.info-icon {
        right: 11px;
    }
    button.info-icon, .info-icon > * {

        position: absolute;
        bottom: 11px;
    }
    .info-icon {
        display: block;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px;
    }
    .tooltip, .tooltip * {
        width: auto;
        line-height: var(--font-lineheight-3);
    }    
    .tooltip.q {
        left: 10px;
        padding: 8px 8px 4px 44px;
    }
    a.tooltip {
        right: 10px;
        padding: 8px 44px 4px 8px;
    }
    a.info-icon {
        background: none;
        border: none;
    }
    .tooltip {
        position: absolute;
        bottom: 10px;
        border: 1px solid var(--brand);
        background: var(--surface-1);
        line-height: var(--font-lineheight-3);
        /* padding: 8px; */
    }
    .tooltip p {
        margin: 4px;
    }
</style>
