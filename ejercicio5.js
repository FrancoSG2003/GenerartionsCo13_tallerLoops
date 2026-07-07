let usuarios = [
    {
        nombre: "Simon",
        movimientos: [100000, -50000, 1000000]
    },

    {
        nombre: "Santiago",
        movimientos: [3000000, -1500000, -810000]
    },

    {
        nombre: "Patricia",
        movimientos: [500000, 3000000, -2000000]
    }

];

for (let i = 0; i < usuarios.length; i++) {
    let totalUsuario = 0;

    for (let j = 0; j < usuarios[i].movimientos.length; j++) {
        totalUsuario += usuarios[i].movimientos[j];
    }

    console.log("Usuario:", usuarios[i].nombre);
    console.log("Total de la cuenta:", totalUsuario);
}