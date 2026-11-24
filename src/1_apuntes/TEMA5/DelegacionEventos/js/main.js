const info = document.getElementById("info");

// const paisesLi = document.getElementById("paises").getElementsByTagName("li");


// for (let pais of paisesLi) {
//     pais.addEventListener("click", pulsaPais);
// }


// // function pulsaPais(e) {
// //     console.dir(`${e.target}`); //elemento que tiene asignado el evento
// //     console.dir(`${e.currentTarget}`); //elemento exacto en el que he pinchado
// // }

// function pulsaPais(e) {
//     //se puede comprobar también si es una lista

//     //si la lista está vacía se elimina también el padre
//     if (e.target.parentNode.getElementsByTagName("li").length == 0) {
//         e.target.parentNode.remove();
//     }

//     console.log(e.target.parent);
//     e.target.remove();
// }


//********************************************* */
//         EVENTOS DE FORMULARIOS
//********************************************* */

info.innerHTML = `Número de formularios en la app: ${document.forms.length}`;


if (document.forms.length > 1) {
    const primerForm = document.forms[0];

    console.log(`Primer formulario tiene: ${primerForm.elements.length} elementos`);
}

/**************************** */

// document.getElementById("aForm1").onclick = function () {
//     if (document.forms.length > 1) {
//         const primerForm = document.forms[0];
//         console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`);
//         console.log(`Login introducido: ${primerForm.elements[0].value}`);
//     }
// }

document.getElementById("aForm1").onclick = function () {
    
    const primerForm = document.forms.form1; //form1 es el id

    //deshabilitamos el primer campo
    primerForm.elements[0].placeholder = "Campo actualmente deshabilitado";
    primerForm.elements[0].disabled = true;



    console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`);
    console.log(`Login introducido: ${primerForm.elements[0].value}`);

}

/**************************** */

for (let radioElement of document.getElementsByName("edades")) {

    radioElement.addEventListener("change", checkRadioEdades);

    if (radioElement.checked) {
        info.innerHTML = `Radio pulsado: ${radioElement.value}`;
    }
}

function checkRadioEdades(e) {

    for (let radioElement of document.getElementsByName("edades")) {

        if (radioElement.checked) {
            info.innerHTML = `Valor del radio pulsado ${radioElement.value}`;
            break; //termina un bucle
        }
    }
}