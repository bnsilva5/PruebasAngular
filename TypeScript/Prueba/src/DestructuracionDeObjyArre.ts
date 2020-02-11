//--------------------------Destructuracion de objestos y arreglos


//------------------Objeto
let guitar = {
    marca: "Jackson",
    cuerdas: 6,
    modelo: "Jackson-V"
}

//-- Destructuracion del objeto
let { marca, cuerdas, modelo } = guitar;

console.log(cuerdas, marca, modelo);


//-------------------- Arreglos

let band:string [] = [ "Mick", "Nikki", "Vince", "Tommy" ];

let [ guitarra, bajo, voz, bateria ] = band;

console.log(bajo, voz, guitarra, bateria);

console.log( bajo, guitarra);


//----------------------------------------

let cars:string[] = ["Mustang", "Corvet", "Audi", "Camaro"];

let [ rojo, azul, verde, morado ] = cars;

console.log(rojo, verde, morado);
console.log(morado, verde, azul, rojo);
console.log(rojo);



//--------------------------------------

let pantalla = {
    size: "24",
    color: "negro",
    marca2: "Samsung",
    conexion: "HDMI"
}

let { size, color, marca2, conexion } = pantalla;

console.log(size, color, marca2, conexion);
console.log( marca2, size, conexion );
console.log( marca2, conexion );


