import ButtonFunction from "../general/ButtonFunction.jsx";
import { Link, useLocation } from "react-router-dom";
import {
  SumMatrix,
  SustractMatrix,
  MultiplyMatrix,
  MultiplyByScalar,
} from "../../utils/matrixOperations.js";

export function MatrixOperationButtons({ onOperation }) {
  const { pathname } = useLocation();
  const linkStyle = "px-3 py-2 bg-[var(--color-surface-two)] hover:bg-[var(--color-card-highlight)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow active:transform active:scale-95"

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 p-2">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        Álgebra de Matrices
      </h1>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <ButtonFunction
          nameFunction="Suma"
          onClick={() => onOperation(SumMatrix)}
        />
        <ButtonFunction
          nameFunction="Resta"
          onClick={() => onOperation(SustractMatrix)}
        />

        {pathname === "/operaciones" ? (
          <ButtonFunction
            nameFunction="Multiplicación"
            onClick={() => onOperation(MultiplyMatrix)}
          />
        ) : (
          <Link to="/operaciones" className={linkStyle}>
            Multiplicación
          </Link>
        )}

        {pathname === "/operaciones/escalar" ? (
          <ButtonFunction
            nameFunction="Multiplicación por Escalar"
            onClick={() => onOperation(MultiplyByScalar)}
          />
        ) : (
          <Link to="/operaciones/escalar" className={linkStyle}>
            Escalar
          </Link>
        )}
      </div>
    </div>
  );
}

export default MatrixOperationButtons;
