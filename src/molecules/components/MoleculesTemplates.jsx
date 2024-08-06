import { useState } from "react";
import { MoleculeList } from "./MoleculeList";

export function MoleculesTemplates() {
  const [moleculeType, setMoleculeType] = useState("inorganic");

  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      <div className="hidden md:block">
        <ul className="menu menu-vertical px-1 flex flex-col gap-1">
          <li>
            <button
              onClick={() => {
                setMoleculeType("inorganic");
              }}
            >
              Moléculas Inorgánicas
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMoleculeType("bioactive");
              }}
            >
              Moléculas Farmacéuticas y Bioactivas
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMoleculeType("organic");
              }}
            >
              Moléculas Orgánicas
            </button>
          </li>
        </ul>
      </div>
      <div className="grid col-span-4 md:col-span-3 " key={moleculeType}>
        {MoleculeList(moleculeType)}
      </div>
    </div>
  );
}
