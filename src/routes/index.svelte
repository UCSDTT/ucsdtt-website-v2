<script>
	import Hero from '../components/Hero.svelte';
	import WeAre from '../components/WeAre.svelte';
	import Pillars from '../components/Pillars.svelte';
	import { garnetUnfilled } from '../scripts/shapes.js';

	const brotherLabels = ['brothers', 'entrepreneurs', 'leaders', 'pioneers',
					'philanthropists', 'best friends', 'family', 'world changers',
					'adventurers',]
</script>

<style>
	.hero-div {
		/* width: 100%; */
		height: 30em;
		max-width: 56em;
	}

	.pillars-div {
		position: absolute;
		top: 65em;
		background-color: maroon;
	}

	.pillars-div h1 {
		color: white;
		text-align: center;
	}

	:global(body) {
		background: linear-gradient(white 40em, maroon 55em);
	}

	p {
		margin: 1em auto;
	}

	@media (max-width: 999px) {
		.hero-div {
			height: 20em;
		}
	}
</style>

<svelte:head>
	<title>UCSD Theta Tau</title>
</svelte:head>

<div class="hero-div">
	<Hero 
		titleBig='UCSD Theta Tau' 
		titleSmall='UCSD ΘΤ' 
		tagline='Epsilon Delta' 
		svg={garnetUnfilled}
		alt='a hero'
	/>
</div>
<WeAre {brotherLabels}/>

<div class="pillars-div">
	<h1>the Three Pillars</h1>
	<Pillars />
</div>
<!-- <h1>Great success!</h1> -->

<!-- <img alt='fun' src='images/sigma_fun.jpg'> -->

<!-- Leave this here until we can make our own icon that is just an outline -->
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<p>Icons from <a href="https://icons8.com/icons">icons8</a></p>