import { useState } from "react";

function MatrizInputs({ identifier }) {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  return (
    <article className="flex flex-col w-full h-full gap-2 p-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
      <header className="text-2xl font-bold text-center tracking-tight">
        Matriz {identifier}
      </header>

      <div className="flex w-full h-1/2 justify-evenly items-center px-6 py-2 bg-[var(--color-surface-two)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
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
            Columnas
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

      <div
        id={`matriz-${identifier}`}
        className="flex w-full h-full justify-center items-center p-4 bg-[var(--color-surface-two)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg"
      >
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, auto)`,
          }}
        >
          {Array.from({ length: rows * columns }, (_, i) => (
            <input
              key={i}
              type="number"
              className="w-16 h-10 px-3 text-center
                       bg-[var(--color-input-bg)]
                       border border-[var(--color-border)]
                       rounded-lg
                       transition-all duration-200
                       focus:ring-2 focus:ring-[var(--color-input-focus)]
                       focus:border-transparent
                       outline-none"
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default MatrizInputs;
