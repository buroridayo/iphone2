"use client";
import StudioLight from "@/threeField/StudioLight";
import useIphoneAria from "@/threeField/zutandMan/Zutand";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Iphone17Pro } from "./model/17pro";
import { OrbitControls } from "@react-three/drei";

const Anvil = () => {
  const { color, setColor } = useIphoneAria();
  return (
    <section className="anvil-power">
      <h2 className="anvil-h2">Take a closer look</h2>
      <div className="anvil-controls">
        <div className="anvil-div">
          {/* color aria */}
          <div className="anvil-color">
            <div
              onClick={() => setColor("#ff0000")}
              className={clsx("bg-red-600", color === "#ff0000" && "active")}
            />
            <div
              onClick={() => setColor("#ff7f00")}
              className={clsx("bg-amber-600", color === "#ff7f00" && "active")}
            />
            <div
              onClick={() => setColor("#0075c2")}
              className={clsx("bg-blue-500", color === "#0075c2" && "active")}
            />
            <div
              onClick={() => setColor("#ffffff")}
              className={clsx("bg-white", color === "#ffffff" && "active")}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx("bg-black", color === "#2e2c2e" && "active")}
            />
          </div>
        </div>
      </div>
      {/* 3d model aria */}
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        <OrbitControls />
        <Iphone17Pro />
      </Canvas>
    </section>
  );
};

export default Anvil;
