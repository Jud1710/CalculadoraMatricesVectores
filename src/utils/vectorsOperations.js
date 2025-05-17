export function sumVectores2D({ x, y }) {
    const xnums = x;
    const ynums = y;

    const suma = [
        xnums.reduce((acc, val) => acc + val, 0),
        ynums.reduce((acc, val) => acc + val, 0),
    ];

    console.log("Suma:", suma);
    return suma;
}

export function subVectores2D({ x, y }) {
    const xnums = x;
    const ynums = y;

    const resta = [
        xnums.reduce((acc, val) => acc - val, 0),
        ynums.reduce((acc, val) => acc - val, 0),
    ];

    console.log("Resta:", resta);
    return resta;
}