import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Stats, OrbitControls } from '@react-three/drei'

export default function ModelerComponent() {
  return (
    <div className="h-screen">
      <Canvas className="h-screen bg-white" >
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Physics>
        </Physics>
      </Canvas>
    </div>
  );
}
