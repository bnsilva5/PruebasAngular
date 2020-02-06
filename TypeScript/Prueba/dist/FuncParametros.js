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
