function Navbar() {
  return (
    <header className="etherion-navbar sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <a className="etherion-brand" href="#inicio">
          <span className="etherion-brand__mark">E</span>
          <span>ETHE<b>RION</b></span>
        </a>

        <nav className="etherion-nav d-flex align-items-center gap-4" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#categorias">Categorías</a>
          <a href="#destacados">Juegos Destacados</a>
          <a href="#novedades">Novedades</a>
          <a className="btn btn-etherion btn-sm px-3" href="#destacados">Explorar Catálogo</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
