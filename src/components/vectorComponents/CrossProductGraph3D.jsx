import Plot from 'react-plotly.js';

const CrossProductGraph3D = ({ vector1, vector2, resultVector }) => {
  // Preparar los datos para los vectores
  const createVectorTrace = (vector, name, color) => {
    if (!vector) return null;
    
    return {
      type: 'scatter3d',
      mode: 'lines',
      name: name,
      x: [0, vector.x],
      y: [0, vector.y],
      z: [0, vector.z],
      line: {
        color: color,
        width: 6
      }
    };
  };

  const traces = [
    createVectorTrace(vector1, 'Vector 1', '#FF0000'),
    createVectorTrace(vector2, 'Vector 2', '#0000FF'),
    resultVector && createVectorTrace(resultVector, 'Producto Cruz', '#00FF00')
  ].filter(Boolean);

  const layout = {
    autosize: true,
    showlegend: true,
    margin: { l: 0, r: 0, t: 0, b: 0 },
    scene: {
      camera: {
        eye: { x: 1.5, y: 1.5, z: 1.5 }
      },
      aspectmode: 'cube',
      xaxis: { range: [-10, 10] },
      yaxis: { range: [-10, 10] },
      zaxis: { range: [-10, 10] }
    }
  };

  return (
    <Plot
      data={traces}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
      config={{ responsive: true }}
    />
  );
};

export default CrossProductGraph3D;
