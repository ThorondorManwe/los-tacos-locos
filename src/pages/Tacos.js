const Tacos= document.createRange().createContextualFragment(`
<main>
  <section class="tacosContent">
    <h2>Los Tacos Locos!<h2>
    <p>Tacos locos por siempre.</p>
    <p>Tacos de carne, de res y de pollo, también de pescado. Los mejores tacos de la comarca</p>
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