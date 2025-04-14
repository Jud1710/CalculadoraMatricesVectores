

export function getMatrixDataCramer() {
  // Obtener datos de la matriz de coeficientes
  const coeficientesContainer = document.getElementById('matriz-coeficientes');
  const coeficientesInputs = coeficientesContainer.querySelectorAll('input');
  const size = parseInt(document.getElementById('matrix-size').value);

  // Obtener datos de la matriz de términos
  const terminosContainer = document.getElementById('matriz-terminos');
  const terminosInputs = terminosContainer.querySelectorAll('input');

  // Procesar valores de coeficientes
  const coeficientesValues = Array.from(coeficientesInputs).map((input) => {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
      throw new Error("Todos los campos de la matriz deben contener números.");
    }
    return value;
  });

  // Procesar valores de términos
  const terminosValues = Array.from(terminosInputs).map((input) => {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
      throw new Error("Todos los campos de términos deben contener números.");
    }
    return value;
  });

  // Crear matriz de coeficientes
  const matrizCoeficientes = [];
  for (let i = 0; i < size; i++) {
    matrizCoeficientes.push(coeficientesValues.slice(i * size, (i + 1) * size));
  }

  return {
    coeficientes: matrizCoeficientes,
    terminos: terminosValues
  };
}

// Mantener la función original para otros usos
export function getMatrix(identifier) {
  const matrizContainer = document.getElementById(`matriz-${identifier}`);
  const inputs = matrizContainer.querySelectorAll("input");

  const rows = parseInt(document.getElementById(`rows-${identifier}`).value);
  const columns = parseInt(document.getElementById(`columns-${identifier}`).value);

  const values = Array.from(inputs).map((input) => {
    const value = parseFloat(input.value);
    if (isNaN(value)) {
      throw new Error("Todos los campos de la matriz deben contener números.");
    }
    return value;
  });

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(values.slice(i * columns, i * columns + columns));
  }

  return matrix;
}

export default getMatrix;
