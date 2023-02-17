'use strict';

$(document).ready(function () {
        $('#btn').html("Hola soy el boton");

    $('#btn').hover(function () {
        $('#btn').html('Sacar el boton');
        $('#texto').show(500);
        
    },function () {
        $('#btn').html('Muestra texto');
        $('#texto').hide(500);

    })






})




