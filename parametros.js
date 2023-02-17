'use strict';

var n1 = prompt('dime una palabra' ,'no has puesto nada');
var n2 = prompt( 'Dime otra  palabra' ,'No has puesto nada')

function UnirParametro (n1,n2){
    var primerparametrosUnidos = n1+' '+n2;
    return(primerparametrosUnidos);
}

//alert(UnirParametro(n1,n2));   <<<<<< tambien podria hacerlo pero mas practico es la otra manera! este desplica una alerta , en cambio la otra manera no!
var resultado = UnirParametro(n1,n2);
console.log(resultado); 



