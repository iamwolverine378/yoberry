"use client";

import { Canvas } from "@react-three/fiber";
import { usePrefersReducedMotion } from "@/lib/motion";

function OrbMark() {
  return (
    <group>
      <mesh position={[0, -0.2, 0]}>
        <torusGeometry args={[0.65, 0.16, 16, 48]} />
        <meshStandardMaterial color="#7B51A0" roughness={0.5} metalness={0.02} />
      </mesh>

      <mesh position={[-0.24, 0.74, 0]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[0.26, 0.08, 12, 28, 3.2]} />
        <meshStandardMaterial color="#8DA64E" roughness={0.45} metalness={0.02} />
      </mesh>

      <mesh position={[0.38, 0.82, 0]} rotation={[0.2, 0.2, -0.8]}>
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshStandardMaterial color="#8DA64E" roughness={0.52} metalness={0.02} />
      </mesh>
      <mesh position={[0.42, 0.83, 0.03]} rotation={[0.2, 0.2, -0.8]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#f6f6f8" roughness={0.7} metalness={0} />
      </mesh>
    </group>
  );
}

export function HeroOrbCanvas() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className="hero-canvas__fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }} dpr={[1, 1.15]} gl={{ antialias: true }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[2.5, 3.5, 4]} intensity={1.1} />
        <OrbMark />
      </Canvas>
    </div>
  );
}
