import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Categorias from "./components/Categorias.jsx";
import JuegosDestacados from "./components/JuegosDestacados.jsx";
import Novedades from "./components/Novedades.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categorias />
        <JuegosDestacados />
        <Novedades />
      </main>
      <Footer />
    </>
  );
}

export default App;
