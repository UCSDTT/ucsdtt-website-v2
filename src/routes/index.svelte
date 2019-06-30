<script>
	import Hero from '../components/Hero.svelte';
	import WeAre from '../components/WeAre.svelte';
	import Pillars from '../components/Pillars.svelte';
	import Card from '../components/Card.svelte';
	import { garnetUnfilled } from '../scripts/shapes.js';

	const brotherLabels = ['brothers', 'entrepreneurs', 'leaders', 'pioneers',
					'philanthropists', 'friends', 'family', 'diverse',
					'adventurers', 'pro gamers', 'youtube stars', 'CEOs', 
					'project managers', 'artists', 'inclusive']
</script>

<style>
	.hero-div {
		/* width: 100%; */
		height: 32em;
		max-width: 50em;
	}

	div.pillars-div {
		position: relative;
		margin: 10em 2em 0 2em;
		background-color: #999;
		border: 1em black solid;
		max-width: 56em;
	}

	div.pillars-div h1 {
		text-align: center;
		padding: 30px;
		margin: 5px;
		color: white;
		border-bottom: 10px maroon dotted;
	}

	:global(body) {
		background: linear-gradient(white 40em, maroon 55em, white 150vh);
	}

	p {
		margin: 1em auto;
	}

	@media (max-width: 999px) {
		.hero-div {
			height: 20em;
		}

		.pillars-div {
			top: 10em;
		}

		:global(body) {
			background-color: white;
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

<Card>
	<h3 slot="header">UC San Diego's premier engineering fraternity.</h3>
	<p slot="left">Lorem ipsoumLorem ipsoumLorem ipsoum Lorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoum</p>
	<p slot="right">Lorem ipsoumLorem ipsoumLorem ipsoum Lorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoumLorem ipsoum
	Lorem ipsoumLorem ipsoum</p>
</Card>

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