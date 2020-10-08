//** *************** FALSY VALUES */

// false
// undefined
// null
// 0
// NaN
// Cadena Vacia ("")


//** EVALUACION PEREZOSA */ //sI LA primera premisa no se cumple el sistema se salta el procedimiento

// AND ( && ) 
// OR  ( || )
// NOT ( | )



/** BIFURCACIONES */

// Si el valor pasado por parametro es > 100 entonces escries "SUPER
// en otro caso, escribes "NORMAL"
function decide(dimension){
    if(dimension > 100){
        console.log('SUPER');
    }
    else{
        console.log('NORMAL');
    }
}

decide(250);

//** operador ternario */

function decide2 (dimension){
    
    let texto_mayor_100 = dimension > 100 ? 'SUPER' : 'NORMAL';
    return texto_mayor_100;
}

decide2(150);

//forma mas abreviada
function decide3 (dimension){ 
    return texto_mayor_100 = dimension > 100 ? 'SUPER' : 'NORMAL';
    // console.log(dimension > 100 ? 'SUPER': 'NORMAL');// OTRA MANERA
}

decide3(150);

