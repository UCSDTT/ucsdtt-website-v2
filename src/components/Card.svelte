<script>
    export let section;
</script>

<style>
	.card {
		margin-top: 5em;
		background-color: white;
		border: 4px solid black;
		width: 100%;
        padding: 15px;
    }

    .wrapper {
        display: flex;
        justify-items: center;
    }

    .subcards {
        padding: 10px;
    }
    
    .left-div {
        border-right: 2px dotted #333;
    }
    
    .right-div {
        /* border-right: 2px dotted #333; */
    }

    .header {
        padding-top: 30px;
        min-width: 100%;
        text-align: center;
    }
    
</style>

<section class="card">
    <slot name="header" class="header"></slot>
    <hr>
    <div class="wrapper">
        <section class="left-div subcards">
            <slot name="left"></slot>
        </section>
        <section class="right-div subcards">
            <slot name="right"></slot>
        </section>
    </div>
</section>