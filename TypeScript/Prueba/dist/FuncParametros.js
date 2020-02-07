//------------------- Funciones con parametros por defecto, obligatorios y opcionales
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "Amplificador"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 el " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 el " + objeto;
    }
    console.log(mensaje);
}
activar("Nikki", "Bajo", "Noche");
activar("Nicholas", "Amplificador");
//-------------------------------Funcion parametros por defecto
function instrumentos(tipo, cuerdas, afinacion) {
    var hacer;
    if (instrumentos) {
        hacer = tipo + ", " + cuerdas + ", " + afinacion;
    }
    else {
        hacer = "debe tener " + tipo + ", " + cuerdas + " y " + afinacion;
    }
    console.log(hacer);
}
instrumentos("Guitarra", 7, "E");
instrumentos("Bajo", 5, "D");
//----------------------------------Funcion parametros obligatorios
function tocarGuit(tipoG, cuerdas, afinacionG) {
    if (tipoG === void 0) { tipoG = "G_Acustica"; }
    if (cuerdas === void 0) { cuerdas = 6; }
    if (afinacionG === void 0) { afinacionG = "D"; }
    var play;
    if (tocarGuit) {
        play = "Estoy tocando la " + tipoG + " de " + cuerdas + " en la afinacion de " + afinacionG;
    }
    else {
        play = "No puedo tocar la Guitarra " + tipoG;
    }
    console.log(play);
}
tocarGuit("Acustica", 6, "D");
//---------------------------------Funcion parametros opcionales (EL primer parametro no puede ir opcional)
function jugar(consola, controles, tv) {
    var play2;
    if (jugar) {
        if (jugar) {
            play2 = "Estoy jugando con mi " + consola + " que tiene " + controles + " controles y usa " + tv;
        }
        else {
            play2 = "Estoy jugando solo con mi " + consola + " que tiene " + controles + " controles";
        }
    }
    else {
        play2 = "No estoy jugando con mi " + consola;
    }
    console.log(play2);
}
jugar("PC", 1, true);
jugar("Xbox", 2);
jugar("PS4");
