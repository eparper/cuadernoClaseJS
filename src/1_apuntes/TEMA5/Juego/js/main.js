import './../css/style.css';
import {obstaculos} from './objetos.js';

const personaje = document.getElementById("personaje");
const personajeStyle = window.getComputedStyle(personaje);

let positionLeft = personajeStyle.getPropertyValue("left");
positionLeft = new Number(positionLeft.substring(0, positionLeft.length-2));

let positionTop = personajeStyle.getPropertyValue("top");
positionTop = new Number(positionTop.substring(0, positionTop.length-2));

let anchoPersonaje = personajeStyle.getPropertyValue("width");
anchoPersonaje = new Number(anchoPersonaje.substring(0, anchoPersonaje.length-2));

const velocidad = 10;

dibujaObstaculos();

document.addEventListener("keydown", function (e) {
    console.log(`Pulsada: ${e.key} y pulsada?: ${e.repeat}`)
    if (e.repeat) {
        switch (e.key) {
            case "ArrowRight":
                if (!colision(e.key)) {
                    positionLeft += velocidad;
                    console.log(`Posición: ${positionLeft}`);
                    //personaje.setAttribute("left", newLeft + "px");
                    personaje.style.left = positionLeft + "px";
                }
                
                break;

            case "ArrowLeft":
                if (!colision(e.key)) { //preguntamos por adelantado si está colisionando, si no está colisionando, se mueve
                    positionLeft -= velocidad;

                    console.log(`Posición: ${positionLeft}`);
                    //personaje.setAttribute("left", newLeft + "px");
                    personaje.style.left = positionLeft + "px";
                }
                break;

            case "ArrowDown":
                if (!colision(e.key)) { 
                    positionTop += velocidad;

                    console.log(`Posición: ${positionTop}`);
                    //personaje.setAttribute("left", newLeft + "px");
                    personaje.style.top = positionTop + "px";
                }
                break;

            case "ArrowUp":
                if (!colision(e.key)) { 
                    positionTop -= velocidad;

                    console.log(`Posición: ${positionTop}`);
                    //personaje.setAttribute("left", newLeft + "px");
                    personaje.style.top = positionTop + "px";
                }
                break;
        }
    }
});

function dibujaObstaculos() {
    for (let elem of obstaculos) {
        let obstaculo = document.createElement("div");
        obstaculo.style.position = "absolute";
        obstaculo.style.left = elem.x + "px";
        obstaculo.style.top = elem.y + "px";
        obstaculo.style.width = elem.ancho + "px";
        obstaculo.style.height = elem.alto + "px";
        obstaculo.style.backgroundColor = elem.colorFondo;

        document.body.appendChild(obstaculo);
    }
}

function colision(direc) {

    let colision = false;

    switch (direc) {
        case "ArrowRight":
            for (let elem of obstaculos) { 
                //preguntamos si el personaje 
                if ((positionLeft + anchoPersonaje) >= elem.x) { //si puedo pasar horizontalmente
                    if (positionTop < (elem.y + elem.alto)) { //si puedo pasar por debajo
                        colision = true;
                        console.log("Colisión");
                        break;
                    }
                    
                }
            }
            
            
            break;

        case "ArrowLeft":
            
            break;

        case "ArrowDown":
            
            break;

        case "ArrowUp":
            
            break;
    }

    return colision;
}