export class Hero {

    nombre:string;
    universo:string;

    constructor(nombre:string, universo:string) {
        this.nombre = nombre;
        this.universo = universo;
    }

    imprimirH(){
        console.log(`${this.nombre}, ${this.universo}`);
    }

}