import { useState } from "react";
import MatrixsCramer from "./matrixComponents/MatrixsCramer.jsx";
import MatrixCramerButtons from "./matrixComponents/MatrixCramerButtons.jsx";
import MatrixResults from "./matrixComponents/MatrixResults.jsx";
import { getMatrixDataCramer } from "../utils/getMatrixData.js";

function SolutionCramer() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleOperation = (operation) => {
    try {
      const { coeficientes, terminos } = getMatrixDataCramer();
      if (!coeficientes || !terminos) {
        throw new Error("Por favor complete todas las matrices");
      }
      
      setResult(operation(coeficientes, terminos));
      setError(null);
    } catch (err) {
      setError("Error al ejecutar la operación: " + err.message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="w-full rounded-xl bg-[var(--color-surface-two)] p-2 flex items-center justify-center shadow-md">
        <MatrixCramerButtons
          onOperation={handleOperation}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        />
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="w-full rounded-xl bg-[var(--color-surface-two)] p-2 flex items-center justify-center shadow-md">
          <MatrixsCramer className="w-full" />
        </section>

        <section className="w-full rounded-xl bg-[var(--color-surface-two)] p-2 flex items-center justify-center shadow-md">
          <MatrixResults
            result={result}
            error={error}
            className="animate-fadeIn"
          />
        </section>
      </div>
    </div>
  );
}

export default SolutionCramer;
