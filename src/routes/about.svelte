<script>
  import SvgDraw from "../components/SvgDraw.svelte";
  import Pillars from "../components/Pillars.svelte";
  import Carousel from "../components/Carousel.svelte";
  import Origin from "../components/Origin.svelte";

  const images = [
    'icons/pillar.png',
    'images/pi_fun.jpg',
    'images/sigma_fun.jpg'
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
