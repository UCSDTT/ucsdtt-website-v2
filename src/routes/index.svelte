<script>
	import Hero from '../components/Hero.svelte';
	import WeAre from '../components/WeAre.svelte';
	import { garnetUnfilled } from './shapes.js';

	const brotherLabels = ['brothers', 'entrepreneurs', 'leaders', 'pioneers',
					'philanthropists', 'best friends', 'family', 'world changers']
</script>

<style>
	.hero-div {
		width: 100%;
		height: 30em;
	}

	main {
		background-image: url(images/sigma_fun.jpg);
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