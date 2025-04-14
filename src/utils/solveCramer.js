import { getDeterminante as determinant } from "./matrixOperations";

export function solveCramer(matrixA, matrixB) {
  const n = matrixA.length; // Número de filas (o columnas) de la matriz A
  const result = new Array(n); // Inicializa el array de resultados

  // Calcula el determinante de la matriz A
  const detA = determinant(matrixA);

  // Si el determinante es cero, el sistema no tiene solución única
  if (detA === 0) {
    throw new Error("El sistema no tiene solución única (determinante cero).");
  }

  // Resuelve el sistema utilizando la regla de Cramer
  for (let i = 0; i < n; i++) {
    // Crea una copia de la matriz A y reemplaza la columna i con la matriz B
    const modifiedMatrix = matrixA.map((row, rowIndex) =>
      row.map((value, colIndex) => (colIndex === i ? matrixB[rowIndex] : value))
    );

    // Calcula el determinante de la matriz modificada
    const detModified = determinant(modifiedMatrix);

    // Calcula la variable xi utilizando la regla de Cramer
    result[i] = detModified / detA;
  }

  return result;
}