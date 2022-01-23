const About = document.createRange().createContextualFragment(`
<main>
  <header>
    <h1>About Tacos Locos!<h1>
    <p>Tacos locos about page. Lorem ipsum dolor sit amet...</p>
  </header>
  <section>
    Foo bar baz
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