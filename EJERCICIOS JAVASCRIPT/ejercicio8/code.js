
/* 
 Hacer una calculadora, si metemos un número mal que lo vuelva a pedir.
 -Pide dos numeros por pantalla
 -si metemos un numero mal que nos lo vuelva a pedir
 -en el cuerpo de la página, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/


let numero1 = parseInt(prompt("Introduce el primer nuemro"))
let numero2 = parseInt(prompt("Introduce el segundo numero"))

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer nuemro"))
    numero2 = parseInt(prompt("Introduce el segundo numero"))
}

let resultado = "la suma es: " + (numero1 + numero2) + "</br>" +
                 "la resta es: " + (numero1 - numero2) + "</br>"+
                 "la división es: " + (numero1 / numero2) + "</br>"+
                 "la multiplicación es: " + (numero1 * numero2) + "</br>";

document.write(resultado);


