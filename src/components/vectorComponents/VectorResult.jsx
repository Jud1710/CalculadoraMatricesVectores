import { VectorGraph } from "./GraficaPlot";

function VectorResult({ result }) {
  if (!result) return null;

  if (typeof result.value === "number") {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <h2 className="flex w-full h-full justify-center items-center text-2xl text-[var(--color-text-primary)]">
          {result.info}
        </h2>
      </div>
    );
  }

  if (result.vector && result.info) {
    const traces = [];
    let currentX = 0;
    let currentY = 0;
    const isSuma = result.operationType === "sumVectores2D";

    // Agregar vectores originales
    if (result.vectors) {
      let isFirstVector = true;
      Object.entries(result.vectors).forEach(([name, vector]) => {
        // Para ambas operaciones: vectores en cadena
        const vectorX = isFirstVector || isSuma ? vector.x : -vector.x;
        const vectorY = isFirstVector || isSuma ? vector.y : -vector.y;

        traces.push({
          type: "scatter",
          mode: "lines+markers+text",
          x: [currentX, currentX + vectorX],
          y: [currentY, currentY + vectorY],
          name: name,
          text: [null, name],
          textposition: "top right",
          marker: { size: 6 },
          line: { width: 2 },
        });

        currentX += vectorX;
        currentY += vectorY;
        isFirstVector = false;
      });
    }

    // Vector resultado
    traces.push({
      type: "scatter",
      mode: "lines+markers+text",
      x: [0, result.vector.x],
      y: [0, result.vector.y],
      name: "Resultado",
      text: [null, "Resultado"],
      textposition: "top right",
      marker: { size: 8 },
      line: { width: 4, color: "#2ECC71", dash: "dash" },
    });

    return (
      <div className="w-full min-w-[400px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Resultado gráfico</h2>
          <div className="p-4 rounded-lg bg-[var(--color-surface)] shadow-md">
            <p className="text-lg font-semibold text-[var(--color-text-primary)]">
              {result.info}
            </p>
          </div>
          <div className="w-full h-[400px]">
            <VectorGraph vectors={null} customTraces={traces} />
          </div>
        </div>
      </div>
    );
  }

  return <p>Resultado no soportado</p>;
}

export default VectorResult;
