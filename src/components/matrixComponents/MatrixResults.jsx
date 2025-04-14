function MatrixResults({ result, error }) {
  // Función auxiliar para formatear números
  const formatNumber = (num) => {
    if (Number.isInteger(num)) return num;
    return Number(num.toPrecision(6));
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Resultados
      </h2>
      
      {error ? (
        <p className="text-base sm:text-lg text-[var(--color-danger)] text-center p-4">
          {error}
        </p>
      ) : result ? (
        <div className="w-full overflow-x-auto">
          <div className="min-w-fit p-4">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: Array.isArray(result) ? 
                  `repeat(${result[0].length}, minmax(60px, 1fr))` : 
                  '1fr'
              }}
            >
              {Array.isArray(result) ? 
                result.flat().map((cell, index) => (
                  <div
                    key={index}
                    className="w-14 sm:w-16 h-10 flex items-center justify-center bg-[var(--color-input-bg)] rounded-lg overflow-x-auto"
                  >
                    {formatNumber(cell)}
                  </div>
                )) : 
                <div className="text-center p-4">
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
