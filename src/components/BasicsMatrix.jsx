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
      const matrixData = getMatrix("A");
      setResult(operation(matrixData));
      setError(null);
    } catch (err) {
      setError("Error al ejecutar la operación: " + err.message);
      setResult(null);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-2">
      <section className="flex flex-col md:flex-row bg-[var(--color-surface-two)] px-2 py-4 gap-2 rounded-xl shadow-md">
        <div className="w-full md:w-auto flex items-center justify-center">
          <MatrixBasicsButtons onOperation={handleOperation} />
        </div>
        <div className="w-full">
          <MatrizInputs identifier="A" />
        </div>
      </section>

      <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
        <div className="w-full">
          <MatrixResults result={result} error={error} />
        </div>
      </section>
    </div>
  );
}

export default BasicsMatrix;