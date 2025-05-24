import ButtonFunction from "../general/ButtonFunction.jsx";
import { sumVectores2D, subVectores2D, productoPunto, productoCruz } from "../../utils/vectorsOperations.js";

export default function VectorBasicsButtons({ onOperation }) {
  return (
    <div className="flex items-center justify-center w-full gap-4 p-2 ">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <ButtonFunction
          nameFunction="Suma"
          onClick={() => onOperation(sumVectores2D)}
        />
        <ButtonFunction
          nameFunction="Resta"
          onClick={() => onOperation(subVectores2D)}
        />
        <ButtonFunction
          nameFunction="Producto Punto"
          onClick={() => onOperation(productoPunto)}
        />
        <ButtonFunction
          nameFunction="Producto Cruz"
          onClick={() => onOperation(productoCruz)}
        />
      </div>
    </div>
  );
}
