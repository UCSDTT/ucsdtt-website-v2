<style>
  .pillars {
    display: flex;
    flex-direction: row;
    margin: 1em 0;
  }

  .pillar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40em;
    max-width: calc(33vw - 10em);
    border: 4px maroon solid;
    margin: 1em;
    padding: 2em;
    background-color: white;
  }

  .pillar img {
    width: 10em;
  }

  .pillar h4 {
    font-size: 1.8em;
    color: maroon;
    text-align: center;
    border-bottom: 3px maroon solid;
  }

  @media (max-width: 1000px) {
    .pillars {
      flex-direction: column;
    }

    .pillar {
      max-width: calc(100vw - 6em);
      width: 30em;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>

<h1>About</h1>

<h3>Theta Tau bases its moral tenets in three pillars:</h3>

<div class="pillars">
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Brotherhood</h4>
    <p>
      We strive to make the group as
      <strong>closely knit as possible</strong>
      throughout one’s college years. Our goal is to develop bonds between our
      brothers that will last a lifetime. We foster an inviting, safe, and
      social environment in which our members become
      <strong>lifelong friends</strong>.
    </p>
  </div>
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Philanthropy</h4>
    <p>
      For the purpose of our members’ personal growth, as well as our
      community’s benefits, we are involved in projects that <strong>give back 
      to the community</strong> around us. Serving alongside brothers will 
      establish strong bonds and also guarantee a truly <strong>meaningful time
      through one’s college years</strong>.
    </p>
  </div>
  <div class="pillar">
    <img src="icons/pillar.png" alt="pillar" />
    <h4>Professionalism</h4>
    <p>
      We also seek to shape up one’s professional interests to prepare them for
      their <strong>life ahead of college</strong>. We plan various 
      <strong>networking opportunities</strong> as well as events that provide 
      a sneak peek at different professional careers. Brothers have gone on 
      to work at <strong>top companies</strong>, pursue their 
      <strong>passions</strong>, and help each other <strong>realize
      their full potential</strong>.
    </p>
  </div>
</div>