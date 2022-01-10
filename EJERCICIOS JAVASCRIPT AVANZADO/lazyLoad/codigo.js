/*
1-seleccionamos el nodo de las publicaciones - el div publicaciones
*/


"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;
//2-creamos una función que genere el contenido del las noticias
const createPublicationCode = (name, content) =>{
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder", "introduce un comentario")
    nombre.textContent = name;
    contenido.textContent = content;
    
    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}
//3-crear funcion que genere más publicaciones
const cargarMasPublis = entry =>{
    if (entry[0].isIntersecting) cargarPublicaciones(1);

}
const observer = new IntersectionObserver(cargarMasPublis);

//4-crear un fetch(conexión) al fichero que contiene el contenido de las publis y mostrarlo con un for.

const cargarPublicaciones = async num =>{
    //accedemos al fichero del JSON
    const request = await fetch("content.txt");
    const content = await request.json();
    const arr = content.content;
    const documentFragment = document.createDocumentFragment();
    //Mostramos el contenido del array con un for
    for (let i = 0; i < num; i++) {
        if(arr[contador] != undefined){
            const newPublicacion = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
            documentFragment.appendChild(newPublicacion)
            contador++;
        if (i == num-1) observer.observe(newPublicacion)
        }else{
            if(publicaciones.lastElementChild.id !== "nomore"){
                let noMore = document.createElement("h3");
                noMore.textContent = "No hay más publicaciones";
                noMore.id = "nomore";
                documentFragment.appendChild(noMore);
                publicaciones.appendChild(documentFragment)
                break;
            }
        }
    }
    publicaciones.appendChild(documentFragment)
}

cargarPublicaciones(1);
