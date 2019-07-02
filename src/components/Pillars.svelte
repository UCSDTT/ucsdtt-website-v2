<!-- Displays information on the three pillars. -->

<script>
    import {fade} from 'svelte/transition';
    import Modal from './Modal.svelte';

    let broVis = false;
    let philVis = false;
    let proVis = false;
</script>

<style>
    ul.pillared {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    ul.pillared li {
        margin: 0.5em;
        padding: 10px;
        font-size: 2em;
        display: flex;
        /* justify-items: center; */
        align-items: center;
    }
    ul.pillared li span {
        padding-left: 0.5em;
        color: white;
    }

    ul.pillared li:hover{
        cursor: pointer;
        background-color: rgba(50, 50, 50, 0.5);
        background-clip: border-box;
        border-radius: 1em;
        text-decoration: underline;
        text-decoration-color: goldenrod;
    }

    ul.pillared li:hover img {
        filter: drop-shadow(0 0 0.3em yellow);
    }

    h2.modal-li {
        font-size: 2em;
        margin: initial;
        padding: 0.2em;
    }

    li.modal-li {
        font-size: 1.4em;
        padding: 0;
    }

    img[src="icons/pillar-white.png"] {
        height: 2em;
        border-radius: 1em;
    }

</style>

<ul class="pillared">
    <li on:click={() => broVis = true}>
        <img src="icons/pillar-white.png" alt="pillar">
        <span>Brotherhood</span>
    </li>
    <li on:click={() => philVis = true}>
        <img src="icons/pillar-white.png" alt="pillar">
        <span>Philanthropy</span>
    </li>
    <li on:click={() => proVis = true}>
        <img src="icons/pillar-white.png" alt="pillar">
        <span>Professionalism</span>
    </li>
</ul>

{#if broVis}
    <Modal on:close="{() => broVis = false}">
        <h2 class="modal-li" slot="header">Brotherhood</h2>
        <ul>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
        </ul>
        <img src="images/sigma_fun.jpg" alt="sigmas having fun" width="100%">
    </Modal>
{/if}

{#if philVis}
    <Modal on:close="{() => philVis = false}">
        <h2 class="modal-li" slot="header">Philanthropy</h2>
        <ul>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
        </ul>
        <img src="images/sigma_fun.jpg" alt="sigmas having fun" width="100%">
    </Modal>
{/if}

{#if proVis}
    <Modal on:close="{() => proVis = false}">
        <h2 class="modal-li" slot="header">Professionalism</h2>
        <ul>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
            <li class="modal-li">Lorem ipsum</li>
        </ul>
        <img src="images/sigma_fun.jpg" alt="sigmas having fun" width="100%">
    </Modal>
{/if}