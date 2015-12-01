// Eventos

// Obtener Nodos
// Manera Antigua
// document.getElementById
// document.getElementsByClassName


// document.querySelector("css_selector");
// document.querySelectorAll("css_selector");
// manejar_click = function (){}
// function manejar_click(){
//     alert("¡Boton clickeado!");
// }

// function ready(){
//     boton = document.querySelector("#boton_accion");
//     boton.addEventListener('click', manejar_click);
// }

// document.addEventListener('DOMContentLoaded', ready)


/* 
    W3C -> World Wide Web Consortium

    Eventos en Javascript
    -> load         -> Elemento se terminó de cargar
    -> click
    -> change       -> Input es modificado
    -> submit       -> Se envía un formulario
    -> mouseout     -> El ratón cruza el borde hacia afuera
    -> mouseenter   -> El ratón cruza el borde hacia adentro
    -> mouseover    -> Ratón encima del elemento.
    -> doubleclick
    -> keypress     -> Presiona una tecla
*/

$(function(){
    
    // console.log("Corriendo");
    $('#boton_accion').click(function(event){
        $('#input_container').append("<input type='text'>");
        event.preventDefault();
        return false;
    });

    $('#boton_ocultar').click(function(event){
        // $('#input_container').slideToggle();
        $('#input_container').fadeToggle();
        return false;
    });

});
