export function getDeterminante(matrix) {
  let n = matrix.length;

  if (n === 1) {
    return matrix[0][0];
  } else if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  } else {
    let det = 0;
    for (let i = 0; i < n; i++) {
      let submatrix = matrix
        .slice(1)
        .map((row) => row.filter((_, index) => index !== i));

      det += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * getDeterminante(submatrix);
    }

    return det;
  }
}

export function getTranspose(matrix) {
  const filas = matrix.length;
  const columnas = matrix[0].length;

  const transposed = Array.from({ length: columnas }, () => Array(filas).fill(0));
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}

export function getAdjunta(matrix) {
  if (matrix.length !== matrix[0].length) {
    return null 
  }

  const n = matrix.length; 
  const cofactores = []; 

  for (let i = 0; i < n; i++) {  
    cofactores[i] = []; 
    for (let j = 0; j < n; j++) { 
      const submatrix = matrix 
        .filter((_, rowIdx) => rowIdx !== i) 
        .map(row => row.filter((_, colIdx) => colIdx !== j)); 

      const signo = ((i + j) % 2 === 0) ? 1 : -1; 
      cofactores[i][j] = signo * getDeterminante(submatrix);
    }
  }

  return getTranspose(cofactores); 
}

export function getInverse(matrix){
  const det = getDeterminante(matrix);
  if (det === 0) {
    return null; 
  }

  const adjunta = getAdjunta(matrix);
  const inversa = adjunta.map(row => row.map(value => value / det));

  return inversa;
}