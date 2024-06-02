import { useSphere } from "@react-three/cannon";

import { useStore as useAtoms } from "../store/three";

export function AtomSphereComponent({ center, radius, color }) {
  const [connector, setConnector, addConnector, removeAtom] = useAtoms(
    (state) => [
      state.connector,
      state.setConnector,
      state.addConnector,
      state.removeAtom,
    ]
  );

  const [ref] = useSphere(() => ({
    position: center,
  }));

  return (
    <mesh
      ref={ref}
      visible
      userData={{ hello: "world" }}
      position={center}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[radius, radius, radius]}
      onClick={(e) => {
        e.stopPropagation();
        const { x, y, z } = ref.current.position;
        if (e.ctrlKey) {
          if (connector.length === 0) {
            setConnector(center);
          } else {
            addConnector(connector, center);
            setConnector([]);
          }
        } else if (e.shiftKey) {
          removeAtom(...center);
        }
      }}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={color}
        transparent
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

AtomSphereComponent.defaultProps = {
  color: "hotpink",
};
