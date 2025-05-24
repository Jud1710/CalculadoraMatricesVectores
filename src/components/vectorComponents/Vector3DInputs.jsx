const Vector3DInputs = ({ vector, onChange, label }) => {
  const handleInputChange = (coordinate, value) => {
    onChange({
      ...vector,
      [coordinate]: parseFloat(value) || 0
    });
  };

  return (
    <article className="flex flex-col w-full gap-4 p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
      <header className="font-semibold text-lg">{label}</header>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="x-coord" className="text-sm font-medium">
            X
          </label>
          <input
            id="x-coord"
            type="number"
            value={vector.x}
            onChange={(e) => handleInputChange('x', e.target.value)}
            className="w-full h-10 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
            placeholder="X"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="y-coord" className="text-sm font-medium">
            Y
          </label>
          <input
            id="y-coord"
            type="number"
            value={vector.y}
            onChange={(e) => handleInputChange('y', e.target.value)}
            className="w-full h-10 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
            placeholder="Y"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="z-coord" className="text-sm font-medium">
            Z
          </label>
          <input
            id="z-coord"
            type="number"
            value={vector.z}
            onChange={(e) => handleInputChange('z', e.target.value)}
            className="w-full h-10 px-3 text-center
                     bg-[var(--color-input-bg)]
                     border border-[var(--color-border)]
                     rounded-lg
                     transition-all duration-200
                     focus:ring-2 focus:ring-[var(--color-input-focus)]
                     focus:border-transparent
                     outline-none"
            placeholder="Z"
          />
        </div>
      </div>
    </article>
  );
};

export default Vector3DInputs;