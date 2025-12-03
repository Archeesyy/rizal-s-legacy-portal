import { useState } from "react";
import { GraduationCap, Globe, Heart, Lightbulb } from "lucide-react";

const BiographySection = () => {
  const [activeEra, setActiveEra] = useState("childhood");

  const eras = [
    { id: "childhood", label: "Childhood", icon: Heart },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "travels", label: "Travels", icon: Globe },
  ];

  return (
    <section className="min-h-screen py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The Man & The Hero
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
            From a quiet town in Laguna to the world stage — the life of José Protasio Rizal Mercado y Alonso Realonda.
          </p>
        </div>

        {/* Ancestry */}
        <div className="max-w-4xl mx-auto mb-16 bg-card p-8 rounded-xl shadow-elegant">
          <h3 className="font-playfair text-2xl font-bold text-primary mb-4 flex items-center gap-3">
            <span className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold">家</span>
            </span>
            Mixed Ancestry
          </h3>
          <p className="font-lato text-foreground leading-relaxed">
            Rizal's lineage was a tapestry of cultures: his great-great-grandfather <strong>Domingo Lam-co</strong> was a 
            Chinese immigrant from Fujian. He also had <strong>Malay</strong> blood through his mother's line and 
            <strong> Spanish</strong> ancestry (some historians cite Japanese roots as well). This mixed heritage 
            made him a true son of the archipelago.
          </p>
        </div>

        {/* Era Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-lato font-medium transition-all ${
                activeEra === era.id
                  ? "bg-gold text-accent-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              <era.icon size={18} />
              {era.label}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <div className="max-w-5xl mx-auto">
          {activeEra === "childhood" && (
            <div className="bg-card p-8 rounded-xl shadow-elegant animate-fade-in">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
                The Boy from Calamba
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-lato text-foreground leading-relaxed mb-6">
                    Born <strong>June 19, 1861</strong>, in Calamba, Laguna, José was the 7th of 11 children of 
                    <strong> Francisco Mercado</strong> (a farmer) and <strong>Teodora Alonso</strong> (his first teacher).
                  </p>
                  <p className="font-lato text-foreground leading-relaxed">
                    His older brother <strong>Paciano</strong> was his "second father" and a known associate of the 
                    Gomburza priests — a connection that would later make the family targets of suspicion.
                  </p>
                </div>
                <div className="bg-mahogany p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Lightbulb className="text-gold mt-1" size={24} />
                    <h4 className="font-playfair text-xl font-bold text-gold">
                      The Story of the Moth
                    </h4>
                  </div>
                  <p className="font-lato text-primary-foreground text-sm leading-relaxed">
                    One night, young José watched a moth fly into a candle flame. His mother Teodora told him: 
                    "The moth is like a man who seeks the light of truth, even if it means his destruction."
                  </p>
                  <p className="font-lato text-gold font-semibold mt-4 text-sm">
                    Moral: "It is worth dying for the light."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeEra === "education" && (
            <div className="bg-card p-8 rounded-xl shadow-elegant animate-fade-in">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
                Two Schools, Two Worlds
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ateneo */}
                <div className="bg-gold/10 border-2 border-gold p-6 rounded-xl">
                  <h4 className="font-playfair text-2xl font-bold text-gold mb-4">
                    Ateneo Municipal de Manila
                  </h4>
                  <p className="font-lato text-foreground text-sm mb-4">
                    <strong>Run by:</strong> Jesuits (Society of Jesus)<br />
                    <strong>Years:</strong> 1872-1877
                  </p>
                  <ul className="font-lato text-foreground space-y-2">
                    <li>✓ Liberal, encouraging critical thinking</li>
                    <li>✓ Merit-based system (Two Empires: Romans vs. Carthaginians)</li>
                    <li>✓ Rizal excelled, earning the title <strong>"Emperor"</strong></li>
                    <li>✓ Graduated with highest honors (sobresaliente)</li>
                  </ul>
                </div>
                {/* UST */}
                <div className="bg-destructive/10 border-2 border-destructive/50 p-6 rounded-xl">
                  <h4 className="font-playfair text-2xl font-bold text-destructive mb-4">
                    University of Santo Tomas
                  </h4>
                  <p className="font-lato text-foreground text-sm mb-4">
                    <strong>Run by:</strong> Dominicans<br />
                    <strong>Years:</strong> 1878-1882
                  </p>
                  <ul className="font-lato text-foreground space-y-2">
                    <li>✗ Discriminatory toward Filipino students</li>
                    <li>✗ Rote memorization over understanding</li>
                    <li>✗ Called "Indio Chongo" (Monkey Indio)</li>
                    <li>✗ Spaniards called "Kastilang Bangus" (Milkfish Spaniard)</li>
                  </ul>
                  <p className="font-lato text-muted-foreground text-sm mt-4 italic">
                    Disgusted by the discrimination, Rizal left to continue his studies in Spain.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeEra === "travels" && (
            <div className="bg-card p-8 rounded-xl shadow-elegant animate-fade-in">
              <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
                The World Traveler
              </h3>
              <div className="space-y-8">
                {/* First Journey */}
                <div>
                  <h4 className="font-playfair text-xl font-bold text-gold mb-4">
                    First Journey (1882-1887)
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Spain (Madrid)", "France (Paris)", "Germany (Heidelberg, Berlin)"].map((place) => (
                      <span
                        key={place}
                        className="px-4 py-2 bg-gold/20 text-foreground rounded-full font-lato text-sm"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                  <p className="font-lato text-foreground mt-4">
                    In Madrid, he completed his medical degree. In Germany, he finished <strong>Noli Me Tangere</strong> 
                    and met the historian <strong>Ferdinand Blumentritt</strong>, who became his lifelong friend.
                  </p>
                </div>
                {/* Second Journey */}
                <div>
                  <h4 className="font-playfair text-xl font-bold text-gold mb-4">
                    Second Journey (1888-1892)
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Hong Kong", "Japan", "United States", "London (British Museum)"].map((place) => (
                      <span
                        key={place}
                        className="px-4 py-2 bg-mahogany/20 text-foreground rounded-full font-lato text-sm"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                  <p className="font-lato text-foreground mt-4">
                    In London, he annotated Antonio de Morga's <em>Sucesos de las Islas Filipinas</em> to prove Filipinos 
                    had a rich pre-colonial history. He also founded the <strong>Indios Bravos</strong> (Brave Indians), 
                    a patriotic society of Filipino expatriates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
