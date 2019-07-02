<script>
  import SvgDraw from "../components/SvgDraw.svelte";
  import { paths } from "../scripts/pillar.js";

  const height = "132.608px";
  const width = "132.608px";
  const viewBox = "0 0 132.608px 132.608px";
</script>

<style>
  .pillars {
    display: flex;
    flex-direction: row;
	/* justify-content: center; */
    /* align-items: center; */
  }

  .pillar {
    display: flex;
    flex-direction: column;
	align-items: center;
    width: 40em;
	max-width: calc(33vw - 6em);
    border: 4px maroon solid;
    margin: 1em;
	padding: 1em;
  }

  .pillar:hover {
	  box-shadow: 0 0 1em 1em gold;
  }

  .pillar img {
    width: 10em;
  }

  .pillar h4 {
	font-size: 1.6em;
	color: maroon;
	text-align: center;
	border-bottom: 3px maroon solid;
  }

  @media (max-width: 1000px) {
    .pillars {
      flex-direction: column;
	}
	
	.pillar {
		max-width: calc(100vw - 4em);
		width: 40em;
	}
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About</h1>

<h3>Theta Tau bases its moral tenets in three pillars:</h3>

<div class="pillars">
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Brotherhood</h4>
    <p>
      We strive to make the group as closely knit as possible throughout one’s
      college years. Our goal is to develop bonds between our brothers that will
      last a lifetime. We foster an inviting, safe, and social environment in
      which our members become lifelong friends.
    </p>
  </div>
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Philanthropy</h4>
    <p>
      For the purpose of our members’ personal growth, as well as our
      community’s benefits, we are involved in projects that give back to the
      community around us. Serving alongside brothers will establish strong
      bonds and also guarantee a truly meaningful time through one’s college
      years.
    </p>
  </div>
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Professionalism</h4>
    <p>
      We also seek to shape up one’s professional interests to prepare them for
      their life ahead of college. We plan various networking opportunities as
      well as events that provide a sneak peek at different professional
      careers.
    </p>
  </div>
</div>
