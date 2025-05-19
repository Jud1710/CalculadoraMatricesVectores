export const ButtonFunction = ({ nameFunction, onClick }) => {
  return (
    <button
      className="px-2 py-2 bg-[var(--color-third)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg font-medium shadow-sm hover:bg-[var(--color-primary-hover)] transition-colors duration-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 focus:outline-none"
      onClick={onClick}
    >
      {nameFunction}
    </button>
  );
};

export default ButtonFunction;
