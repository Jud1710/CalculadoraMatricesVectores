import Plot from "react-plotly.js";

export function VectorGraph({ vectors }) {
  // Si no hay vectores, retorna null o un array vacío
  if (!vectors) return null;

  const data = Object.entries(vectors).map(([name, { x, y }]) => ({
    type: "scatter",
    mode: "lines+markers+text",
    x: [0, x],
    y: [0, y],
    name,
    text: [null, name], // Muestra el nombre al final
    textposition: "top right",
    marker: { size: 6 },
    line: { width: 3 }
  }));

  return (
    <div>
      <h2>Vectores Graficados</h2>
      <Plot
        data={data}
        layout={{
          title: "Gráfico de Vectores",
          xaxis: { range: [-10, 10], zeroline: true },
          yaxis: { range: [-10, 10], zeroline: true },
          showlegend: true,
          title: "Gráfico de Vectores",
          plot_bgcolor: "#2e2e3f",
          paper_bgcolor: "#293548e6 ",

          font: {
            color: "#ffffff",
            size: 18,
          },
        }}
        config={{
        displayModeBar: true, // muestra la barra
        displaylogo: false, // oculta el logo de Plotly
        modeBarButtonsToRemove: [
          "zoom2d",
          "pan2d",
          "select2d",
          "lasso2d",
          "zoomIn2d",
          "zoomOut2d",
          "autoScale2d",
          "resetScale2d",
          "hoverClosestCartesian",
          "hoverCompareCartesian"
        ],
      }}
      />
    </div>
  );
}

export function VectorGraphResult({ vectorResult }) {
  // Si no hay vectores, retorna null o un array vacío
  if (!vectors) return null;

  const data = Object.entries(vectors).map(([name, { x, y }]) => ({
    type: "scatter",
    mode: "lines+markers+text",
    x: [0, x],
    y: [0, y],
    name,
    text: [null, name], // Muestra el nombre al final
    textposition: "top right",
    marker: { size: 6 },
    line: { width: 3 }
  }));

  return (
    <div>
      <h2>Vectores Graficados</h2>
      <Plot
        data={data}
        layout={{
          width: 600,
          height: 600,
          title: "Gráfico de Vectores",
          xaxis: { range: [-10, 10], zeroline: true },
          yaxis: { range: [-10, 10], zeroline: true },
          showlegend: true,
          title: "Gráfico de Vectores",
          plot_bgcolor: "#2e2e3f",
          paper_bgcolor: "#293548e6 ",

          font: {
            color: "#ffffff",
            size: 18,
          },
          xaxis: {
            title: "Eje X",
            gridcolor: "#555",
            zeroline: true,
          },
          yaxis: {
            title: "Eje Y",
            gridcolor: "#555",
            zeroline: true,
          },
        }}
        config={{
        displayModeBar: true, // muestra la barra
        displaylogo: false, // oculta el logo de Plotly
        modeBarButtonsToRemove: [
          "zoom2d",
          "pan2d",
          "select2d",
          "lasso2d",
          "zoomIn2d",
          "zoomOut2d",
          "autoScale2d",
          "resetScale2d",
          "hoverClosestCartesian",
          "hoverCompareCartesian"
        ],
      }}
      />
    </div>
  );
}
