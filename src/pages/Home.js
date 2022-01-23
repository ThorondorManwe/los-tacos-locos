const Home = document.createRange().createContextualFragment(`
<main>

  <section class="homeContent">
    <h2>Home Page<h2>
    <p>Tacos locos de pollo para los caballeros</p>
  </section>
</main>
`);

const HomeMenu =  document.createRange().createContextualFragment(`
<li>
  <a data-ref='Home'>Home</a>
</li>
`);
export default Home;
export {HomeMenu};