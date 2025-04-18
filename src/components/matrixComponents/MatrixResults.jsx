function MatrixResults({ result, error }) {
  // Función auxiliar para formatear números
  const formatNumber = (num) => {
    if (Number.isInteger(num)) return num;
    return Number(num.toPrecision(6));
  };

  return (
    <div className="flex flex-col w-full gap-4 bg-[var(--color-surface)] p-2 rounded-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Resultados
      </h2>
      
      {error ? (
        <p className="text-base sm:text-lg text-[var(--color-danger)] text-center p-4 max-w-[300px]">
          {error}
        </p>
      ) : result ? (
        <div className="w-full">
          <div className="p-4 max-w-[600px] mx-auto">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: Array.isArray(result) ? 
                  `repeat(${result[0].length}, minmax(min-content, 1fr))` : 
                  '1fr'
              }}
            >
              {Array.isArray(result) ? 
                result.flat().map((cell, index) => (
                  <div
                    key={index}
                    className="min-w-[60px] h-auto p-2 flex items-center justify-center bg-[var(--color-input-bg)] rounded-lg break-words text-sm"
                  >
                    {formatNumber(cell)}
                  </div>
                )) : 
                <div className="text-center p-4 font-bold text-lg sm:text-xl break-words bg-[var(--color-input-bg)] rounded-lg">
                  {formatNumber(result)}
                </div>
              }
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MatrixResults;
