
// Desarrollando un juego de piedra, papel, tijeras.


var mi_funcion = function(param_1, param_2){
    console.log("El parametro 1 es: " + param_1);
    console.log("El parametro 2 es: " + param_2);
}


function saludar(a_quien){
    var aleatorio = Math.random();
    console.log("Hola " + a_quien);
    console.log("¿Cómo estas?");
    console.log("Tu número aleatorio es: " + aleatorio);
}


function suma(num_1, num_2){
    suma = num_1 + num_2;
    return suma;
}

function cuadrado(numero){
    var resultado = numero * numero;
    console.log("El cuadrado es: " + resultado);
    return resultado;
}


function resta(numero_1, numero_2){
    return numero_1 - numero_2;
}

/*
Suma de longitud de las dos cadenas
*/


function suma_de_longitudes(nombre_1, nombre_2){
    var suma = nombre_1.length + nombre_2.length;
    return suma;
}




