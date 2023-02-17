'use strict';




$(document).ready(function () {
    //Selector de etiqueta
    var span = $('span');
    span.css('border','1px solid blue',);
    console.log(span.text());


    //Selectores de atributos
    var atributo = $('[title="google"]');
    atributo.css('font-size','50px');
    console.log(atributo.text());


    
})