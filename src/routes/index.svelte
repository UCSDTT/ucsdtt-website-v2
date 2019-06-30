<script>
  import Hero from "../components/Hero.svelte";
  import WeAre from "../components/WeAre.svelte";
  import Pillars from "../components/Pillars.svelte";
  import Card from "../components/Card.svelte";
  import { garnetUnfilled } from "../scripts/shapes.js";

  const brotherLabels = [
    "brothers",
    "entrepreneurs",
    "leaders",
    "pioneers",
    "philanthropists",
    "friends",
    "family",
    "diverse",
    "adventurers",
    "pro gamers",
    "youtube stars",
    "CEOs",
    "project managers",
    "artists",
    "inclusive"
  ];
</script>

<style>
  .hero-div {
    /* width: 100%; */
    height: 32em;
    max-width: 50em;
  }

  div.pillars-div {
    position: relative;
    margin: 10em 2em 0 2em;
    background-color: #999;
    border: 1em black solid;
    max-width: 56em;
  }

  div.pillars-div h1 {
    text-align: center;
    padding: 30px;
    margin: 5px;
    color: white;
    border-bottom: 10px maroon dotted;
  }

  :global(body) {
    background: linear-gradient(white 40em, maroon 55em, white 150vh);
  }

  p {
	padding: 0 2em 1em 1em;
  }

  @media (max-width: 999px) {
    .hero-div {
      height: 20em;
    }

    .pillars-div {
      top: 10em;
    }

    :global(body) {
      background-color: white;
    }
  }

  figcaption {
	  text-align: center;
	  font-size: 1.4em;
  }
</style>

<svelte:head>
  <title>UCSD Theta Tau</title>
</svelte:head>

<div class="hero-div">
  <Hero
    titleBig="UCSD Theta Tau"
    titleSmall="UCSD ΘΤ"
    tagline="Epsilon Delta"
    svg={garnetUnfilled}
    alt="a hero" />
</div>
<WeAre {brotherLabels} />

<Card>
  <h3 slot="header">UC San Diego's premier engineering fraternity</h3>
  <section slot="left">
  	<p>
		Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the
		nation's largest and oldest co-ed engineering fraternity. Our brothers 
		develop each other to not only focus on one aspect of ourselves, but on 
		many. We strive to be well-rounded people who excel in brotherhood,
		philanthropy, and professionalism.
	</p>
	<p>
		Brothers help each other with homework, open doors professionally, 
		provide a support system, improve the world for those in need, and hang 
		out with each other among many more things. In addition, a deep,
		multidisciplinary network of alumni are always there to help at any
		time. Most importantly, Theta Tau has brought people together to form 
		connections that will last a lifetime.
	</p>
	<p>
		No matter where your interests lie or what kind of engineer you may be,
		come check us out!
	</p>
  </section>
  <figure slot="right">
      <!-- width="1280"
      height="720" -->
    <iframe
	  title="SP19 rush video"
      width="960"
      height="540"
      src="https://www.youtube.com/embed/FLfQ3UrGNKk"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen />
	<figcaption>Our rush video for Spring 2019!</figcaption>
  </figure>
</Card>

<div class="pillars-div">
  <h1>the Three Pillars</h1>
  <Pillars />
</div>
<!-- <h1>Great success!</h1> -->

<!-- <img alt='fun' src='images/sigma_fun.jpg'> -->

<!-- Leave this here until we can make our own icon that is just an outline -->
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<p>
  Icons from
  <a href="https://icons8.com/icons">icons8</a>
</p>
