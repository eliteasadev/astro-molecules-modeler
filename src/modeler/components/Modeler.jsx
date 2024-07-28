import { useEffect, useState } from "react";

import { Physics } from "@react-three/cannon";
import { Environment, OrbitControls, RandomizedLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useStore as useAtoms } from "../store/three";
import { GroundComponent } from "../threejs/ground/Ground";
import { Molecule } from "../threejs/Molecule";
import { AtomProperties } from "./AtomProperties";
import OptionsPanel from "./ui/Options";

export default function ModelerComponent() {
  // Get the size of the screen
  const [screenType, setScreenType] = useState("desktop");
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      setScreenType("mobile");
    } else {
      setScreenType("desktop");
    }
  }, []);

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
    <div className="h-screen" key={renderKey}>
      {/* Controls canvas */}
      <OptionsPanel />
      <AtomProperties />

      {/* Modeler Canvas */}
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}>
          <Physics>
            <Molecule />
            {screenType === "desktop" && <GroundComponent />}
          </Physics>
          <RandomizedLight amount={8} radius={5} ambient={0.5} bias={0.001} />
        </group>
        <Environment preset="city" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
