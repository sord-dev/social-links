import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import config from "./particlesjs-config-default.json";

export function ParticleBackground({ children }) {
  const particlesInit = useCallback(async (engine) => {
    // Using loadSlim instead of loadFull for better performance
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        className="background"
        options={config}
        init={particlesInit}
        id="tsparticles"
      />
      {children}
    </>
  );
}
