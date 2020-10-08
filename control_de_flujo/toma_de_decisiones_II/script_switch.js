/** vendo camisas y segun el color pongo un precio distinto */

//colores : 'blanco' : 10, 'verde' : 15, 'azul' : 20;

function priceByColor(color){
    var price;

    switch(color.toLowerCase()){
        case 'blanco' : price = 10;
            break;
        case 'verde' : price = 15;
            break;
        case 'azul' : price = 20;
            break;
        default: price = 0;
    }

    return price;
}


//Manera mas compacta utilizando un objeto con una estructura de datos
function priceByColor2(color){
    let pricesByColor = {
        'blanco' : 10,
        'verde' : 15,
        'azul' : 20
    };

    return pricesByColor[color.toLowerCase()];
}