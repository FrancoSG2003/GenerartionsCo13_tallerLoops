const prompt = require('prompt-sync')();

let pinCorrecto = "0623";
let intento = prompt("ingrese el Pin: ");

while (intento !== pinCorrecto) {
    intento = prompt("El pin es incorrecto, intentelo de nuevo: ");

}

console.log("Bienvenido a la app de Nequi")