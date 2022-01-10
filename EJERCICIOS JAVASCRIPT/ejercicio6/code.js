"use strict"

/* 
    Que nos diga si un número es par o impar
    tiene que tener , la ventana prompt ,comprobar si un numero no es valido que nos lo vuelva a pedir.
*/


var number = parseInt(prompt("Introduce el número"));
if (isNaN(number)) {
    alert("Por favor, introduzca un número")
}else if((number % 2) == 0){
    alert("el Numero es par")
}else if((number % 2) != 0){
    alert("el Número es impar")
}

//otra forma de hacerlo es montando un bucle while y iterando hasta que el número sea correcto, despues podemos hacer un if para verificar si es impar o par

 