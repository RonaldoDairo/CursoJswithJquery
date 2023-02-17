'Use strict';


//FECHAS
var fecha = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();


console.log(hora + ' ' +minutos + ' ' + segundos);