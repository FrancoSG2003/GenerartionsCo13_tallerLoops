const prompt = require('prompt-sync')();

console.log("Bienvenido a la app de nequi");

let opcion;


do {
    console.log("||--------MENU--------||");
    console.log("1. Ver saldo \n2. Enviar dinero \n3. Recargar \n4. Salir");

    opcion = Number(prompt("que accion desea realizar: "));

        switch (opcion) {
        case 1 :
            console.log(" \n Su saldo actual es de: #### \n");

        break
        
        case 2 :
            console.log(" \n Cuanto dinero desea enviar: \n");
        
        break

        case 3 :
            console.log(" \n Cuanto desea recargar: \n");

        break

        case 4 :
            console.log(" \n Gracias por usar nuestros servicios \n");
            
    }

} while (opcion !== 4);