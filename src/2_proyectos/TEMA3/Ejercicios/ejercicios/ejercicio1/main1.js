/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");
let aniadirPersona = document.getElementById("aniadirPersona");
let estudiante = document.getElementById("estudiante");
let solucionEjer1estu = document.getElementById("solucionEjer1estu");
let solucionEjer1profe = document.getElementById("solucionEjer1profe");


//persona
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let generoF = document.getElementById("generoF");
let generoM = document.getElementById("generoM");

//estudiante
let curso = document.getElementById("curso");
let grupo = document.getElementById("grupo");
let registrarEstudiante = document.getElementById("registrarEstudiante");

//profesor
let asignatura = document.getElementById("asignatura");
let nivel = document.getElementById("nivel");
let asignarProfesor = document.getElementById("asignarProfesor");

//objeto de ejemplo
//let objPersona = {nombre: "María", edad: 19, genero: "Femenino"};

let arrayPersonas = [];

let arrayEstudiantes = [];

let arrayProfesores = [];


/************************************************************ */
//arrayPersonas.push(objPersona);
solucionEjer1.innerHTML = "Personas: <br><br>";


aniadirPersona.onclick = function () {

    try {

        solucionEjer1.innerHTML = "Personas: <br><br>";
        let nuevaPersona;
        let num;
        let per;
        
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

            //ponemos la ultima persona en una variable para añadirla al select abajo
            per = oPersona;
            
        }
        
        rellenarSelect(per.nombre);
        
        

        
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

    solucionEjer1estu.innerHTML = "Estudiantes: <br><br>";

    console.log(opcionSeleccionada.textContent);

    for (let obj in arrayPersonas) {
        console.log("hola");
        //si el nombre coincide con el seleccionado en el select:
        if (arrayPersonas[obj].nombre == opcionSeleccionada.textContent) {
            nuevoEstudiante.nombre = arrayPersonas[obj].nombre;
            nuevoEstudiante.edad = arrayPersonas[obj].edad;
            nuevoEstudiante.genero = arrayPersonas[obj].genero;
            console.log(opcionSeleccionada.textContent);
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


//------------
//Profesor
solucionEjer1profe.innerHTML = "Profesores: <br><br>";

asignarProfesor.onclick = function () {

    

    let opcionSeleccionada = profesor.options[profesor.selectedIndex];
    let nuevoProfesor = {};

    solucionEjer1profe.innerHTML = "Profesores: <br><br>";

    console.log(opcionSeleccionada.textContent);

    for (let obj in arrayProfesores) {
        console.log("hola");
        //si el nombre coincide con el seleccionado en el select:
        if (arrayProfesores[obj].nombre == opcionSeleccionada.textContent) {
            nuevoProfesor.nombre = arrayProfesores[obj].nombre;
            nuevoProfesor.edad = arrayProfesores[obj].edad;
            nuevoProfesor.genero = arrayProfesores[obj].genero;
            console.log(opcionSeleccionada.textContent);
            //las dos propiedades nuevas:
            nuevoProfesor.asignatura = asignatura.value;
            nuevoProfesor.nivel = nivel.value;

        }
    }

    //añadimos el estudiante
    registrarProfe(nuevoProfesor);

    

    //mostramos los estudiantes:
    for (let oProfesor of arrayProfesores) {

        

        solucionEjer1profe.innerHTML += obtDetalles(oProfesor) + "<br>";
        
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

    let nuevaOpcion2 = document.createElement("option");
    nuevaOpcion2.textContent = nombrePersona;

    estudiante.appendChild(nuevaOpcion);
    profesor.appendChild(nuevaOpcion2);
}

function registrar(objeto) {

    arrayEstudiantes.push(objeto);

    
}

function registrarProfe(objeto) {

    arrayProfesores.push(objeto);

    
}