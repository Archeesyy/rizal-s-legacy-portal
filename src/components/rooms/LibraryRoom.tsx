import { useState } from "react";
import FlipCard3D from "@/components/FlipCard3D";
import VirtualArtifact from "@/components/VirtualArtifact";
import { BookOpen, Newspaper, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import noliImg from "@/assets/noli-me-tangere.jpg";
import filiImg from "@/assets/el-filibusterismo.jpg";

const LibraryRoom = () => {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const characters = [
    { name: "Crisóstomo Ibarra", subtitle: "Protagonist", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Ibarra", back: "The Idealist Reformist", content: "Represents Rizal himself—educated abroad, idealistic, hoping to reform society through peaceful means.", details: "Becomes Simoun in El Fili." },
    { name: "María Clara", subtitle: "The Tragic Heroine", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Maria+Clara", back: "The Captive Filipina", content: "Represents the Philippines—beautiful, suffering, trapped by the friars and colonial system.", details: "Based on Leonor Rivera." },
    { name: "Sisa", subtitle: "The Mad Mother", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Sisa", back: "The Motherland's Suffering", content: "Represents Filipino mothers who lost their children to colonial abuse. Her madness is the nation's grief.", details: "Sons Basilio and Crispin." },
    { name: "Elías", subtitle: "The Revolutionary", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Elias", back: "Voice of the Masses", content: "Represents the oppressed who want change through revolution. Sacrifices himself for Ibarra.", details: '"I die without seeing the dawn."' },
    { name: "Padre Dámaso", subtitle: "The Corrupt Friar", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Damaso", back: "The Frailocracy", content: "Represents the abusive religious orders—arrogant, immoral, the true power behind colonial rule.", details: "María Clara's biological father." },
    { name: "Simoun", subtitle: "The Jeweler", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Simoun", back: "The Transformed Ibarra", content: "Ibarra reborn—now seeking violent revolution after his idealism failed. The jeweler with deadly intentions.", details: "Represents Rizal's darker thoughts." },
  ];

  const bookDetails = {
    noli: {
      title: "Noli Me Tangere",
      subtitle: 'Berlin, 1887 • "Touch Me Not"',
      summary: "Rizal's first novel diagnoses colonial society as a 'Social Cancer.' It exposes the corruption of the Spanish friars, the suffering of the Filipino people, and the need for reform through education and awakening.",
      themes: ["Corruption of the Church", "Social Inequality", "The Power of Education", "Love and Sacrifice"],
      impact: "Banned by Spanish authorities. Reading it was punishable by imprisonment. Yet it spread throughout the Philippines, awakening nationalist consciousness.",
    },
    fili: {
      title: "El Filibusterismo",
      subtitle: "Ghent, 1891 • Dedicated to GOMBURZA",
      summary: "The darker sequel explores revolution and the limits of peaceful reform. Simoun (formerly Ibarra) returns as a wealthy jeweler plotting violent revenge against the colonial system that destroyed his life.",
      themes: ["Revolution vs. Reform", "The Cost of Revenge", "Hope for the Youth", "Sacrifice for Freedom"],
      impact: "More pessimistic than Noli, it reflects Rizal's growing frustration with peaceful reform. The dedication to GOMBURZA made clear his revolutionary sympathies.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Library
        </h2>
        <p className="font-lato text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Enter the world of Rizal's imagination—where novels became weapons and characters became symbols of a nation's struggle.
        </p>

        {/* 3D Books Section */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <BookOpen className="text-gold" size={28} />
            The Masterpieces
          </h3>
          <p className="font-lato text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Benedict Anderson's concept of "Imagined Communities"—Filipinos reading the same stories imagined themselves as one nation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Noli Me Tangere */}
            <div 
              className="group cursor-pointer"
              onClick={() => setSelectedBook("noli")}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-elegant transition-all duration-500 group-hover:shadow-2xl group-hover:rotate-y-6 group-hover:scale-105"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <img src={noliImg} alt="Noli Me Tangere" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent flex flex-col justify-end p-6">
                  <h4 className="font-playfair text-2xl font-bold text-gold mb-2">Noli Me Tangere</h4>
                  <p className="font-lato text-sm text-primary-foreground">Berlin, 1887 • "The Social Cancer"</p>
                  <p className="font-lato text-xs text-primary-foreground/70 mt-2">Click to read more</p>
                </div>
              </div>
            </div>

            {/* El Filibusterismo */}
            <div 
              className="group cursor-pointer"
              onClick={() => setSelectedBook("fili")}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-elegant transition-all duration-500 group-hover:shadow-2xl group-hover:-rotate-y-6 group-hover:scale-105"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <img src={filiImg} alt="El Filibusterismo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent flex flex-col justify-end p-6">
                  <h4 className="font-playfair text-2xl font-bold text-gold mb-2">El Filibusterismo</h4>
                  <p className="font-lato text-sm text-primary-foreground">Ghent, 1891 • Dedicated to GOMBURZA</p>
                  <p className="font-lato text-xs text-primary-foreground/70 mt-2">Click to read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Character Gallery */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <Users className="text-gold" size={28} />
            Character Symbolism
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {characters.map((char) => (
              <FlipCard3D
                key={char.name}
                frontImage={char.img}
                frontTitle={char.name}
                frontSubtitle={char.subtitle}
                backTitle={char.back}
                backContent={char.content}
                backDetails={char.details}
              />
            ))}
          </div>
        </div>

        {/* La Solidaridad - Newspaper Style */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <Newspaper className="text-gold" size={28} />
            The Propaganda Movement
          </h3>
          <div className="bg-parchment-dark border-4 border-primary p-8 rounded-xl shadow-elegant">
            <div className="text-center border-b-2 border-primary pb-4 mb-6">
              <h4 className="font-playfair text-4xl font-black tracking-widest text-primary">LA SOLIDARIDAD</h4>
              <p className="font-lato text-sm text-muted-foreground mt-2">Founded February 15, 1889 • Barcelona, Spain</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 font-lato text-sm">
              <div>
                <h5 className="font-bold text-primary mb-2">AIMS OF THE MOVEMENT:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Representation in the Spanish Cortes</li>
                  <li>• Secularization of parishes</li>
                  <li>• Freedom of press and speech</li>
                  <li>• Equal treatment before the law</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-primary mb-2">THE TRIUMVIRATE:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• José Rizal ("Laong Laan")</li>
                  <li>• Marcelo H. del Pilar ("Plaridel")</li>
                  <li>• Graciano López Jaena ("Fray Botod")</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/30 text-center">
              <p className="font-playfair text-xl text-primary italic">"Unus Instar Omnium"</p>
              <p className="font-lato text-sm text-muted-foreground mt-1">La Liga Filipina • One Like All • Founded July 3, 1892</p>
            </div>
          </div>
        </div>

        {/* Virtual Artifact */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8">
            Virtual Artifact
          </h3>
          <p className="font-lato text-center text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore the alcohol lamp that concealed Rizal's final masterpiece, "Mi Último Adiós."
          </p>
          <VirtualArtifact className="max-w-md mx-auto" />
        </div>
      </div>

      {/* Book Detail Modal */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl bg-card">
          {selectedBook && bookDetails[selectedBook as keyof typeof bookDetails] && (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-primary">
                  {bookDetails[selectedBook as keyof typeof bookDetails].title}
                </DialogTitle>
                <p className="font-lato text-sm text-muted-foreground">
                  {bookDetails[selectedBook as keyof typeof bookDetails].subtitle}
                </p>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <p className="font-lato text-muted-foreground">
                  {bookDetails[selectedBook as keyof typeof bookDetails].summary}
                </p>
                <div>
                  <h5 className="font-playfair font-bold text-primary mb-2">Key Themes:</h5>
                  <div className="flex flex-wrap gap-2">
                    {bookDetails[selectedBook as keyof typeof bookDetails].themes.map((theme) => (
                      <span key={theme} className="bg-gold/20 text-gold text-xs px-3 py-1 rounded-full font-lato">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-mahogany/10 p-4 rounded-lg">
                  <h5 className="font-playfair font-bold text-primary mb-2">Historical Impact:</h5>
                  <p className="font-lato text-sm text-muted-foreground">
                    {bookDetails[selectedBook as keyof typeof bookDetails].impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LibraryRoom;