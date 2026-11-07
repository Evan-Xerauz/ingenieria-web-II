import JuegoCard from "./JuegoCard.jsx";
import imgRpg from "../assets/curso-python_2.jpg";
import imgAventura from "../assets/curso-ux_2.jpg";
import imgAccion from "../assets/curso-web_2.jpg";
import imgPixel from "../assets/hero-education.jpg";

function JuegosDestacados() {
  return (
    <section className="etherion-section games-section" id="destacados">
      <div className="container">
        <div className="section-heading text-center mx-auto">
          <span className="etherion-eyebrow">SELECCIÓN DE LA COMUNIDAD</span>
          <h2>Juegos Destacados en Etherion</h2>
          <p>Títulos imprescindibles que combinan narrativa memorable, dirección artística y jugabilidad envolvente.</p>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-md-6 col-lg-3">
            <JuegoCard
              nombre="RPG"
              genero="JRPG / Estrategia"
              descripcion="Desarrollas personajes, mejoras habilidades, tomas decisiones y vives aventuras a través de historias envolventes."
              imagen={imgRpg}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <JuegoCard
              nombre="Aventura/Exploración"
              genero="Aventura"
              descripcion="Enfocados en descubrir mundos, explorar escenarios, encontrar secretos y vivir experiencias llenas de descubrimientos."
              imagen={imgAventura}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <JuegoCard
              nombre="Historia/Acción"
              genero="Acción Táctica"
              descripcion="Experiencias que combinan narrativas emocionantes, combates intensos, desafíos y momentos llenos de adrenalina."
              imagen={imgAccion}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <JuegoCard
              nombre="Fantasia"
              genero="RPG"
              descripcion="Mundos imaginarios llenos de magia, criaturas extraordinarias, poderes sobrenaturales y universos únicos."
              imagen={imgPixel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JuegosDestacados;
