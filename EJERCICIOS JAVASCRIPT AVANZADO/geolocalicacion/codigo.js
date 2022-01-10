"use strict";

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos)
}

const err = ()=> console.log(e)

const options = {
    maximumAge: 0,
    timeOut: 3000,
    enableHightAcurracy: true
}
geolocation.getCurrentPosition(posicion);