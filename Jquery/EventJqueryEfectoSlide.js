'use strict';

$(document).ready(function () {
    $('#mostrar').click(function () {
        $('.texto').slideToggle(1000,'swing',function () {
            console.log('Clicleado en texto');
        })

    })

    
})





