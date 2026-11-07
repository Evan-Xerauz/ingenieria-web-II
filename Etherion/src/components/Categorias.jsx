function Categorias() {
  const categorias = [
    { id: 1, tag: 'RPG', titulo: 'RPG y Estrategia', desc: 'Historias profundas, combates por turnos, gestión de materia y mundos de fantasía épica.', juegos: 'FINAL FANTASY VII • TACTICS • WILD ARMS' },
    { id: 2, tag: 'ACT', titulo: 'Acción y Combate', desc: 'Adrenalina pura, batallas tácticas en tiempo real y desafíos de alta intensidad.', juegos: 'MODERN WARFARE • DOOM • HADES' },
    { id: 3, tag: 'ADV', titulo: 'Aventura y Mundo Abierto', desc: 'Explora reinos vastos, resuelve acertijos ancestrales y forja tu propio camino.', juegos: 'ZELDA • VALKYRIE PROFILE • HORIZON' },
    { id: 4, tag: 'PIX', titulo: 'Clásicos Pixel Art 2D', desc: 'Joyas retro y lanzamientos indie que mantienen viva la magia de los 16 y 32 bits.', juegos: 'CHRONO TRIGGER • CELESTE • STARDEW' }
  ];

  return (
    <section className="container py-5" id="categorias">
      <h2 className="text-white fw-bold mb-2">Categorías de la Plataforma</h2>
      <p className="text-secondary mb-4">Encuentra tu próxima aventura filtrando entre nuestros géneros principales diseñados para cada tipo de jugador.</p>
      
      <div className="row g-4">
        {categorias.map(cat => (
          <div className="col-12 col-md-6 col-lg-3" key={cat.id}>
            <div className="card h-100 border-0 p-3" style={{ backgroundColor: '#131b2e' }}>
              <div className="mb-3">
                <span className="badge" style={{ backgroundColor: '#00e5a3', color: '#0b0f19' }}>{cat.tag}</span>
              </div>
              <h5 className="text-white fw-bold">{cat.titulo}</h5>
              <p className="text-secondary small flex-grow-1">{cat.desc}</p>
              <p className="small fw-bold mb-0" style={{ fontSize: '0.75rem', color: '#00e5a3' }}>{cat.juegos}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categorias;