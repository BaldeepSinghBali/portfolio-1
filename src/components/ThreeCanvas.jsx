import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls, ScrollControls, Scroll } from '@react-three/drei';
import Overlay from './Overlay';

export default function ThreeCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 2, 12], fov: 50 }} shadows>
        <color attach="background" args={['#0a0b10']} />
        <fog attach="fog" args={['#0a0b10', 14, 32]} />
        
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[10, 15, 8]}  intensity={2} color="#e23636" castShadow />
        <directionalLight position={[-8, 10, -5]} intensity={1} color="#f78f3f" />
        <pointLight position={[0, -4, 4]} intensity={1.2} color="#0072bc" distance={20} />
        
        <Environment preset="night" />
        
        <ScrollControls pages={12} damping={0.25}>
          <Sparkles count={150} scale={25} size={3} speed={0.2} opacity={0.4} color="#e23636" />
          <Sparkles count={80}  scale={20} size={5} speed={0.1} opacity={0.3} color="#f78f3f" />
          <Sparkles count={50}  scale={15} size={2} speed={0.3} opacity={0.5} color="#ffffff" />

          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
            <mesh position={[-7, -2, -15]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshPhysicalMaterial color="#f78f3f" metalness={0.9} roughness={0.1} clearcoat={1} emissive="#f78f3f" emissiveIntensity={0.2} />
            </mesh>
          </Float>
          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={3}>
            <mesh position={[8, 3, -18]}>
              <octahedronGeometry args={[0.8]} />
              <meshPhysicalMaterial color="#e23636" metalness={0.8} roughness={0.2} clearcoat={1} />
            </mesh>
          </Float>
          <Float speed={2} rotationIntensity={0.6} floatIntensity={4}>
            <mesh position={[-3, 5, -20]}>
              <dodecahedronGeometry args={[0.6]} />
              <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0.05} />
            </mesh>
          </Float>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[5, -5, -15]}>
              <sphereGeometry args={[0.5, 32, 32]} />
              <meshPhysicalMaterial color="#0072bc" metalness={0.9} roughness={0.1} />
            </mesh>
          </Float>
          
          <Scroll html style={{ width: '100vw', pointerEvents: 'none' }}>
            <Overlay />
          </Scroll>
        </ScrollControls>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.25}
          minPolarAngle={Math.PI / 2 - 0.25}
          autoRotate
          autoRotateSpeed={0.15}
        />
      </Canvas>
    </div>
  );
}
