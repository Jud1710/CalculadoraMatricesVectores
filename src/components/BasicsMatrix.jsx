import { useState } from "react";
import MatrizInputs from "./matrixComponents/MatrizInputs";
import MatrixBasicsButtons from "./matrixComponents/MatrixBasicsButtons.jsx";
import MatrixResults from "./matrixComponents/MatrixResults.jsx";
import { getMatrix } from "../utils/getMatrixData.js";

function BasicsMatrix() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleOperation = (operation) => {
    try {
      const matrixData = getMatrix("A"); // Pasamos el identificador "A"
      setResult(operation(matrixData));
      setError(null);
    } catch (err) {
      setError("Error al ejecutar la operación: " + err.message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="w-full rounded-xl bg-[var(--color-surface-two)] p-2 flex items-center justify-center shadow-md">
        <MatrixBasicsButtons
          onOperation={handleOperation}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        />
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="w-full rounded-xl bg-[var(--color-surface-two)] p-2 flex items-center justify-center shadow-md">
          <MatrizInputs identifier="A" className="w-full" />
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

export default BasicsMatrix;
