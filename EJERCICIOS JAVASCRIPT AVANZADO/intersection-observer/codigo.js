"use strict";
const cajas = document.querySelectorAll(".caja"); //seleccionamos la caja con al que trabajar
const verifyVisibility = (entries) =>{
    for (const entry  of entries){
        if(entry.isIntersecting) console.log("se está viedno al caja", entry.target.textContent)
    }
}
const observer = new IntersectionObserver(verifyVisibility);

for (const caja  of cajas){
    observer.observe(caja)
}