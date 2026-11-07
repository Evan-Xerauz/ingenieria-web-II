function JuegoCard({ juego, nombre, genero, descripcion, imagen, toggleFavorito, isFavorito }) {
  // Soporta tanto si le pasan un objeto 'juego' como si le pasan props individuales
  const data = juego || { nombre, genero, descripcion, imagen };

  return (
    <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: '#131b2e' }}>
      <img 
        src={data.imagen} 
        className="card-img-top" 
        alt={data.nombre || "Juego"} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        {data.genero && (
          <span className="badge bg-success mb-2 align-self-start" style={{ width: 'fit-content' }}>
            {data.genero}
          </span>
        )}
        <h5 className="text-white fw-bold">{data.nombre}</h5>
        <p className="text-secondary small mb-3 flex-grow-1">{data.descripcion}</p>
        
        {/* Si el componente padre le pasa la función para favoritos, muestra el botón */}
        {toggleFavorito && (
          <button 
            onClick={() => toggleFavorito(data)} 
            className={`btn btn-sm mt-auto ${isFavorito ? 'btn-outline-danger' : 'btn-outline-success'}`}
          >
            {isFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        )}
      </div>
    </div>
  );
}

export default JuegoCard;