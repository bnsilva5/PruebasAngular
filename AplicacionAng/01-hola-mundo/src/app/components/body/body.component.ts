import { Component } from "@angular/core"

@Component({

    selector: 'app-body',
    templateUrl: './body.component.html'

})
export class BodyComponent {

    mostrar = true;

    frase:any = {
        mensaje: "Todo Hombre es una historia",
        autor: "Elkin Ramirez"
    };

    bands:string [] = ['Baron Rojo', 'Kraken', 'Angeles del infierno'];
}