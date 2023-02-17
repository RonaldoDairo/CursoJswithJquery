'use strict';

 function personas(edad,altura,peso) {
            this.edad = edad;
            this.altura= altura;
            this.peso = peso;

            this.caminar = ()=> {
                console.log('Esta persona esta caminando');
            }
            this.sentarse = ()=> {
                console.log('Esta persona esta sentada')

            }
 }
            var manuel = new personas(32,1.78,75);
            var elisa = new personas(20,1.58,80);

                    console.log(manuel.sentarse());
                    console.log(elisa.caminar());


