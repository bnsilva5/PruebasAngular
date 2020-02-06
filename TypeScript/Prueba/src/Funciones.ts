function saludar( nombre: String) {
    console.log("Hola" + nombre);
}

//---Objeto
let wolverin = {
    nombre: "Logan"
};

saludar(wolverin.nombre);

//----------------------------------------- template literals

let Nombre: String = "Nicholas";
let Apellido: String = "Silva";
let Edad: Number = 21;

let Texto = `Hola, ${ Nombre } ${ Apellido } (${ Edad })`;

console.log(Texto);

//---------------------------------------------------- Funciones
            //------------Funcion/TemplateLiterals
function getNombre() {
    return "Brandon";
}

let Texto2:String = `${getNombre()}`;

console.log(Texto2);

//-------------------------------------------

function Multiplos(a:number) {
    if(a%3==0)
        return "Es multiplo";
    else
        return "Nat";
}

console.log(Multiplos(30));



