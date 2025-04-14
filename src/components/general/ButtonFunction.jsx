export const ButtonFunction = ({ nameFunction, onClick }) => {
  return (
    <button
      className="px-3 py-2 
                  bg-[var(--color-surface-two)]
                  hover:bg-[var(--color-card-highlight)]
                  text-[var(--color-text-primary)]
                  border border-[var(--color-border)]
                  rounded-lg
                  transition-all duration-200
                  font-medium
                  shadow-sm
                  hover:shadow
                  active:transform active:scale-95"
      onClick={onClick}
    >
      {nameFunction}
    </button>
  );
};

export default ButtonFunction;
