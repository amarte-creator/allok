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
          color="#2d3748" 
          metalness={0.8} 
          roughness={0.2}
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
          color="#4a5568" 
          metalness={0.9} 
          roughness={0.1}
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
          color="#4a5568" 
          metalness={0.9} 
          roughness={0.1} 
          side={2}
        />
      </mesh>
    </group>
  );
}
