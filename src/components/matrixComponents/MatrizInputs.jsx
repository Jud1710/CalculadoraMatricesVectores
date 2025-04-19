import { useState } from "react";

function MatrizInputs({ identifier }) {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  return (
    <div className="flex flex-col w-full gap-4">
      <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <header className="text-xl sm:text-2xl font-bold text-center tracking-tight">
          Matriz {identifier}
        </header>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-2 bg-[var(--color-surface-two)] rounded-xl">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <div className="flex items-center gap-2">
              <label
                htmlFor={`rows-${identifier}`}
                className="text-base font-medium"
              >
                Filas:
              </label>
              <input
                type="number"
                id={`rows-${identifier}`}
                className="w-16 h-8 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
                min={1}
                max={5}
                value={rows}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value <= 5) setRows(value);
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor={`columns-${identifier}`}
                className="text-base font-medium"
              >
                Columnas:
              </label>
              <input
                type="number"
                id={`columns-${identifier}`}
                className="w-16 h-8 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
                min={1}
                max={5}
                value={columns}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value <= 5) setColumns(value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl bg-[var(--color-surface-two)] p-2">
          <div
            id={`matriz-${identifier}`}
            className="grid place-items-center gap-2 mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, minmax(60px, 1fr))`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
              maxWidth: `${columns * 80}px`
            }}
          >
            {Array.from({ length: rows * columns }, (_, i) => (
              <input
                key={i}
                type="number"
                className="w-full h-10 px-1 text-center
                       bg-[var(--color-input-bg)]
                       border border-[var(--color-border)]
                       rounded-lg
                       transition-all duration-200
                       focus:ring-2 focus:ring-[var(--color-input-focus)]
                       focus:border-transparent
                       outline-none
                       text-sm
                       min-w-[60px]
                       max-w-[80px]"
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default MatrizInputs;
