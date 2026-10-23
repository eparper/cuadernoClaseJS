var usersWindow = null;

const info = document.getElementById("info");
let login = document.getElementById("login");
let passIndex = document.getElementById("current-password");
let mail = document.getElementById("mail");

//ejercicio: ventana en el centro 

let mitadAnchoTotal = screen.availWidth / 2;
let mitadAltoTotal = screen.availHeight / 2;
let mitadAnchoVentana = 650 / 2;
let mitadAltoVentana = 450 / 2;

let left1 = mitadAnchoTotal - mitadAnchoVentana;
let top1 = mitadAltoTotal - mitadAltoVentana;
console.log(top1);
console.log(left1);

console.log(mitadAnchoTotal);

// document.getElementById("aSendMail").onclick = function () {

//     //closed es como cerrada o minimizada
//     if ((!usersWindow) || (usersWindow.closed)) { //si ya vale algo distinto de null

//         //usersWindow = window.open("email.html", "_blank", "width=650px,height=450px,top=300px,left=850px");
//         usersWindow = window.open("email.html", "_blank", "width=650px,height=450px,top="+top1+"px,left="+left1+"px");
//     }
//     else {
//         //si la tiene minimizada por ejemplo, se vuelve a poner el foco en ella
//         alert("ya tienes abierta una ventana");
//         usersWindow.focus();
//     }


//     // if (usersWindow) { //si existe la ventana...
//     //     usersWindow.onblur(); //esto no funciona
//     // }

// }





// document.getElementById("moverRedimensionar").onclick = function () {

//     //siempre hay que preguntar por la ventana
//     if (usersWindow) {
//         usersWindow.moveBy(500,300);
//         usersWindow.focus(); //que coja el foco para que se vea el cambio

//     }
//     else {
//         alert("la ventana ya se cerró");
//     }
// }

document.getElementById("moverRedimensionar").onclick = function () {

    //siempre hay que preguntar por la ventana
    if (usersWindow) {
        usersWindow.moveTo(500,300);
        usersWindow.resizeTo(325, 425)
        usersWindow.focus(); //que coja el foco para que se vea el cambio
        
    }
    else {
        alert("la ventana ya se cerró");
    }
}

document.getElementById("aSendMail").onclick = function () {

    info.innerHTML = "";

    try {
        if (login.value == "") {
            throw Error("El login está vacío");
        }
        if (passIndex.value == "") {
            throw Error("El password está vacío");
        }
        if (mail.value == "") {
            throw Error("El email está vacío");
        }

        //si va todo bien:
        if ((!usersWindow) || (usersWindow.closed)) { //si ya vale algo distinto de null

            //usersWindow = window.open("email.html", "_blank", "width=650px,height=450px,top=300px,left=850px");
            usersWindow = window.open("email.html", "_blank", "width=650px,height=450px,top="+top1+"px,left="+left1+"px");
        }
        else {
            //si la tiene minimizada por ejemplo, se vuelve a poner el foco en ella
            alert("ya tienes abierta una ventana");
            usersWindow.focus();

            
        }

        //pasamos login e email de ventana principal a ventana email
        usersWindow.onload = function () {
            usersWindow.document.getElementById("nombre").value = login.value;
            usersWindow.document.getElementById("email").value = mail.value;
        }

        
        

    }
    catch (err) {
        info.innerHTML = "<b style='color:red'> " + err + "</b>";
        setTimeout(function () { info.innerHTML = "" }, 3000);
    }
}

//lo veremos en el segundo trimestre:
// document.cookie = `login=${login.value}`;
// document.cookie = `email=${mail.value}`;

//esto no se va a preguntar
//console.log("Index modificado el: " + document.lastModified);
//console.dir(document.forms[0].innerHTML += "<br><button>Enviar</button>");

//info.innerHTML += document.readyState + " - ";

//login.focus();

// console.log(document.activeElement);
// console.log(document.getElementById("form1").children);

//console.log(document.exitFullscreen());

// document.open();
// document.write("<h1>Web destruida</h1>");
// document.close();

// document.getElementById("salirPantallaCompleta").onclick = function () {
//     if (document.fullscreenElement) {
//         document.exitFullscreen();
//     }
    
// }

//history
// info.innerHTML = history.length;
// console.log(history.back);

// location.href = history.forward();

//objeto location
// info.innerHTML = location.host;
// info.innerHTML = location.hostname;
// info.innerHTML = location.pathname;

// info.innerHTML = location.protocol;
// info.innerHTML = location.search;
//info.innerHTML = location.origin;

//location.href = "http://127.0.0.1:5500/email.html"; //habría que verificar antes la url 
                                                    //porque vendría del servidor

//location.assign("http://127.0.0.1:5500/email.html");



// document.getElementById("aMail").onclick = function () {
//     location.assign("http://127.0.0.1:5500/email.html");
// }

//const URL = "http://127.0.0.1:5500";

const URL = location.href; //esta forma ya le pone la barra final (es mejor)

document.getElementById("aMail").onclick = function (e) {
    e.preventDefault();
    
    location.replace(URL + "/email.html");
}

document.getElementById("aUsuarios").onclick = function (e) {
    e.preventDefault();
    location.replace(URL + "/usuarios.html");
}

info.innerHTML = location.href;