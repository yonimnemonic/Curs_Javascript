"use strict";

const worker = new Worker("worker.js");

const cargarDiv =  async div=>{
    const req = await fetch("informacion.txt");
    const res = await req.json();
    const arr = res;
    document.querySelector(div).innerHTML = res;
}
console.log(worker);