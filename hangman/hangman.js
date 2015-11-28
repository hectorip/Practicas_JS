/*
    1. El jugador 1 escoge una palabra.

    2. El jugador 1 Dibuja el número de espacios de la palabra.
    
    3. El jugador 2 dice una letra.
    
    4. si la letra está en la palbra:
        4a. El jugador dibuja la letra en los espacios correpondientes.
        4b. Si está mal empieza a poner las partes del ahorcado ().
    
    5. Si no se han cometido más de X errores o no se ha completado el dibujo regresar al paso 3.
    
    6. Si se han cometido X o más errores el ahorcado se completa y el jugador 2 pierde.
    
    6b. Si se ha completado la palbra el jugador 2 gana.
*/

function escogerPalabra(){
    // return "guacamole";
    var palabras = ["casa", "computadora", "manzana", "perro", "guacamole", "rana", "onomatopeya"];
    
    var num_aleatorio = Math.floor( Math.random() * palabras.length );
    
    var palabra_escogida = palabras[num_aleatorio];
    
    return palabra_escogida;
}

function dibujarEspacios(palabra){
    for(var i = 0 ; i < palabra.length ; i++){
        
        var espacio = document.createElement("span");

        espacio.innerText = " _ ";
        espacio.className = "espacio";

        document.body.appendChild(espacio);
    }
}

function obtenerLetra(){
    return prompt("Dime una letra: ");
}

function jugar_hangman(){
    var palabra = escogerPalabra(); // paso 1
    dibujarEspacios(palabra); // paso 2

    var errores = 0;
    var adivinadas = 0;

    do{
        var letra = obtenerLetra();
        var posiciones = validarLetra(palabra, letra);

        if( posiciones.length > 0 ){
            dibujarLetra(posiciones, letra);
            adivinadas = adivinadas + posiciones.length
        } else {
            errores = errores + 1;
        }

    }while(errores <= 7 && adivinadas < palabra.length)
    if(errores > 7){
        alert("Has ganado");
    } else {
        alert("Has perdido");
    }
}

function validarLetra(palabra, letra){
    var posiciones = [];

    for(var i = 0 ; i < palabra.length ; i++){
        var letra_actual = palabra[i];
        if( letra_actual == letra){

            posiciones.push(i);
        }
    }

    return posiciones;
}

function dibujarLetra(posiciones, letra){

    for(var i = 0; i< posiciones.length; i++){
        espacios = document.querySelectorAll('.espacio');
        espacios[posiciones[i]].innerText = letra;
    }

}






