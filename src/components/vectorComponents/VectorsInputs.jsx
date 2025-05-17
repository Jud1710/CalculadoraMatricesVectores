const classInputs =
  "w-16 h-8 px-3 text-center bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-lg transition-all duration-200 focus:ring-2 focus:ring-[var(--color-input-focus)] focus:border-transparent outline-none";

function VectorsInputs({ identifier, x, y, onChange }) {
  return (
    <div className="flex flex-col w-full gap-4">
      <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <div className="font-semibold text-lg">Vector {identifier}</div>

        <div className="w-full flex gap-4">
          <input
            type="number"
            value={x}
            onChange={(e) => onChange(identifier, "x", Number(e.target.value))}
            className={classInputs}
            placeholder="X"
          />
          <input
            type="number"
            value={y}
            onChange={(e) => onChange(identifier, "y", Number(e.target.value))}
            className={classInputs}
            placeholder="Y"
          />
        </div>
      </article>
    </div>
  );
}

export function VectorsInputs3D({ identifier, x, y, z, onChange }) {
  return (
    <div className="flex flex-col w-full gap-4">
      <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
        <div className="font-semibold text-lg">Vector {identifier}</div>

        <div className="w-full flex gap-4">
          <input
            type="number"
            value={x}
            onChange={(e) => onChange(identifier, "x", Number(e.target.value))}
            className={classInputs}
            placeholder="X"
          />
          <input
            type="number"
            value={y}
            onChange={(e) => onChange(identifier, "y", Number(e.target.value))}
            className={classInputs}
            placeholder="Y"
          />
          <input
            type="number"
            value={z}
            onChange={(e) => onChange(identifier, "z", Number(e.target.value))}
            className={classInputs}
            placeholder="Z"
          />
        </div>
      </article>
    </div>
  );
}

export default VectorsInputs;
