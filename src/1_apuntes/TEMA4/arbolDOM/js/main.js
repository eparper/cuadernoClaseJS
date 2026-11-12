const info = document.getElementById("info");




//const opciones = document.getElementsByTagName("lii"); //no existe, por eso lo hacemos con try catch


// try {

//     const opciones = document.getElementsByTagName("li");

//     console.log("Número de opciones de la lista: " + opciones.length);
//     console.log("Opciones tiene: " + opciones);

//     //mostramos la opción 3
//     info.innerHTML = opciones[2].innerHTML;
// }
// catch (err) {
//     console.error(err);
// }


//otra forma 

// const opciones = document.getElementsByTagName("form"); //no hay form

// if (opciones.length > 0) { //habría que preguntar por el length si es mayor de 0

//     console.log("Número de opciones de la lista: " + opciones.length);
//     console.dir("Opciones tiene: " + opciones);

//     //mostramos la opción 3
//     info.innerHTML = opciones[2].innerHTML;
// }
// else 
//     throw Error ("No existen formularios");


//para paises

// const opciones2 = document.getElementById("paises").getElementsByTagName("li"); //no hay form

// if (opciones2.length > 0) { //habría que preguntar por el length si es mayor de 0

//     console.log("Número de opciones de la lista: " + opciones2.length);
//     console.dir("Opciones tiene: " + opciones2);

//     //mostramos la opción 3
//     info.innerHTML = opciones2[2].innerHTML;
// }
// else 
//     throw Error ("No existen opciones de lista");


//GETELEMENTSBYNAME

const opRadio = document.getElementsByName("edad");

//vaciamos esto antes
info.innerHTML = "Opciones del radio edad: ";
for (let op of opRadio) {
    info.innerHTML += op.value + ", ";
}

//************************************************* */
//            EJERCICIO CAMBIAR COLORES
//************************************************* */
const bCambiarColores = document.getElementById("cambiarColores");

//Array.from para que no modifique los arrays internamente
console.log(document.getElementsByClassName("pares")); 
let elementosPares = Array.from(document.getElementsByClassName("pares"));
let elementosImpares = Array.from(document.getElementsByClassName("impares"));

bCambiarColores.onclick = function () {

    //para que se cambien los pares
    for (elem of elementosPares) {

        if (elem.className == "pares") {
            elem.className = "impares";
        }
        else { //para que sea como un interruptor
            elem.className = "pares";
        }
    }

    //para que se cambien los impares
    for (elem of elementosImpares) {

        if (elem.className == "pares") {
            elem.className = "impares";
        }
        else { //para que sea como un interruptor
            elem.className = "pares";
        }
    }
}


//************************************************* */
//            CREAR Y AÑADIR NODOS
//************************************************* */
const nuevoPais = document.getElementById("nuevoPais");
const btnNuevoPais = document.getElementById("btnNuevoPais");
const error = document.getElementById("error");
const paises = document.getElementById("paises");

btnNuevoPais.onclick = function () {

    let listaPaises = paises.getElementsByTagName("li");



    try {
        
        //si está vacío
        if (nuevoPais.value == "") {
            throw Error("El campo no puede estar vacío.")
        }

        //añadir el elemento
        //let nuevoNodoPais = document.createElement("li");
        let nuevoNodoPais = createNode("li", nuevoPais.value, "");

        //estilos
        // if (listaPaises.length % 2 == 0) { //impares para el usuario
        //     nuevoNodoPais.className = "impares";
        // }
        // else 
        //     nuevoNodoPais.className = "pares";
        
        //el texto del li
        //let nuevoNodoPaisText = document.createTextNode(nuevoPais.value);
        //nuevoNodoPais.appendChild(nuevoNodoPaisText);

        paises.appendChild(nuevoNodoPais);

        //let nuevoNodo = createNode("a", "Registrarse", "", [{href:"#"}, {name:"menu"}], "background-color:pink;");
        let nuevoNodo = createNode("a", "Registrarse", "", "background-color:pink;");
        if (nuevoNodo) {
            //nuevoNodo.href = "#";

            document.getElementById("paises").insertBefore(nuevoNodoPais, listaPaises[2]);
            document.body.appendChild(nuevoNodo);
            info.innerHTML = "<span style='color:green;'>No se ha podido insertar el nodo</span>";
        }
        else {
            info.innerHTML = "<span style='color:red;'>No se ha podido insertar el nodo</span>";
        }
        



    }
    catch (err) {
        error.innerHTML = err;
    }
}


//---------------------------------------------
//                 FUNCIÓN CREARNODOS
//---------------------------------------------
/**
 * @param string tipo
 * @param string Texto
 * @param string id
 * @param string styles
 * @param array props
 * @return node o null si no se ha podido crear el nodo
 */
function createNode(tipo, texto, id, styles) { //controlar con arguments[] si solo se llaman dos parámetros

    let elemento = null;

    if ((tipo) && (typeof tipo === "string")) //si le paso undefined o null | 
        elemento = document.createElement(tipo);    
    else
        return null; //porque el throw error termina la aplicación
        //throw new Error("Debes indicar el tipo de nodo en un string");

    if ((texto != "") && (typeof texto === "string")) { //por ejemplo si es una imagen
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if (id != "")
        elemento.id = id;

    if ((styles) && (typeof styles === "string"))
        elemento.style = styles;

    // if ((props)) {

    //     let claves = Object.values(props);
    //     console.log(claves);

    //     for (indice in props) {
            
    //         let propiedad = claves[indice];

    //         console.log(propiedad);

    //         elemento.propiedad[indice] = props[indice];
    //         console.log(elemento.propiedad[indice]);
    //     }
    // }

    return elemento;

}

// document.getElementById("bBorraPais").onclick = function () { 

//     let lista = document.getElementById("paises");

//     let opcionesLista = lista.getElementsByTagName("li");

//     if (opcionesLista.length > 3) {
//         let elemBorrado = opcionesLista[2].parentNode.removeChild(opcionesLista[2]); //para devolver el elemento borrado
//         console.log(elemBorrado);
//     }
// }

//SI NO QUEREMOS RECUPERAR EL ELEMENTO BORRADO:
// document.getElementById("paises").getElementsByTagName("li")[2].remove();

//**************************************************** */
let enlaceImg = createNode("a", "Cambiar imagen", "", [], "background-color:green;border-radius:8px;color:white;padding:0.2%;");
let img1 = document.getElementById("img1");
//esto metido mejor en un try catch.
//esto comprueba si existe y el tamaño 
if (document.getElementsByClassName("section1").length >= 2) {
    document.getElementsByClassName("section1")[1].appendChild(enlaceImg);

    console.log(enlaceImg);

    enlaceImg.onclick = function () {
        img1.src = "./../../../assets/imagen2.jpg";
    }
}

//----------
const sections1 = document.getElementsByClassName("section1");

sections1[1].getElementsByTagName("img")[0].setAttribute("src", "./../../../assets/imagen1.jpg");

let borrarAtrib = createNode("a", "Borrar imagen", "", [], "background-color:green;border-radius:8px;color:white;padding:0.2%;");
//esto metido mejor en un try catch.
//esto comprueba si existe y el tamaño 
if (sections1.length >= 2) {
    sections1[1].appendChild(enlaceImg);
    sections1[1].appendChild(borrarAtrib);

    console.log(enlaceImg);

    enlaceImg.onclick = function () {

        //sections1[1].getElementsByTagName("img")[0].src = "./../../../assets/imagen2.jpg";
        sections1[1].getElementsByTagName("img")[0].setAttribute("src", "./../../../assets/imagen2.jpg");
        
    }

    //borrar atributo
    borrarAtrib.onclick = function () {
        sections1[1].getElementsByTagName("img")[0].removeAttribute("src");
    }
}

//----------------
//./../../../assets/imagen1.jpg en el index

let src = sections1[1].getElementsByTagName("img")[0].getAttribute("src");

//*************************************** */
const bloquearEscribir = document.getElementById("bloquearEscribir");
const cadena2 = document.getElementById("cadena2");

bloquearEscribir.onclick = function () {

    

    if (bloquearEscribir.innerText == "Bloquear") {
        bloquearEscribir.innerText = "Desbloquear";
        cadena2.setAttribute("readonly", "true");
        cadena2.setAttribute("style", "background-color:grey;");
    }
    else {
        bloquearEscribir.innerText = "Bloquear";
        cadena2.removeAttribute("readonly");
        cadena2.setAttribute("style", "background-color:white;");
    }


}

document.getElementById("bDevuelveImpares").onclick = function () {

    let lista2 = document.querySelectorAll(".section1 li");

    let arrayImpares = new Array();

    for (let paisImpar = 0; paisImpar < lista2.length; paisImpar += 2) {
        

        arrayImpares.push(lista2[paisImpar].innerText);

    }

    console.dir(arrayImpares);
}

// document.getElementById("aModoNoche").onclick = function () {

//     document.body.style.backgroundColor = "#C9BDBB";
//     document.body.style.color = "#EDEBEB";

//     const buttons = document.getElementsByTagName("button");
//     for (btn of buttons) {
//         btn.style.backgroundColor = "darkgrey";
//         btn.style.color = "darkwhite";
//     }

//     const links = document.getElementsByTagName("a");
//     for (ln of links) {
//         ln.style.backgroundColor = "#8F84B0";
//         ln.style.color = "#EAE9F0";
//     }
    
//     console.log(links);
// }

//CÓMO COGER ESTILOS. CON GETCOMPUTEDSTYLE Y GETPROPERTYVALUE
document.getElementById("aModoNoche").onclick = function () {

    let buttonStyle = window.getComputedStyle(document.getElementsByTagName("button")[0]);

    if (buttonStyle.getPropertyValue("background-color") == "rgb(169, 169, 169)") {
        //estoy en modo noche, cambia a modo día
        this.innerText = "Cambiar a modo día";

        document.body.className = "";

    }
    else {
        document.body.className = "modoNoche";
        this.innerText = "Cambiar a modo día";
    }

    // if (this.innerText = "Cambiar a modo noche") {
    //     document.body.className = "modoNoche";

    //     this.innerText = "Cambiar a modo día";

    //     const buttons = document.getElementsByTagName("button");

    //     let buttonStyle = window.getComputedStyle(buttons[0]);
    // }
    

    // console.log("Fondo de los botones: " + buttonStyle.getPropertyValue("background-color"));
    // console.log("Color de los botones: " + buttonStyle.getPropertyValue("color"));


}

let bSustituye = document.getElementById("bSustituye");
let paises2 = document.getElementById("paises");
let listaPaises = paises.getElementsByTagName("li");

bSustituye.onclick = function () {

    let paisSustituir = createNode("li", document.getElementById("nuevoPais").value, "", "");

    paises2.replaceChild(paisSustituir, listaPaises[2]);
}

let bClonaLista = document.getElementById("bClonaLista");

bClonaLista.addEventListener("click", () => {

    let section = document.getElementById("s4");

    let clon = paises2.cloneNode(true);

    console.log(clon);

    clon.appendChild(createNode("li", "Noruega", "", ""));

    section.appendChild(clon);
});

//************************PROPIEDADES DE LOS NODOS************************** */
console.log("Atributos: " + paises2.attributes[0].name + ". Valor del atributo: " + paises2.attributes[0].value);

// for (let elem of paises2.childNodes) {
//     console.log("Elemento con childNodes: " + elem);
// }

for (let elem of paises2.children) {
    console.log(elem);
}

console.dir(paises2.firstChild); //devuelve el elemento, que puede ser un comentario
console.dir(paises2.firstElementChild); //NODOS CON ELEMENT (ETIQUETAS HTML)
console.dir(paises2.children[2].nextSibling);
console.dir(paises2.children[2].nextElementSibling);