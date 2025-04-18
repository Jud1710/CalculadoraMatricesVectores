import { useState } from "react";
import MatrixOperationButtons from "./matrixComponents/MatrixOperationButtons";
import MatrizInputs from "./matrixComponents/MatrizInputs";
import MatrixResults from "./matrixComponents/MatrixResults";
import { getMatrix } from "../utils/getMatrixData";

function OperationsMatrix() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleOperation = (operation) => {
    try {
      const matrixA = getMatrix("A");
      const matrixB = getMatrix("B");
      
      if (!matrixA || !matrixB) {
        throw new Error("Por favor complete ambas matrices");
      }
      
      const result = operation(matrixA, matrixB);
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

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
        <MatrixOperationButtons onOperation={handleOperation} />
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <div className="w-full">
            <MatrizInputs identifier="A" />
          </div>
          <div className="w-full">
            <MatrizInputs identifier="B" />
          </div>
        </section>

        <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <div className="w-full">
            <MatrixResults result={result} error={error} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default OperationsMatrix;
