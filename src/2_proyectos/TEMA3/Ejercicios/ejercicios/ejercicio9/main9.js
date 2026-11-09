/**********************EJERCICIO 2************************ */
let solucionEjer9 = document.getElementById("solucionEjer9");

let alto = window.innerHeight;
let ancho = window.innerWidth;

solucionEjer9.innerHTML = "Alto: " + alto + "px. Ancho: " + ancho + "px.";

dispositivo(ancho);

window.onresize = function () {

    solucionEjer9.innerHTML = "";

    let alto = window.innerHeight;
    let ancho = window.innerWidth;

    solucionEjer9.innerHTML = "Alto: " + alto + "px. Ancho: " + ancho + "px.";

    dispositivo(ancho);

    
}

function dispositivo(ancho) {
    if (ancho < 768) {
        solucionEjer9.innerHTML += "<br><br>MÓVIL";
    }
    else if (ancho < 1024) {
        solucionEjer9.innerHTML += "<br><br>TABLET";
    }
    else {
        solucionEjer9.innerHTML += "<br><br>DESKTOP";
    }
}





