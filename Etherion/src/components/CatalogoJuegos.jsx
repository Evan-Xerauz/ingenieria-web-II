import JuegoCard from './JuegoCard';

function CatalogoJuegos({ juegos, favoritos, toggleFavorito }) {
  return (
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      <h2 className="text-white mb-4 border-bottom border-secondary pb-2">Catálogo de Juegos</h2>
      <div className="row g-4">
        {juegos.map((juego) => (
          <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
            <JuegoCard 
              juego={juego} 
              isFavorito={favoritos.some(fav => fav.id === juego.id)}
              toggleFavorito={toggleFavorito} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoJuegos;