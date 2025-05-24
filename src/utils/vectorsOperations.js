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
    if (x.length < 2 || y.length < 2) {
        throw new Error('Se requieren al menos dos vectores para la resta');
    }

    const resta = [
        x[0] - x[1],  
        y[0] - y[1]   
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

// ...existing code...

export function productoCruz({ x, y }) {
    if (x.length !== 2 || y.length !== 2) {
        throw new Error('El producto cruz en 2D requiere exactamente 2 componentes por vector');
    }

    // Para vectores 2D, el producto cruz es: x1*y2 - y1*x2
    const resultado = x[0] * y[1] - y[0] * x[1];
    return resultado;
}