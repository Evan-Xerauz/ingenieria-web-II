// 1. IMPORTAR LAS IMÁGENES
import imgNovedad1 from '../assets/juego-aventura.jpg';
import imgNovedad2 from '../assets/juego-rpg.jpg';
import imgNovedad3 from '../assets/hero-etherion.jpg';

function Novedades() {
  // 2. USAR LAS VARIABLES (sin comillas)
  const novedades = [
    { id: 1, categoria: 'ESPECIAL - COLECCIÓN RETRO & INDIE', titulo: 'Festival del Pixel y Clásicos de Culto', desc: 'Revive joyas como Chrono Trigger, Disgaea, Valkyrie Profile y Hades en nuestra nueva biblioteca curada.', img: imgNovedad3 },
    { id: 2, categoria: 'LANZAMIENTO - FINAL FANTASY', titulo: 'Especial 30 Años de Magia y Materia', desc: 'Analizamos la evolución desde los sprites clásicos hasta las batallas modernas en tiempo real.', img: imgNovedad2 },
    { id: 3, categoria: 'RECOMENDACIÓN EDITORIAL', titulo: '10 Mundos Abiertos Imprescindibles', desc: 'Prepara tu inventario y explora los mapas más grandes y detallados que el mundo gaming ofrece.', img: imgNovedad1 }
  ];

  return (
    <section className="container py-5" id="novedades">
      <h2 className="text-white fw-bold mb-2">Novedades, Lanzamientos y Recomendaciones</h2>
      <p className="text-secondary mb-4">Entérate de los últimos estrenos, colecciones retro y eventos especiales en Etherion.</p>
      
      <div className="row g-4">
        {novedades.map(nov => (
          <div className="col-12 col-md-6 col-lg-4" key={nov.id}>
            <div className="card h-100 border-0" style={{ backgroundColor: '#131b2e' }}>
              <img src={nov.img} className="card-img-top" alt={nov.titulo} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <p className="text-warning small fw-bold mb-1" style={{ fontSize: '0.75rem' }}>{nov.categoria}</p>
                <h5 className="text-white fw-bold">{nov.titulo}</h5>
                <p className="text-secondary small mb-0 flex-grow-1">{nov.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Novedades;