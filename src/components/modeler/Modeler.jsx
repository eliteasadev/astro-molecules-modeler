import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { GroundComponent } from "./geometric/ground/Ground";
import { AtomSphereComponent } from "./geometric/AtomSphere";
import OptionsPanel from "../ui/OptionsPanel";

export default function ModelerComponent({ id }) {
  return (
    <div className="h-screen">
      {/* Controls canvas */}
      <OptionsPanel />

      {/* Modeler Canvas */}
      <Canvas className="h-screen bg-white">
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Physics>
          <AtomSphereComponent center={[1, 1, 1]} />
          <GroundComponent />
        </Physics>
      </Canvas>
    </div>
  );
}
