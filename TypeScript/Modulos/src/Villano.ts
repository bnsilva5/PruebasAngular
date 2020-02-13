export class Villano {

    nombre:string;
    universe:string;

    constructor(nombre:string, universe:string) {
        this.nombre = nombre;
        this.universe = universe;
    }

    imprimirV(){
        console.log( `${this.nombre}, ${this.universe}` );
    }
}