/**LISTAS */

var lista = [2,4,6,8,10];

//acceder a posicion
lista[0] = 5;

//ultimo elemento
lista[lista.length - 1];


// CASO DE LA PILA (LIFO)
//.pop() --> desapilar
//.push() --> apilar
lista.pop(); // Quito un element de la ultima posicion //[2,4,6,8]

let ultimo = lista.pop(); // asi seria lo correcto para trabajar con el elemento //[2,4,6]

lista.push(8,10); // para reinsertar los elementos quitados por pop() //[2,4,6,8,10]

// CASO DE LA COLA (FIFO)
//.shift() --> desencolar
//.unshift() --> encolar
lista.shift(); // Quito el elemento de la primera posicion //[4,6,8,10]

lista.unshift(12); // para reinsertar los elementos quitados por pop() // [12,4,6,8,10]