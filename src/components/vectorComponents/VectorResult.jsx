import { VectorGraph } from "./GraficaPlot";

function VectorResult({ result }) {
  if (result === null || result === undefined) return null;

  if (typeof result === "number") {
    return (
      <div>
        <p>Resultado escalar: {result}</p>
      </div>
    );
  }

  if (typeof result === "object") {
    // Separa los vectores de entrada y el resultado
    const entries = Object.entries(result);
    const inputVectors = {};
    let resultadoVector = null;

    entries.forEach(([name, vec]) => {
      if (name === "Resultado") {
        resultadoVector = vec;
      } else {
        inputVectors[name] = vec;
      }
    });

    // Calcula el punto final de la cadena de entrada
    let last = { x: 0, y: 0 };
    Object.values(inputVectors).forEach(({ x, y }) => {
      last.x += x;
      last.y += y;
    });

    // Traza los vectores encadenados
    const traces = [];
    let current = { x: 0, y: 0 };
    Object.entries(inputVectors).forEach(([name, { x, y }]) => {
      const start = { ...current };
      const end = { x: current.x + x, y: current.y + y };
      traces.push({
        type: "scatter",
        mode: "lines+markers+text",
        x: [start.x, end.x],
        y: [start.y, end.y],
        name,
        text: [null, name],
        textposition: "top right",
        marker: { size: 6 },
        line: { width: 3 }
      });
      current = end;
    });

    // Traza el vector resultado (hipotenusa) desde el origen al punto final
    if (resultadoVector) {
      traces.push({
        type: "scatter",
        mode: "lines+markers+text",
        x: [0, last.x],
        y: [0, last.y],
        name: "Resultado",
        text: [null, "Resultado"],
        textposition: "top right",
        marker: { size: 8, color: "red" },
        line: { width: 4, color: "red" } // <--- QUITA dash: "dashdot"
      });
    }

    // Renderiza el gráfico
    return (
    <div className="w-full min-w-[400px]">
      <h2 className="text-xl font-bold mb-4">Resultado gráfico</h2>
      <div className="w-full h-[400px]">
        <VectorGraph vectors={null} customTraces={traces} />
      </div>
    </div>
);
  }

  return <p>Resultado no soportado</p>;
}

export default VectorResult;