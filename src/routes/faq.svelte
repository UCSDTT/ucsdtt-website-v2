<style>
  .questions {
    display: flex;
    flex-direction: column;
  }

  div.questions div.question {
    background-color: white;
    box-shadow: 0 12px 8px 6px rgba(0, 0, 0, 0.3);
    /* border-radius: 10px; */
    margin: 15px;
    padding: 15px;
  }

  div.questions div.question::before {
    content: "";
    display: block;
    height: 1em; /* fixed header height*/
    margin: -2em 0 0; /* negative fixed header height */
    padding: 1em;
  }

  div.questions div.table-of-contents {
    background-color: white;
    margin: 15px auto;
    padding: 25px 15px;
    border: 4px maroon solid;
  }
</style>

<svelte:head>
  <title>FAQ</title>
</svelte:head>

<h1>Frequently Asked Questions</h1>

<div class="questions">
  <div class="table-of-contents">
    <h3>Table of Contents</h3>
    <hr>
    <h4>
      <a href="/faq/#q1">What is a professional fraternity?</a>
    </h4>
    <h4>
      <a href="/faq/#q2">What is Rush?</a>
    </h4>
    <h4>
      <a href="/faq/#q3">Who can rush?</a>
    </h4>
    <h4>
      <a href="/faq/#q4">Why rush?</a>
    </h4>
    <h4>
      <a href="/faq/#q5">Why Theta Tau?</a>
    </h4>
    <h4>
      <a href="/faq/#q6">What is a bid?</a>
    </h4>
    <h4>
      <a href="/faq/#q7">How do you choose who receives a bid?</a>
    </h4>
    <h4>
      <a href="/faq/#q8">What is pledging?</a>
    </h4>
  </div>
  <div id="q1" class="question">
    <h3>What is a professional fraternity?</h3>
    <hr />
    <p>
      A professional fraternity is a brotherhood consisting chiefly of
      individuals in a specific field of education, promoting professional
      development in addition to strengthening brotherly ties.
    </p>
  </div>
  <div id="q2" class="question">
    <h3>What is Rush?</h3>
    <hr />
    <p>
      Rush is an opportunity for you to learn more about Theta Tau by meeting
      both our active and graduated brothers. Rush consists of multiple events
      that will give you a taste of what our fraternity stands for, whether you
      are a good fit for us, and whether we are a good fit for you. At the end
      of rush, we extend a limited number of interviews and bids. Those who
      receive bids can then decide whether or not they would like to pledge.
      Rushing is completely free of charge and there are no obligations.
    </p>
  </div>
  <div id="q3" class="question">
    <h3>Who can rush?</h3>
    <hr />
    <p>
      Any full-time students who are majoring in engineering, Math-Computer
      Science, or Data Science, and are in good academic standing with the
      university (> 2.5 GPA) may rush. There are no exceptions to this rule.
    </p>
  </div>
  <div id="q4" class="question">
    <h3>Why rush?</h3>
    <hr />
    <p>
      Rush is an opportunity for individuals to see if a fraternity/sorority is
      the right fit for them. Conversely, fraternities and sororities search for
      motivated individuals to recruit during Rush.
    </p>
  </div>
  <div id="q5" class="question">
    <h3>Why Theta Tau?</h3>
    <hr />
    <p>
      Theta Tau is a diverse group of engineers who grow close together while
      striving towards similar goals. You will find our interests are wide and
      vary; some enjoy biking on a nice afternoon, others enjoy studying!
      However, all of us are committed to helping one another become the best
      possible engineer and person he/she can be.
    </p>
  </div>
  <div id="q6" class="question">
    <h3>What is a bid?</h3>
    <hr />
    <p>
      A bid is a formal invitation to begin pledging, the process of becoming a
      brother. You will be notified if you have been given a bid at the end of
      Rush.
    </p>
  </div>
  <div id="q7" class="question">
    <h3>How do you choose who receives a bid?</h3>
    <hr />
    <p>
      Theta Tau searches for engineers who have a strong foundation in its three
      pillars: Brotherhood, Professionalism, and Service. We review each
      applicant as a whole (grades, personality, professionalism, resume, etc.)
      to determine whether we are the right fit for you.
    </p>
  </div>
  <div id="q8" class="question">
    <h3>What is pledging?</h3>
    <hr />
    <p>
      Pledging is the process by which individuals integrate themselves into the
      brotherhood. It is led by pledge instructors, who assist the pledges in
      developing their professional skills, aiding the community, and most
      important of all, getting to know their future brothers.
    </p>
  </div>
</div>
