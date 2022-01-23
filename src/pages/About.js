const About = document.createRange().createContextualFragment(`
<main>

  <section class="aboutContent">
    <h2>About Tacos Locos!<h2>
    <p>We start creting websites but then we came with this new idea, Tacos Locos!</p>
  </section>

</main>
`);

const AboutMenu = document.createRange().createContextualFragment(`
<li>
  <a data-ref='About'>About</a>
</li>
`);

export default About;
export {AboutMenu};