import { useState, useEffect } from "react";
import MatrixOperationButtons from "./matrixComponents/MatrixOperationButtons";
import MatrizInputs from "./matrixComponents/MatrizInputs";
import MatrixResults from "./matrixComponents/MatrixResults";
import { getMatrix } from "../utils/getMatrixData";
import { MultiplyByScalar } from "../utils/matrixOperations";

function EscalarMatrix() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const handleOperation = (operation) => {
    try {
      const matrixA = getMatrix("A");
      const val = parseFloat(document.getElementById("value-escalar").value);
      setValue(val);

      if (isNaN(val)) throw new Error("Debes ingresar un número válido.");

      const result = operation(matrixA, val);
      if (result === null) {
        throw new Error("Las matrices deben tener las mismas dimensiones");
      }

      setResult(result);
      setError(null);
    } catch (err) {
      setError("Error: " + err.message);
      setResult(null);
    }
  };

  useEffect(() => {
    const valueInput = document.getElementById("value-escalar");
    if (valueInput) {
      valueInput.addEventListener('input', () => handleOperation((matrix, val) => {
        return MultiplyByScalar(matrix, val);
      }));
    }
    return () => {
      if (valueInput) {
        valueInput.removeEventListener('input', handleOperation);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <section className="w-full overflow-x-auto bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
        <MatrixOperationButtons onOperation={handleOperation} />
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="w-full overflow-x-auto bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <div className="min-w-[300px]">
            <MatrizInputs identifier="A" />
          </div>
          <div className="min-w-[300px]">
            <div className="flex flex-col gap-2 p-2">
              <h1>Constante</h1>
              <input
                type="number"
                id="value-escalar"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Valor Escalar"
              />
            </div>
          </div>
        </section>

        <section className="w-full overflow-x-auto bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <div className="min-w-[300px]">
            <MatrixResults result={result} error={error} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default EscalarMatrix;
