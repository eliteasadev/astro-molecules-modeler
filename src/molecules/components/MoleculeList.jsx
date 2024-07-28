import { bioactiveMolecules, inorganicMolecules } from "@/modeler/templates";
export function MoleculeList(moleculeType) {
  switch (moleculeType) {
    case "inorganic":
      return (
        <>
          <h1 className="text-3xl font-bold">Moléculas Inorgánicas</h1>
          <div className="m-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {inorganicMolecules.map(({ name, molecule }) => (
              <a key={name} className="text-xl btn btn-outline" href={`/modeler/${btoa(JSON.stringify(molecule))}`}>
                  {name}
                </a>
            ))}
          </div>
        </>
      );
    case "bioactive":
      return (
        <>
          <h1 className="text-3xl font-bold">
            Moléculas Farmacéuticas y Bioactivas
          </h1>
          <div className="m-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {bioactiveMolecules.map(({ name, molecule }) => (
                <a key={name} className="text-xl btn btn-outline" href={`/modeler/${btoa(JSON.stringify(molecule))}`}>
                  {name}
                </a>
            ))}
          </div>
        </>
      );
    default:
      return "404 Molécula no encontrada";
  }
}
