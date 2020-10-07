//** EXPRESION REGULAR */

//      /patrones/modificadores

var frase = 'la casa de Paco esta cerrada';
/** Buscame todas las 'a' que haya en frase*/
frase.match(/a/g); // buscame todas las "a" en la frase lo hacemos con el modificador "g"

var chiquito = "chiquitor dela calzada, fistroor pecador dela praderaa"
/**Buscame todas las palabras que tengas  oo pero que muestre la palabra */
chiquito.match(/[a-z]*oo*[a-z]/g)

//** pagina de regex101.com nos sirve para probar expresiones regulares */
//** Javascript loves unicode */