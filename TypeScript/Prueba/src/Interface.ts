(function () {

    //---------------------------------Interfaces

    interface Marvel {
        nombre:string,
        poder:string
    };

    interface GuaridaHeroes{
        gHeroe: string,
        pais: string
    }

    function enviarMision(marvel: Marvel) {
        console.log("Enviando a: " + marvel.nombre);
    };

    function manejarTransp(marvel: Marvel) {
        console.log(marvel.nombre + " Esta manejando la nave.");
    };

    function atacar(marvel: Marvel){
        console.log(marvel.poder + " panterita esta atacando");
    }

    function enviarGuarida(marvel: Marvel, guarida: GuaridaHeroes) {
        console.log("Enviando a " + marvel.nombre + " a: " + guarida.pais)
    };  

    let pantera = {

        nombre: "Pantera negra",
        poder: "Combate cuerpo a cuerpo"

    };

    let land = {
        gHeroe: "Tierra wakanda",
        pais: "Africa"
    }

    enviarMision(pantera);
    manejarTransp(pantera);
    atacar(pantera);
    enviarGuarida(pantera, land);

    //-------------------------------------

    interface Transporte {
        nombreT: string,
        tipo: string
    }

    interface DcHero {
        nombre:string,
        poder:string
    }

    function envMisionEsp(heroe: DcHero, transporte: Transporte){
        console.log("Enviando a " + heroe.nombre + " ha una mision especial en su " + transporte.nombreT);
    }

    let bruceW = {
        nombre: "Batman",
        poder: "Agilidad"
    }

    let transp = {
        nombreT: "Batimovil",
        tipo: "Terrestre, aereo y acuatico"
    };

    envMisionEsp(bruceW, transp);

})();

