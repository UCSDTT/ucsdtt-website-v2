<script>
  import { elasticOut } from "svelte/easing";

  // Contains an array of Javascript objects.
  // Each object contains: 
  // [
  //    {
  //         className: string
  //         image: string (url to image)
  //         members: [{
  //           name: string
  //           major: string
  //           pixelLocationX: number (pixel location on class picture)
  //           pixelLocationY: number (same but on y axis)
  //           linkedIn: string (the url)
  //         },
  //     ...]
  //    },
  // ...]
  // basically an ar
  // order from newest to oldest
  export let pledgeClasses;

  let visible = true;
  let boxVisible = false;

  let classIndex = 0;
  let curClass = pledgeClasses[classIndex];

  let curBrother = curClass.members[0]

  let my, mx, sy, sx;
  $: picY = `${my - 140}px`
  $: picX = `${mx - 55}px`

  function handleMouseClick(event) {
		mx = event.clientX;
		my = event.clientY;
    boxVisible = true;
	}
</script>

<style>
  .cursor-box {
    position: absolute;
    padding: 50px;
    border: 5px maroon dashed;
    filter: drop-shadow(0 0 3px white);
    z-index: 2;
    cursor: pointer;
    border-radius: 40px;
  }

  .class-img-container {
    position: absolute;
    top: 180px;
    left: 70px;
    border: 5px black solid;
  }

  .class-img-container img {
    background-color: black;
    cursor: pointer;
    width: 900px;
  }

  .brother-info {
    padding-top: 150px;
    margin-left: 800px;
    z-index: 5;
    height: 500px;
  }

</style>

<p>mx: {mx} my: {my}</p>

{#if boxVisible}
  <div 
    class="cursor-box"
    style="
      top: {picY};
      left: {picX};
    "
    on:click={handleMouseClick}
  >
</div>
{/if}

<div class="class-img-container">
  <img
    on:click={handleMouseClick}
    class="class-img"
    src="{curClass.image}"
    alt="{curClass.className}"
  >
</div>

<div class="brother-info">
  <h2>Brother: {curBrother.name}</h2>
  <h3>Major: {curBrother.major}</h3>
</div>