import { useStore as useAtoms } from "../store/three";

import { AtomSphereComponent } from "./AtomSphere";

export function Molecule() {
  const atoms = useAtoms((state) => state.atoms);
  return (
    <>
      {atoms.map((atom) => (
        <AtomSphereComponent
          key={atom.id}
          center={atom.pos}
          radius={atom.rad}
          color={atom?.color}
        />
      ))}
    </>
  );
}
