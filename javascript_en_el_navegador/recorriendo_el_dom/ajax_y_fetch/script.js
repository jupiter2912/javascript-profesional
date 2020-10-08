
/**EJEMPLO AJAX */

var http_request = false;

function makeRequest(url) {

    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);

}

function alertContents() {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            alert(http_request.responseText);
        } else {
            alert('Hubo problemas con la petición.');
        }
    }

}


//** FETCH ********************* */ es como se hace en la actualidad para los navegadores modernos

//Ejemplo de fetch (ES UNA PROMESA, LO SE, PORQUE LUEGO TIENE UN METODO .then)
fetch('https://api.chucknorris.io/jokes/random')
  .then((resp) => resp.json()) // Transform the data into json (vuelve a ser otra promesa)
  .then(function(data) {
    // Create and append the li's to the ul
    console.table(data);
  });