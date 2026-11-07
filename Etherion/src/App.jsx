import { useState } from 'react';
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero'; 
import Categorias from './components/Categorias'; 
import JuegosDestacados from './components/JuegosDestacados'; 
import Novedades from './components/Novedades'; 
import CatalogoJuegos from './components/CatalogoJuegos';
import Favoritos from './components/Favoritos';

// Importaciones con los nombres exactos que tienen los archivos en tu carpeta assets (respetando espacios)
import imgRpg from './assets/juego-rpg.jpg';
import imgAventura from './assets/juego-aventura.jpg';
import imgHollow from './assets/hollow.jpg';
import imgPersona from './assets/persona 5.jpg';
import imgElden from './assets/eldenring.jpeg';
import imgStardew from './assets/stardew valley.jpg';

const juegosData = [
  { id: 1, nombre: 'Final Fantasy VII Remake', genero: 'RPG', descripcion: 'El clásico reimaginado con combate de acción.', imagen: imgRpg },
  { id: 2, nombre: 'Hyrule: Ecos', genero: 'Aventura', descripcion: 'Explora un mundo abierto lleno de secretos.', imagen: imgAventura },
  { id: 3, nombre: 'Hollow Knight', genero: 'Aventura 2D', descripcion: 'Descubre los misterios de Hallownest.', imagen: imgHollow },
  { id: 4, nombre: 'Persona 5 Royal', genero: 'JRPG', descripcion: 'Roba corazones en Tokio.', imagen: imgPersona },
  { id: 5, nombre: 'Elden Ring', genero: 'Acción y Mundo Abierto', descripcion: 'Conviértete en el Señor del Círculo.', imagen: imgElden },
  { id: 6, nombre: 'Stardew Valley', genero: 'Pixel Art / Simulación', descripcion: 'Construye la granja de tus sueños.', imagen: imgStardew }
];

function App() {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (juego) => {
    setFavoritos((prevFavoritos) => {
      const existe = prevFavoritos.find((fav) => fav.id === juego.id);
      if (existe) {
        return prevFavoritos.filter((fav) => fav.id !== juego.id);
      } else {
        return [...prevFavoritos, juego];
      }
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Categorias />
            <JuegosDestacados /> 
            <Novedades />
          </main>
        } />
        <Route path="/catalogo" element={<CatalogoJuegos juegos={juegosData} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="/favoritos" element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;