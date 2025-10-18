"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RotatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color={"#9C27FF"} wireframe />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color={"#00FFC6"} />
        <RotatingSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;