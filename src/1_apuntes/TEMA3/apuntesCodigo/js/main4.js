const h21 = document.getElementById("h21");

let myArray = new Array();
myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push("78.98");
myArray.push(new Array(1,2,3));
myArray.push({marca: "Ford", matricula: "123456A"});
myArray.push(false);
myArray.push(Math.PI);

for (let index = 0; index < myArray.length; index++) {
    //es un objeto, tiene la propiedad marca y la propiedad matricula
    if ((typeof myArray[index] == "object") && Object.hasOwn(myArray[index], "marca") && Object.hasOwn(myArray[index], "matricula"))
        h21.textContent += "{Marca: " + myArray[index].marca + ", Matricula:" + myArray[index].matricula + "} - ";
    else
        //el último elemento
        if (index == myArray.length - 1)
            h21.textContent += myArray[index];
        else
            h21.textContent += myArray[index] + " - ";


}


//************FILTER************** */
let myBooleanArray = myArray.filter(elem => {
    return (typeof elem == "boolean");
});

h21.textContent = "";

for (let elem of myBooleanArray) {
    h21.textContent += elem + " - ";
}


//************mapas*************** */
//las claves dentro de un mismo mapa no tienen que ser del mismo tipo
//pero tienen que ser únicas
let myMap = new Map();
myMap.set(1, "Pepe");
myMap.set(2, "María");
myMap.set(true, "Antonio");
myMap.set("123456c", "Ana");
myMap.set(1, "Nombre falso"); //este ya estaba, la key 1 se machaca

h21.textContent = "";

for ([clave, valor] of myMap) {
    h21.innerHTML += `Clave ${clave}: ${valor}<br>`;
}

h21.innerHTML += `Tamaño del mapa: ${myMap.size}`;

//************FECHAS************* */
let myDate = new Date();

h21.innerHTML = myDate;

//******************************** */

let myDate2 = new Date(1980, 6, 31, 3, 45, 56, 23);

h21.innerHTML = myDate2;

//**************************** */
let myBirthDate = new Date(1980, 6, 31);
let dateNow = new Date();

h21.innerHTML = "llevas vivo: " + (dateNow - myBirthDate) / (1000 * 60 * 60 * 24 * 365) + " años.";

const calendario = document.getElementById("calendario");

calendario.oninput = function () {
    h21.innerHTML = "Desde la fecha seleccionada y tu nacimiento han pasado " + (new Date(this.value) - myBirthDate) / (1000 * 60 * 60 * 24 * 365) + " años.";
}

h21.innerHTML = dateNow.getTimezoneOffset(); //nos dice que hay que restar 2 horas (-120) 


h21.innerHTML = dateNow.toLocaleString();