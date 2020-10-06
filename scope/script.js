var greeting = "Hola contexto global!";
console.log(greeting);  // Hola contexto global!
function greet () {
  console.log(greeting);
}
greet() //Hola contexto global!
 
var greeting;
console.log(greeting);  // undefined
function greet () {
  greeting = "Saludo desde greet";
  console.log(greeting);
}
greet() // Saludo desde greet
console.log(greeting); // Saludo desde greet
 
var greeting = " Hola contexto global!";
console.log(greeting);  // Hola contexto global!
function greet () {
  greeting = "Saludo desde greet";
  console.log(greeting);
}
greet() // Saludo desde greet
console.log(greeting); // Saludo desde greet
 
var greeting = "Hola contexto global!";
console.log(greeting);  // Hola contexto global!
function greet () {
  var greeting = "Saludo desde greet";
  console.log(greeting);
}
greet() // Saludo desde greet
console.log(greeting); // Hola contexto global!
 

console.log(greeting);  // Uncaught ReferenceError: greeting is not defined
function greet () {
  var greeting = "Hola contexto global!";
  console.log(greeting);
}
greet() //No se llega a ejecutar