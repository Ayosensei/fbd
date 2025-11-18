"use client"; // This is CRITICAL for 3D components in Next.js

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, OrbitControls } from '@react-three/drei';

/**
 * This is the component that contains the 3D object and its animation.
 */
function RotatingShape() {
  const meshRef = useRef(null);

  // useFrame runs on every single frame (60x per second)
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Create the rotation animation
      (meshRef.current as any).rotation.x += delta * 0.1;
      (meshRef.current as any).rotation.y += delta * 0.2;
    }
  });

  return (
    // We'll use a <TorusKnot> shape from Drei, it looks very "Web3"
    <TorusKnot ref={meshRef} args={[1.2, 0.4, 128, 16]} scale={1.2}>
      {/* 'wireframe' is a classic Web3 look */}
      <meshStandardMaterial color="#9a7cff" wireframe={true} />
    </TorusKnot>
  );
}

/**
 * This is the main Scene component.
 */
export default function HeroScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <RotatingShape />
      
      {/* This lets you control the camera by clicking and dragging */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}