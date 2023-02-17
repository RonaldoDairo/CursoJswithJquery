'use strict';
//funciones anonimas
function sumar(n1,n2,multiplicacion){
    var suma = (n1 + n2);
    multiplicacion (suma)
    return(suma) ;
}








sumar(5,7,function(d){
console.log('La suma es : '+ d);
console.log('La multiplicacion es : '+ d * 2);

})