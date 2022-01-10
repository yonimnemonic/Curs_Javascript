if(navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js")
}

setTimeout(()=>{
    navigator.serviceWorker.postMessage("Hola bro como estas?")
}, 3000)
