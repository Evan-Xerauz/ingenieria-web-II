function JuegoCard({ nombre, genero, descripcion, imagen }) {
  return (
    <article className="card game-card h-100">
      <div className="game-card__image-wrap">
        <img className="card-img-top game-card__image" src={imagen} alt={`Videojuego ${nombre}`} />
        <span className="badge game-badge">{genero}</span>
      </div>
      <div className="card-body d-flex flex-column p-4">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
        <a className="game-link mt-auto" href="#novedades">
          Ver ficha y detalles <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default JuegoCard;
