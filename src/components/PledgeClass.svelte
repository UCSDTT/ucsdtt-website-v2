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

  // let curBrother = curClass.members[0]
  let curBrother;

  let my, mx, sy, sx;
  $: picX = `${mx - 55}px`
  $: picY = `${my - 140}px`

  function handleMouseClick(event) {
		mx = event.clientX;
		my = event.clientY;
    boxVisible = true;
    curBrother = findNearestBrother();

  }

  // Finds the closest brother that is also within .cursor-box padding away.
  // Returns undefined if none are found.
  function findNearestBrother() {
    // Getting a list of brothers within the padding.
    const brothersInRange = curClass.members.filter((member) => {
      if (Math.abs(member.pixelLocationX - mx) < 50 &&
          Math.abs(member.pixelLocationY - my) < 50) {
            return true;
      }
      return false;
    });

    if (brothersInRange.lenght === 0) {
      return undefined;
    } else if (brothersInRange.length === 1) {
      return brothersInRange[0];
    }

    // If there are multiple brothers, find the closest one.
    let nearestBrother;
    let closestDist = Infinity;
    for (member in brothersInRange) {
      let dist = Math.sqrt((member.pixelLocationX - mx) ** 2 +
                            (member.pixelLocationY - my) ** 2);
      if (dist < closestDist) {
        closestDist = dist;
        nearestBrother = brother;
      }
    }

    return nearestBrother;
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
  {#if curBrother}
    <h3>Brother: {curBrother.name}</h3>
    <h4>Major: {curBrother.major}</h4>
  {:else}
    <h4>Oops! Please try and select a brother (from this class) again.</h4>
  {/if}
</div>