import { VectorGraph } from "./GraficaPlot";

function VectorResult({ result }) {
  // Si no hay resultado, no muestra nada
  if (result === null || result === undefined) return null;

  // Si es un número (producto punto)
  if (typeof result === "number") {
    return (
      <div>
        <p>Resultado escalar: {result}</p>
      </div>
    );
  }

  // Si es un vector tipo [x, y]
  if (Array.isArray(result) && result.length === 2 && result.every(v => typeof v === "number")) {
    const vectorObj = { Resultado: { x: result[0], y: result[1] } };
    return (
      <div>
        <p>Vector resultado: x = {result[0]}, y = {result[1]}</p>
        <VectorGraph vectors={vectorObj} />
      </div>
    );
  }

  // Si es un objeto graficable (por ejemplo, {A: {x, y}, ...})
  if (typeof result === "object") {
    return (
      <div>
        <VectorGraph vectors={result} />
      </div>
    );
  }

  // Si no es ninguno de los anteriores
  return <p>Resultado no soportado</p>;
}

export default VectorResult;