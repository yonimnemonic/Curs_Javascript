// var persona = {
//     nombre : 'jhon',
//     edad: 30,
//     saludar: function () {
//         console.log('Hola')
//       }
// };
// console.log(persona.saludar())

// var jugador = {
//     fuerza : 1,
//     incrementarFuerza: function(){
//         this.fuerza += 1;
//     },
//     consultarFuerza: function(){
//         console.log("Tu fuerza es de: " + this.fuerza)
//     }
// }

// jugador.consultarFuerza()
// jugador.incrementarFuerza()
// jugador.consultarFuerza()

// var date = new Date();
// var ano = date.getFullYear()
// var mes = date.getMonth();
// var dia = date.getDay()

// console.log(`Estamos en el mes dia ${dia} de ${mes} de ${ano}`)

// var PI = Math.PI;
// console.log(PI)


// function randomNumber(number){
//    return Math.round(Math.random() * number)
//     }
// console.log(randomNumber(44))

const myArray = ["verde","azul","rojo"];

myArray.push("negro","vericio", "lila")

for (let i = 0; i < myArray.length; i++) {
    console.log("me gusta el color: " + myArray[i]);
    
}

const arrayNum = [0,1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < arrayNum.length; i++) {
//     let iterador = arrayNum[i];
//     // console.log(iterador)
//     if ((iterador % 2) == 0) {
//         console.log(iterador)
//     }else{
//         console.log("-------")
//     }

// }

var total = 0;

for (let i = 0; i < arrayNum.length; i++) {
    let iterador = arrayNum[i];
    total += iterador;
    
}
console.log("el total de totos los numeros es " + total)



