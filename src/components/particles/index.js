import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config from "./particlesjs-config-default.json";

export function ParticleBackground({ children }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles className="background" options={config} init={particlesInit} />
      {children}
    </>
  );
}
