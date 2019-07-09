<script>
  import { elasticOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  // Contains an array of Javascript objects.
  // Each object contains: 
  // [
  //    className(lowercase) : {
  //         image: string (url to image)
  //         members: [{
  //           name: string
  //           pixelLocationX: number (pixel location on class picture)
  //           pixelLocationY: number (same but on y axis)
  //          ... any other fields to display
  //         },
  //     ...]
  //    },
  // ...]
  // basically an ar
  // order from newest to oldest
  export let pledgeClasses;

  let visible = true;
  let boxVisible = false;

  let className = 'upsilon';
  $: curClass = pledgeClasses[className.toLowerCase()];

  // let curBrother = curClass.members[0]
  let curBrother;

  let iw, my, mx, sy, sx;
  $: picX = `${mx - 55}px`
  $: picY = `${my - 65}px`

  function handleMouseClick(event) {
    mx = event.clientX;
    my = event.clientY + sy;
    boxVisible = true;
    curBrother = findNearestBrother();
  }

  // Finds the closest brother that is also within .cursor-box padding away.
  // Returns undefined if none are found.
  function findNearestBrother() {
    // Getting a list of brothers within the padding.
    const brothersInRange = curClass.members.filter((member) => {
      if (Math.abs(member.pixelLocationX - mx) < 50 &&
          Math.abs(member.pixelLocationY - my - 65) < 50) {
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
    for (let i = 0; i < brothersInRange.length; i++) {
      const member = brothersInRange[i];
      const dist = Math.sqrt((member.pixelLocationX - mx) ** 2 +
                            (member.pixelLocationY - my - 65) ** 2);
      if (dist < closestDist) {
        closestDist = dist;
        nearestBrother = member;
      }
    }

    return nearestBrother;
  }

  function clearBox() {
    boxVisible = false;
    curBrother = undefined;
  }
  
</script>

<svelte:window bind:innerWidth={iw} bind:scrollY={sy}/>

<style>
  .cursor-box {
    position: absolute;
    /* position: absolute; */
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
  }

  .class-img-container img {
    background-color: black;
    cursor: pointer;
    width: 900px;
    border: 5px black solid;
  }

  .brother-info {
    position: absolute;
    top: 180px;
    left: 1000px;
    width: 100em;
    max-width: calc(100vw - 1130px);
    margin-right: 70px;
    height: 500px;
    background-color: white;
    border: 5px black solid;
    z-index: 5;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  .brother-info h4:nth-of-type(1) {
    font-size: 1.8vw;
  }
  .brother-info h5:nth-of-type(1) {
    font-size: 1.6vw;
  }


  .brother-info {
    font-size: 1.4vw;
  }

  .brother-key {
    color: maroon;
  }

  div.space-maker {
    padding-top: 650px;
    display: block;

  }

  h4 .class-select {
    font-size: 1em;
  }

  div.space-maker h4 {
    padding: 1em;
    font-size: 2em;
    background-color: white;
    border: 4px black solid;
  }

</style>

{#if iw > 1300}
  <!-- <h4>mx: {mx} my: {my} class:  -->
  <div class="space-maker">
    <h4>class: 
      <select class="class-select" bind:value={className} on:change={clearBox}>
        {#each Object.keys(pledgeClasses) as key}
          <option value={key}>
            {key}
          </option>
        {/each}
      </select>
    </h4>
  </div>

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
      {#each Object.keys(curBrother) as key}
        {#if curBrother[key].length !== 0 && 
          key !== 'pixelLocationX' &&
          key !== 'pixelLocationY' &&
          key !== 'city, state, country' &&
          key !== 'email' &&
          key !== 'last updated' &&
          key !== 'what i do' &&
          key !== 'phone number'
        }
          <h5 class="brother-key">{key}:</h5><h4>{curBrother[key]}</h4>
        {/if}
      {/each}
    {:else}
      <h4>Click on a brother (from the class) to see more information.</h4>
    {/if}
  </div>

<!-- {#if iw > 1300} -->
{:else}
  <div>TODO: implement a version for smaller screen</div>
{/if}