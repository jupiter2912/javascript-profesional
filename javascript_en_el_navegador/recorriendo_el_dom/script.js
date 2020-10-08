//dentro de una pagina web, con las devTools del navegador
//podemos inspeccionar el elemento y en console
// $0 (nos mira el objeto que estemos inspeccionando)


//Ejemplo para buscar todos los enlaces de una página

document.querySelectorAll('a[href]');

[].slice.call($0.querySelectorAll('a[href]')).map((el) => el.href);

//Ejemplo para capturar todos los nodos de texto

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) {
    a.push(n);
  }
  return a;
}


//******************** EVENTOS */

//Eventos en el Navegador
//Cómo monitorizar un evento
 monitorEvents(window, "resize");

//Cómo monitorizar una función
 monitor(nombre_de_la_funcion);

//Establecer un breakpoint en la llamada a una función
 debug(nombre_de_la_funcion);

 //añadir un listener para cuando se haga click
 document.addEventListener("click",function (evt){
     console.log(evt);
 })


