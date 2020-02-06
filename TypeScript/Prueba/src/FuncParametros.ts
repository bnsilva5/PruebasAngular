//------------------- Funciones con parametros por defecto, obligatorios y opcionales
function activar(quien:string, objeto:string = "Amplificador", momento?:string){

    let mensaje:string;

    if(momento){
        mensaje = `${ quien } activó el ${ objeto } en la ${ momento }`;
    }else{
        mensaje = `${ quien } activó el ${ objeto }`;
    }

    console.log(mensaje);
}

activar("Nikki", "Bajo", "Noche");
activar("Nicholas", "Amplificador");

//-------------------------------Funcion parametros por defecto

function instrumentos(tipo:string, cuerdas:number, afinacion:string){
    let hacer:string;

    if(instrumentos){
        hacer = `${ tipo }, ${ cuerdas }, ${ afinacion }`;
    }else{
        hacer = `debe tener ${ tipo }, ${ cuerdas } y ${ afinacion }`;
    }

    console.log(hacer);
}

instrumentos("Guitarra", 7, "E");
instrumentos("Bajo", 5, "D");


//----------------------------------Funcion parametros obligatorios


