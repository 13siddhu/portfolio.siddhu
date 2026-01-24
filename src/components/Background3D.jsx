// src/components/Background3D.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';

function FloatingShape({ position, color, speed }) {
  const meshRef = useRef();

  // Rotate the shape every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-50 bg-slate-950">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* The Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Floating Abstract Shapes */}
        <FloatingShape position={[-3, 2, -5]} color="#6366f1" speed={2} /> {/* Indigo */}
        <FloatingShape position={[4, -2, -4]} color="#ec4899" speed={1.5} /> {/* Pink */}
        <FloatingShape position={[-4, -3, -6]} color="#a855f7" speed={1} /> {/* Purple */}
      </Canvas>
    </div>
  );
}