 let movimientos = [1000000, -500000, 750000, -400000, -600000, 20000];

let total = 0;

let cantidadRetiros = 0;

for (let i = 0; i < movimientos.length; i++) {
    total = total + movimientos[i];

    if (movimientos[i] < 0) {
        cantidadRetiros++;
    }
}

console.log("El total de la cuanta es:", total);
console.log("La cantidad de retiros registrada es de:", cantidadRetiros);