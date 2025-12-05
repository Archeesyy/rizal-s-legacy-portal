import { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

interface TravelLocation {
  name: string;
  lat: number;
  lng: number;
  description: string;
  year: string;
  details: string;
}

const travelLocations: TravelLocation[] = [
  { name: "Calamba", lat: 14.2, lng: 121.1, description: "Birthplace", year: "1861", details: "Where the hero was born. 7th of 11 children of Francisco Mercado and Teodora Alonso." },
  { name: "Madrid", lat: 40.4, lng: -3.7, description: "Medical Studies", year: "1882", details: "Enrolled at Universidad Central de Madrid. Joined the Círculo Hispano-Filipino." },
  { name: "Paris", lat: 48.9, lng: 2.3, description: "Research", year: "1885", details: "Worked at Bibliothèque Nationale. Studied French literature and ophthalmology." },
  { name: "Heidelberg", lat: 49.4, lng: 8.7, description: "Ophthalmology", year: "1886", details: "Specialized under Dr. Otto Becker. Wrote 'A la Patria' and letters to family." },
  { name: "Berlin", lat: 52.5, lng: 13.4, description: "Noli Published", year: "1887", details: "Published Noli Me Tangere with help from Maximo Viola. Joined scientific societies." },
  { name: "London", lat: 51.5, lng: -0.1, description: "Historical Research", year: "1888", details: "Annotated Morga's 'Sucesos de las Islas Filipinas' at British Museum. Met Gertrude Beckett." },
  { name: "Hong Kong", lat: 22.3, lng: 114.2, description: "Exile Community", year: "1888", details: "Met exiled Filipino reformists. Practiced ophthalmology. Base for La Liga operations." },
  { name: "Tokyo", lat: 35.7, lng: 139.7, description: "Japanese Romance", year: "1888", details: "Met O Sei San. Studied Japanese culture, judo, and language for 45 days." },
  { name: "Ghent", lat: 51.1, lng: 3.7, description: "El Fili Published", year: "1891", details: "Published El Filibusterismo, dedicated to GOMBURZA. The darker, revolutionary sequel." },
  { name: "Dapitan", lat: 8.7, lng: 123.4, description: "Exile", year: "1892-1896", details: "4 years of productive exile. Built school, hospital, water system. Met Josephine Bracken." },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

interface HotspotProps {
  location: TravelLocation;
  isActive: boolean;
  onClick: () => void;
}

const Hotspot = ({ location, isActive, onClick }: HotspotProps) => {
  const position = latLngToVector3(location.lat, location.lng, 2.08);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });
  
  return (
    <group position={position}>
      {/* Outer glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.08, 0.12, 32]} />
        <meshBasicMaterial color="#ff4444" transparent opacity={isActive ? 0.8 : 0.4} side={THREE.DoubleSide} />
      </mesh>
      {/* Core marker */}
      <mesh ref={meshRef} onClick={onClick}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial 
          color={isActive ? "#FFD700" : "#ff4444"} 
          emissive={isActive ? "#FFD700" : "#ff4444"}
          emissiveIntensity={isActive ? 1.5 : 0.8}
        />
      </mesh>
      {/* Info card */}
      {isActive && (
        <Html distanceFactor={8} style={{ pointerEvents: 'none' }}>
          <div className="bg-gradient-to-br from-mahogany to-mahogany-light text-primary-foreground p-5 rounded-xl shadow-2xl min-w-[280px] border-2 border-gold/50 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-bold uppercase tracking-wider">{location.year}</span>
            </div>
            <h3 className="font-playfair text-xl font-bold text-gold mb-1">{location.name}</h3>
            <p className="text-sm text-gold/70 mb-3">{location.description}</p>
            <p className="text-sm leading-relaxed">{location.details}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

interface GlobeProps {
  activeLocation: number | null;
  setActiveLocation: (index: number | null) => void;
}

const Globe = ({ activeLocation, setActiveLocation }: GlobeProps) => {
  const globeRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  // Create Earth texture procedurally
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Ocean base
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGradient.addColorStop(0, '#1a3a5c');
    oceanGradient.addColorStop(0.5, '#0d2840');
    oceanGradient.addColorStop(1, '#1a3a5c');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, 1024, 512);
    
    // Add landmasses (simplified shapes)
    ctx.fillStyle = '#2d5016';
    // Asia
    ctx.beginPath();
    ctx.ellipse(750, 180, 200, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    // Europe
    ctx.beginPath();
    ctx.ellipse(550, 150, 80, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    // Americas
    ctx.beginPath();
    ctx.ellipse(250, 200, 100, 150, 0.3, 0, Math.PI * 2);
    ctx.fill();
    // Africa
    ctx.beginPath();
    ctx.ellipse(530, 280, 70, 100, 0, 0, Math.PI * 2);
    ctx.fill();
    // Australia
    ctx.beginPath();
    ctx.ellipse(850, 350, 60, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  useFrame((state) => {
    if (globeRef.current && activeLocation === null) {
      globeRef.current.rotation.y += 0.001;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Earth core */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[2.15, 64, 64]}>
        <meshBasicMaterial 
          color="#4a90d9" 
          transparent 
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Grid lines - longitude */}
      <Sphere args={[2.02, 24, 24]}>
        <meshBasicMaterial 
          color="#D4AF37" 
          wireframe 
          transparent 
          opacity={0.12}
        />
      </Sphere>

      {/* Connection lines between locations */}
      {travelLocations.map((location, index) => {
        if (index === 0) return null;
        const prevPos = latLngToVector3(travelLocations[index - 1].lat, travelLocations[index - 1].lng, 2.03);
        const currPos = latLngToVector3(location.lat, location.lng, 2.03);
        return (
          <group key={`line-${index}`}>
            <mesh position={prevPos.clone().lerp(currPos, 0.5)}>
              <cylinderGeometry args={[0.005, 0.005, prevPos.distanceTo(currPos), 8]} />
              <meshBasicMaterial color="#D4AF37" transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}

      {/* Hotspots */}
      {travelLocations.map((location, index) => (
        <Hotspot
          key={location.name}
          location={location}
          isActive={activeLocation === index}
          onClick={() => setActiveLocation(activeLocation === index ? null : index)}
        />
      ))}
    </group>
  );
};

const RealisticGlobe = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  return (
    <div className="w-full h-[550px] md:h-[650px] relative">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#D4AF37" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <Globe 
            activeLocation={activeLocation} 
            setActiveLocation={setActiveLocation}
          />
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={4}
          maxDistance={8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          autoRotate={activeLocation === null}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Travel Log Sidebar */}
      <div className="absolute top-4 left-4 md:left-auto md:right-4">
        <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-elegant border border-border max-h-[300px] md:max-h-[500px] overflow-y-auto custom-scrollbar">
          <h4 className="font-playfair text-base font-bold text-primary mb-3 flex items-center gap-2">
            <span className="text-gold">✦</span> Travel Log
          </h4>
          <div className="space-y-2">
            {travelLocations.map((location, index) => (
              <button
                key={location.name}
                onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  activeLocation === index 
                    ? "bg-gold text-accent-foreground shadow-md" 
                    : "bg-secondary/50 hover:bg-secondary text-foreground"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeLocation === index ? 'bg-mahogany' : 'bg-gold/50'}`} />
                <span className="font-semibold">{location.year}</span>
                <span className="text-muted-foreground">—</span>
                <span>{location.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
          Drag to rotate • Scroll to zoom • Click markers for details
        </p>
      </div>
    </div>
  );
};

export default RealisticGlobe;
