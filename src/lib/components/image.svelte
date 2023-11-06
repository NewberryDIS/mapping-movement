<script>
    import { base } from '$app/paths'
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    export let home = false,
    index = 0;

    const homePageImages = [
        ['2KXJ8ZSFRJRJR', 'United States of America', '2KXJ8ZSQ38UEJ', '2KXJ8ZWQ2ML7', 'x997119818805867'],
        [
            '2KXJ8ZSFE74FY',
            'Nationalities map no. 1-4, Polk St. to Twelfth,...Chicago',
            '2KXJ8ZSQ388AA',
            '2KXJ8ZWQNUL5',
            "nby_92356"
        ]
    ];
    // $: console.log('page.data.minis', $page.data.minis);
    $: mini = $page.data.mini || false;
    $: image = mini
        ? [mini.meta.imageiiifid, mini.meta.imagetitle, mini.meta.manifest, mini.meta.imagelink, mini.meta.iaid]
        : $page.data.minis
            ? $page.data.minis.map((i) => [i.imageiiifid, i.imagetitle, i.manifest, i.imagelink, i.iaid])[index]
            : homePageImages[index];

    // $: href = `https://digital.newberry.org/mirador?manifest=https://collections.newberry.org/IIIF3/Presentation/Manifest/${image[2]}`;
    // $: href = `https://digital.newberry.org/mirador?manifest=https://collections.newberry.org/IIIF3/Presentation/Manifest/${image[2]}`;

    $: iiifurl ="https://digital.newberry.org/mirador?manifest=https://collections.newberry.org/IIIF3/Presentation/Manifest/" + image[2]
    // $: iiifurl ="https://iiif.archivelab.org/iiif/" + image[4]
    $: dcurl ="https://archive.org/details/" + image[4]
    // $: dcurl ="https://collections.newberry.org/asset-management/" + image[2]
    let tooltipVisible = false;

    function toggleTooltip() {
        tooltipVisible = !tooltipVisible;
    }
</script>

<div>

    <!-- style="background-image: image-set(url('/600/{ image[0] }_600w.jpg') 600w, url('/1200/{ image[0] }_1200w.jpg') 1200w, url('/2000/{ image[0] }_2000w.jpg') 2000w);" -->
    <div class="image-container no-lines">
        <div
            class="space"
            style="background-image:  url('/2000/{image[0]}_2000w.webp');"
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
            <button class="info-icon" aria-label="Jump to gallery" on:click={() => (tooltipVisible = !tooltipVisible)}>
                <Icon icon="zondicons:question" width="32" color="var(--brand)" />
            </button>
            {#if !home}
                <a href="#gallery-anchor" class="jump-tt no-lines" >
                    <div class="jump-tt-text">Jump to essay gallery</div>
                    <Icon icon="emojione-monotone:down-arrow" width="32" color="var(--brand)" />
                </a>
            {/if}
        </div>
        <figcaption class="outer-container">
            <div class="inner-container">View <em>"</em></div>
            <div class="inner-container center-container"><em>{image[1]}</em></div>
            <div class="inner-container"><em>"</em> in a <a href={iiifurl} target="_blank" class="llines bold">IIIF Viewer</a> or in our <a href={dcurl} target="_blank" class="llines bold">Digital Collections</a></div>
        </figcaption>
    </div>
</div>

<style>
    .jump-tt {
        position: absolute;
        bottom: 11px;
        right: 11px;
        border: 1px solid transparent;
        padding: 4px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: 250ms;
        text-decoration: none;

    }
    .jump-tt-text {
        font-family: 'styrene';
        color: var(--brand);
        height: 100%;
        opacity: 0;
        transition: 250ms;
        padding-inline: 8px;
    }
    .jump-tt:hover {

        border: 1px solid var(--brand);
        background: var(--surface-1);
    }
    .jump-tt:hover .jump-tt-text {
        opacity: 1;
    }
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
</style>
