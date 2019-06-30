<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
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

	a:hover {
		color: maroon;
	}
	
</style>

<nav>
	<ul>
		<li><a id='letters' href='.'>Θ Τ</a></li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
		<li><a class='{segment === "rush" ? "selected" : ""}' href='rush'>Rush</a></li>
		<li><a class='{segment === "faq" ? "selected" : ""}' href='faq'>FAQ</a></li>
		<!-- for the members link, we're using rel=prefetch so that Sapper prefetches
		     the members data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "members" ? "selected" : ""}' href='members'>Members</a></li>
	</ul>
</nav>