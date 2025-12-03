import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-rizal.jpg";

interface HomeSectionProps {
  onNavigate: (tab: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.3) sepia(30%)",
        }}
      />

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany/60 via-transparent to-mahogany/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 3D Parallax Title */}
        <h1
          className="font-playfair text-6xl md:text-8xl lg:text-9xl font-black text-primary-foreground mb-6 transition-transform duration-100"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <span className="text-gold">Rizal:</span>
          <br />
          <span className="text-primary-foreground">The Forge of a Nation</span>
        </h1>

        <p
          className="font-lato text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto transition-transform duration-150"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        >
          A comprehensive guide to the Hero, the Works, and the Law.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => onNavigate("biography")}
            className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-elegant transition-all hover:scale-105"
          >
            Explore His Life
          </Button>
          <Button
            onClick={() => onNavigate("context")}
            variant="outline"
            className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg rounded-lg transition-all"
          >
            Understand the Era
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gold" size={40} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-gold/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
    </section>
  );
};

export default HomeSection;
