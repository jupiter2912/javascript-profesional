var number = 6;
var cadena = 'Hola Jose';
var esCierto = true;

//constructores

var number = new Number(); // objeto no numero primitivo
var cadena = new String(); // objeto no string primitivo
var esCierto = new Boolean(); // objeto no boolean primitivo


//paso por valor (number, string, boolean). son copias, no tienen la misma referencia.
// Son indipendientes

var cadena = 'Hola';
var cadenaCopy = cadena;

cadena = 'Jose';//Si modifico cadena
console.log(cadena);// 'Jose'
console.log(cadenaCopy);//'Hola' mostrara esto porque es una copia y apunta a otra direccion

//paso por referencia (objetos, arrays, funciones)
//Apuntan a la misma referencia (misma direccion de memoria)
//**No son copias */

var numeros = [3,5,7,9];
var numerosCopy = numeros;

numeros[0] = 12;
console.log(numeros);// [12,5,7,9]
console.log(numerosCopy);// [12,5,7,9] // Los dos mantendrian los mismos valores
                                        // porque apuntan a la misma direccion de memoria

//para pasar copias en objetos como si fuese por valor (pero sin serlo)

var numeros = [3,5,7,9];
var numerosCopy = numeros.slice; //con .slice hacemos una copia

numeros[0] = 12;
console.log(numeros);// [12,5,7,9]
console.log(numerosCopy);// [3,5,7,9] // NO se mantendrian los mismos valores
                                        // porque apuntan a distinta direccion de memoria


