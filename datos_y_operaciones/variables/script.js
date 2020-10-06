//**   VARIABLES */

//**  var --> Se ha usado siempre */
            //-> Permite hacer hoisting

            var cad = 'Hola';
            var cad = 'Jose';

//**    let --> No permite hoisting */
            //-> Permite el blockscope (permite utilizar la variable en diferentes entornos
                                            //de manera independiente)

            let cad = 'Hola';
            {
                let cad ='Jose'
            }

            //esto no se podria hacer
            var cad = 'Hola';
            let cad = 'Jose'; // daria error porque digamos que dentro del mismo scope
                                //la variable definida "let" es unica


//**    const --> NO LAS PUEDES CAMBIAR */ 
            const DESCUENTO = 0.1;


/**     DESTRUCTURED (mas limpias para el codigo) */

            var a,b,rest;
            [a,b] = [10,20]; // a= 10; b=20;

            [a,b,...rest] = [10,20,30,40,50]; 
            console.log(rest); //[30,40,50] // mostraria a "n" elementos que falten por rellenar

