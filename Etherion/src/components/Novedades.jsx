import imgCatalogo from "../assets/hero-etherion.jpg";
import imgRpg from "../assets/juego-rpg.jpg";
import imgAventura from "../assets/juego-aventura.jpg";

function Novedades() {
  return (
    <section className="etherion-section news-section" id="novedades">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
          <div className="section-heading section-heading--left">
            <span className="etherion-eyebrow etherion-eyebrow--accent">ACTUALIDAD GAMER</span>
            <h2>Novedades, Lanzamientos y Recomendaciones</h2>
          </div>
          <p className="news-intro mb-1">Entérate de los últimos estrenos, colecciones retro y eventos especiales en Etherion.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <article className="news-card">
              <img src={imgCatalogo} alt="Colección de juegos clásicos y modernos en Etherion" />
              <span className="news-date">Especial · Colección Retro & Indie</span>
              <h3>Festival del Pixel y Clásicos de Culto</h3>
              <p>Revive joyas como Chrono Trigger, Disgaea, Valkyrie Profile y Hades en nuestra nueva biblioteca curada para amantes del 2D.</p>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="news-card">
              <img src={imgRpg} alt="Evento especial del universo Final Fantasy" />
              <span className="news-date">Lanzamiento · Universo Final Fantasy</span>
              <h3>Especial 30 Años de Magia y Materia</h3>
              <p>Analizamos la evolución desde los sprites clásicos hasta las batallas modernas en tiempo real que redefinieron el género RPG.</p>
            </article>
          </div>
          <div className="col-md-6 col-lg-4">
            <article className="news-card">
              <img src={imgAventura} alt="Guía de exploración para juegos de mundo abierto" />
              <span className="news-date">Recomendación · Guía de la Semana</span>
              <h3>Los 10 Mundos Abiertos Más Inmersivos</h3>
              <p>Nuestra selección editorial con las mejores aventuras para perderse explorando ruinas, castillos y paisajes inolvidables.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Novedades;
