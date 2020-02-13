"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = /** @class */ (function () {
    function Villano(nombre, universe) {
        this.nombre = nombre;
        this.universe = universe;
    }
    Villano.prototype.imprimirV = function () {
        console.log(this.nombre + ", " + this.universe);
    };
    return Villano;
}());
exports.Villano = Villano;
