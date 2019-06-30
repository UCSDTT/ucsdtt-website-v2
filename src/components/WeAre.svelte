<script>
    import {fade} from 'svelte/transition';
    import {onMount} from 'svelte';

    export let brotherLabels;

    let visible = false;
    let weAreVisible = false;
    let wordIndex = 0;

    onMount(() => {
        weAreVisible = true;
        setInterval(() => {
            visible = true;
            setTimeout(() => {
                visible = false;
                wordIndex = (wordIndex + 1) % brotherLabels.length;
            }, 1000);
        }, 1500)
    });


    function typewriter(node, { speed = 50 }) {
		if (wordIndex < 0 || wordIndex >= brotherLabels.length) {
			throw new Error(`wordIndex out of bounds.`);
		}
            
		const text = brotherLabels[wordIndex];
        const duration = text.length * speed;

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
        };
	}
</script>

<style>
    @media (min-width: 1000px) {
        h1 {
            font-size: 4em;
        }
    }
    @media (max-width: 999px) {
        h1 {
            /* text-align: center; */
            font-size: 2em;
        }
    }
</style>

<section>
    <h1>
        {#if weAreVisible}
            <span class="formal" in:fade>We are </span>
        {/if}
        {#if visible}
            <span class="formal"
                in:typewriter
                out:fade="{{duration: 280}}"
            >
                {brotherLabels[wordIndex]}
            </span>
        {/if}
    </h1>
</section>
