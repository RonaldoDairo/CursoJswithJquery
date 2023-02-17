'Use strict';
var edad = 20;
var texto = "";

switch (edad) {
    case 20:
        texto = "Eres Mayor de edad ";
        break;
    case 17:
        texto = " Eres Menor de edad ";
        break;
    default :
        texto ="Parece que no tienes edad";
        
}

console.log(texto)