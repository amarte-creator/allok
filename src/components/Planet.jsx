import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Lightweight planet component using basic geometries
export function Planet(props) {
  const mainSphereRef = useRef();
  const smallSphereRef = useRef();
  const ringRef = useRef();
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Main sphere animation
    tl.from(mainSphereRef.current.position, {
      y: 5,
      duration: 2,
      ease: "circ.out",
    });
    
    // Small sphere rotation
    tl.from(smallSphereRef.current.rotation, {
      x: 0,
      y: Math.PI,
      z: -Math.PI,
      duration: 8,
      ease: "power1.inOut",
    }, "-=1");
    
    // Ring rotation
    tl.from(ringRef.current.rotation, {
      x: 0.8,
      y: 0,
      z: 0,
      duration: 8,
      ease: "power1.inOut",
    }, "<");
  }, []);

  return (
    <group {...props}>
      {/* Main sphere */}
      <mesh ref={mainSphereRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#94a3b8" 
          metalness={0.4} 
          roughness={0.6}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
      
      {/* Small sphere */}
      <mesh 
        ref={smallSphereRef}
        position={[0.647, 1.03, -0.724]} 
        scale={0.223}
        castShadow 
        receiveShadow
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color="#64748b" 
          metalness={0.5} 
          roughness={0.5}
          transparent={true}
          opacity={0.95}
        />
      </mesh>
      
      {/* Ring */}
      <mesh 
        ref={ringRef}
        rotation={[-0.124, 0.123, -0.778]} 
        scale={2}
        castShadow 
        receiveShadow
      >
        <ringGeometry args={[1.2, 1.8, 32]} />
        <meshStandardMaterial 
          color="#475569" 
          metalness={0.6} 
          roughness={0.4} 
          side={2}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}
