export function sumVectores2D({ x, y }) {
    const xnums = x;
    const ynums = y;

    const suma = [
        xnums.reduce((acc, val) => acc + val, 0),
        ynums.reduce((acc, val) => acc + val, 0),
    ];

    return suma;
}

export function subVectores2D({ x, y }) {
    const xnums = x;
    const ynums = y;

    const resta = [
        xnums.slice(1).reduce((acc, val) => acc - val, xnums[0] ?? 0),
        ynums.slice(1).reduce((acc, val) => acc - val, ynums[0] ?? 0),
    ];

    return resta;
}

export function productoPunto({ x, y }) {
    if (x.lenght != y.lenght){
        throw Error('Hubo una error en la transimision de datos')
    }
    const escalar = x.reduce((acc, val, i) => acc + val * y[i], 0);
    return escalar
}
