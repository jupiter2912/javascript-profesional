// tengo que iterar sobre todos los elementos?
// que estructura tengo que buscar?

//bucles 
    //for
        //for (for normal)
        //forEach (metodo nativo de los arrays)
        //for  ..of (recorrer Iterables)
        //for ..in (Recorrer objetos)
    //while / do while

//Map / Reduce / Filter / fill / repeat (metodos nativos de array)
//Interpolacion de valores ES6

//for 
var list = [1,2,3,4,5,6];

for(let i = 0; i<list.length -1; i++){
    console.log(list[i]);
}

//for each
list.forEach(function loop(el) {console.log(el)});

list.forEach((el) => console.log(el)); //con funcion flecha

//for ..of

for(let idx of list){
    console.log(idx);
}

//for ..in (mas para objetos)

var obj = {cad : 'Pedro', cad2 : 'Juan'};
for(let k in obj){
    console.log(obj[k]);
}

//manera mas funcional con funcion flecha
list.map((el)=>console.log(el));

//solo quiero los elementos pares
list.filter((el) => console.log(el % 2 == 0) ? el : '');

function pares(el){
    return (el % 2) == 0;
}

// y despues 
list.filter(pares);

//funcion que me diga los pares y los impares
function oddOrEven(oddOk){

    //odd es par por lo tanto true
    return oddOk
        ? function(el){
            return (el % 2) == 0;
        }

        : function(el){
            return (el  % 2) !=0;
        };
}

list.filter(oddOrEven(true)); // 2,4,6
list.filter(oddOrEven(false)); // 1,3,5