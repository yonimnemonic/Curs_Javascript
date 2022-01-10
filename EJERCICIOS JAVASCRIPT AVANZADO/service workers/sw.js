self.addEventListener("install", e=>{
    console.log("instalando service worker")
})

// self.addEventListener("activate");
self.addEventListener("activate", e=>{
    console.log("El service worker está activado")
})

self.addEventListener("fetch", ()=>{
    console.log("service worker interpretando petición")
})