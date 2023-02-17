'use strict';
var Global = ('Esta es una pequeña prueba en ambito de variables o ciclo de vida'); 

function MostrarConsola(){
            var variable_funtion = ('Es una prueba para ver si se puede operar desde fuera del bloque o vice versa!');
            console.log(variable_funtion);
            console.log(Global);


}

MostrarConsola()

//aqui nos damos de cuenta que para que pueda mostrar la consola dentro de la funcion ,  el console.log debe esta dentro del bloque de la funcion , si no ...Me marca como error 