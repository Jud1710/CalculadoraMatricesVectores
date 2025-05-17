import { useState } from "react";
import VectorsInputs from "./vectorComponents/VectorsInputs";
import VectorGraph from "./vectorComponents/GraficaPlot";
import { subVectores2D } from "../utils/vectorsOperations"
import { getValues2D } from "../utils/getVectorData"

function OperationsVectors() {
    const [components, setComponents] = useState([{ name: "A" }]); // A mínimo
    const [vectors, setVectors] = useState({ A: { x: 0, y: 0 } });
    const [error, setError] = useState("");

    const addComponent = () => {
        const count = components.length;

        if (count >= 5) {
            setError("¡El máximo de vectores por el momento es 5!");
            return;
        }

        const newName = String.fromCharCode(65 + count); // B, C, D...
        setComponents([...components, { name: newName }]);

        setVectors(prev => ({
            ...prev,
            [newName]: { x: 0, y: 0 }
        }));

        setError("");
    };

    const handleVectorChange = (name, axis, value) => {
        setVectors(prev => ({
            ...prev,    
            [name]: {
                ...prev[name],
                [axis]: value
            }
        }));
    };

    return (
        <div className="flex flex-col gap-4 sm:gap-6">
            <button onClick={() => {
            const { x, y } = getValues2D(vectors);
            subVectores2D({ x, y });
            }}>
            Suma
            </button>
            
            <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
                <h1 className="text-base font-mediumtext-xl sm:text-2xl font-bold text-center tracking-tight">Vectores</h1>
                <article className="flex flex-col w-full gap-4 p-2 mb-4 sm:p-4 bg-[var(--color-surface)] text-[var(--color-text-primary)] rounded-xl shadow-md">
                    <button onClick={addComponent}>Añadir Vector</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </article>

                <ul className="flex flex-col gap-2">
                    {components.map((comp, index) => (
                        <li key={index}>
                            <VectorsInputs
                                identifier={comp.name}
                                x={vectors[comp.name]?.x ?? 0}
                                y={vectors[comp.name]?.y ?? 0}
                                onChange={handleVectorChange}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            
            <section className="bg-[var(--color-surface-two)] p-2 sm:p-4 rounded-xl shadow-md">
                <VectorGraph vectors={vectors} />
            </section>
        </div>
    );
}

export default OperationsVectors;
