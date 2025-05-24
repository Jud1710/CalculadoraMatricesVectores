import { useState } from "react";
import { VectorGraph } from "./vectorComponents/GraficaPlot";
import VectorBasicsButtons from "./vectorComponents/VectorOperations";
import VectorResult from "./vectorComponents/VectorResult";
import VectorsInputs from "./vectorComponents/VectorsInputs";
import {
  sumVectores2D,
  subVectores2D,
  productoPunto,
} from "../utils/vectorsOperations";

// Utilidad para convertir ángulo y magnitud a coordenadas cartesianas
function polarToCartesian(angle, magnitude) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: magnitude * Math.cos(rad),
    y: magnitude * Math.sin(rad),
  };
}

// Obtiene arrays de x e y para operaciones
function getValues2DFromPolar(vectorsObj) {
  const vectores = Object.values(vectorsObj).map(({ angle, magnitude }) =>
    polarToCartesian(angle, magnitude)
  );
  const x = vectores.map((v) => v.x);
  const y = vectores.map((v) => v.y);
  return { x, y };
}

// Prepara objeto para graficar
function getCartesianVectorsObj(vectorsObj) {
  const result = {};
  Object.entries(vectorsObj).forEach(([name, { angle, magnitude }]) => {
    result[name] = polarToCartesian(angle, magnitude);
  });
  return result;
}

function OperationsVectors() {
  const [components, setComponents] = useState([{ name: "A" }]);
  const [vectors, setVectors] = useState({ A: { angle: 0, magnitude: 0 } });
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
      [newName]: { angle: 0, magnitude: 0 },
    }));
    setError("");
  };

  const handleVectorChange = (name, field, value) => {
    setVectors((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [field]: value,
      },
    }));
  };

  const handleOperation = (operation) => {
    try {
      const vectorData = getValues2DFromPolar(vectors);
      const res = operation(vectorData);

      // Prepara todos los vectores originales en cartesiano
      const cartesian = getCartesianVectorsObj(vectors);

      // Si el resultado es un vector [x, y], añádelo como "Resultado"
      let resultObj;
      if (Array.isArray(res) && res.length === 2) {
        resultObj = {
          vectors: cartesian,
          Resultado: { x: res[0], y: res[1] },
          timestamp: Date.now(),
          operationType: operation.name, // Añadimos el tipo de operación
        };
      } else {
        // Si es escalar (producto punto), solo muestra el número
        resultObj = {
          value: res,
          timestamp: Date.now(),
          operationType: operation.name,
        };
      }

      // Actualizamos directamente sin setTimeout
      setResult(resultObj);
      setError(null);
    } catch (err) {
      setError("Error al ejecutar la operación: " + err.message);
      setResult(null);
    }
  };

  // Para graficar
  const cartesianVectors = getCartesianVectorsObj(vectors);

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="bg-[var(--color-surface-two)] p-4 rounded-xl shadow-lg flex-1 min-w-0 border border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <h1 className="text-2xl font-bold text-center tracking-tight mb-4 text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3">
            Vectores
          </h1>
          <article className="flex flex-col w-full gap-4 p-4 mb-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
            <button
              onClick={addComponent}
              className="w-full self-start px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-inverted)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors duration-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 focus:outline-none"
            >
              Añadir Vector
            </button>
            <div className="flex flex-wrap gap-2 mt-2">
              <VectorBasicsButtons onOperation={handleOperation} />
            </div>
            {error && (
              <p className="text-[var(--color-danger)] mt-2 p-2 bg-[var(--color-danger)]/10 rounded-lg border border-[var(--color-danger)]/20">
                {error}
              </p>
            )}
          </article>

          <div className="max-h-96 overflow-y-auto pr-2 scrollbar-custom">
            <ul className="flex flex-col gap-3">
              {components.map((comp, index) => (
                <li
                  key={index}
                  className="transform transition-transform duration-200 hover:translate-x-1"
                >
                  <VectorsInputs
                    identifier={comp.name}
                    angle={vectors[comp.name]?.angle ?? 0}
                    magnitude={vectors[comp.name]?.magnitude ?? 0}
                    onChange={handleVectorChange}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[var(--color-surface-two)] p-4 rounded-xl shadow-lg flex-1 min-w-0 border border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <h2 className="font-bold mb-4 text-xl text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3">
            Visualización
          </h2>
          <div className="h-[350px] sm:h-[400px] relative">
            {Object.keys(vectors).length > 0 && (
              <VectorGraph vectors={cartesianVectors} />
            )}
          </div>
        </section>
      </div>
      <div>
        <section className="bg-[var(--color-surface-two)] p-4 rounded-xl shadow-lg border border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <h2 className="font-bold mb-4 text-xl text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3">
            Resultado
          </h2>
          <div className="w-full min-h-[400px]">
            <VectorResult result={result} />
          </div>
        </section>
      </div>

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
          height: 12px;
          border-radius: 50px;
          background-color: var(--color-surface);
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: var(--color-primary);
          border-radius: 50px;
          border: 2px solid var(--color-surface);
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-primary-hover);
        }
      `}</style>
    </div>
  );
}

export default OperationsVectors;
