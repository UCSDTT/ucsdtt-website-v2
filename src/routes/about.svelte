<script>
	import SvgDraw from '../components/SvgDraw.svelte';
	import {paths} from '../scripts/pillar.js';

	const height="132.608px"
	const width = "132.608px"
	const viewBox = "0 0 132.608px 132.608px"
</script>

<style>
	.pillars {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.pillar {
		display: flex;
		flex-direction: column;
		max-width: 15em;
		border: 2px gold solid;
		margin: 1em;
		text-align: center;
	}

	.pillar img {
		width: 12em;
	}

	@media (max-width: 1000px) {
		.pillars {
			flex-direction: column;
		}
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About</h1>

<h3>Theta Tau bases its moral tenets in three pillars:</h3>

<div class="pillars">
	<div class="pillar">
		<img src="icons/pillar.png" alt="pillar">
		<h4>Brotherhood</h4>
	</div>
	<div class="pillar">
		<img src="icons/pillar.png" alt="pillar">
		<h4>Philanthropy</h4>
	</div>
	<div class="pillar">
		<img src="icons/pillar.png" alt="pillar">
		<h4>Professionalism</h4>
	</div>
</div>
