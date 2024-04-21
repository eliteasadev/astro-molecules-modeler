import { useSphere } from '@react-three/cannon'

/**
 * @param {Array} center
 * @param {number} radius
 * @param {string} color
 */

export function AtomSphereComponent({center, radius, color}) {
  console.log(center)
  return (
    <mesh
      visible
      userData={{ hello: "world" }}
      position={center}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="hotpink" transparent metalness={0} roughness={1}/>
    </mesh>
  );
}
