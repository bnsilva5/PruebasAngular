(function() {

    //------------------------------------- Clases y constructores

    class Guitar {
        marca: string = "Fender";
        numCuerdas: number;
        tipo: string;
        puentFlot: boolean;

        constructor ( marca:string, tipo:string ) {
            this.marca = marca;
            this.tipo = tipo;
        }
    }

    let jackson:Guitar = new Guitar( "Jackson", "RANDY RHOADS RR1T" );

    console.log(jackson);
}());