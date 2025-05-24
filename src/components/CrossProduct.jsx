import React, { useState } from 'react';
import CrossProductGraph3D from './vectorComponents/CrossProductGraph3D';
import { productoCruz3D } from '../utils/vectorsOperations';
import Vector3DInputs from './vectorComponents/Vector3DInputs';

const CrossProduct = () => {
  const [vector1, setVector1] = useState({ x: 0, y: 0, z: 0 });
  const [vector2, setVector2] = useState({ x: 0, y: 0, z: 0 });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const crossProduct = productoCruz3D(vector1, vector2);
    setResult(crossProduct);
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="bg-[var(--color-surface-two)] p-4 rounded-xl shadow-lg flex-1 min-w-0 border border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <h1 className="text-2xl font-bold text-center tracking-tight mb-4 text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3">
            Producto Cruz de Vectores 3D
          </h1>
          
          <div className="flex flex-col gap-4">
            <Vector3DInputs
              vector={vector1}
              onChange={setVector1}
              label="Vector 1"
            />
            
            <Vector3DInputs
              vector={vector2}
              onChange={setVector2}
              label="Vector 2"
            />

            <button
              onClick={handleCalculate}
              className="w-full self-start px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-inverted)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors duration-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 focus:outline-none"
            >
              Calcular Producto Cruz
            </button>

            {result && (
              <article className="flex flex-col w-full gap-4 p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
                <h3 className="text-lg font-semibold border-b border-[var(--color-border)] pb-2">Resultado</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[var(--color-surface-two)] rounded-lg shadow-sm">
                    <p className="font-medium text-sm">X</p>
                    <p className="mt-1">{result.vector.x.toFixed(2)}</p>
                  </div>
                  <div className="p-3 bg-[var(--color-surface-two)] rounded-lg shadow-sm">
                    <p className="font-medium text-sm">Y</p>
                    <p className="mt-1">{result.vector.y.toFixed(2)}</p>
                  </div>
                  <div className="p-3 bg-[var(--color-surface-two)] rounded-lg shadow-sm">
                    <p className="font-medium text-sm">Z</p>
                    <p className="mt-1">{result.vector.z.toFixed(2)}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2 p-2 bg-[var(--color-surface-two)]/50 rounded-lg">
                  {result.info}
                </p>
              </article>
            )}
          </div>
        </section>

        <section className="bg-[var(--color-surface-two)] p-4 rounded-xl shadow-lg flex-1 min-w-0 border border-[var(--color-border)] backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
          <h2 className="font-bold mb-4 text-xl text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3">
            Visualización 3D
          </h2>
          <div className="h-[400px] relative">
            <CrossProductGraph3D
              vector1={vector1}
              vector2={vector2}
              resultVector={result?.vector}
            />
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
};

export default CrossProduct;
