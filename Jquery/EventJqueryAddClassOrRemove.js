'use strict';


$(document).ready(function () {
    $('.parrafo').hover(function () {
        $(this).addClass('borde');


    },function () {
        $(this).removeClass('borde');  //TENGO QUE AGG EL STYLE ,EN ESTE CASO LO HE COLOCADO DESDE HEAD , PUEDO COLOCARLO DESDE CSS O EL HEAD DE DONDE ESTE SOLO QUE AQUI TENGO QUE AGG EL NOMBRE DEL LA CLASE O ID QUE TENGA!


    });







});





