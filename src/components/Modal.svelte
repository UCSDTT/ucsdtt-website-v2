<!-- Taken from svelte.dev/examples#modal -->
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 56em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	button {
        font-size: 2em;
		padding: 0 0.5em;
		background-color: transparent;
		border: none;
		color: maroon;
		opacity: 0;
		transition: opacity 0.2s;
    }
    
    section.header {
        display: flex;
        justify-content:  space-between;
        align-content: center;
    }

	section.header:hover button {
        opacity: 1;
        cursor: pointer;
	}
</style>

<div class='modal-background' on:click='{() => dispatch("close")}'></div>

<div class='modal'>
    <section class=header>
        <slot name='header'></slot>
        <button on:click='{() => dispatch("close")}'>X</button>
    </section>
	<hr>
	<slot></slot>
	<hr>

</div>
