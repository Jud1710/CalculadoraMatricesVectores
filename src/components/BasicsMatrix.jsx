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
    <div className="flex flex-col gap-4 sm:gap-6">
      <section className="w-full overflow-x-auto bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
        <MatrixBasicsButtons onOperation={handleOperation} />
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="w-full overflow-x-auto bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <div className="min-w-[300px]">
            <MatrizInputs identifier="A" />
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

export default BasicsMatrix;
