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
		width: 50em;
		height: 30em;
		left: 10em;
		will-change: transform;
		display: none;
	}

	@media (min-width: 800px) {
		.parallax {
			display: block;
		}
	}
	@media (max-width: 799px) {
		h1.text-display {
			top: 1em;
			font-size: 4em;
		}
	}

	h1.text-display {
		position: absolute;
		text-align: center;
		top: 1.9em;
		left: 0.1em;
		right: 0.1em;
		color: white;
		text-shadow: 0 0 10px black;
		font-size: 6em;
		padding: 0.1em;
		background-color: rgba(128, 0, 0, 0.7);
		z-index: 1;
	}


</style>

{#if visible}
	<h1 
		class="text-display lg-view" 
		transition:fade>{dispSmall ? titleSmall : titleBig}
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