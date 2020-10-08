//**PARAMETROS */

function map(x,y,z){
    console.log(x,y,z);
}

map(20,30,10);

//creacion y llamada con objeto
function mapaObjeto(obj){
    console.log(obj.x,obj.y,obj.z);
}

mapaObjeto({x : 20, y : 30, z : 10}); // con el objeto podria meter todos los atributos que quisiera
                                        //tan solo tendira que poner en la funcion algun bucle para las nuevas iteraciones

                        
//creacion y llamada con objeto y bucle
function mapaObjetoConBucle(obj){
    for(let key in obj){
        console.log(obj[key]);
    }
}

mapaObjetoConBucle({x : 20, y : 30, z : 10, d : 70});

//**CLOSURE */ la closure te permite guardar referencias
                //dentro de anidacion de funciones. Son funciones anidadas que devuelven funciones
                // Si se abusa como el Garbage Collector no puede
                // liberar esa memoria puede sufir la aplicacion.

function calculadora(operacion){ // primera funcion

    var contada = 20;
    return function sumaContada(val){//funcion que se devuelve a la primera
        return val + contada;
    }
}


//** FUNCIONES FLECHA */
//**Se suelen utilizar en arrays */
/**Necesito una funcion que me multiplique por 3 cada
 * uno de los elementos que yo les doy
 */


 //map hace un mapeo elemento a elemento con la funcion que estamos metiendo
 let multipliedBy3 = [1,2,3].map(function(el){return el * 3});
 multipliedBy3;

 //forma mas facil (la flecha se sustituye por el return, se quitan las llaves, y la palabra "function")
 let multipliedBy3Arrow = [1,2,3].map((el) => el * 3);
 multipliedBy3Arrow;

 //todos los numeros mayores de 50 // el filter devuelve una respuesta logica "compara la expresion logica con los elementos del array"
 [25,75,74,98,74,2,47,88].filter((el) => el > 50);


 //** BIND, CALL Y APPLY */ permiten cambiar el valor donde apunta this

 //MATRIZ DE DESCUENTOS
 var descuentos = {
     novice = 0.4,
     pro = 0.2
 }

 //funcion aplica descuentos
 var discounter = function(clientType, tariff){
     return this[clientType] * tariff;
 }

 //.call (cambiamos donde tiene que apuntar this explicitamente) //problema que tienes que poner los argumentos simultaneamente
 console.log(discounter.call(descuentos,"novice",100));

 //.apply (aqui no especificamos n argumentos, sino un array)
 console.log(discounter.apply(descuentos,["novice",100]));

 //.bind (liga permanentemente un this a una funcion, hasta que no se
            // haga un "unbind" sera asi)

var discountByProfile = discounter.bind(descuentos);
console.log(discountByProfile("novice",100));


//**IIFE */ FUNCION AUTOINVOCADA //**se coloca un parentesis desde function hasta la 
                                    // llave y despues un () */

(function hola(){
    var mensaje = "hola";
})()


