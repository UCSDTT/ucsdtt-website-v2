<!-- Draws an SVG with the given parameters. Path refers to the <path> element in
svgs. -->

<script>
    import {fade} from 'svelte/transition';
    import {onMount} from 'svelte';

    export let paths;
    export let viewBox;
    export let width;
    export let height;

    let visible = false;

    onMount(() => visible = true)
</script>

{#if visible}
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="width" height="{height}" viewBox="{viewBox}" style="{'enable-background:new ' + viewBox};"
        xml:space="preserve">
        <g>
            <g>
                {#each paths as svg}
                    <path in:fade='{{duration: 1000}}' d={svg} />
                {/each}
            </g>
        </g>
    </svg>
{/if}