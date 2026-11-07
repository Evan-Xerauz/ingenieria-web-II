# Etherion - Landing Page para Plataforma de Videojuegos

Proyecto desarrollado para la **Actividad 1: Diseño y desarrollo de una landing page para una plataforma de videojuegos** (UNIMINUTO).

**Etherion** es una plataforma web ficticia dedicada al descubrimiento de videojuegos, con énfasis en el universo RPG (inspirado en *Final Fantasy*), obras en *pixel art* 2D y grandes lanzamientos de acción y aventura.

## Secciones Incluidas
1. **Navbar (`Navbar.jsx`):** Marca de Etherion y enlaces de navegación interna hacia cada sección de la página.
2. **Presentación Principal (`Hero.jsx`):** Mensaje de bienvenida, propuesta de valor e imagen destacada de estilo *pixel art*.
3. **Categorías (`Categorias.jsx`):** Exploración por géneros (RPG y Estrategia, Acción y Combate, Aventura y Mundo Abierto, Clásicos Pixel Art 2D).
4. **Juegos Destacados (`JuegosDestacados.jsx` y `JuegoCard.jsx`):** Tarjetas reutilizables mediante `props` con imagen, nombre, género y breve descripción.
5. **Novedades (`Novedades.jsx`):** Sección informativa con lanzamientos, noticias y recomendaciones editoriales.
6. **Footer (`Footer.jsx`):** Información de cierre e identidad de la plataforma.

## Tecnologías Utilizadas
- **React 19** (con Vite)
- **Bootstrap 5.3** para el sistema de grillas responsivas (`container`, `row`, `col-md-6`, `col-lg-3`) y componentes base.
- **CSS3 personalizado (`styles.css`)** con variables CSS e identidad visual oscura estilo RPG / Mako.

## Pasos para Ejecutar el Proyecto

1. Abrir una terminal dentro de la carpeta del proyecto:
   ```bash
   cd Etherion
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador el enlace indicado en la terminal (por defecto `http://localhost:5173`).
