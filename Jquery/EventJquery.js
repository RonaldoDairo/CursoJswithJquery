'use strict';


$(document).ready(function () {
    $('#btnmostrar').click(function () {
        $('#texto').html('He pulsado el boton de mostrar');

    })
    $('#btnocultar').click(function () {
        $('#texto').hide(1500);
        $('#texto').show(1500);
    })
})