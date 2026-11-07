import heroImg from "../assets/curso-js.jpg";

function Hero() {
  return (
    <section className="etherion-hero d-flex align-items-center" id="inicio">
      <img className="etherion-hero__image" src={heroImg} alt="Caballero pixel art descansando junto a una hoguera en Etherion" />
      <div className="etherion-hero__shade"></div>

      <div className="container etherion-hero__content position-relative">
        <span className="etherion-eyebrow">ETHERION · PLATAFORMA DE VIDEOJUEGOS Y ENTRETENIMIENTO</span>
        <h1>Donde las grandes historias y la acción cobran vida</h1>
        <p className="lead">
          Descubre universos inolvidables, explora múltiples géneros y mantente al día con los mejores lanzamientos del mundo gamer.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <a className="btn btn-etherion btn-lg" href="#destacados">
            Ver Juegos Destacados <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-outline-light btn-lg" href="#categorias">
            Explorar Categorías
          </a>
        </div>
        <div className="hero-note mt-5">★ JUEGO DESTACADO DEL MES: FINAL FANTASY VII (REMAKE)</div>
      </div>
    </section>
  );
}

export default Hero;
