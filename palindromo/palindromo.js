function palindrome(frase){
    clean = frase.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return clean == clean.split("").reverse().join("");
}

function es_palindromo(frase){
    
    frase_sin_espacios = "";
    for(var i = 0; i < frase.length ; i++){
        if(frase[i] != " "){
          frase_sin_espacios = frase_sin_espacios + frase[i];
        }
    }
    
    longitud = frase_sin_espacios.length; // longitud base 1

    n_comparaciones = longitud / 2 ;

    for(var i = 0; i < n_comparaciones ; i++){
        if(frase_sin_espacios[i] == frase_sin_espacios[longitud - 1]){

        } else {
            return "No es un Palindromo";
        }
        longitud = longitud - 1;
    }

    return "Es un palindromo";
}

function primos(n){
    for(i=2; i <= n; i++){

        for(j = 1; j<=n; j++){
            if(i % j != 0){
                return "El numero " + i + "no es primo";
            }
            else {
                return "El numero " + i + "es primo";
            }
        }
    }
}