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
// document.addEventListener(function(){})
// $(document).ready(function(){})

var click_handler = function(evento){
        $('#input_container').append("<input type='text'>");
        //evento.preventDefault();
        boton_accion = $('#boton_accion');
        // boton_accion.css('background-color', 'red');
        boton_accion.css({
            'font-family': 'serif',
            'font-size': '20px'
        })
        boton_accion.animate( { width: '500px', height: '1000px' }, 2000 );
        return false;
    };

var remove_handler =function(){
        $('input').last().remove();
        return false;
    };


var click_handler2 = function(){
    console.log("Segundo Handler corriendo");
};

// cuando se termine de cargar la página

$(function(){
    boton_accion = $('#boton_accion');
    boton_accion.click(click_handler); // callbacks
    boton_accion.click(click_handler2);
    $('#boton_ocultar').click(remove_handler);

    // $('#boton_accion') != document.querySelector("#boton_accion")
    // 
    // $('form').append(boton_accion.clone());

    //fadeOut(2000)
    //fadeIn(2000)
    //fadeToggle(3000)

    //slideOut
    //slideIn
    //slideToggle

    //hide
    //show

    //clone
    //css({})

    // Para contendores
    // append
    // prepend

    // animate
    
    // addClass('mi_clase op')
    // removeClass('mi_clase')
    // toggleClass('mi_clase')

    // attr('id', 'mi_id')
});











