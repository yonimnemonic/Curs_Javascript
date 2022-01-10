"use strict"

/* 
Mostrar todos los números impares que hay entre dos numeros introducidos por un usuario

*/

var numero1 = parseInt(prompt("Por favor, introduce el primer numero"))
var numero2 = parseInt(prompt("Por favor, introduce el segundo numero"))

while (numero1 < numero2) {
    numero1++; //incrementa en 1 cada vez numero1 sino se quedaria en el mismo número simpre
    if (numero1%2 !=0) { //aqui comprobamos que numero1 es divisible por 2 si no lo es no lo imprimimos por pantalla
        document.write(numero1 +"</br>")
    }
}
