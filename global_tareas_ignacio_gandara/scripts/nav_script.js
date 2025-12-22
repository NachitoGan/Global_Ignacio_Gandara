// Conectarme con la etiqueta que tiene la clase nav_container
var navbar = document.querySelector('.nav_container')

// Cuando haga scroll
window.onscroll = () => {
    // Si se hace scroll pasando los 20 pixeles desde el top de la pantalla
    if (window.scrollY > 20) {
        // Agregale a la etiqueta con la que te conectaste la clase nav_active
        navbar.classList.add('nav_active')
    } else {
        // Si no, quitale la clase nav_active
        navbar.classList.remove('nav_active');
    }
}