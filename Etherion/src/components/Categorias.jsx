function Categorias() {
  const listaCategorias = [
    {
      codigo: "RPG",
      nombre: "RPG y Estrategia",
      descripcion: "Historias profundas, combates por turnos, gestión de materia y mundos de fantasía épica.",
      ejemplos: "Final Fantasy VII · Tactics · Wild Arms",
    },
    {
      codigo: "ACT",
      nombre: "Acción y Combate",
      descripcion: "Adrenalina pura, batallas tácticas en tiempo real y desafíos de alta intensidad.",
      ejemplos: "Modern Warfare · Doom · Hades",
    },
    {
      codigo: "ADV",
      nombre: "Aventura y Mundo Abierto",
      descripcion: "Explora reinos vastos, resuelve acertijos ancestrales y forja tu propio camino.",
      ejemplos: "Zelda · Valkyrie Profile · Horizon",
    },
    {
      codigo: "PIX",
      nombre: "Clásicos Pixel Art 2D",
      descripcion: "Joyas retro y lanzamientos indie que mantienen viva la magia de los 16 y 32 bits.",
      ejemplos: "Chrono Trigger · Octopath · Sea of Stars",
    },
  ];

  return (
    <section className="etherion-section categories-section" id="categorias">
      <div className="container">
        <div className="section-heading text-center mx-auto">
          <span className="etherion-eyebrow etherion-eyebrow--accent">EXPLORA POR GÉNERO</span>
          <h2>Categorías de la Plataforma</h2>
          <p>Encuentra tu próxima aventura filtrando entre nuestros géneros principales diseñados para cada tipo de jugador.</p>
        </div>

        <div className="row g-4 mt-3">
          {listaCategorias.map((cat) => (
            <div className="col-md-6 col-lg-3" key={cat.codigo}>
              <article className="category-card h-100 d-flex flex-column">
                <span className="category-icon">{cat.codigo}</span>
                <h3>{cat.nombre}</h3>
                <p>{cat.descripcion}</p>
                <span className="category-tag mt-auto">{cat.ejemplos}</span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categorias;
