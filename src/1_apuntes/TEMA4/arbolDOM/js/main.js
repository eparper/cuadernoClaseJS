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