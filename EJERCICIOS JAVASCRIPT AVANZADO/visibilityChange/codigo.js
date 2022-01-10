"use strict";

if(!('Notification' in window)){
    console.log("Las notificaciones no estan activadas en su navegador")
}

Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
    }
})
new Notification("Suscribete papu!") 

