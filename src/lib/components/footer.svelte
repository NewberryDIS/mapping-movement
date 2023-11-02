<script>
	import { page } from '$app/stores';
	import Image from './image.svelte';
	// console.log("wheres my footer")
</script>

<footer>
	<div class="flex-wrapper">
		<div class="left">
			<a href="https://www.newberry.org/" target="_blank">The Newberry</a>
			<a href="https://www.newberry.org/contact-librarian" class="left-border" target="_blank">
				Contact Us
			</a>
		</div>
		<div class="right">
			Except where otherwise noted, contextual content on this site is made available under a
			<a
				href="https://creativecommons.org/share-your-work/public-domain/cc0/"
				target="_blank"
				class="llines"
			>
				Creative Commons Public Domain license
			</a>. Digitized images and other media from the Newberry's collections are made available for
			any lawful purpose, commercial or non-commercial, without licensing or permission fees to the
			library, subject to the following terms and conditions:
			<a href="https://www.newberry.org/policies#open-access" target="_blank" class="llines">
				Newberry Open Access Policy
			</a>.
		</div>
	</div>
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		min-height: 50px;
		background-color: var(--granite);
	}
	.flex-wrapper { 
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: auto;
	}
	.left-border {
		border-left: 1px solid rgba(var(--midnight-rgb), 0.77);
		padding-left: 8px;
	}
	.left,
	.right {
		margin-block: 4px;
	}
	.left {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right {
		flex: 3;
		padding-left: 11px;
	}

	footer,
	footer a {
		line-height: 13px;
		font-family: 'styrene';
		padding-block: 0;
		font-size: 11px;
		color: rgba(var(--midnight-rgb), 0.77);
		text-decoration: none;
		transition: 100ms;
		/* display: block; */
	}
	a:visited {
		color: rgba(var(--sapphire-rgb), 0.87);
	}
	a:hover,
	a:active {
		color: rgba(var(--mulberry-rgb), 0.87);
	}
</style>
