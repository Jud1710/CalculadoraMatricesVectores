import { useState } from "react";

function MatrixsCramer() {
  const [size, setSize] = useState(3);

  return (
    <div className="flex flex-col gap-4">
      <article className="flex flex-col w-full gap-4 p-2 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <header className="text-xl sm:text-2xl font-bold text-center tracking-tight">
          Matriz de Coeficientes
        </header>

        <div className="flex justify-center items-center p-2 bg-[var(--color-surface-two)] rounded-xl">
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

        <div className="w-full rounded-xl bg-[var(--color-surface-two)] p-2">
          <div
            id="matriz-coeficientes"
            className="grid auto-cols-min gap-2 place-content-center"
            style={{
              gridTemplateColumns: `repeat(${size}, minmax(50px, 60px))`,
              gridTemplateRows: `repeat(${size}, auto)`,
            }}
          >
            {Array.from({ length: size * size }, (_, i) => (
              <input
                key={i}
                type="number"
                className="w-[50px] sm:w-[60px] h-10 px-2 text-center
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

      <article className="flex flex-col w-full gap-4 p-2 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <header className="text-xl sm:text-2xl font-bold text-center tracking-tight">
          Términos
        </header>

        <div className="flex justify-center items-center p-2 bg-[var(--color-surface-two)] rounded-xl">
          <div
            id="matriz-terminos"
            className="grid gap-2"
            style={{
              gridTemplateColumns: "minmax(50px, 60px)",
              gridTemplateRows: `repeat(${size}, auto)`,
            }}
          >
            {Array.from({ length: size }, (_, i) => (
              <input
                key={i}
                type="number"
                className="w-[50px] sm:w-[60px] h-10 px-2 text-center
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
