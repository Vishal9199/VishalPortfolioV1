import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = ({ count = 50 }) => {
  const [points, setPoints] = useState(null);

  useEffect(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    setPoints(p);
  }, [count]);

  if (!points) return null;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00ffa3"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current) {
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
        
        // Subtle move based on mouse - smoother lerp
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 1.2, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.8, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#00ffa3"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.25}
        />
      </Sphere>
    </Float>
  );
};

const SceneGroup = () => {
    const groupRef = useRef();
    
    useFrame((state) => {
        const { mouse } = state;
        if (groupRef.current) {
            // Parallax effect for the whole group
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.1, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.1, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <AnimatedSphere />
            <Particles count={150} />
        </group>
    );
};

const Scene3D = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 0.7
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00ffa3" />
        <pointLight position={[-10, -10, -5]} color="#00d1ff" intensity={1} />
        <SceneGroup />
      </Canvas>
    </div>
  );
};

export default Scene3D;

