import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-rizal.jpg";

interface AtriumRoomProps {
  onNavigate: (room: string) => void;
}

const RIZAL_QUOTES = [
  { quote: "He who does not know how to look back at where he came from will never get to his destination.", source: "Letter to the Young Women of Malolos" },
  { quote: "The youth is the hope of our future.", source: "A La Juventud Filipina" },
  { quote: "I die without seeing the dawn brighten over my native land.", source: "Mi Último Adiós" },
  { quote: "One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.", source: "Letter to Mariano Ponce" },
  { quote: "He who does not love his own language is worse than an animal and smelly fish.", source: "Prologue to Filipino Poetry" },
  { quote: "There are no tyrants where there are no slaves.", source: "El Filibusterismo" },
  { quote: "I have to believe much in God because I have lost my faith in man.", source: "Letter to Ferdinand Blumentritt" },
  { quote: "It is a useless life that is not consecrated to a great ideal.", source: "Noli Me Tangere" },
  { quote: "While a people preserves its language, it preserves the marks of liberty.", source: "El Filibusterismo" },
  { quote: "The glory of saving a country is not for him who has contributed to its ruin.", source: "El Filibusterismo" },
];

const AtriumRoom = ({ onNavigate }: AtriumRoomProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dailyQuote, setDailyQuote] = useState(RIZAL_QUOTES[0]);

  useEffect(() => {
    // Generate daily quote based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const quoteIndex = dayOfYear % RIZAL_QUOTES.length;
    setDailyQuote(RIZAL_QUOTES[quoteIndex]);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.2) sepia(30%)",
          transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany/70 via-mahogany/40 to-mahogany/90" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 3D Parallax Title */}
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${-mousePosition.x * 0.1}deg)`,
          }}
        >
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 drop-shadow-2xl">
            <span className="text-gold">José Rizal:</span>
            <br />
            <span className="block mt-2">The First Filipino</span>
          </h1>
        </div>

        <p className="font-lato text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          A Virtual Journey through Life, Love, and Legacy
        </p>

        {/* Daily Quote */}
        <div className="bg-background/10 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto mb-10 border border-gold/20">
          <div className="flex items-center justify-center gap-2 text-gold mb-3">
            <Sparkles size={18} />
            <span className="font-lato text-sm uppercase tracking-wider">Quote of the Day</span>
            <Sparkles size={18} />
          </div>
          <p className="font-playfair text-lg md:text-xl text-primary-foreground italic mb-2">
            "{dailyQuote.quote}"
          </p>
          <p className="font-lato text-sm text-gold/80">— {dailyQuote.source}</p>
        </div>

        <Button
          onClick={() => onNavigate("context")}
          size="lg"
          className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold px-10 py-7 text-lg rounded-xl shadow-elegant transition-all hover:scale-105 group"
        >
          Enter Exhibition
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AtriumRoom;