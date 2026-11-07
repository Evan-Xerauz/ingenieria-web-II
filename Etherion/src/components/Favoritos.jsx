import JuegoCard from './JuegoCard';
import { Link } from 'react-router';

function Favoritos({ favoritos, toggleFavorito }) {
  return (
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      <h2 className="text-warning mb-4 border-bottom border-secondary pb-2">Mis Favoritos</h2>
      
      {favoritos.length === 0 ? (
        <div className="alert alert-dark text-center py-5 border-secondary" role="alert">
          <h4 className="alert-heading text-white">¡Aún no tienes favoritos!</h4>
          <p className="text-secondary mb-4">Explora nuestro catálogo para agregar los juegos que más te gusten.</p>
          <Link to="/catalogo" className="btn btn-success">Ir al Catálogo</Link>
        </div>
      ) : (
        <div className="row g-4">
          {favoritos.map((juego) => (
            <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
              <JuegoCard 
                juego={juego} 
                isFavorito={true} // Aquí siempre es true porque estamos en la lista de favoritos
                toggleFavorito={toggleFavorito} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;