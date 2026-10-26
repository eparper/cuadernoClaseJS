/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");
let aniadirPersona = document.getElementById("aniadirPersona");
let estudiante = document.getElementById("estudiante");
let solucionEjer1estu = document.getElementById("solucionEjer1estu");



//persona
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let generoF = document.getElementById("generoF");
let generoM = document.getElementById("generoM");

//estudiante
let curso = document.getElementById("curso");
let grupo = document.getElementById("grupo");
let registrarEstudiante = document.getElementById("registrarEstudiante");

//objeto de ejemplo
let objPersona = {nombre: "María", edad: 19, genero: "F"};

let arrayPersonas = [];

let arrayEstudiantes = [];


/************************************************************ */
arrayPersonas.push(objPersona);
solucionEjer1.innerHTML = "Personas: <br><br>";


aniadirPersona.onclick = function () {

    try {

        solucionEjer1.innerHTML = "";

        
        if (nombre.value === "") {
            throw "El campo nombre no puede estar vacío";
        }

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (edad.value === "") {
            throw "El campo edad no puede estar vacío";
        }

        if (isNaN(edad.value)) {
            throw "Debes introducir una edad";
        }

        num = Number(edad.value);

        if (!Number.isInteger(num)) {
            throw "La edad debe ser un número entero";
        }

        if (!generoF.checked && !generoM.checked) {
            throw "Debes elegir un género";
        }

        //añadimos la persona al array
        nuevaPersona = {nombre: nombre.value, edad: edad.value, 
                        genero: ((generoF.checked)?generoF.value:generoM.value)};

        arrayPersonas.push(nuevaPersona);

        for (let oPersona of arrayPersonas) {

            solucionEjer1.innerHTML += obtDetalles(oPersona) + "<br>";
            rellenarSelect(oPersona.nombre);
        }
        

        

        
    }
    catch (err) {
        solucionEjer1.style.color = "red";
        solucionEjer1.innerHTML = " " + err;
    }

}


//Estudiante
solucionEjer1estu.innerHTML = "Estudiantes: <br><br>";

registrarEstudiante.onclick = function () {

    let opcionSeleccionada = estudiante.options[estudiante.selectedIndex];
    let nuevoEstudiante = {};

    console.log(opcionSeleccionada);

    for (let obj in arrayPersonas) {
        console.log("hola");
        //si el nombre coincide con el seleccionado en el select:
        if (obj.nombre == opcionSeleccionada.text) {
            nuevoEstudiante.nombre = obj.nombre;
            nuevoEstudiante.edad = obj.edad;
            nuevoEstudiante.genero = obj.genero;
            console.log(opcionSeleccionada.text);
            //las dos propiedades nuevas:
            nuevoEstudiante.curso = curso.value;
            nuevoEstudiante.grupo = grupo.value;

        }
    }

    //añadimos el estudiante
    registrar(nuevoEstudiante);

    

    //mostramos los estudiantes:
    for (let oEstudiante of arrayEstudiantes) {

        solucionEjer1estu.innerHTML += obtDetalles(oEstudiante) + "<br>";
        
    }
}









/************************************************************ */

function obtDetalles(objeto) {

    let cadena = "";

    for (let propiedad in objeto) {
        cadena += propiedad + ": " + objeto[propiedad] + " <br>";
    }

    return cadena;
}

function rellenarSelect(nombrePersona) {

    
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.textContent = nombrePersona;

    estudiante.appendChild(nuevaOpcion);
}

function registrar(objeto) {

    arrayEstudiantes.push(objeto);

    
}