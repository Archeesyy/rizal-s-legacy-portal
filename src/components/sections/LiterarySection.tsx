import { useState } from "react";
import { BookOpen, Quote } from "lucide-react";

interface Character {
  name: string;
  role: string;
  symbolism: string;
  novel: string;
}

const characters: Character[] = [
  {
    name: "Crisóstomo Ibarra",
    role: "Protagonist (Noli)",
    symbolism: "Represents the idealistic Filipino reformist who believes change can come through legal means and education. His transformation into Simoun shows disillusionment.",
    novel: "noli",
  },
  {
    name: "María Clara",
    role: "Female Lead (Noli)",
    symbolism: "The idealized Filipina — pure, religious, obedient. Her tragic fate (choosing a convent over Ibarra) symbolizes the Filipino woman trapped by colonial and religious constraints.",
    novel: "noli",
  },
  {
    name: "Sisa",
    role: "Tragic Mother (Noli)",
    symbolism: "Represents the suffering Filipino mother and the common people. Her madness after losing her sons Basilio and Crispín symbolizes how colonial abuse destroys families.",
    novel: "noli",
  },
  {
    name: "Elías",
    role: "Revolutionary (Noli)",
    symbolism: "The voice of the oppressed masses. Unlike Ibarra, he believes reform is impossible and revolution is necessary. His death foreshadows the coming revolution.",
    novel: "noli",
  },
  {
    name: "Padre Dámaso",
    role: "Antagonist (Noli)",
    symbolism: "The corrupt Spanish friar. Represents the abuses of the Catholic Church — arrogance, racism, and exploitation. He is María Clara's biological father.",
    novel: "noli",
  },
  {
    name: "Simoun",
    role: "Protagonist (El Fili)",
    symbolism: "Ibarra's dark alter-ego. A wealthy jeweler plotting violent revolution. Represents the Filipino driven to extremism by failed reforms — 'I have come to believe in violence.'",
    novel: "fili",
  },
];

const LiterarySection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            Literary Works
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
            The novels that imagined a nation into existence.
          </p>
        </div>

        {/* Novel Summaries */}
        <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
          {/* Noli Me Tangere */}
          <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
            <div className="bg-primary p-6">
              <h3 className="font-playfair text-2xl font-bold text-gold">
                Noli Me Tangere (1887)
              </h3>
              <p className="font-lato text-primary-foreground text-sm">
                "Touch Me Not" — Published in Berlin
              </p>
            </div>
            <div className="p-6">
              <p className="font-lato text-foreground mb-4">
                A <strong>social novel</strong> that exposes the "cancer" of Philippine society under Spanish rule. 
                It diagnosed the ills: friar abuses, colonial discrimination, and the suffering of the common people.
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Quote className="text-gold flex-shrink-0" size={20} />
                  <p className="font-lato text-sm text-foreground italic">
                    "Social Cancer" — Rizal likened colonial oppression to a disease that must be diagnosed before it can be cured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* El Filibusterismo */}
          <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
            <div className="bg-mahogany p-6">
              <h3 className="font-playfair text-2xl font-bold text-gold">
                El Filibusterismo (1891)
              </h3>
              <p className="font-lato text-primary-foreground text-sm">
                "The Reign of Greed" — Published in Ghent
              </p>
            </div>
            <div className="p-6">
              <p className="font-lato text-foreground mb-4">
                A <strong>political novel</strong> darker than its predecessor. It is dedicated to the memory of 
                <strong> GOMBURZA</strong> and shows a shift from reform to revolution.
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Quote className="text-gold flex-shrink-0" size={20} />
                  <p className="font-lato text-sm text-foreground italic">
                    "To the memory of the priests, Don Mariano Gómez, Don José Burgos, and Don Jacinto Zamora... whose execution woke the national consciousness."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagined Communities */}
        <div className="max-w-4xl mx-auto mb-20 bg-gold/10 border-2 border-gold rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="text-gold" size={32} />
            <h3 className="font-playfair text-2xl font-bold text-primary">
              Benedict Anderson's "Imagined Communities"
            </h3>
          </div>
          <p className="font-lato text-foreground leading-relaxed">
            Political scientist Benedict Anderson argued that novels like Rizal's allowed Filipinos scattered across 
            7,000 islands to <strong>imagine themselves as one nation</strong>. Before these novels, a Tagalog, 
            Cebuano, and Ilocano might not see each other as countrymen. By reading the same stories of injustice 
            and heroism, they began to feel a shared identity — a national consciousness was born.
          </p>
        </div>

        {/* 3D Character Flip Cards */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-playfair text-3xl font-bold text-primary text-center mb-8">
            Character Analysis — 3D Flip Cards
          </h3>
          <p className="font-lato text-center text-muted-foreground mb-8">
            Hover over each card to reveal the deeper meaning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character, index) => (
              <div
                key={index}
                className="perspective-1000 h-64"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className={`absolute inset-0 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg ${
                      character.novel === "noli" ? "bg-primary" : "bg-mahogany"
                    }`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                      <span className="font-playfair text-2xl font-bold text-accent-foreground">
                        {character.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-playfair text-xl font-bold text-primary-foreground">
                      {character.name}
                    </h4>
                    <p className="font-lato text-sm text-gold mt-2">
                      {character.role}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 rounded-xl p-6 bg-card border-2 border-gold flex flex-col justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h4 className="font-playfair text-lg font-bold text-primary mb-3">
                      Symbolism
                    </h4>
                    <p className="font-lato text-sm text-foreground leading-relaxed">
                      {character.symbolism}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiterarySection;
