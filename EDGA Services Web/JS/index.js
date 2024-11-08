window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; 
    } else {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    }
});

// Seleccionamos todos los enlaces de la navegación que tienen un href comenzando con '#'
const links = document.querySelectorAll('a[href^="#"]');

// Añadimos un event listener para cada enlace
links.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevenimos el comportamiento predeterminado de los enlaces (evita saltar de inmediato)
        event.preventDefault();

        // Seleccionamos el destino del enlace (el valor después de '#')
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazamos la página suavemente hasta el elemento de destino
        targetElement.scrollIntoView({
            behavior: 'smooth',  // Esto aplica el scroll suave
            block: 'start'       // Alinea el elemento al inicio de la ventana
        });
    });
});
