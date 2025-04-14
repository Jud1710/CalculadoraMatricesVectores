import { useState } from "react";

function MatrixsCramer() {
  const [size, setSize] = useState(3);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Matriz de coeficientes */}
      <article className="flex-1 flex flex-col w-full gap-4 p-4 sm:p-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
        <header className="text-2xl font-bold text-center tracking-tight">
          Matriz de Coeficientes
        </header>

        <div className="flex w-full justify-center items-center px-6 py-2 bg-[var(--color-surface-two)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
          <div className="flex items-center gap-2">
            <label
              htmlFor="matrix-size"
              className="text-base font-medium"
            >
              Tamaño:
            </label>
            <input
              type="number"
              id="matrix-size"
              className="w-16 h-8 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
              min={2}
              max={5}
              value={size}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value >= 2 && value <= 5) setSize(value);
              }}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-xl bg-[var(--color-surface-two)] p-2 sm:p-4">
          <div
            id="matriz-coeficientes"
            className="grid gap-2 sm:gap-3 min-w-fit"
            style={{
              gridTemplateColumns: `repeat(${size}, minmax(60px, 1fr))`,
              gridTemplateRows: `repeat(${size}, auto)`,
            }}
          >
            {Array.from({ length: size * size }, (_, i) => (
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

      {/* Matriz de términos independientes */}
      <article className="w-full lg:w-48 flex flex-col gap-4 p-4 sm:p-6 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
        <header className="text-2xl font-bold text-center tracking-tight">
          Términos
        </header>

        <div
          className="flex w-full h-full justify-center items-center p-4 bg-[var(--color-surface-two)] rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
          <div
            id="matriz-terminos"
            className="grid gap-3"
            style={{
              gridTemplateColumns: "1fr",
              gridTemplateRows: `repeat(${size}, auto)`,
            }}
          >
            {Array.from({ length: size }, (_, i) => (
              <input
                key={i}
                type="number"
                className="w-24 h-10 px-3 text-center
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
    </div>
  );
}

export default MatrixsCramer;
