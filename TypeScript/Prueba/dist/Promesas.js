//---------------------------------------- Promesas (procesos asincronos)
//-------------Problema del promise se arregla con ES6
let prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada");
        //--- Si termina bien
        resolve();
        //---- si no funciona
        //reject();
    }, 1500);
});
console.log("Paso 1");
prom.then(function () {
    console.log("Ejecutarme cuando termine bien");
}, function () {
    console.error("Ejecutarme si todo sale  mal");
});
console.log("Paso2");
