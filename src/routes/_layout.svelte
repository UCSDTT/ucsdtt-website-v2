<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>