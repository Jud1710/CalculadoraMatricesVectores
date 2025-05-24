// Función auxiliar para calcular magnitud y ángulo
function calcularMagnitudYAngulo(x, y) {
    const magnitud = Math.sqrt(x * x + y * y);
    const angulo = Math.atan2(y, x) * (180 / Math.PI);
    return { magnitud, angulo };
}

export function sumVectores2D({ x, y }) {
    const xResultante = x.reduce((acc, val) => acc + val, 0);
    const yResultante = y.reduce((acc, val) => acc + val, 0);
    
    const { magnitud, angulo } = calcularMagnitudYAngulo(xResultante, yResultante);
    
    return {
        vector: { x: xResultante, y: yResultante },
        info: `Magnitud: ${magnitud.toFixed(2)}, Ángulo: ${angulo.toFixed(2)}°`,
        vectors: Object.fromEntries(
            x.map((xi, i) => [`V${i + 1}`, { x: xi, y: y[i] }])
        ),
        operationType: "sumVectores2D"
    };
}

export function subVectores2D({ x, y }) {
    if (x.length < 2 || y.length < 2) {
        throw new Error('Se requieren al menos dos vectores para la resta');
    }

    const xResultante = x[0] - x[1];
    const yResultante = y[0] - y[1];
    
    const { magnitud, angulo } = calcularMagnitudYAngulo(xResultante, yResultante);
    
    return {
        vector: { x: xResultante, y: yResultante },
        info: `Magnitud: ${magnitud.toFixed(2)}, Ángulo: ${angulo.toFixed(2)}°`,
        vectors: {
            V1: { x: x[0], y: y[0] },
            V2: { x: x[1], y: y[1] }
        },
        operationType: "subVectores2D"
    };
}

// Actualizar también producto punto y cruz para mantener consistencia
export function productoPunto({ x, y }) {
    if (x.length !== y.length) {
        throw Error('Hubo un error en la transmisión de datos');
    }
    const escalar = x.reduce((acc, val, i) => acc + val * y[i], 0);
    return {
        value: escalar,
        info: `Producto punto: ${escalar.toFixed(2)}`
    };
}

export function productoCruz3D(vector1, vector2) {
  const cross = {
    x: vector1.y * vector2.z - vector1.z * vector2.y,
    y: vector1.z * vector2.x - vector1.x * vector2.z,
    z: vector1.x * vector2.y - vector1.y * vector2.x
  };

  return {
    vector: cross,
    info: `i(${cross.x}) + j(${cross.y}) + k(${cross.z})`,
    vectors: {
      V1: vector1,
      V2: vector2
    },
    operationType: "productoCruz3D"
  };
}

