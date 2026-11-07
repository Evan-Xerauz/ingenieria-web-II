function Footer() {
  return (
    <footer className="py-4 mt-5" style={{ backgroundColor: '#0b0f19', borderTop: '1px solid #131b2e' }}>
      <div className="container text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <span className="text-success fw-bold fs-5 border border-success px-2 py-1 me-2 rounded">E</span>
          <span className="text-white fw-bold tracking-widest">ETHERION</span>
          <p className="text-secondary small mt-2 mb-0">Plataforma de descubrimiento de videojuegos, clásicos RPG y novedades.</p>
        </div>
        <div className="text-secondary small text-center text-md-end">
          <p className="mb-0">© 2026 Etherion · Actividad Experiencial Unidad 1</p>
          <p className="mb-0">Plataforma ampliada con React Router y Estado (useState).</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;