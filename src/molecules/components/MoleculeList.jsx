import { bioactiveMolecules, inorganicMolecules } from "@/modeler/templates";
export function MoleculeList(moleculeType) {
  switch (moleculeType) {
    case "inorganic":
      return (
        <>
          <h1 className="text-3xl font-bold">Moléculas Inorgánicas</h1>
          <div className="flex flex-col gap-4 m-8 ">
            {inorganicMolecules.map(({ name, molecule }) => (
              <div key={name} className="text-xl btn btn-outline">
                <a href={`/modeler/${btoa(JSON.stringify(molecule))}`}>
                  {name}
                </a>
              </div>
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
          <div className="flex flex-col gap-4 m-8 ">
            {bioactiveMolecules.map(({ name, molecule }) => (
              <div key={name} className="text-xl btn btn-outline">
                <a href={`/modeler/${btoa(JSON.stringify(molecule))}`}>
                  {name}
                </a>
              </div>
            ))}
          </div>
        </>
      );
    default:
      return "404 Molécula no encontrada";
  }
}
