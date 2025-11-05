import { Environment, Lightformer, SpotLight } from "@react-three/drei";
import React from "react";

const StudioLight = () => {
  return (
    <group>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -10]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={30}
            position={[10, 0, 1]}
            scale={20}
            rotation-y={Math.PI / 2}
          />
        </group>
        <SpotLight
          position={[-2, 10, -5]}
          angle={0.15}
          decay={0}
          intensity={Math.PI * 4}
        />
        <SpotLight
          position={[-4, 6, 5]}
          angle={0.37}
          decay={0.35}
          intensity={Math.PI * 7}
        />
        <SpotLight
          position={[-1, 0, -10]}
          angle={2}
          decay={1}
          intensity={Math.PI * 5}
        />
      </Environment>
    </group>
  );
};

export default StudioLight;
