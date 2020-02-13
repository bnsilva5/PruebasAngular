(function () {
    //------------------------------------- Clases y constructores
    class Guitar {
        constructor(marca, tipo) {
            this.marca = "Fender";
            this.marca = marca;
            this.tipo = tipo;
        }
    }
    let jackson = new Guitar("Jackson", "RANDY RHOADS RR1T");
    console.log(jackson);
}());
