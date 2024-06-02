import * as THREE from "three";

import { useStore as useAtoms } from "../store/three";

export function Connector({ startPoint, endPoint, id }) {
  const [removeConnector] = useAtoms((state) => [state.removeConnector]);

  const startVector = new THREE.Vector3(
    parseFloat(startPoint[0]),
    parseFloat(startPoint[1]),
    parseFloat(startPoint[2])
  );
  const endVector = new THREE.Vector3(
    parseFloat(endPoint[0]),
    parseFloat(endPoint[1]),
    parseFloat(endPoint[2])
  );

  const curve = new THREE.CatmullRomCurve3([startVector, endVector], false);
  const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.03, 8, false);

  const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);

  return (
    <primitive
      object={tube}
      onClick={(e) => {
        e.stopPropagation();
        removeConnector(id);
      }}
    />
  );
}
