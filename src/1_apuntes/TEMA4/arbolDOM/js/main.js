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

        let nuevoNodo = createNode("a", "Registrarse", "", [{href:"#"}, {name:"menu"}], "background-color:pink;");
        if (nuevoNodo) {
            //nuevoNodo.href = "#";
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
function createNode(tipo, texto, id, props, styles) { //controlar con arguments[] si solo se llaman dos parámetros

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

    if ((props)) {

        let claves = Object.values(props);
        console.log(claves);

        for (indice in props) {
            
            let propiedad = claves[indice];

            console.log(propiedad);

            elemento.propiedad[indice] = props[indice];
            console.log(elemento.propiedad[indice]);
        }
    }

    return elemento;

}

document.getElementById("bBorraPais").onclick = function () { 

    let lista = document.getElementById("paises");

    let opcionesLista = lista.getElementsByTagName("li");

    if (opcionesLista.length > 3) {
        let elemBorrado = opcionesLista[2].parentNode.removeChild(opcionesLista[2]); //para devolver el elemento borrado
        console.log(elemBorrado);
    }
}

//SI NO QUEREMOS RECUPERAR EL ELEMENTO BORRADO:
document.getElementById("paises").getElementsByTagName("li")[2].remove();
