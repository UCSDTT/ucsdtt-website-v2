<!-- A navbar that shows up on every screen. -->

<script>
	import { fly } from 'svelte/transition';

	export let segment;

	let visible = true;

	let lastScroll = 0;
	function handleScroll() {
		const scroll = window.pageYOffset;
    console.log(scroll)
    visible = scroll < lastScroll
    lastScroll = scroll;
	}
</script>

<svelte:window on:scroll={handleScroll}/>

<style>
	nav {
		border-bottom: 2px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		position: fixed;
    width: 100%;
		top: 0px;
		background-color: rgba(255, 255, 255, 0.4);
    z-index: 2;;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}
	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: maroon;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a#letters {
		font-family: 'Times New Roman', Times, serif;
		font-size: 2em;
		padding: 0.1em 0.7em 0.1em 0.5em;
		color: maroon;
	}

	@media (min-width: 1000px) {
		a {
			font-size: 1.5em;
		}

		a#letters {
			font-size: 3em;
		}
	}

	a:hover {
		color: maroon;
	}
	
</style>

{#if visible}
	<nav transition:fly="{{y: -50, duration: 500}}">
		<ul>
			<li><a id='letters' href='.'>Θ Τ</a></li>
			<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
			<li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
			<li><a class='{segment === "rush" ? "selected" : ""}' href='rush'>Rush</a></li>
			<li><a class='{segment === "faq" ? "selected" : ""}' href='faq'>FAQ</a></li>
			<li><a class='{segment === "members" ? "selected" : ""}' href='members'>Members</a></li>
		</ul>
	</nav>
{/if}