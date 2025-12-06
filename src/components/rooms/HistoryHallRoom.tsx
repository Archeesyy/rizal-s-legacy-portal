import CastaPyramid from "@/components/CastaPyramid";
import { Ship, Users, Church, Flame } from "lucide-react";

const HistoryHallRoom = () => {
  const plaques = [
    {
      icon: Ship,
      title: "The Galleon Trade (1565-1815)",
      content: "For 250 years, the Manila-Acapulco trade connected Asia and the Americas. This monopoly enriched Spain but isolated the Philippines from Enlightenment ideas. Its end opened the country to global trade and liberalism.",
      accent: "gold",
    },
    {
      icon: Users,
      title: "Polo y Servicio",
      content: "Forced labor requiring all male Filipinos aged 16-60 to work 40 days per year on public works—roads, bridges, and ships. Many died from abuse and exhaustion.",
      accent: "destructive",
    },
    {
      icon: Church,
      title: "Bandala System",
      content: "Filipinos were forced to sell their crops to the government at fixed, often below-market prices. This impoverished farmers while enriching the colonial administration.",
      accent: "destructive",
    },
    {
      icon: Church,
      title: "Frailocracy",
      content: "Spanish friars held power over civil officials. They controlled education, land records, and local government—making them the true rulers of the countryside.",
      accent: "destructive",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Hall of History
        </h2>
        <p className="font-lato text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Step into the 19th Century Philippines—a world of rigid social hierarchy and colonial oppression that would forge a hero.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Casta Pyramid */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6 text-center">
              The Casta System
            </h3>
            <CastaPyramid />
            <p className="font-lato text-sm text-muted-foreground text-center mt-6">
              Social mobility was nearly impossible. Your birth determined your entire life.
            </p>
          </div>

          {/* Museum Plaques Grid */}
          <div className="grid gap-6">
            {plaques.map((plaque, index) => (
              <div
                key={index}
                className="group bg-card hover:bg-card/80 p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 hover:translate-x-2"
                style={{ borderColor: plaque.accent === "gold" ? "hsl(var(--gold))" : "hsl(var(--destructive))" }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${plaque.accent === "gold" ? "bg-gold/20 text-gold" : "bg-destructive/20 text-destructive"}`}>
                    <plaque.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-primary mb-2">{plaque.title}</h4>
                    <p className="font-lato text-sm text-muted-foreground">{plaque.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GOMBURZA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-mahogany rounded-2xl p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Flame className="text-gold" size={32} />
                <h3 className="font-playfair text-3xl font-bold text-gold">GOMBURZA</h3>
                <Flame className="text-gold" size={32} />
              </div>
              <p className="font-lato text-center text-primary-foreground mb-6">
                February 17, 1872 — The Execution That Awakened a Nation
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { name: "Fr. Mariano Gómez", age: "73 years old" },
                  { name: "Fr. José Burgos", age: "35 years old" },
                  { name: "Fr. Jacinto Zamora", age: "36 years old" },
                ].map((priest) => (
                  <div key={priest.name} className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-center border border-gold/20">
                    <p className="font-playfair font-bold text-gold">{priest.name}</p>
                    <p className="font-lato text-xs text-primary-foreground/70">{priest.age}</p>
                  </div>
                ))}
              </div>
              <p className="font-lato text-sm text-primary-foreground/80 text-center italic">
                "Falsely accused of masterminding the Cavite Mutiny, these three Filipino priests were publicly garroted. Their martyrdom ignited the flame of nationalism in a young Rizal, who later dedicated El Filibusterismo to their memory."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHallRoom;