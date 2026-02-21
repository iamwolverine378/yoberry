"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group } from "three";
import { usePrefersReducedMotion } from "@/lib/motion";

function FloatingRings() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -0.2]}>
        <torusGeometry args={[1.6, 0.02, 12, 96]} />
        <meshStandardMaterial color="#a98cc7" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

export function ComingAmbientCanvas() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return null;
  }

  return (
    <div className="coming-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.3]} gl={{ antialias: true }}>
        <ambientLight intensity={0.88} />
        <pointLight position={[0, 1.8, 2.4]} intensity={0.95} color="#bda8d8" />
        <Sparkles count={38} size={1.6} scale={[8, 5, 4]} speed={0.14} color="#cfbee7" />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
