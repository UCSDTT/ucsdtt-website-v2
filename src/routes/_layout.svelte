<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		overflow-y: scroll;
    	scroll-behavior: smooth;
		position: relative;
		padding: 6em 2em 2em 2em;
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

<Footer />