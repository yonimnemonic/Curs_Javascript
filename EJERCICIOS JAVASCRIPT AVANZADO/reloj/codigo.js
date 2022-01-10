"use strict";

const addZeros = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora +":";
    document.querySelector(".minutos").textContent = minutos + ":";
    document.querySelector(".segundos").textContent = segundos;
}

actualizarHora();
setInterval(actualizarHora, 1000);