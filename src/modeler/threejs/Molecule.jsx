import { useStore as useAtoms } from "../store/three";

import { AtomSphereComponent } from "./AtomSphere";
import { Connector } from "./Connector";

export function Molecule() {
  const [atoms, connectors] = useAtoms((state) => [
    state.atoms,
    state.connectors,
  ]);
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
      {connectors.length !== 0 ? (
        connectors.map(({ id, startPoint, endPoint }) => {
          return (
            <Connector
              key={id}
              startPoint={startPoint}
              endPoint={endPoint}
              id={id}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
