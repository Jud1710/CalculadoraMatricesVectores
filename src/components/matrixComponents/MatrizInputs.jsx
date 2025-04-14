import { useState } from "react";

function MatrizInputs({ identifier }) {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  return (
    <article className="flex-1 flex flex-col w-full gap-4">
      <header className="text-xl sm:text-2xl font-bold text-center">
        Matriz {identifier}
      </header>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-2 sm:p-4 bg-[var(--color-surface-two)] rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor={`rows-${identifier}`} className="whitespace-nowrap">
              Filas:
            </label>
            <input
              type="number"
              id={`rows-${identifier}`}
              className="w-16 h-8 px-2 text-center bg-[var(--color-input-bg)] rounded-lg"
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
            <label htmlFor={`columns-${identifier}`} className="whitespace-nowrap">
              Columnas:
            </label>
            <input
              type="number"
              id={`columns-${identifier}`}
              className="w-16 h-8 px-2 text-center bg-[var(--color-input-bg)] rounded-lg"
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

      <div className="w-full overflow-x-auto">
        <div
          id={`matriz-${identifier}`}
          className="grid gap-2 p-4 min-w-fit"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(60px, 1fr))`,
          }}
        >
          {Array.from({ length: rows * columns }, (_, i) => (
            <input
              key={i}
              type="number"
              className="w-14 sm:w-16 h-10 px-2 text-center bg-[var(--color-input-bg)] rounded-lg"
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default MatrizInputs;
