/* Con la variable selecciono el elemento HTML cuya clase 
es .nav_toggle (el botón hamburguesa para móviles)
*/
var navToggle = document.querySelector('.nav_toggle');

/* Le hago escuchar el evento click y entonces se agrega
o quita la clase .toggle_active, que en CSS transiciona
entre el botón hamburguesa y el botón de cruz y abre y 
cierra el menú
*/
navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('toggle_active');
});