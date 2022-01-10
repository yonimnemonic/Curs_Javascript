"use strict"

//programa que pida dos numeros y que nos diga cual es mayor , el menor y si son iguales.
// PLUS: Si los numeros no son un numero o son menores o igual a 0, nos los vuele a preguntar.

let numero1 = parseInt(prompt("Introduce el número 1", 0));
let numero2 = parseInt(prompt("Introduce el número 2", 0));


while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
     numero1 = parseInt(prompt("Introduce el número 1", 0));
     numero2 = parseInt(prompt("Introduce el número 2", 0));
}


       if(numero1 == numero2){
            alert(`El numero ${numero1} es igual a número ${numero2} `);
        } 
        else if(numero1 > numero2){
            alert(`El número ${numero1} es mayor que el ${numero2}`);
        }
        else if(numero1 < numero2){
            alert(`El número ${numero1} es menor que el ${numero2}`);
        }
        else {
            alert("Introduce numeros correctos")
        }
