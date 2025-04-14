import ButtonFunction from "../general/ButtonFunction.jsx";
import { solveCramer } from "../../utils/solveCramer.js";

export function MatrixCramerButtons({ onOperation }) {
  return (
    <>
      <div id="container" className="flex justify-between items-center w-full h-full sm: flex-col p-2 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Método de Cramer
        </h1>
        <div className="flex flex-wrap justify-center gap-4 px-4 py-1">
          <ButtonFunction
            nameFunction="Calcular Sistema De Ecuaciones"
            onClick={() => onOperation(solveCramer)}
          />
        </div>
      </div>
    </>
  );
}

export default MatrixCramerButtons;
