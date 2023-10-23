<script>
	import { page } from '$app/stores';
	export let title;
	import { y, scrollPoint } from '$lib/stores';
	$: sm = $y > $scrollPoint && 'sm';
	$: lg = $y < 200 && 'lg';
	// $: lg = false;
	$: sc = sm || lg || '';
	// $: console.log('$page.params.mini', !!$page.params.mini);
	$: mini = !!$page.params.mini;
</script>

<h1 class="{sc} titlebar {title.title === 'Mapping Movement' ? 'home' : 'title'}">
	{title.title}
</h1>
{#if title.line2}
	<h3 class="titlebar sub">{title.line2}</h3>
{/if}
{#if title.line3}
	<h3 class="{sc} {$y > 300 && title.line2 ? 'wedgie' : 'nobg'} titlebar sub">
		<em
			>{#if mini}from:{:else}by:{/if}
		</em>{title.line3}
	</h3>
{/if}

<style>
	.titlebar {
		transition: font-size 200ms;
		transform-origin: top left;
		margin-block: 16px;
	}
	h1 {
		font-size: 30px;
	}

	h3 {
		font-size: 20px;
	}
	.title,
	.home {
		padding-block: 4px;
		position: sticky;
		top: 0;
	}
	.sub {
		font-size: 20px;
		position: sticky;
		top: 36px;
	}
	.nobg.lg {
		text-align: center;
	}
	.titlebar.sm {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.home.sm {
		height: 65px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	em {
		font-weight: 400;
		margin-right: 8px;
	}
	.shadow-text {
		color: rgba(0, 0, 0, 0);
		font-size: 40px;
		padding: 10px;
	}
	.lg.shadow-text {
		scale: 2;
	}
	.sm.shadow-text {
		scale: 0.5;
	}

	@media only screen and (min-width: 600px) {
		.titlebar {
			max-inline-size: none;
		}
		.titlebar.sm {
			max-inline-size: calc(100vw - 100px);
		}
		h1.lg {
			font-size: 80px;
		}
		h1.sm {
			font-size: 30px;
		}
		h3.lg {
			font-size: 40px;
		}
		h3.sm {
			font-size: 20px;
		}
	}
	@media (min-width: 1000px) {
		.titlebar.sm {
			max-inline-size: calc(100vw - 600px);
		}
	}
</style>
