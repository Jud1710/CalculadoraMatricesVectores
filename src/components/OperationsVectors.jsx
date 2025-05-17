import { useState } from "react";
import { getValues2D } from "../utils/getVectorData";
import VectorsInputs from "./vectorComponents/VectorsInputs";
import { VectorGraph } from "./vectorComponents/GraficaPlot";
import VectorBasicsButtons from "./vectorComponents/VectorOperations";
import VectorResult from "./vectorComponents/VectorResult";

function OperationsVectors() {
  const [components, setComponents] = useState([{ name: "A" }]);
  const [vectors, setVectors] = useState({ A: { x: 0, y: 0 } });
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const addComponent = () => {
    const count = components.length;
    if (count >= 5) {
      setError("¡El máximo de vectores por el momento es 5!");
      return;
    }
    const newName = String.fromCharCode(65 + count);
    setComponents([...components, { name: newName }]);
    setVectors((prev) => ({
      ...prev,
      [newName]: { x: 0, y: 0 },
    }));
    setError("");
  };

  const handleVectorChange = (name, axis, value) => {
    setVectors((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [axis]: Number(value),
      },
    }));
  };

  const handleOperation = (operation) => {
    try {
      const vectorData = getValues2D(vectors);
      setResult(operation(vectorData));
      setError(null);
    } catch (err) {
      setError("Error al ejecutar la operación: " + err.message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex gap-4 sm:gap-6">
        <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md flex-1 min-w-[320px]">
          <h1 className="text-xl sm:text-2xl font-bold text-center tracking-tight mb-2 text-[var(--color-text-primary)]">
            Vectores
          </h1>
          <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow">
            <button
              onClick={addComponent}
              className="self-start px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Añadir Vector
            </button>
            <div className="flex gap-2 mt-2">
              <VectorBasicsButtons onOperation={handleOperation} />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </article>

          <ul className="flex flex-col gap-2">
            {components.map((comp, index) => (
              <li key={index}>
                <VectorsInputs
                  identifier={comp.name}
                  x={vectors[comp.name]?.x ?? 0}
                  y={vectors[comp.name]?.y ?? 0}
                  onChange={handleVectorChange}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md flex-1 min-w-[320px]">
          <h2 className="font-bold mb-2 text-lg text-[var(--color-text-primary)]">Vectores ingresados</h2>
          {Object.keys(vectors).length > 0 && <VectorGraph vectors={vectors} />}
        </section>
      </div>
      <div>
        <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
          <h2 className="font-bold mb-2 text-lg text-[var(--color-text-primary)]">Resultado</h2>
          <VectorResult result={result} />
        </section>
      </div>
    </div>
  );
}

export default OperationsVectors;