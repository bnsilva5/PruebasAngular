let funcionUno = (a, b) => a + b;
console.log(funcionUno(31, 10));
//--------------------------------------
let funcionDos = (nombre) => {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(funcionDos("nicholas"));
//----------------------------------------
let stark = {
    nombre: "Tony",
    poder() {
        setTimeout(() => console.log(this.nombre + " Inicia a volar"), 1500);
    }
};
stark.poder();
//---------------------------------------------------
let funciontres = (nombres) => {
    nombres = nombres.toLocaleUpperCase();
    return nombres;
};
console.log(funciontres("brandon"));
