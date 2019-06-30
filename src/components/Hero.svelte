<!-- Taken from https://github.com/sveltejs/site-kit/blob/master/components/ParallaxLogo.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	export let svg;
	export let titleBig;
	export let titleSmall;

	let sy = 0;
	let iw = 0;

	$: dispSmall = iw <= 1000;

	onMount(()=> {
		visible = true;
	})
</script>

<svelte:window bind:scrollY={sy} bind:innerWidth={iw}/>

<style>
	.parallax {
		position: absolute;
		top: 4em;
		width: 50em;
		height: 30em;
		left: 50%;
		margin-left: -25em;
		will-change: transform;
		display: none;
		z-index: -1;
	}

	@media (min-width: 1000px) {
		.parallax {
			display: block;
		}
	}
	@media (max-width: 999px) {
		/* h1.text-display {
			top: 1em;
			font-size: 3em;
		} */
	}

	h1.text-display {
		/* position: relative; */
		text-align: center;
		margin-top: 2em;
		padding: 3em 5em 0 5em;
		/* top: 1.9em;
		left: 3.5em;
		right: 3.5em;
		min-width: 10em; */
		color: white;
		text-shadow: 0 0 10px black;
		font-size: 5em;
		padding: 0.1em;
		background-color: rgba(128, 0, 0, 0.7);
		filter: drop-shadow(0 0 0.3em yellow);
		z-index: 1;
	}


</style>

{#if visible}
	<h1 
		class="text-display lg-view" 
		in:fade
	>
		{dispSmall ? titleSmall : titleBig}
	</h1>
{/if}
{#if visible}
	<svg 
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width="64px"
		height="64px"
		class="parallax"
		style="transform: translate(0, {sy * .4}px)"
	>
		<path
			d={svg}
			opacity="0.6" 
			in:fly="{{y: -5, delay: 250}}"
		/>
	</svg>
{/if}

	<!-- <img {alt} {src} class="parallax" style="transform: translate(0, {sy * .4}px)"> -->