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

  let iw;
</script>

<svelte:window bind:innerWidth={iw}/>

<style>
  .hero-div {
    /* width: 100%; */
    height: 32em;
    max-width: 50em;
  }

  :global(body) {
    background: linear-gradient(white 40em, maroon 55em);
  }

  p {
    padding: 0 2em 1em 1em;
  }

  @media (max-width: 999px) {
    .hero-div {
      height: 20em;
    }

    :global(body) {
      background-color: white;
    }
  }

  figcaption {
    text-align: center;
    font-size: 1.4em;
  }

  #rush-video {
    max-width: 40vw;
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
  <h3 slot="header">
    <strong>UC San Diego's premier engineering fraternity</strong>
  </h3>
  <section slot="left">
    <p>
      Formed in 1904 with chapters in over 80 campuses, Theta Tau is both the
      <strong>nation's largest and oldest co-ed engineering fraternity</strong>.
      Our brothers develop each other to not only focus on one aspect of
      ourselves, but on many. We strive to be well-rounded people who excel in
      <strong>brotherhood</strong>,
      <strong>philanthropy</strong>, and
      <strong>professionalism</strong>.
    </p>
    <p>
      Brothers assist each other with homework, open doors professionally,
      provide a support system, improve the world for those in need, and hang
      out with each other among many more things. In addition, a deep,
      multidisciplinary network of alumni is always there to help at any time.
      Most importantly, Theta Tau has brought people together to form
      <strong>connections that will last a lifetime</strong>.
    </p>
    <p>
      No matter where your interests lie or what kind of engineer you may be,
      <strong>come check us out</strong>!
    </p>
  </section>
  <figure slot="right">
    {#if iw > 1000}
      <!-- width="1280"
      height="720" -->
      <iframe
        id="rush-video"
        width="960"
        height="540"
        title="SP19 rush video"
        max-width="calc(100vw - 4em)"
        src="https://www.youtube.com/embed/FLfQ3UrGNKk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
      <figcaption>Our rush video for Spring 2019!</figcaption>
    {/if}
  </figure>
</Card>

<!-- <div class="pillars-div">
  <h1>the Three Pillars</h1>
  <Pillars />
</div> -->
