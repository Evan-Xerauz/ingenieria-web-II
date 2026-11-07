import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0b0f19' }}>
      <div className="container">
        <Link className="navbar-brand text-success fw-bold" to="/">ETHERION</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/favoritos">Mis Favoritos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;