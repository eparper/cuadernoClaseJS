const info = document.getElementById("info");

const login = document.getElementById("login");

login.focus();

console.log(document.activeElement);


for (let input of document.forms[0]) {
    input.addEventListener("focus", function (e) {
        input.style.border = "5px solid red";
    });
}

for (let input of document.forms[0]) {
    input.addEventListener("blur", function (e) {
        input.style.border = "1px solid black";
    });
}


// let elemFoco = document.activeElement;
// elemFoco.style.border = "5px solid red";

// elemFoco.addEventListener("focus", function (e) {

//     elemFoco.style.border = "5px solid red";


// });

// elemFoco.addEventListener("blur", function (e) {

//     elemFoco.style.border = "1px solid black";
//     elemFoco = document.activeElement;

// });

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


//*************************************** */
const listaDespColores = document.getElementById("colores");

listaDespColores.addEventListener("change", function (e) {

    //e.target.value es lo mismo que this.value
    info.innerHTML = "Color seleccionado: " + e.target.value;
    document.body.style.backgroundColor = this.value;

    console.dir(this.options);
    console.dir(this.selectedIndex);
    console.dir(this.options[this.selectedIndex]);
    console.dir(this.options[this.selectedIndex].text);

    console.dir(this.selectedOptions);
});

/************************************ */
//escribir todos los caracteres menos la E
const taMenosE = document.getElementById("taMenosE");

taMenosE.addEventListener("input", function (e) {

    let ultimaLetra = e.target.value.charAt(e.target.value.length - 1);

    if ((ultimaLetra == "e") || (ultimaLetra == "E"))
    {
        e.target.value = e.target.value.substring(0, e.target.value.length-1);
    }
});

document.getElementById("range1").addEventListener("input", (e) => {

    info.innerHTML = e.target.value;
});