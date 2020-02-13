"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = /** @class */ (function () {
    function Hero(nombre, universo) {
        this.nombre = nombre;
        this.universo = universo;
    }
    Hero.prototype.imprimirH = function () {
        console.log(this.nombre + ", " + this.universo);
    };
    return Hero;
}());
exports.Hero = Hero;
