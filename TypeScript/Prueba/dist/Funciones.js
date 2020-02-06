function saludar(nombre) {
    console.log("Hola" + nombre);
}
//---Objeto
var wolverin = {
    nombre: "Logan"
};
saludar(wolverin.nombre);
//----------------------------------------- template literals
var Nombre = "Nicholas";
var Apellido = "Silva";
var Edad = 21;
var Texto = "Hola, " + Nombre + " " + Apellido + " (" + Edad + ")";
console.log(Texto);
//---------------------------------------------------- Funciones
//------------Funcion/TemplateLiterals
function getNombre() {
    return "Brandon";
}
var Texto2 = "" + getNombre();
console.log(Texto2);
//-------------------------------------------
function Multiplos(a) {
    if (a % 3 == 0)
        return "Es multiplo";
    else
        return "Nat";
}
console.log(Multiplos(30));
