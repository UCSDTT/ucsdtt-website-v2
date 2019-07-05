<script>
  import SvgDraw from "../components/SvgDraw.svelte";
  import Pillars from "../components/Pillars.svelte";
  import Carousel from "../components/Carousel.svelte";
  import Origin from "../components/Origin.svelte";

  const images = [
    'images/pi_fun.jpg',
    'images/opsanta.JPG',
    'images/ball_is_life.jpg',
    'images/grad19.jpg',
    'images/sigma_fun.jpg',
    'images/habitat.JPG',
    'images/bubble_soccer.jpg',
  ];

  const pillarMsg = "Brothers embodying the spirit of Theta Tau through the" + 
    " three pillars.";
    
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Pillars />

<Carousel {images} caption={pillarMsg}/>

<Origin />
