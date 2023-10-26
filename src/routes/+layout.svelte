<script>
	import 'open-props/style';
	import 'open-props/normalize';
	import '$lib/main.css';
	import { page } from '$app/stores';
	import Image from '$comps/image.svelte';
	import Header from '$comps/header.svelte';
	import Sidebar from '$comps/sidebar.svelte';
	import Footer from '$comps/footer.svelte';
	import Title from '$comps/title.svelte';
	import { showSidebar, x, y, maxX, scrollPoint } from '$lib/stores';
	import Icon from '@iconify/svelte';
	$: visible = $x > 1000 || $showSidebar;
	$: essay = $page.data.essay || { meta: { essaytitle: 'Mapping Movement' } };
	$: mini = $page.data.mini || false;
	$: title = {
		title: mini ? mini.meta.minititle : essay.meta.essaytitle,
		line2:
			essay.meta.essaysubtitle && essay.meta.essaysubtitle !== 'null'
				? essay.meta.essaysubtitle
				: null,
		line3: mini ? mini.meta.essaytitle : essay.meta.author || null
	};
	// $: console.log('$page.data', $page.data);
	// $: console.log('title.title', title.title);
</script>

<svelte:head>
	<title>
		{title.title || 'Mapping Movement'}
	</title>
</svelte:head>

<div id="top" />

<Header />

<main class:visible>
	<nav>
		<Sidebar/>
	</nav>
	<article class="core">
		<Image home={$page.url.pathname === '/'} />
		<Title {title} />
		<div class="prose">
			<slot />
		</div>
	</article>
</main>

<button class="sidebar-button" on:click={() => (visible = !visible)}>
	<Icon icon="gg:menu-round" width={32} />
</button>

<Footer />

<style>
	main {
		margin-top: 64px;
		padding-bottom: 50px;
		display: grid;
		gap: 10px;
		grid-template-columns: 242px 1fr;
		/* height: calc(100vh - 64px); */
		width: calc(100vw + 250px);
		left: -250px;
		position: relative;
		transition: all 200ms;
	}
	.visible {
		width: 100vw;
		left: 0;
	}
	nav {
		height: 100%;
	}
	.sidebar-button {
		left: 2px;
		bottom: 2px;
		z-index: var(--layer-5);
		position: fixed;
		background: none;
		padding: 4px;
		margin: 4px;
	}
	@media (max-width: 1000px) {
		.sidebar-button {
			display: block;
		}
	}
	@media (min-width: 1001px) {
		.sidebar-button {
			display: none;
		}
	}
	.core {
		padding-inline: 50px;
	}
	article {
		margin-top: 8px;
		padding-bottom: 32px;
	}
</style>
