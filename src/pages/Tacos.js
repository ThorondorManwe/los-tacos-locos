const Tacos= document.createRange().createContextualFragment(`
<main>
  <section class="tacosContent">
    <h2>Los Tacos Locos!<h2>
    <p>Tacos locos por siempre. Lorem ipsum dolor sit amet...</p>
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