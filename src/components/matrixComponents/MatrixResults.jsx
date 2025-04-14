function MatrixResults({ result, error }) {
  // Función auxiliar para formatear números
  const formatNumber = (num) => {
    if (Number.isInteger(num)) return num;
    return Number(num.toPrecision(6));
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-[500px] gap-6 p-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[var(--color-primary)]">
        Resultados
      </h2>
      {error ? (
        <p className="text-lg text-[var(--color-danger)] font-semibold">
          {error}
        </p>
      ) : result ? (
        Array.isArray(result) ? (
          <div className="w-full overflow-x-auto">
            <div className="min-w-fit p-4 bg-[var(--color-surface-two)] rounded-lg shadow-md flex flex-col justify-center items-center gap-4">
              <div
                className="grid gap-2 place-content-center"
                style={{
                  gridTemplateColumns: `repeat(${result[0].length}, minmax(80px, 1fr))`,
                  gridTemplateRows: `repeat(${result.length}, auto)`,
                }}
              >
                {result.flat().map((cell, index) => (
                  <div
                    key={index}
                    className="min-h-[40px] p-2 border border-[var(--color-border)] rounded bg-[var(--color-input-bg)] text-[var(--color-text-primary)]"
                  >
                    <div className="w-full h-full overflow-x-auto overflow-y-hidden">
                      <div className="whitespace-nowrap text-center">
                        {cell !== undefined && cell !== null ? 
                          (typeof cell === 'number' ? 
                            formatNumber(cell) : 
                            cell
                          ) : 0
                        }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                <button className="px-3 py-2 
                            bg-[var(--color-secondary)]
                            hover:bg-[var(--color-secondary-hover)]
                            text-[var(--color-text-primary)]
                            border border-[var(--color-border)]
                            rounded-lg
                            transition-all duration-200
                            font-medium
                            shadow-sm
                            hover:shadow
                            active:transform active:scale-95">Ver proceso!</button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xl overflow-hidden flex flex-col items-center justify-center gap-4">
            <div className="min-w-fit p-4 border border-[var(--color-border)] rounded bg-[var(--color-input-bg)] text-center">
              {typeof result === 'number' ? formatNumber(result) : result}
            </div>
            <button className="px-3 py-2 
                        bg-[var(--color-secondary)]
                        hover:bg-[var(--color-secondary-hover)]
                        text-[var(--color-text-primary)]
                        border border-[var(--color-border)]
                        rounded-lg
                        transition-all duration-200
                        font-medium
                        shadow-sm
                        hover:shadow
                        active:transform active:scale-95">Ver proceso!</button>
          </div>
        )
      ) : (
        <p className="text-lg text-[var(--color-text-muted)]">
          No hay resultados para mostrar.
        </p>
      )}
    </div>
  );
}

export default MatrixResults;
