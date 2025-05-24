const classInputs =
  "min-w-25 w-fit h-8 px-3 text-center bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-lg transition-all duration-200 focus:ring-2 focus:ring-[var(--color-input-focus)]  focus:border-transparent outline-none";

export default function VectorsInputs({
  identifier,
  angle,
  magnitude,
  onChange,
  onDelete, // Nueva prop para manejar la eliminación
}) {
  return (
    <div className="flex flex-col w-full gap-4">
      <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg">Vector {identifier}</div>
          <button
            onClick={() => onDelete(identifier)}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            aria-label={`Eliminar vector ${identifier}`}
          >
            Eliminar
          </button>
        </div>
        <div className="w-full flex gap-4">
          <label htmlFor="angulo">Angulo</label>
          <input
            id="angulo"
            type="number"
            value={angle}
            onChange={(e) =>
              onChange(identifier, "angle", Number(e.target.value))
            }
            className={classInputs}
            placeholder="Ángulo (°)"
          />
          <label htmlFor="magnitud">Magnitud</label>
          <input
            id="magnitud"
            type="number"
            value={magnitude}
            onChange={(e) =>
              onChange(identifier, "magnitude", Number(e.target.value))
            }
            className={classInputs}
            placeholder="Magnitud"
          />
        </div>
      </article>
    </div>
  );
}
