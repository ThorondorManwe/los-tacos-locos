const Home = document.createRange().createContextualFragment(`
<main>

  <section class="homeContent">
    <h2>Tacos Locos Home Page!<h2>
    <p>Tacos locos pollos por caballeros</p>
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