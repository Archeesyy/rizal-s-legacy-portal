import FlipCard3D from "@/components/FlipCard3D";
import { GraduationCap, BookOpen, Heart } from "lucide-react";

// Import romance images
import segundaImg from "@/assets/segunda-katigbak.jpg";
import leonorRiveraImg from "@/assets/leonor-rivera.jpg";
import leonorValenzuelaImg from "@/assets/leonor-valenzuela.jpg";
import consueloImg from "@/assets/consuelo-ortiga.jpg";
import oSeiSanImg from "@/assets/o-sei-san.jpg";
import gertrudeImg from "@/assets/gertrude-beckett.jpg";
import josephineImg from "@/assets/josephine-bracken.jpg";

const RootsHallRoom = () => {
  const familyMembers = [
    { name: "Francisco Mercado", subtitle: "Father", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Francisco", back: "The Provider", content: "A farmer and one of the richest men in Calamba. He rented hacienda land from Dominican friars and instilled discipline in young José.", details: "Born 1818, died 1898" },
    { name: "Teodora Alonso", subtitle: "Mother", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Teodora", back: "The First Teacher", content: "Educated and cultured, she taught Rizal to read at age 3. The 'Story of the Moth' she told him shaped his philosophy of sacrifice.", details: "Born 1826, died 1911" },
    { name: "Paciano Rizal", subtitle: "Brother", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Paciano", back: "The Silent General", content: "José's older brother and confidant. Later became a general in the Philippine Revolution, supporting the cause his brother inspired.", details: "Funded José's studies abroad" },
    { name: "The Sisters", subtitle: "Family Bond", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Sisters", back: "His Support System", content: "Saturnina, Narcisa, Olympia, Lucia, Maria, Concepcion, Josefa, Trinidad, and Soledad—nine sisters who shaped his worldview on women's rights.", details: "Trinidad received Mi Último Adiós" },
  ];

  const womenData = [
    { name: "Segunda Katigbak", subtitle: "First Love (1877)", img: segundaImg, back: "The Puppy Love", content: "Rizal was only 16 when he met Segunda in Lipa. Though she was already engaged, she became his first lesson in heartbreak.", details: "Later married Manuel Luz." },
    { name: "Leonor Valenzuela", subtitle: '"Orang" (1878)', img: leonorValenzuelaImg, back: "The Tall Neighbor", content: "Rizal was attracted to this tall Pagsanjan girl, sending her invisible ink letters.", details: "Romance faded due to distance." },
    { name: "Leonor Rivera", subtitle: "The Great Love (1882-1888)", img: leonorRiveraImg, back: "María Clara's Inspiration", content: "The love of Rizal's life. Their 11-year engagement ended when her mother forced her to marry Englishman Henry Kipping.", details: "She died at 28." },
    { name: "Consuelo Ortiga", subtitle: "Parisian Romance (1883)", img: consueloImg, back: "The Forbidden Flame", content: "Daughter of a Filipino politician in Madrid. Rizal stepped aside when his friend Antonio Luna confessed his love for her.", details: "Chose friendship over love." },
    { name: "O Sei San", subtitle: "Japanese Romance (1888)", img: oSeiSanImg, back: "The Samurai's Daughter", content: "Rizal almost stayed in Japan for her. He learned Japanese customs and language during his month-long stay.", details: "Left to continue his mission." },
    { name: "Gertrude Beckett", subtitle: "London Admirer (1888)", img: gertrudeImg, back: "The English Rose", content: "Daughter of his London landlord. She fell for Rizal while he sculpted her likeness.", details: "Rizal kept his distance." },
    { name: "Josephine Bracken", subtitle: "The Wife (1895-1896)", img: josephineImg, back: "The Final Love", content: "Irish-born Josephine met Rizal in Dapitan. Though the church refused to marry them, they lived as husband and wife.", details: "Cared for him until execution." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
          The Hall of Roots
        </h2>
        <p className="font-lato text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Born June 19, 1861, in Calamba, Laguna. Mixed heritage: Chinese (Lam-co), Malay, and Spanish.
        </p>

        {/* Family Gallery */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <BookOpen className="text-gold" size={28} />
            The Family
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {familyMembers.map((member) => (
              <FlipCard3D
                key={member.name}
                frontImage={member.img}
                frontTitle={member.name}
                frontSubtitle={member.subtitle}
                backTitle={member.back}
                backContent={member.content}
                backDetails={member.details}
              />
            ))}
          </div>
        </div>

        {/* Education Comparison */}
        <div className="mb-20 max-w-5xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="text-gold" size={28} />
            Education: Two Worlds
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ateneo */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant border-l-4 border-gold relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors" />
              <h4 className="font-playfair text-2xl font-bold text-primary mb-4">Ateneo Municipal</h4>
              <p className="font-lato text-sm text-muted-foreground mb-4">Under the Jesuits, Rizal flourished. He earned the title "Emperor" for academic excellence.</p>
              <ul className="font-lato text-sm text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  Won first prize: "A La Juventud Filipina"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  Graduated with highest honors (Sobresaliente)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✦</span>
                  Liberal education encouraged critical thinking
                </li>
              </ul>
            </div>

            {/* UST */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant border-l-4 border-destructive relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-destructive/10 rounded-full blur-2xl group-hover:bg-destructive/20 transition-colors" />
              <h4 className="font-playfair text-2xl font-bold text-primary mb-4">University of Santo Tomas</h4>
              <p className="font-lato text-sm text-muted-foreground mb-4">Under the Dominicans, Rizal faced discrimination. Filipinos were "Indio Chongo" (pigtailed natives).</p>
              <ul className="font-lato text-sm text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✦</span>
                  Wrote "El Consejo de los Dioses"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✦</span>
                  Experienced racial discrimination firsthand
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">✦</span>
                  Decided to continue studies in Spain
                </li>
              </ul>
            </div>
          </div>

          {/* Moth Story */}
          <div className="mt-10 bg-mahogany/10 p-6 rounded-xl border border-gold/20">
            <h4 className="font-playfair text-xl font-bold text-primary text-center mb-4">The Story of the Moth</h4>
            <p className="font-lato text-center text-muted-foreground italic">
              "The moth that flew towards the flame and burned—it was worth dying for the light. This story, told by his mother Teodora, would define Rizal's life philosophy."
            </p>
          </div>
        </div>

        {/* Romances Coverflow */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
            <Heart className="text-gold" size={28} />
            The Gallery of Faces
          </h3>
          <p className="font-lato text-center text-muted-foreground mb-8">
            The seven women who touched Rizal's heart. Hover or tap to reveal their stories.
          </p>
          
          {/* Horizontal Scroll Gallery */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory hide-scrollbar">
              {womenData.map((woman) => (
                <div key={woman.name} className="flex-shrink-0 snap-center">
                  <FlipCard3D
                    frontImage={woman.img}
                    frontTitle={woman.name}
                    frontSubtitle={woman.subtitle}
                    backTitle={woman.back}
                    backContent={woman.content}
                    backDetails={woman.details}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootsHallRoom;