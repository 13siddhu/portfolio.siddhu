import React, { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

// Define your Tech Stack Colors
const COLORS = {
  base: '#ffffff',
  right: '#ec4899',  // Pink
  left: '#a855f7',   // Purple
  top: '#ffffff',    // White
  bottom: '#f7df1e', // JS Yellow
  front: '#61dafb',  // React Blue
  back: '#68a063',   // Node Green
};

function Cubie({ position, hovered }) {
  const [x, y, z] = position;
  
  const materials = useMemo(() => {
    return [
      x === 1 ? COLORS.right : COLORS.base,
      x === -1 ? COLORS.left : COLORS.base,
      y === 1 ? COLORS.top : COLORS.base,
      y === -1 ? COLORS.bottom : COLORS.base,
      z === 1 ? COLORS.front : COLORS.base,
      z === -1 ? COLORS.back : COLORS.base,
    ];
  }, [x, y, z]);

  // Animation
  const { pos } = useSpring({
    pos: hovered 
      ? [x * 1.6, y * 1.6, z * 1.6]
      : [x, y, z],
    config: config.wobbly,
  });

  return (
    <animated.mesh position={pos}>
      <boxGeometry args={[0.95, 0.95, 0.95]} /> 
      
      {materials.map((color, i) => (
        <meshPhysicalMaterial 
          key={i} 
          attach={`material-${i}`} 
          color={color}
          
          // === BALANCED GLASS SETTINGS ===
          transparent={true}
          opacity={0.4}       // Increased from 0.15 to 0.4 (More visible color)
          transmission={0.6}  // Reduced from 0.9 to 0.6 (Less fully clear, more colored glass)
          roughness={0.1}
          metalness={0.1}
          reflectivity={0.8}
          thickness={1.5}     // Thicker glass captures more light
          ior={1.5}
          
          // === GLOW ===
          emissive={color === COLORS.base ? '#000000' : color} 
          emissiveIntensity={1.2} // Boosted glow so colors pop
        />
      ))}
    </animated.mesh>
  );
}

function RubiksCube() {
  const [hovered, setHover] = useState(false);

  const cubies = useMemo(() => {
    const temp = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          temp.push([x, y, z]);
        }
      }
    }
    return temp;
  }, []);

  return (
    <group
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={0.8} 
      rotation={[0.5, 0.5, 0]}
    >
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <group>
          {cubies.map((pos, i) => (
            <Cubie key={i} position={pos} hovered={hovered} />
          ))}
        </group>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[500px] w-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        
        {/* Backlight */}
        <spotLight position={[0, 0, -10]} intensity={2} color="#ffffff" />
        
        {/* Front Lights - Boosted intensity for more color */}
        <pointLight position={[10, 10, 10]} intensity={3} color="#61dafb" />
        <pointLight position={[-10, -10, 10]} intensity={3} color="#ec4899" />
        
        <RubiksCube />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}