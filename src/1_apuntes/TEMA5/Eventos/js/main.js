let bUnaVez = document.getElementById("bUnaVez");

bUnaVez.addEventListener("click", () => {

    bUnaVez.style.backgroundColor = "#8a2be2";

}, {once: true});



//párrafos
document.getElementById("p1").addEventListener("click", ocultar);
document.getElementById("p2").addEventListener("click", ocultar);
document.getElementById("p3").addEventListener("click", ocultar);

function ocultar () {
    //this.style.display = "none";
    this.style.visibility = "hidden";
}


// EJERCICIO 1 : volver a recuperarlos si pinchas 

//----------------------------------------
//----------------------------------------
/**
 * Eventos
 */

//----------------------------------------
let veces = false;


for (const elemDiv of document.getElementsByTagName("div")) {
  // Pasamos la MISMA función 'gestionarEventos' a los 3 eventos
  elemDiv.addEventListener("mouseenter", gestionarEventos);
  elemDiv.addEventListener("mouseleave", gestionarEventos);


  // Al primer div le ponemos { once: true } en el click; a los demás no
  if (!veces) {
    elemDiv.addEventListener("click", gestionarEventos, { once: true });
    veces = true;
  } else {
    elemDiv.addEventListener("click", gestionarEventos);
  }
}


// Una sola función maneja todos los eventos usando switch(e.type)
function gestionarEventos(e) {
  switch (e.type) {
    case "click":
      e.currentTarget.style.backgroundColor = "blue";
      let pLocal = e.currentTarget.querySelector("p");


      if (pLocal.style.visibility === "hidden") {
        pLocal.style.visibility = "visible";
      } else {
        pLocal.style.visibility = "hidden";
      }
      break;


    case "mouseenter":
      e.currentTarget.style.backgroundColor = "red";
      break;


    case "mouseleave":
      e.currentTarget.style.backgroundColor = "green";
      break;
  }
}


// ===================================================================================


const btnClickMe = document.getElementById("btnClickMe");
const primerParrafo = document.getElementById("p1");
const segundoParrafo = document.getElementById("p2");
const tercerParrafo = document.getElementById("p3");


// Evento para crear un nuevo párrafo al pulsar el botón
btnClickMe.addEventListener(
  "click",
  () => {
    let nuevoNodo = createNode("p", "Hola", "", "");
    document.body.appendChild(nuevoNodo);
  },
  true,
);


// ===================================================================================


/**
 * Función para crear nodos
 *
 * @param string tipo
 * @param string texto
 * @param string id
 * @param string estilos
 * @param array props
 *
 * @return node o null si no se ha podido crear el nodo
 */
function createNode(tipo, texto, id, estilos, props) {
  let elemento = null;
  if (tipo && typeof tipo === "string") {
    elemento = document.createElement(tipo);
  } else {
    return null;
  }


  if (texto != "" && typeof texto === "string") {
    let elementoText = document.createTextNode(texto);
    elemento.appendChild(elementoText);
  }


  if (id != "") {
    elemento.id = id;
  }


  if (estilos && typeof estilos === "string" && estilos != "") {
    elemento.style = estilos;
  }


  return elemento; // Devolvemos el nodo creado
}


//------------------------------------
//Eventos de teclado (MÍO)
//------------------------------------
const teclaPulsada = document.getElementById("teclaPulsada");
//VER SI ESTÁ PULSADA UNA TECLA
// document.body.addEventListener("keydown", (e) =>{

//     teclaPulsada.innerHTML += `<hr>Has pulsado la tecla con KEY: ${e.key}. Con CODE: ${e.code}`;
//     //QUE MI APLICACIÓN DETECTE ALT+N
//     if (e.code == "KeyN" && e.altKey) { //con code da igual si es mayus o minus
//         teclaPulsada.innerHTML = "";
//     }
// });

// document.body.addEventListener("keydown", (e) =>{

//     e.preventDefault(); //no pilla N aunque le pongamos esto de preventDefault porque no le da tiempo, 
//                         //ya que Ctrl+N abre una nueva ventana en el navegador

//     teclaPulsada.innerHTML += `<hr>Has pulsado la tecla con KEY: ${e.key}. Con CODE: ${e.code}`;
//     //QUE MI APLICACIÓN DETECTE CTRL+N
//     if (e.code == "KeyN" && e.ctrlKey) { //con code da igual si es mayus o minus
//         teclaPulsada.innerHTML = "";
//     }
// });

//no es recomendado usar las combinaciones porque el navegador ya tiene combinaciones de teclas
//--

const ta1 = document.getElementById("ta1");

// ta1.addEventListener("keydown", (e) =>{

//     teclaPulsada.innerHTML += `<hr>Has pulsado la tecla con KEY: ${e.key}. Con CODE: ${e.code}`;
//     //QUE MI APLICACIÓN DETECTE CTRL+N
//     if (e.code == "KeyN") { //con code da igual si es mayus o minus
//         e.currentTarget.value = "No se permite la n"; //pero se escribe la n
//     }
// });

// EJERCICIO 2 : cuánto tiempo está una tecla pulsada

// EJERCICIO 3 : CUANDO EL RATÓN SE MUEVA (MOUSEMOVE) LAS COORDENADAS VAN CAMBIANDO
// const pCoord = document.getElementById("pCoord");

// //no se llama a otro elemento, sino a body
// document.body.addEventListener("mousemove", (e) =>{
    
//     //Esquina superior izquierda de la página (incluye lo desplazado con scroll)
//     pCoord.innerHTML = ` (page --> X: ${e.pageX} page --> Y: ${e.pageY})`;
//     //Esquina superior izquierda de la ventana visible
//     pCoord.innerHTML += ` <br>(client --> X: ${e.clientX} client --> Y: ${e.clientY})`;
//     //Esquina superior izquierda de la pantalla
//     pCoord.innerHTML += ` <br>(screen --> X: ${e.screenX} screen --> Y: ${e.screenY})`;
// });

// EJERCICIO 4 : ARRASTRAR ELEMENTOS CON EVENTOS DE RATÓN PERO NO EN TIEMPO REAL, SINO
                //CUANDO SE SUELTE EL RATÓN. SE HACE TAMBIÉN CON POSITION ABSOLUTE

const submit1 = document.getElementById("submit1");

submit1.addEventListener("click", function (e) {

    //debe ir la primera línea del evento
    e.preventDefault(); //para que no se envíe el formulario en botones input type submit

    try {
        

    }
    catch (err) {

    }

});