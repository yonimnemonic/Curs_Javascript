"use strict"

/* 
Muestre todos los numeros divisores de un número introducido con prompt

los divisores de un numero son aquellos que dividen por 0 un número.
*/


var numero = parseInt(prompt("Introduce el número para obtener sus divisores"));

for (let i = 1; i <= numero; i++) {
    
    if(numero % i == 0)console.log("Divisor: " + i);
}

 