(function () {
    //---------------------------------Interfaces
    ;
    function enviarMision(marvel) {
        console.log("Enviando a: " + marvel.nombre);
    }
    ;
    function manejarTransp(marvel) {
        console.log(marvel.nombre + " Esta manejando la nave.");
    }
    ;
    function atacar(marvel) {
        console.log(marvel.poder + " panterita esta atacando");
    }
    function enviarGuarida(marvel, guarida) {
        console.log("Enviando a " + marvel.nombre + " a: " + guarida.pais);
    }
    ;
    let pantera = {
        nombre: "Pantera negra",
        poder: "Combate cuerpo a cuerpo"
    };
    let land = {
        gHeroe: "Tierra wakanda",
        pais: "Africa"
    };
    enviarMision(pantera);
    manejarTransp(pantera);
    atacar(pantera);
    enviarGuarida(pantera, land);
    function envMisionEsp(heroe, transporte) {
        console.log("Enviando a " + heroe.nombre + " ha una mision especial en su " + transporte.nombreT);
    }
    let bruceW = {
        nombre: "Batman",
        poder: "Agilidad"
    };
    let transp = {
        nombreT: "Batimovil",
        tipo: "Terrestre, aereo y acuatico"
    };
    envMisionEsp(bruceW, transp);
})();
