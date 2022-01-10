"use strict"


/* 
    Tabla de multiplicar de un número introducido por pantalla

    1 - capturar el número
    2 - procesa el resultado
    3 - muestra el resultado
*/

var numero = parseInt(prompt("Introduce un número, y te devolvemos su tabla de multiplicar"));
document.write('la tabla de multiplicar del número ' + numero + "</br>")

for (let i = 1; i < 10; i++) {
    var resultado = numero * i;
    document.write(`${numero} x ${i}:
    ` + resultado + "</br>")
    
}
 