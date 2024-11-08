
Archivos
1. index.html
Este archivo contiene la estructura HTML de la página principal de EDGA Tech. A continuación, se detalla la estructura de cada sección:

Estructura HTML
html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDGA Tech - Desarrollo Web Profesional</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Barra de Navegación -->
    <header class="navbar">
        <h1>EDGA TECH</h1>
        <nav>
            <ul>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#planes">Planes y precios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Sección Hero -->
    <section class="hero">
        <h1>Transformamos tu idea en un Sitio Web Profesional</h1>
        <p>Ofrecemos servicios de desarrollo de páginas web a medida, usando WordPress y las tecnologías más avanzadas.</p>
        <div class="buttons">
            <a href="#contacto">Solicitar presupuesto.</a>
            <a href="#portafolio">Ver portafolio</a>
        </div>
    </section>
</body>
</html>


2. styles.css
Este archivo define los estilos visuales de la página. A continuación se explica cada clase y su propósito:

Estilos CSS
css
Copiar código
/* Estilos Generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Barra de Navegación */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.7); /* Transparente */
    color: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 1000;
}

.navbar h1 {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.navbar nav ul li a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
}

.navbar nav ul li a:hover {
    color: #ffc107; /* Color al pasar el cursor */
}

/* Sección Hero */
.hero {
    height: 100vh;
    background-image: url(/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1c1c1c;
    padding: 4rem 2rem;
    text-align: center;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.hero .buttons {
    display: flex;
    gap: 1rem; /* Espacio entre los botones */
}

.hero .buttons a {
    background-color: #ffc107; /* Color de fondo del botón */
    color: #000; /* Color del texto del botón */
    padding: 0.8rem 1.5rem; /* Tamaño del botón */
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.hero .buttons a:hover {
    background-color: #e0a800; /* Color al pasar el cursor */
}


Fin :)
