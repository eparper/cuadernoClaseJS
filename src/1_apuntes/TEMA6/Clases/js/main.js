import muestraPassword, {sayHello, edad, Usuario as User} from "./modules/usuarios"; //muestraPassword es el por defecto

const info = document.getElementById("info");

//info.innerHTML = sayHello("Pepe") + " tienes " + edad + " años.";

//edad es una variable de solo lectura, cuando la importamos se convierte en constante
//podemos copiarla en otra variable y trabajar con la copia
//edad*=5;

//info.innerHTML += "<br>" + muestraPassword();

//si solo hacemos esto del botón y comentamos todo lo anterior, no se descarga usuarios.js en el navegador
//hasta que pulsamos el botón
// document.getElementById("btn1").addEventListener("click", async function () {
  
//   const modulo = await import("./modules/usuarios.js"); //hay que crear una constante
  
//   info.innerHTML = `Contraseña ${modulo.default()}`; //default() llama a la función exportada por defecto

//   console.log(window);

// });

//********************** */
var user1 = new User("Pepe", "Ordoñez");
var user2 = new User();
var user3 = new User("Ana", undefined, "cnvkeorihe"); //SI NO QUEREMOS PONER APELLIDOS SE PONE UNDEFINED

info.innerHTML = `Usuario ${user1.nombre} ${user1.apellidos} ${user1.password} creado correctamente.`;
info.innerHTML += `<hr>Usuario ${user2.nombre} ${user2.apellidos} ${user2.password} creado correctamente.`;
info.innerHTML += `<hr>Usuario ${user3.nombre} ${user3.apellidos} ${user3.password} creado correctamente.`;