/* Con la variable selecciono el elemento HTML cuya clase 
es .nav_toggle (el botón hamburguesa para móviles)
Además, selecciono una lista de items que forman parte del
menú, para que se cierre el menú al hacer click sobre ellos.
*/
var navToggle = document.querySelector('.nav_toggle');
var navItemsMenu = document.querySelectorAll('.nav_item');

/* Le hago escuchar el evento click y entonces se agrega
o quita la clase .toggle_active, que en CSS transiciona
entre el botón hamburguesa y el botón de cruz y abre y 
cierra el menú
*/
navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('toggle_active');
});

/* En el caso del menú, al ser una lista debo recorrerla con 
.forEach para hacer escuchar el clic a cada uno
Luego remuevo la clase toggle_active cuando se clickean*/
navItemsMenu.forEach(item => {
    item.addEventListener('click', () =>{
        navToggle.classList.remove('toggle_active');
    });
});