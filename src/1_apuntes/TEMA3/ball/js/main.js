const ball = document.getElementById("ball");


console.log("Alto: " + screen.height);
console.log("Ancho: " + screen.width);
//para poner la bola en medio
ball.style.top = parseInt((screen.availHeight/2) - 50) + "px";
ball.style.left = "0px";
ball.style.right = "0px";

let sw = false;
//let tamanioPelota = ball.style.width;

// let intervalo = setInterval(function () {

//     //izq es la posición de la bola al empezar
//     let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
    

//     if (sw == false) {

//         if (izq < (screen.width - 100)) { //la bola mide esos 100, entonces hay que quitarle al total del ancho esos 100 que mide la bola
//             ball.style.left = (izq + 10) + "px";

            
//         }
//         else {
//             //cuando izq sea mayor o igual que el ancho
//             sw = true;
//         }
//     }
//     else if (sw == true) {

//         if (izq > 0) {
//             ball.style.left = (izq - 10) + "px";
            
//         }
//         else {
//             sw = false;
//         }
            
        
//     }
        

// }, 100);


// const intervalo2 = setInterval(function () {
//   //izq es la posición de la bola al empezar
//   let izq = parseInt(ball.style.left.substring(0, ball.style.left.length - 2));

//   if (sw == false) {
//     if (izq < screen.width - 100) {
//       //la bola mide esos 100, entonces hay que quitarle al total del ancho esos 100 que mide la bola
//       ball.style.left = izq + 10 + "px";
//     } else {
//       //cuando izq sea mayor o igual que el ancho
//       sw = true;
//     }
//   } else if (sw == true) {
//     if (izq > 0) {
//       ball.style.left = izq - 10 + "px";
//     } else {
//       sw = false;
//     }
//   }
// }, 100);
pelotaSeMueve();

//cuando pasen 3 segundos se para la pelota
// setTimeout(() => {
//     clearInterval(intervalo2);
//     ball.style.backgroundColor = "pink";
// }, 3000);

//cuuando pulse el botón se para la pelota
document.getElementById("paraPelota").addEventListener("click", () => {
    clearInterval(intervalo2);
    ball.style.backgroundColor = "pink";
});

//cuando pulse la pelota se para y cuando pulse de nuevo, sigue andando
ball.onclick = function () {
    clearInterval(intervalo2);
    ball.style.backgroundColor = "pink";
}

let pelotaEnMovimiento = false;

let intervalo2;

function pelotaSeMueve() {

    intervalo2 = setInterval(function () {

        pelotaEnMovimiento = true;

        //izq es la posición de la bola al empezar
        let izq = parseInt(ball.style.left.substring(0, ball.style.left.length-2));
        

        if (sw == false) {

            if (izq < (screen.width - 100)) { //la bola mide esos 100, entonces hay que quitarle al total del ancho esos 100 que mide la bola
                ball.style.left = (izq + 10) + "px";

                
            }
            else {
                //cuando izq sea mayor o igual que el ancho
                sw = true;
            }
        }
        else if (sw == true) {

            if (izq > 0) {
                ball.style.left = (izq - 10) + "px";
                
            }
            else {
                sw = false;
            }   
        }
    }, 100);

    return intervalo2;
}