import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

interface TravelLocation {
  name: string;
  lat: number;
  lng: number;
  description: string;
  year: string;
}

const travelLocations: TravelLocation[] = [
  { name: "Calamba", lat: 14.2, lng: 121.1, description: "Birthplace - Where it all began", year: "1861" },
  { name: "Madrid", lat: 40.4, lng: -3.7, description: "Studied medicine at Universidad Central", year: "1882" },
  { name: "Paris", lat: 48.9, lng: 2.3, description: "Researched at Bibliothèque Nationale", year: "1885" },
  { name: "Heidelberg", lat: 49.4, lng: 8.7, description: "Specialized in ophthalmology under Dr. Becker", year: "1886" },
  { name: "Berlin", lat: 52.5, lng: 13.4, description: "Published Noli Me Tangere", year: "1887" },
  { name: "London", lat: 51.5, lng: -0.1, description: "Annotated Morga's Sucesos at British Museum", year: "1888" },
  { name: "Hong Kong", lat: 22.3, lng: 114.2, description: "Met exiled Filipino reformists", year: "1888" },
  { name: "Tokyo", lat: 35.7, lng: 139.7, description: "Romance with O Sei San", year: "1888" },
  { name: "Ghent", lat: 51.1, lng: 3.7, description: "Published El Filibusterismo", year: "1891" },
  { name: "Dapitan", lat: 8.7, lng: 123.4, description: "Place of exile - Built a school, clinic", year: "1892-1896" },
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
  const position = latLngToVector3(location.lat, location.lng, 2.05);
  
  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={isActive ? "#D4AF37" : "#FFD700"} 
          emissive={isActive ? "#D4AF37" : "#FFD700"}
          emissiveIntensity={isActive ? 1 : 0.3}
        />
      </mesh>
      {isActive && (
        <Html distanceFactor={10} style={{ pointerEvents: 'none' }}>
          <div className="bg-mahogany/95 backdrop-blur-sm text-primary-foreground p-4 rounded-lg shadow-xl min-w-[200px] border border-gold/30">
            <h3 className="font-playfair text-lg font-bold text-gold">{location.name}</h3>
            <p className="text-sm text-gold/80 mb-2">{location.year}</p>
            <p className="text-sm">{location.description}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

interface GlobeProps {
  activeLocation: number | null;
  setActiveLocation: (index: number | null) => void;
  autoRotate: boolean;
}

const Globe = ({ activeLocation, setActiveLocation, autoRotate }: GlobeProps) => {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeRef.current && autoRotate && activeLocation === null) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Earth sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#3E2723"
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Grid lines */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial 
          color="#D4AF37" 
          wireframe 
          transparent 
          opacity={0.15}
        />
      </Sphere>

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

const InteractiveGlobe = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
        <Suspense fallback={null}>
          <Globe 
            activeLocation={activeLocation} 
            setActiveLocation={setActiveLocation}
            autoRotate={true}
          />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>
      
      {/* Location List */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:top-4 md:bottom-auto">
        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant max-h-[200px] md:max-h-[400px] overflow-y-auto">
          <h4 className="font-playfair text-sm font-bold text-primary mb-2">Click a location:</h4>
          <div className="flex flex-wrap md:flex-col gap-2">
            {travelLocations.map((location, index) => (
              <button
                key={location.name}
                onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                className={`text-left text-xs px-2 py-1 rounded transition-all ${
                  activeLocation === index 
                    ? "bg-gold text-accent-foreground" 
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;
