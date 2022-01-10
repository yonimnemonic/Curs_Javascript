"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files)
});

const leerArchivo = ar => {

    for (let i = 0; i < ar.length; i++) { //recorremos con un array los ficheros recojidos por el control
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", (e)=>{
            let newIMG = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += newIMG;
        })
        
    }
        
    
}