'use strict';


//Comprobar soporte
if(typeof (Storage)){
    console.log('Disponible');
} else {
    console.log('No disponible');
}

localStorage.setItem('clave','texto o valor de esta clave');
localStorage.setItem('edad', 37);

var valor = localStorage.getItem('clave');
console.log(valor);


/// este parte ahora es un json>>>

var persona = {
    edad:37,
    nombre:'manuel',
}
localStorage.setItem('persona',JSON.stringify(persona));
var per = JSON.parse(localStorage.getItem('persona'))

console.log(per.nombre);









