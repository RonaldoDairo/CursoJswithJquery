'use strict';


var n1 = prompt('Dime una palabra','otra');
var n2 = prompt('Dime una palabra','otra');


function MostraenConsola (n1,n2){
    console.log(n1 + ' ' + n2)
}

function endocumento (n1,n2){
    document.write(n1 + ' ' + n2);
}


function Mostrar (n1,n2, n3 = false){

            if (n3 === false ){
                MostraenConsola(n1,n2)
                } else {
                    endocumento(n1,n2)
                }

}

Mostrar(n1,n2,true);