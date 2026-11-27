export {saludar as sayHello, edad}; 



function saludar (nombre) {
    
    return iniciaSaludo() + " " + nombre;
}

var edad = 30;

function iniciaSaludo() {
    let dateNow = new Date();
    let result = "";

    if (dateNow.getHours() <= 12) {
        result = "Buenos días ";
    }
    else {
        result = "Buenas tardes ";
    }

    return result;
}


//no se pueden exportar por defecto ni variables ni constantes
var password = "cvkneorkdf048";

//NO PUEDEN HABER DOS DEFAULT!!!!!!!!!!

export default function muestraPassword() {
    return password;
}

// export default function muestraPassword3() {
//     return password;
// }



export class Usuario {

    //LAS LLAVES SON PARA NO INDICAR LUEGO EN LA LLAMADA AL CONSTRUCTOR
    constructor(nombre = "anónimo", apellidos = "", password = "1234") {
        this.nombre = nombre;
        this.apellidos = apellidos || "SIN APELLIDOS"; //SI NO LE PASO NINGÚN VALOR VÁLIDO COMO APELLIDOS, SE PONE ESTA CADENA "SIN APELLIDOS"
        this.password = password;
    }
}