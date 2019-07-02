<script>
  export let images;
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let image = images[0];
  let index = 0;
  let visible = true;
  let interval;

  // Lowkey a race condition, but we will fix that later
  function nextImage() {
    visible = false;
    setTimeout(() => {
      visible = true;
      index = (index + 1) % images.length;
      image = images[index];
    }, 700);
  }

  function prevImage() {
    visible = false;
    setTimeout(() => {
      visible = true;
      index = (index + images.length - 1) % images.length;
      image = images[index];
    }, 700);
  }

  function handleNextClick() {
    clearInterval(interval);
    if (!visible) {
      index = (index + 1) % images.length;
      return;
    }
    nextImage();
    interval = setInterval(nextImage, 3900);
  }

  function handlePrevClick() {
    clearInterval(interval);
    if (!visible) {
      index = (index + images.length - 1) % images.length;
      return;
    }
    prevImage();
    interval = setInterval(prevImage, 3900);
  }

  onMount(() => {
    interval = setInterval(nextImage, 3900);

    return () => clearInterval(interval);
  });
</script>

<style>
  .button-wrapper {
    display: flex;
    /* flex-direction: row; */
    justify-items: center;
  }

  .carousel-button {
    z-index: 2;
    padding: 0.3em;
    border-radius: 1em;
    font-size: 2em;
    font-weight: 900;
    color: gold;
    border: 3px white solid;
    background-color: black;
    cursor: pointer;
  }

  .button-left {
    margin: auto 1em auto;
    }

  .button-right {
    margin: auto 0 auto 1em;
  }

  .carousel-wrapper {
    width: 70vw;
    height: 70vh;
    border: 7px black solid;
    background-color: white;
    /* background: radial-gradient(maroon, gold 60%); */
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

<div class="button-wrapper">
  <button 
    on:click="{handlePrevClick}"
    class="carousel-button button-left"
  >
    &lt;
  </button>
  <div class="carousel-wrapper">
    {#if visible}
      <div class="carousel">
        <img src={image} alt="pillar image" transition:fade="{{duration:500}}" />
      </div>
    {/if}
  </div>
  <button
    on:click="{handleNextClick}" 
    class="carousel-button button-right"
  >
    &gt;
  </button>
</div>