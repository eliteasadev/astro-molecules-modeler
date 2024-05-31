import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";

import { GroundComponent } from "../threejs/ground/Ground";
import OptionsPanel from "./ui/Options";
import { useStore as useAtoms } from "../store/three";
import { Molecule } from "../threejs/Molecule";
import { nanoid } from "nanoid";

export default function ModelerComponent() {
  const addAtom = useAtoms((state) => state.addAtom);

  const [atoms, setAtoms] = useAtoms((state) => [state.atoms, state.setAtoms]);

  useEffect(() => {
    const initialURL = window.location.pathname.slice(9);
    setAtoms(JSON.parse(atob(initialURL)));
  }, []);

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
          <Molecule />
          <GroundComponent />
        </Physics>
      </Canvas>
    </div>
  );
}
