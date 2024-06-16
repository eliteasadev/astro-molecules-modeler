import { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Environment, OrbitControls } from "@react-three/drei";

import { GroundComponent } from "../threejs/ground/Ground";
import OptionsPanel from "./ui/Options";
import { useStore as useAtoms } from "../store/three";
import { Molecule } from "../threejs/Molecule";
import { AtomProperties } from "./AtomProperties";

export default function ModelerComponent() {
  const [atoms, setAtoms, setConnectors] = useAtoms((state) => [
    state.atoms,
    state.setAtoms,
    state.setConnectors,
  ]);

  useEffect(() => {
    const initialURL = window.location.pathname.slice(9);
    const urlDecode = atob(initialURL);
    const urlData = JSON.parse(urlDecode);
    setAtoms(urlData.atoms);
    setConnectors(urlData.connectors);
  }, []);

  const [renderKey, setRenderKey] = useState(0);
  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);
  }, [atoms]);

  return (
    <div className="h-screen">
      {/* Controls canvas */}
      <OptionsPanel />
      <AtomProperties />

      {/* Modeler Canvas */}
      <Canvas className="h-screen bg-white" key={renderKey}>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.1} />
        <Physics>
          <Molecule />
          <GroundComponent />
        </Physics>
        <OrbitControls />
        <Environment preset="park" />
      </Canvas>
    </div>
  );
}
