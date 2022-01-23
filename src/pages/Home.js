const Home = document.createRange().createContextualFragment(`
<main>
  <header>
    <h1>Tacos Locos Home Page!<h1>
    <p>Tacos locos pollos por caballeros</p>
  </header>
  <section>
    All the flavor of chicken, but none of the feathers.
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