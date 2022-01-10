"use strict";

caches.open("archivos-estaticos").then(cache =>{
    fetch("cache.html").then(res=>{
        cache.put("cache.html", res)
    })
});