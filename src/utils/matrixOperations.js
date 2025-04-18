export function getDeterminante(matrix) {
  let n = matrix.length;
  let det = 0;

  if (n === 1) {
    det += matrix[0][0];
    return det;
  } else if (n === 2) {
    det += matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    return det;
  } else {
    for (let i = 0; i < n; i++) {
      let submatrix = matrix
        .slice(1)
        .map((row) => row.filter((_, index) => index !== i));

      det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * getDeterminante(submatrix);
    }

    return det;
  }
}

export function getDeterminanteSarrus(matriz) {
  if (
    matriz.length !== 3 ||
    matriz[0].length !== 3 ||
    matriz[1].length !== 3 ||
    matriz[2].length !== 3
  ) {
    throw new Error(
      "La matriz debe ser de 3x3 para aplicar el método de Sarrus."
    );
  }

  const a = matriz[0][0],
    b = matriz[0][1],
    c = matriz[0][2];
  const d = matriz[1][0],
    e = matriz[1][1],
    f = matriz[1][2];
  const g = matriz[2][0],
    h = matriz[2][1],
    i = matriz[2][2];

  const diagonalesPrincipales = a * e * i + b * f * g + c * d * h;
  const diagonalesSecundarias = c * e * g + a * f * h + b * d * i;

  return diagonalesPrincipales - diagonalesSecundarias;
}

export function getTranspose(matrix) {
  const filas = matrix.length;
  const columnas = matrix[0].length;

  const transposed = Array.from({ length: columnas }, () =>
    Array(filas).fill(0)
  );
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}

export function getAdjunta(matrix) {
  if (matrix.length !== matrix[0].length) {
    return null;
  }

  const n = matrix.length;
  const cofactores = [];

  for (let i = 0; i < n; i++) {
    cofactores[i] = [];
    for (let j = 0; j < n; j++) {
      const submatrix = matrix
        .filter((_, rowIdx) => rowIdx !== i)
        .map((row) => row.filter((_, colIdx) => colIdx !== j));

      const signo = (i + j) % 2 === 0 ? 1 : -1;
      cofactores[i][j] = signo * getDeterminante(submatrix);
    }
  }

  return getTranspose(cofactores);
}

export function getInverse(matrix) {
  const det = getDeterminante(matrix);
  if (det === 0) {
    return null;
  }

  const adjunta = getAdjunta(matrix);
  const inversa = adjunta.map((row) => row.map((value) => value / det));

  return inversa;
}

export function SumMatrix(matrixA, matrixB) {
  const filas = matrixA.length;
  const columnas = matrixA[0].length;

  // Validación por si las matrices no tienen el mismo tamaño
  if (filas !== matrixB.length || columnas !== matrixB[0].length) {
    return null;
  }

  let result = [];

  for (let i = 0; i < filas; i++) {
    let fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(fila); // ¡Cada fila se añade como subarray!
  }

  return result;
}

export function SustractMatrix(matrixA, matrixB) {
  const filas = matrixA.length;
  const columnas = matrixA[0].length;

  // Validación por si las matrices no tienen el mismo tamaño
  if (filas !== matrixB.length || columnas !== matrixB[0].length) {
    return null;
  }

  let result = [];

  for (let i = 0; i < filas; i++) {
    let fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(matrixA[i][j] - matrixB[i][j]);
    }
    result.push(fila);
  }

  return result;
}

export function MultiplyMatrix(matrizA, matrizB) {
  const filasA = matrizA.length;
  const columnasA = matrizA[0].length;
  const filasB = matrizB.length;
  const columnasB = matrizB[0].length;

  if (columnasA !== filasB) {
    return "Las matrices no son compatibles para multiplicación.";
  }

  let resultado = Array(filasA)
    .fill(null)
    .map(() => Array(columnasB).fill(0));

  for (let i = 0; i < filasA; i++) {
    for (let j = 0; j < columnasB; j++) {
      for (let k = 0; k < columnasA; k++) {
        resultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return resultado;
}

export function MultiplyByScalar(matrix, scalar) {
  return matrix.map((row) => row.map((value) => value * scalar));
}
