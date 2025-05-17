import ButtonFunction from "../general/ButtonFunction.jsx";
import {
  getDeterminante,
  getDeterminanteSarrus,
  getTranspose,
  getAdjunta,
  getInverse,
} from "../../utils/matrixOperations.js";

export function MatrixBasicsButtons({ onOperation }) {
  return (
    <div className="flex justify-center items-center w-full sm:w-fit">
      <div className="flex flex-col justify-center gap-2 sm:gap-4">
        <ButtonFunction
          nameFunction="Determinante(cofactores)"
          onClick={() => onOperation(getDeterminante)}
        />
        <ButtonFunction
          nameFunction="Determinante(Sarrus)"
          onClick={() => onOperation(getDeterminanteSarrus)}
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
