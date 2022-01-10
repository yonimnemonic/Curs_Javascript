"use strict"

/* 
Hacer un progrmaa que muestre todos los numeros introducidos por el usuario entre 2 numeros de la lista

1- captura todos los numeros, convertir a un array de strings
2- seleccionar 2 numeros los cuales haran de margenes
3- buscar un metodo string que me seleccione un rango de strings 
4- mostrar el resultado

*/

//estos son los margenes
var numero1 = parseInt(prompt("Introduce un primer numero"))
var numero2 = parseInt(prompt("Introduce un segundo numero"))

document.write(`Los números introducidos desde el ${numero1} y ${numero2} son estos <br>`)

for (var i = numero1; i <= numero2; i++) {
    document.write(i + "</br>") ;
}



