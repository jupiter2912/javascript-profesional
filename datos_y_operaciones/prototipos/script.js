//Prototipos

//propiedades que componen todos
let pokemon = {
    eats : true,
    drinks(){
        console.log("Glub, glub...");
    }
};


//especializacion (compartes elementos comunes, pero tb tienes especiales)

let charmander = {
    fire : true,
    power : 20,
    __proto__ : pokemon //charmander hereda de pokemon
};

//otra especializacion mas que tendria una cadena prototipica
//este heredaria de charmander y a su vez de pokemon

let charizard = {
    earLength : 10,
    power :10000,
    __proto__ : charmander
};

//formas de ver propiedades
console.log(charizard.power); // 10000