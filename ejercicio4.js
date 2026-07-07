let  movimientos = [0, 0, -30000, 1000000, -200000];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
    if (movimientos === 0) {
        continue;
    }

    if (movimientos[i] > 0) {
        posicionEncontrada = i;
        break;
    }
}

console.log("Encontramos el primer moviemiento en la posicion: ", posicionEncontrada);