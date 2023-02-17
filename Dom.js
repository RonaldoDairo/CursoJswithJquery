'use strict';



var div1 =document.getElementById('div1')
div1.innerHTML = 'Texto cambiado a traves de javascripts'
div1.style.fontSize = ' 25px '  ; // << El tamaño de mi letra

var parrafo1 = document.getElementsByClassName('parrafo1')

parrafo1[1].innerHTML = ' Texto numero uno del parrafo cambiado , recordar que cuando es una arrays , los arrays empiezan a contar desde el nº1';