import ButtonFunction from "../general/ButtonFunction.jsx";
import {
  getDeterminante,
  getTranspose,
  getAdjunta,
  getInverse,
} from "../../utils/matrixOperations.js";

export function MatrixBasicsButtons({ onOperation }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 p-2">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        Operaciones Básicas de Matrices
      </h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <ButtonFunction
          nameFunction="Determinante"
          onClick={() => onOperation(getDeterminante)}
        />
        <ButtonFunction
          nameFunction="Transpuesta"
          onClick={() => onOperation(getTranspose)}
        />
        <ButtonFunction
          nameFunction="Adjunta"
          onClick={() => onOperation(getAdjunta)}
        />
        <ButtonFunction
          nameFunction="Inversa"
          onClick={() => onOperation(getInverse)}
        />
      </div>
    </div>
  );
}

export default MatrixBasicsButtons;
