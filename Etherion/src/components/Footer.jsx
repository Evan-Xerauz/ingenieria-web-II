function Footer() {
  return (
    <footer className="etherion-footer" id="contacto">
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-4">
        <div>
          <a className="etherion-brand etherion-brand--light" href="#inicio">
            <span className="etherion-brand__mark">E</span>
            <span>ETHE<b>RION</b></span>
          </a>
          <p className="mb-0 mt-2">Plataforma de descubrimiento de videojuegos, clásicos RPG, pixel art y novedades.</p>
        </div>
        <small>© 2026 Etherion · Actividad 1: Landing Page desarrollada con React y Bootstrap</small>
      </div>
    </footer>
  );
}

export default Footer;
