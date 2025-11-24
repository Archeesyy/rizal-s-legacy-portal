import { useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Location {
  id: number;
  name: string;
  country: string;
  coordinates: { x: number; y: number };
  period: string;
  description: string;
  significance: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Calamba, Laguna",
    country: "Philippines",
    coordinates: { x: 85, y: 45 },
    period: "1861-1882, 1887-1888",
    description: "Birthplace and childhood home of José Rizal",
    significance:
      "Where Rizal spent his formative years, learning from his mother and developing his love for the Philippines.",
  },
  {
    id: 2,
    name: "Madrid",
    country: "Spain",
    coordinates: { x: 35, y: 30 },
    period: "1882-1885",
    description: "Studied medicine at Universidad Central de Madrid",
    significance:
      "Completed his medical studies and began writing Noli Me Tangere. Witnessed European intellectual movements.",
  },
  {
    id: 3,
    name: "Heidelberg",
    country: "Germany",
    coordinates: { x: 42, y: 25 },
    period: "1886",
    description: "Specialized in ophthalmology",
    significance:
      "Trained under the renowned ophthalmologist Dr. Otto Becker. Completed his eye specialization to help his mother.",
  },
  {
    id: 4,
    name: "Brussels",
    country: "Belgium",
    coordinates: { x: 40, y: 23 },
    period: "1890-1891",
    description: "Annotated Morga's historical work",
    significance:
      "Worked on annotating Sucesos de las Islas Filipinas, challenging Spanish colonial narratives about Philippine history.",
  },
  {
    id: 5,
    name: "Dapitan",
    country: "Philippines",
    coordinates: { x: 87, y: 48 },
    period: "1892-1896",
    description: "Exiled to Mindanao",
    significance:
      "Despite exile, established a school, practiced medicine, conducted scientific research, and improved the community.",
  },
  {
    id: 6,
    name: "Manila",
    country: "Philippines",
    coordinates: { x: 86, y: 44 },
    period: "1892, 1896",
    description: "Founded La Liga Filipina and site of execution",
    significance:
      "Founded La Liga Filipina in 1892. Executed at Bagumbayan (Luneta) on December 30, 1896.",
  },
];

const MapSection = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(
    locations[0]
  );

  return (
    <section id="map" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The World Traveler
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow Rizal's journey across continents, from Manila to Madrid,
            and discover how his travels shaped his vision for the Philippines.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Interactive World Map */}
            <div className="lg:col-span-2">
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden border border-border p-8">
                <svg
                  viewBox="0 0 100 60"
                  className="w-full h-auto"
                  style={{ minHeight: "400px" }}
                >
                  {/* Simplified World Map SVG */}
                  <rect width="100" height="60" fill="hsl(var(--muted))" />
                  
                  {/* Continents (simplified shapes) */}
                  <path
                    d="M30 15 L35 15 L40 20 L45 18 L50 22 L48 28 L42 30 L35 28 L30 25 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.3"
                  />
                  <path
                    d="M80 35 L88 35 L90 42 L88 48 L82 50 L78 45 L80 40 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.3"
                  />

                  {/* Location Markers */}
                  {locations.map((location) => (
                    <g key={location.id}>
                      {/* Connection Lines */}
                      {activeLocation?.id === location.id && (
                        <circle
                          cx={location.coordinates.x}
                          cy={location.coordinates.y}
                          r="2"
                          fill="hsl(var(--accent))"
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}
                      
                      {/* Marker Pin */}
                      <g
                        transform={`translate(${location.coordinates.x}, ${location.coordinates.y})`}
                        className="cursor-pointer transition-transform hover:scale-125"
                        onClick={() => setActiveLocation(location)}
                      >
                        <circle
                          r="1.5"
                          fill={
                            activeLocation?.id === location.id
                              ? "hsl(var(--accent))"
                              : "hsl(var(--primary))"
                          }
                          className="transition-colors"
                        />
                        <circle
                          r="0.7"
                          fill="white"
                          opacity="0.8"
                        />
                      </g>
                    </g>
                  ))}
                </svg>

                {/* Location Labels */}
                <div className="absolute inset-0 pointer-events-none">
                  {locations.map((location) => (
                    <div
                      key={`label-${location.id}`}
                      className="absolute text-xs font-lato font-semibold text-primary"
                      style={{
                        left: `${location.coordinates.x}%`,
                        top: `${location.coordinates.y}%`,
                        transform: "translate(-50%, -150%)",
                      }}
                    >
                      {location.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="lg:col-span-1 space-y-4">
              {activeLocation && (
                <Card className="bg-card border-border shadow-xl animate-fade-in">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-primary">
                          {activeLocation.name}
                        </h3>
                        <p className="font-lato text-sm text-muted-foreground">
                          {activeLocation.country}
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <p className="font-lato text-sm text-accent font-semibold mb-2">
                        Period: {activeLocation.period}
                      </p>
                      <p className="font-lato text-foreground mb-4">
                        {activeLocation.description}
                      </p>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="font-lato font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                          Historical Significance
                        </h4>
                        <p className="font-lato text-sm text-foreground leading-relaxed">
                          {activeLocation.significance}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Location Quick Links */}
              <div className="space-y-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-lato text-sm transition-all ${
                      activeLocation?.id === location.id
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "bg-card text-foreground hover:bg-muted border border-border"
                    }`}
                  >
                    <div className="font-semibold">{location.name}</div>
                    <div className="text-xs opacity-75">{location.country}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
