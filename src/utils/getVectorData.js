export default function getVectores(vectors) {
    if (!vectors) return [];
    const vectores = [];
    Object.entries(vectors).forEach(([name, coords]) => {
        vectores.push(`Vector ${name}: x = ${coords.x}, y = ${coords.y}`);
    });
    return vectores;
}

export function getValues2D(vectoresObj) {
  const vectores = Object.values(vectoresObj);
  const x = vectores.map(v => Number(v.x));
  const y = vectores.map(v => Number(v.y));
  return { x, y };
}
