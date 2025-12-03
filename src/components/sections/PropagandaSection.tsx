import { Users, Newspaper, Target } from "lucide-react";

const PropagandaSection = () => {
  const triumvirate = [
    {
      name: "José Rizal",
      alias: "Laong Laan / Dimasalang",
      role: "The Brains",
      description: "The intellectual leader. His novels (Noli & El Fili) awakened national consciousness. He believed in peaceful reform through education.",
      color: "gold",
    },
    {
      name: "Marcelo H. del Pilar",
      alias: "Plaridel",
      role: "The Propagandist",
      description: "Master satirist and editor of La Solidaridad. His pen name 'Plaridel' is now used for Philippine broadcast standards. Wrote 'Dasalan at Tocsohan.'",
      color: "mahogany",
    },
    {
      name: "Graciano López Jaena",
      alias: "The Orator",
      role: "The Voice",
      description: "Founded La Solidaridad in Barcelona. His famous speech 'Fray Botod' mocked corrupt friars. Known for his fiery speeches that moved crowds.",
      color: "primary",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
            The Propaganda Movement
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
            The pen as a weapon — how Filipino intellectuals fought for reform from abroad.
          </p>
        </div>

        {/* The Triumvirate */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Users className="text-gold" size={32} />
            <h3 className="font-playfair text-3xl font-bold text-primary">
              The Triumvirate of the Propaganda Movement
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {triumvirate.map((person, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl shadow-elegant overflow-hidden border-t-4 ${
                  person.color === "gold"
                    ? "border-gold"
                    : person.color === "mahogany"
                    ? "border-mahogany"
                    : "border-primary"
                }`}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div
                      className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-playfair font-bold ${
                        person.color === "gold"
                          ? "bg-gold text-accent-foreground"
                          : person.color === "mahogany"
                          ? "bg-mahogany text-primary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {person.name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-primary text-center">
                    {person.name}
                  </h4>
                  <p className="font-lato text-sm text-gold text-center mb-2">
                    "{person.alias}"
                  </p>
                  <p className="font-lato text-xs text-muted-foreground text-center mb-4">
                    {person.role}
                  </p>
                  <p className="font-lato text-sm text-foreground text-center">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* La Solidaridad */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-mahogany rounded-xl shadow-elegant overflow-hidden">
            <div className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-parchment rounded-lg flex items-center justify-center shadow-lg">
                  <Newspaper className="text-mahogany" size={48} />
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold text-gold mb-4">
                  La Solidaridad (1889-1895)
                </h3>
                <p className="font-lato text-primary-foreground mb-4">
                  The fortnightly newspaper published in Barcelona (later Madrid) that served as the voice of the 
                  Reform Movement. It was the principal instrument of the Propaganda Movement.
                </p>
                <h4 className="font-playfair text-xl font-bold text-gold mb-3">Key Aims:</h4>
                <ul className="font-lato text-primary-foreground space-y-2">
                  <li>• <strong>Assimilation:</strong> Make the Philippines a province of Spain with equal rights</li>
                  <li>• <strong>Representation:</strong> Filipino representation in the Spanish Cortes (Parliament)</li>
                  <li>• <strong>Secularization:</strong> Replace Spanish friars with Filipino secular priests</li>
                  <li>• <strong>Freedom:</strong> Freedom of speech, press, and assembly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* La Liga Filipina */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
            <div className="bg-gold p-6 flex items-center gap-4">
              <Target className="text-accent-foreground" size={32} />
              <h3 className="font-playfair text-3xl font-bold text-accent-foreground">
                La Liga Filipina (1892)
              </h3>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-lato text-foreground leading-relaxed mb-4">
                    Upon returning to the Philippines in 1892, Rizal founded <strong>La Liga Filipina</strong> in the 
                    house of Doroteo Ongjunco on Ilaya Street, Tondo, Manila on <strong>July 3, 1892</strong>.
                  </p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="font-playfair text-xl font-bold text-primary mb-2">
                      Motto: "Unus Instar Omnium"
                    </p>
                    <p className="font-lato text-muted-foreground italic">
                      "One Like All" — symbolizing unity and equality among members.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-primary mb-4">Objectives:</h4>
                  <ul className="font-lato text-foreground space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                      Unite the whole archipelago into one compact body
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                      Mutual protection in every want and necessity
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                      Defense against violence and injustice
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                      Development of education, agriculture, and commerce
                    </li>
                  </ul>
                  <p className="font-lato text-sm text-muted-foreground mt-4 italic">
                    Just 4 days after founding La Liga, Rizal was arrested and exiled to Dapitan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropagandaSection;
