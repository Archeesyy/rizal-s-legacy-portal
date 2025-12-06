import { Suspense } from "react";
import RealisticGlobe from "@/components/RealisticGlobe";
import { Globe, MapPin } from "lucide-react";

const MapRoom = () => {
  const journeyHighlights = [
    { year: "1882", event: "Departure to Spain", location: "Manila → Barcelona" },
    { year: "1885", event: "Medical Studies", location: "Madrid, Spain" },
    { year: "1886", event: "Ophthalmology Studies", location: "Heidelberg, Germany" },
    { year: "1887", event: "Noli Me Tangere Published", location: "Berlin, Germany" },
    { year: "1888", event: "Meeting O Sei San", location: "Tokyo, Japan" },
    { year: "1888", event: "Annotating Morga", location: "London, England" },
    { year: "1891", event: "El Filibusterismo Published", location: "Ghent, Belgium" },
    { year: "1892", event: "Return & Exile", location: "Dapitan, Philippines" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mahogany to-background py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gold text-center mb-4">
          The Map Room
        </h2>
        <p className="font-lato text-center text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Trace Rizal's footsteps across the globe. Drag to rotate • Click markers for travel details
        </p>

        {/* 3D Globe */}
        <div className="mb-16">
          <Suspense fallback={
            <div className="w-full h-[550px] flex items-center justify-center bg-background/20 rounded-xl backdrop-blur-sm">
              <div className="text-center">
                <Globe className="w-16 h-16 text-gold animate-spin mx-auto mb-4" />
                <p className="text-gold animate-pulse text-lg font-lato">Loading 3D Earth...</p>
              </div>
            </div>
          }>
            <RealisticGlobe />
          </Suspense>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-gold text-center mb-8 flex items-center justify-center gap-3">
            <MapPin className="text-gold" size={28} />
            Journey Highlights
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-6">
              {journeyHighlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-background/10 backdrop-blur-sm p-4 rounded-xl border border-gold/20 inline-block hover:bg-background/20 transition-colors">
                      <span className="font-playfair text-lg font-bold text-gold">{item.year}</span>
                      <h4 className="font-lato font-semibold text-primary-foreground">{item.event}</h4>
                      <p className="font-lato text-sm text-primary-foreground/70">{item.location}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-gold rounded-full ring-4 ring-gold/30 flex-shrink-0 z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notable Locations Legend */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { location: "Calamba, Laguna", note: "Birthplace (June 19, 1861)" },
            { location: "Madrid, Spain", note: "Medical & Philosophy studies" },
            { location: "Heidelberg, Germany", note: "Ophthalmology specialization" },
            { location: "Hong Kong", note: "Medical practice, met exiled Filipinos" },
            { location: "London, England", note: "Annotated Morga's Sucesos" },
            { location: "Dapitan", note: "4 years of exile (1892-1896)" },
          ].map((loc) => (
            <div key={loc.location} className="bg-background/10 backdrop-blur-sm p-4 rounded-lg border border-gold/20">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="font-lato font-semibold text-primary-foreground">{loc.location}</p>
                  <p className="font-lato text-xs text-primary-foreground/70">{loc.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapRoom;