import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I build AI-powered tools and lean ecommerce brands
that give growing businesses an unfair advantage
through smart automation and creative solutions`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen relative">
      {/* Subtle background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/30 pointer-events-none z-10"></div>
      
      <div className="relative z-20">
        <AnimatedHeaderSection
          subTitle={"Creative Lab"}
          title={"Allok"}
          text={text}
          textColor={"text-black drop-shadow-lg"}
        />
      </div>
      
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          gl={{ 
            antialias: false, // Disable antialiasing for better performance
            powerPreference: "high-performance",
            alpha: true,
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]} // Responsive pixel ratio
          performance={{ min: 0.5 }} // Lower performance threshold
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
            <Planet scale={isMobile ? 0.8 : 1} />
          </Float>
          <Environment resolution={128}> {/* Reduced resolution for better performance */}
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={1.5}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
