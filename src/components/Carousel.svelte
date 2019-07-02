<script>
  export let images;
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let image = images[0];
  let index = 0;
  let visible = true;
  let interval;

  function nextImage() {
    visible = false;
    setTimeout(() => {
      visible = true;
      index = (index + 1) % images.length;
      image = images[index];
    }, 300);
  }

  onMount(() => {
    interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  });
</script>

<style>
  .carousel-wrapper {
    width: 70vw;
    height: 70vh;
    background-color: gold;
    border: 7px black solid;
    box-shadow: 0 0 10px 10px goldenrod;
    padding: 2em;
  }

  .carousel {
  position: relative;
    width: 70vw;
    height: 70vh;
    overflow: hidden;
  }
  
  .carousel img {
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
  }
</style>

<!-- in:fly="{{x: 10, duration: 1000}}"
        out:fly="{{x: -10, duration: 1000}}" -->
<!-- <h1>hi</h1> -->
<div class="carousel-wrapper">
  {#if visible}
    <div class="carousel">
      <img src={image} alt="pillar image" transition:fade="{{duration:100}}" />
    </div>
  {/if}
</div>
