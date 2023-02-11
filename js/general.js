/***********************************************

Author: Lucas Moltedo

***********************************************/

const menuButton = document.querySelector('.menu-button');

// querySelector nos permite seleccionar un elemento
// Lo que encuentre se guardará en una const (constante) llamada menuButton

// Agregamos un evento al elemento para cuando se le haga click:
menuButton.addEventListener('click', function () {
    // Con "getElementById" seleccionamos un elemento por un ID:
    document.getElementById('menu-options-movile').classList.toggle('active')
    document.getElementById('main').classList.toggle('ocultar')
    document.getElementById('footer').classList.toggle('ocultar')
    // Con ".classList.toggle()" le podemos agregar/quitar una clase (depende si la tiene), a un elemento
    // Con esto ya tenemos la función de mostrar/ocultar el menú
})

