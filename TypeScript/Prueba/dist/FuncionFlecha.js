var funcionUno = function (a, b) { return a + b; };
console.log(funcionUno(31, 10));
//--------------------------------------
var funcionDos = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(funcionDos("nicholas"));
//----------------------------------------
var stark = {
    nombre: "Tony",
    poder: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Inicia a volar"); }, 1500);
    }
};
stark.poder();
//---------------------------------------------------
var funciontres = function (nombres) {
    nombres = nombres.toLocaleUpperCase();
    return nombres;
};
console.log(funciontres("brandon"));
