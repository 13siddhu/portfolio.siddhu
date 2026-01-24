import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 1. The Particle Cloud Component
function ParticleCloud({ count = 2000 }) {
  const mesh = useRef();

  // Generate random positions for 2000 particles
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Random spread in a sphere shape
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      // Spread them out wide (x, y, z)
      temp[i * 3] = (Math.random() - 0.5) * 25;     // X
      temp[i * 3 + 1] = (Math.random() - 0.5) * 25; // Y
      temp[i * 3 + 2] = (Math.random() - 0.5) * 25; // Z
    }
    return temp;
  }, [count]);

  // Rotate the entire cloud slowly
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.05; // Slow rotation
      mesh.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#6366f1" // Indigo color
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// 2. Individual Floating Skill Text
function SkillText({ label, position, color }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        position={position}
        fontSize={0.8}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        outlineWidth={0.04}
        outlineColor="black"
      >
        {label}
      </Text>
    </Float>
  );
}

export default function SkillsParticles() {
  const skills = [
    { name: 'React', color: '#61dafb', pos: [-4, 2, 0] },
    { name: 'Next.js', color: '#ffffff', pos: [4, -2, 2] },
    { name: 'Node.js', color: '#68a063', pos: [0, 4, -3] },
    { name: 'Python', color: '#3776ab', pos: [-5, -3, 1] },
    { name: 'JS', color: '#f7df1e', pos: [5, 3, -2] },
    { name: 'Java', color: '#b07219', pos: [0, -5, 0] },
    { name: 'C++', color: '#00599c', pos: [-6, 0, 4] },
    { name: 'SQL', color: '#336791', pos: [6, 0, -4] },
    { name: 'MongoDB', color: '#47a248', pos: [2, 6, 2] },
    { name: 'Tailwind', color: '#38bdf8', pos: [-2, -6, -2] },
    { name: 'Docker', color: '#2496ed', pos: [3, -3, 5] },
    { name: 'AWS', color: '#ff9900', pos: [-3, 3, -5] },
  ];

  return (
    <div className="h-[500px] w-full cursor-move">
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        {/* Dark fog for depth */}
        <fog attach="fog" args={['#000', 10, 40]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* The Swirling Particles */}
        <ParticleCloud />

        {/* The Skills Text */}
        <group>
          {skills.map((skill, i) => (
            <SkillText 
              key={i} 
              label={skill.name} 
              color={skill.color} 
              position={skill.pos} 
            />
          ))}
        </group>

        {/* Allow user to rotate the view */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}