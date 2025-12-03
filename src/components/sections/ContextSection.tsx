import { Ship, Users, AlertTriangle, Flame } from "lucide-react";

const ContextSection = () => {
  return (
    <section className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The 19th Century Philippines
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
            To understand Rizal, one must first understand the world that forged him.
          </p>
        </div>

        {/* Galleon Trade */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
            <div className="bg-primary p-6 flex items-center gap-4">
              <Ship className="text-gold" size={32} />
              <h3 className="font-playfair text-3xl font-bold text-primary-foreground">
                The Galleon Trade (1565-1815)
              </h3>
            </div>
            <div className="p-8">
              <p className="font-lato text-lg text-foreground leading-relaxed mb-6">
                For <strong>250 years</strong>, the Manila-Acapulco Galleon Trade was the economic lifeline of colonial Philippines. 
                Spanish galleons carried Chinese silk, spices, and porcelain to Mexico, returning with silver pesos.
              </p>
              <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-gold">
                <p className="font-lato text-foreground">
                  <strong className="text-gold">Impact of its End (1815):</strong> When Mexico gained independence and the trade ended, 
                  Spain opened Philippine ports to world trade. This brought in <strong>new ideas of liberalism, nationalism, and reform</strong> 
                  — the ideological foundation for Rizal's generation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Structure - Pyramid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-playfair text-3xl font-bold text-primary text-center mb-8">
            The Casta System (Social Hierarchy)
          </h3>
          <div className="relative">
            {/* Pyramid */}
            <div className="flex flex-col items-center gap-2">
              {/* Peninsulares */}
              <div className="w-48 bg-gold text-center py-4 rounded-t-lg shadow-lg">
                <p className="font-playfair font-bold text-accent-foreground">Peninsulares</p>
                <p className="font-lato text-xs text-accent-foreground/80">Spanish-born Spaniards</p>
              </div>
              {/* Insulares */}
              <div className="w-72 bg-mahogany text-center py-4 shadow-lg">
                <p className="font-playfair font-bold text-primary-foreground">Insulares/Criollos</p>
                <p className="font-lato text-xs text-primary-foreground/80">Spaniards born in Philippines</p>
              </div>
              {/* Mestizos */}
              <div className="w-96 bg-mahogany-light text-center py-4 shadow-lg">
                <p className="font-playfair font-bold text-primary-foreground">Mestizos</p>
                <p className="font-lato text-xs text-primary-foreground/80">Mixed heritage (Chinese/Spanish)</p>
              </div>
              {/* Indios */}
              <div className="w-full max-w-lg bg-secondary text-center py-6 rounded-b-lg shadow-lg">
                <p className="font-playfair font-bold text-foreground">Indios</p>
                <p className="font-lato text-xs text-muted-foreground">Native Filipinos (The Majority)</p>
              </div>
            </div>
            <p className="text-center font-lato text-sm text-muted-foreground mt-4 italic">
              Rizal, a mestizo, was still considered beneath pure Spaniards despite his genius.
            </p>
          </div>
        </div>

        {/* Social Dissonance */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="text-destructive" size={32} />
            <h3 className="font-playfair text-3xl font-bold text-primary">
              Colonial Abuses
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-card border-l-4 border-destructive">
              <h4 className="font-playfair text-xl font-bold text-primary mb-3">Polo y Servicio</h4>
              <p className="font-lato text-foreground">
                <strong>Forced Labor:</strong> All male Filipinos aged 16-60 were required to work 40 days per year 
                (reduced from 15 days in 1884) for the colonial government without pay — building roads, bridges, and churches.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card border-l-4 border-gold">
              <h4 className="font-playfair text-xl font-bold text-primary mb-3">Bandala</h4>
              <p className="font-lato text-foreground">
                <strong>Forced Sale:</strong> Farmers were forced to sell a quota of their crops (rice, tobacco) to the 
                government at prices far below market value, often leaving them in debt.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card border-l-4 border-mahogany">
              <h4 className="font-playfair text-xl font-bold text-primary mb-3">Frailocracy</h4>
              <p className="font-lato text-foreground">
                <strong>Rule of the Friars:</strong> Parish priests held immense power — controlling education, civil records, 
                and even having veto power over local officials. They were the de facto rulers of towns.
              </p>
            </div>
          </div>
        </div>

        {/* The Rise of Liberalism */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Flame className="text-gold" size={32} />
            <h3 className="font-playfair text-3xl font-bold text-primary">
              The Rise of Liberalism & the Gomburza Tragedy
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h4 className="font-playfair text-xl font-bold text-primary mb-3">Two Governors, Two Philosophies</h4>
              <div className="space-y-4 font-lato text-foreground">
                <p>
                  <strong className="text-gold">Gov. Gen. Carlos María de la Torre (1869-1871):</strong> A liberal who 
                  abolished censorship, freed political prisoners, and walked without bodyguards. He gave Filipinos hope for reform.
                </p>
                <p>
                  <strong className="text-destructive">Gov. Gen. Rafael de Izquierdo (1871-1873):</strong> His replacement. 
                  Ruled with an "iron fist," reinstating repressive policies and crushing dissent.
                </p>
              </div>
            </div>
            <div className="bg-mahogany p-6 rounded-xl shadow-elegant">
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">The Cavite Mutiny (1872)</h4>
              <p className="font-lato text-primary-foreground mb-4">
                A brief uprising of 200 Filipino soldiers at the Cavite arsenal was used as a pretext to eliminate 
                prominent Filipino priests and reformists.
              </p>
              <h4 className="font-playfair text-xl font-bold text-gold mb-3">GOMBURZA</h4>
              <p className="font-lato text-primary-foreground">
                Fathers <strong>Mariano Gómez</strong>, <strong>José Burgos</strong>, and <strong>Jacinto Zamora</strong> 
                were falsely accused of masterminding the mutiny and publicly garroted on February 17, 1872. 
                This injustice radicalized an 11-year-old José Rizal and inspired his dedication of <em>El Filibusterismo</em> to them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
