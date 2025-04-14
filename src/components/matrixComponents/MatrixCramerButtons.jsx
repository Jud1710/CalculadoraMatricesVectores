import ButtonFunction from "../general/ButtonFunction.jsx";
import { solveCramer } from "../../utils/solveCramer.js";

export function MatrixCramerButtons({ onOperation }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-1">
      <ButtonFunction
        nameFunction="Calcular Sistema De Ecuaciones"
        onClick={() => onOperation(solveCramer)}
      />
    </div>
  );
}

export default MatrixCramerButtons;
