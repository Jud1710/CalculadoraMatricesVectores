import ButtonFunction from "../general/ButtonFunction.jsx";
import {
  getDeterminante,
  getTranspose,
  getAdjunta,
  getInverse,
} from "../../utils/matrixOperations.js";

export function MatrixBasicsButtons({ onOperation }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-1">
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
  );
}

export default MatrixBasicsButtons;
