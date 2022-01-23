const Tacos= document.createRange().createContextualFragment(`
<main>
  <header>
    <h1>Los Tacos Locos!<h1>
    <p>Tacos locos por siempre. Lorem ipsum dolor sit amet...</p>
  </header>
  <section>
    Foo bar baz
  </section>
</main>
`);

const TacosMenu = document.createRange().createContextualFragment(`
<li>
  <a data-ref='Tacos'>Tacos</a>
</li>
`);

export default Tacos;
export {TacosMenu};