'use strict';



var n1= prompt ('dime una palabra','no has escrito nada');
var n2= prompt ('dime otra palabra','no has escrito nada');


function UnirVariable(n1,n2, n3 = false){

        if (n3 ===false) {
            console.log(n1 + ' ' + n2)
        } else {
                document.write(n1 + ' ' + n2)

        }


}
 
UnirVariable = (n1,n2, false); //si cambio false a true las palabras que llegue a escribir se escriben en el cuerpo de la pagina
