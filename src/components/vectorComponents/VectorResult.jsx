import { VectorGraph } from "./GraficaPlot";

function VectorResult({ result }) {
  if (!result) return null;

  if (typeof result.value === "number") {
    return (
      <div>
        <p>Resultado escalar: {result.value}</p>
      </div>
    );
  }

  if (result.vectors && result.Resultado) {
    const traces = [];
    const isResta = result.operationType === "subVectores2D";

    if (isResta) {
      let current = { x: 0, y: 0 };
      const vectorEntries = Object.entries(result.vectors);

      // Primer vector desde el origen
      const [firstVecName, firstVec] = vectorEntries[0];
      traces.push({
        type: "scatter",
        mode: "lines+markers+text",
        x: [0, firstVec.x],
        y: [0, firstVec.y],
        name: firstVecName,
        text: [null, firstVecName],
        textposition: "top right",
        marker: { size: 6 },
        line: { width: 3, color: "#2E86C1" },
      });
      current = { x: firstVec.x, y: firstVec.y };

      // Lista para almacenar el punto final de la cadena
      let finalPoint = { x: firstVec.x, y: firstVec.y };

      // Resto de vectores en cadena (pero negados)
      for (let i = 1; i < vectorEntries.length; i++) {
        const [vecName, vec] = vectorEntries[i];
        const start = { ...current };
        const end = {
          x: current.x - vec.x,
          y: current.y - vec.y,
        };

        traces.push({
          type: "scatter",
          mode: "lines+markers+text",
          x: [start.x, end.x],
          y: [start.y, end.y],
          name: `-${vecName}`,
          text: [null, `-${vecName}`],
          textposition: "top right",
          marker: { size: 6 },
          line: { width: 3, color: "#E74C3C" },
        });
        current = end;
        finalPoint = end; // Actualizamos el punto final
      }

      // Vector resultado desde origen hasta final de la cadena
      traces.push({
        type: "scatter",
        mode: "lines+markers+text",
        x: [0, finalPoint.x],
        y: [0, finalPoint.y],
        name: "Resultado",
        text: [null, "Resultado"],
        textposition: "top right",
        marker: { size: 8 },
        line: { width: 4, color: "#2ECC71", dash: "dash" },
      });
    } else {
      // Para suma, mostramos los vectores en cadena
      let current = { x: 0, y: 0 };
      Object.entries(result.vectors).forEach(([name, vector]) => {
        const start = { ...current };
        const end = { x: current.x + vector.x, y: current.y + vector.y };
        traces.push({
          type: "scatter",
          mode: "lines+markers+text",
          x: [start.x, end.x],
          y: [start.y, end.y],
          name,
          text: [null, name],
          textposition: "top right",
          marker: { size: 6 },
          line: { width: 3 },
        });
        current = end;
      });

      // Vector resultado
      traces.push({
        type: "scatter",
        mode: "lines+markers+text",
        x: [0, result.Resultado.x],
        y: [0, result.Resultado.y],
        name: "Resultado",
        text: [null, "Resultado"],
        textposition: "top right",
        marker: { size: 8 },
        line: { width: 4, color: "#2ECC71", dash: "dash" },
      });
    }

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
