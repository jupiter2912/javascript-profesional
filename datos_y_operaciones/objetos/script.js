//formas de declarar objetos

//forma literal de definir un objeto
var casa = {
    habitaciones : 3,
    garaje : true
}

/**Con Object. tenemos metodos para nuestro objeto */

//**PATRONES */


//Patron factoria
function createActor(name,speed,strength){

    //primero creo un objeto
    var obj = new Object();
    obj.name = name;
    obj.speed = speed;  
    obj.strength = strength;
    obj.salute = function(){
        console.log(this.name);
    };
    return obj;
}

//para instanciar el objeto
var manolawer = createActor("Manolawer",29, "Magic");


//** ------------------------------------------------------- */

//Patron constructor
function Actor(name, speed, strength){
    this.name = name;
    this.speed = speed;
    this.strength = strength;
    this.sayName = function(){
        alert(this.name);
    }
}

var mensajeitor = new Actor("Mensajeitor",69,"Communications");