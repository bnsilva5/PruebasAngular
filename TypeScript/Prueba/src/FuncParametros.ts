//------------------- Funciones con parametros por defecto, obligatorios y opcionales
function activar(quien: string, objeto: string = "Amplificador", momento?: string) {

    let mensaje: string;

    if (momento) {
        mensaje = `${quien} activó el ${objeto} en la ${momento}`;
    } else {
        mensaje = `${quien} activó el ${objeto}`;
    }

    console.log(mensaje);
}

activar("Nikki", "Bajo", "Noche");
activar("Nicholas", "Amplificador");

//-------------------------------Funcion parametros por defecto

function instrumentos(tipo: string, cuerdas: number, afinacion: string) {
    let hacer: string;

    if (instrumentos) {
        hacer = `${tipo}, ${cuerdas}, ${afinacion}`;
    } else {
        hacer = `debe tener ${tipo}, ${cuerdas} y ${afinacion}`;
    }

    console.log(hacer);
}

instrumentos("Guitarra", 7, "E");
instrumentos("Bajo", 5, "D");


//----------------------------------Funcion parametros obligatorios

function tocarGuit(tipoG: string = "G_Acustica", cuerdas: number = 6, afinacionG: string = "D") {
    let play: string;

    if (tocarGuit) {
        play = `Estoy tocando la ${tipoG} de ${cuerdas} en la afinacion de ${afinacionG}`;
    } else {
        play = `No puedo tocar la Guitarra ${tipoG}`;
    }

    console.log(play)
}

tocarGuit("Acustica", 6, "D");


//---------------------------------Funcion parametros opcionales (EL primer parametro no puede ir opcional)

function jugar(consola: string, controles?: number, tv?: boolean) {
    let play2: string;

    if (jugar) {
        if (jugar) {
            play2 = `Estoy jugando con mi ${consola} que tiene ${controles} controles y usa ${tv}`;
            
        } else {
            play2 = `Estoy jugando solo con mi ${consola} que tiene ${controles} controles`;
        }
    }else{
        play2 = `No estoy jugando con mi ${consola}`;
    }

    console.log(play2);
}

jugar("PC", 1, true);
jugar("Xbox", 2);
jugar("PS4");