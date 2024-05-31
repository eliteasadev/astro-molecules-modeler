import { useSphere } from "@react-three/cannon";

import { useStore as useAtoms } from "../store/three";

export function AtomSphereComponent({ center, radius, color }) {
  const removeAtom = useAtoms((state) => state.removeAtom);

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
        removeAtom(...center);
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
