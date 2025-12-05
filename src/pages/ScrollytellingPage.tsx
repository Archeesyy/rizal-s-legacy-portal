import { useState, useRef, useEffect, Suspense } from "react";
import { Menu, X, BookOpen, Presentation, FileText, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePresentationMode } from "@/contexts/PresentationContext";
import CheatSheetModal from "@/components/CheatSheetModal";
import ChatbotWidget from "@/components/ChatbotWidget";
import ScrollSection from "@/components/ScrollSection";
import ParallaxElement from "@/components/ParallaxElement";
import FlipCard3D from "@/components/FlipCard3D";
import CastaPyramid from "@/components/CastaPyramid";
import RealisticGlobe from "@/components/RealisticGlobe";
import AudioPlayer from "@/components/AudioPlayer";
import QuizChallenge from "@/components/QuizChallenge";
import VirtualArtifact from "@/components/VirtualArtifact";

// Import images
import heroImage from "@/assets/hero-rizal.jpg";
import segundaImg from "@/assets/segunda-katigbak.jpg";
import leonorRiveraImg from "@/assets/leonor-rivera.jpg";
import leonorValenzuelaImg from "@/assets/leonor-valenzuela.jpg";
import consueloImg from "@/assets/consuelo-ortiga.jpg";
import oSeiSanImg from "@/assets/o-sei-san.jpg";
import gertrudeImg from "@/assets/gertrude-beckett.jpg";
import josephineImg from "@/assets/josephine-bracken.jpg";
import noliImg from "@/assets/noli-me-tangere.jpg";
import filiImg from "@/assets/el-filibusterismo.jpg";

const ScrollytellingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "context", label: "19th Century" },
    { id: "biography", label: "Biography" },
    { id: "romances", label: "Romances" },
    { id: "travels", label: "Travels" },
    { id: "propaganda", label: "Propaganda" },
    { id: "works", label: "Works" },
    { id: "rizal-law", label: "RA 1425" },
    { id: "artifact", label: "Artifact" },
  ];

  const womenData = [
    { name: "Segunda Katigbak", subtitle: "First Love (1877)", img: segundaImg, back: "The Puppy Love", content: "Rizal was only 16 when he met Segunda in Lipa. Though she was already engaged, she became his first lesson in heartbreak.", details: "She later married Manuel Luz." },
    { name: "Leonor Valenzuela", subtitle: '"Orang" (1878)', img: leonorValenzuelaImg, back: "The Tall Neighbor", content: "Rizal was attracted to this tall Pagsanjan girl, sending her invisible ink letters to avoid detection.", details: "Their romance faded due to distance." },
    { name: "Leonor Rivera", subtitle: "The Great Love (1882-1888)", img: leonorRiveraImg, back: "María Clara's Inspiration", content: "The love of Rizal's life. Their 11-year engagement ended when her mother forced her to marry Englishman Henry Kipping.", details: "She died at 28, reportedly of a broken heart." },
    { name: "Consuelo Ortiga", subtitle: "Parisian Romance (1883)", img: consueloImg, back: "The Forbidden Flame", content: "Daughter of a Filipino politician in Madrid. Rizal stepped aside when his friend Antonio Luna confessed his love for her.", details: "Rizal chose friendship over love." },
    { name: "O Sei San", subtitle: "Japanese Romance (1888)", img: oSeiSanImg, back: "The Samurai's Daughter", content: "Rizal almost stayed in Japan for her. He learned Japanese customs and language during his month-long stay.", details: "He left to continue his mission." },
    { name: "Gertrude Beckett", subtitle: "London Admirer (1888)", img: gertrudeImg, back: "The English Rose", content: "Daughter of his London landlord. She fell for Rizal while he sculpted her likeness.", details: "Rizal kept his distance, fearing heartbreak." },
    { name: "Josephine Bracken", subtitle: "The Wife (1895-1896)", img: josephineImg, back: "The Final Love", content: "Irish-born Josephine met Rizal in Dapitan. Though the church refused to marry them, they lived as husband and wife.", details: "She cared for him until his execution." },
  ];

  const characters = [
    { name: "Crisóstomo Ibarra", subtitle: "Protagonist", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Ibarra", back: "The Idealist Reformist", content: "Represents Rizal himself—educated abroad, idealistic, hoping to reform society through peaceful means.", details: "Becomes Simoun in El Fili." },
    { name: "María Clara", subtitle: "The Tragic Heroine", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Maria+Clara", back: "The Captive Filipina", content: "Represents the Philippines—beautiful, suffering, trapped by the friars and colonial system.", details: "Based on Leonor Rivera." },
    { name: "Sisa", subtitle: "The Mad Mother", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Sisa", back: "The Motherland's Suffering", content: "Represents Filipino mothers who lost their children to colonial abuse. Her madness is the nation's grief.", details: "Her sons Basilio and Crispin were sacristans." },
    { name: "Elías", subtitle: "The Revolutionary", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Elias", back: "Voice of the Masses", content: "Represents the oppressed who want change through revolution. Sacrifices himself for Ibarra.", details: "\"I die without seeing the dawn.\"" },
    { name: "Padre Dámaso", subtitle: "The Corrupt Friar", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Damaso", back: "The Frailocracy", content: "Represents the abusive religious orders—arrogant, immoral, the true power behind colonial rule.", details: "María Clara's biological father." },
    { name: "Simoun", subtitle: "The Revolutionary", img: "https://placehold.co/300x400/3E2723/D4AF37?text=Simoun", back: "The Transformed Ibarra", content: "Ibarra reborn—now seeking violent revolution after his idealism failed. The jeweler with deadly intentions.", details: "Represents Rizal's darker thoughts." },
  ];

  return (
    <div
      ref={containerRef}
      className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ${
        isPresentationMode ? "text-[120%]" : ""
      }`}
      style={isPresentationMode ? { cursor: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"red\" opacity=\"0.8\"/><circle cx=\"10\" cy=\"10\" r=\"3\" fill=\"white\"/></svg>') 10 10, crosshair" } : {}}
    >
      {/* Floating Navigation */}
      {!isPresentationMode && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="font-playfair text-xl font-bold text-primary">
              <span className="text-gold">Rizal</span> Legacy
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-lato text-sm text-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Utility Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuizOpen(true)}
                className="hidden sm:flex"
              >
                <Trophy size={16} className="mr-1" />
                Quiz
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCheatSheetOpen(true)}
                className="hidden sm:flex"
              >
                <FileText size={16} className="mr-1" />
                Review
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePresentationMode}
                className="hidden sm:flex"
              >
                <Presentation size={16} className="mr-1" />
                Present
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="font-lato text-left py-2 text-foreground hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  <Button size="sm" variant="outline" onClick={() => setQuizOpen(true)}>
                    <Trophy size={14} className="mr-1" /> Quiz
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setCheatSheetOpen(true)}>
                    <FileText size={14} className="mr-1" /> Review
                  </Button>
                  <Button size="sm" variant="outline" onClick={togglePresentationMode}>
                    <Presentation size={14} className="mr-1" /> Present
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Exit Presentation Mode */}
      {isPresentationMode && (
        <Button
          onClick={togglePresentationMode}
          className="fixed bottom-8 right-8 z-50 bg-mahogany hover:bg-mahogany-light text-primary-foreground shadow-elegant rounded-full w-16 h-16"
          size="icon"
        >
          <X size={24} />
        </Button>
      )}

      {/* SECTION 1: HERO */}
      <ScrollSection id="hero" background="accent">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, filter: "brightness(0.25) sepia(30%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mahogany/60 via-transparent to-mahogany/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ParallaxElement speed={0.3}>
            <h1
              className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6"
              style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`, textShadow: "4px 4px 8px rgba(0,0,0,0.5)" }}
            >
              <span className="text-gold">José Rizal:</span>
              <br />
              <span className="block mt-2">The First Filipino</span>
            </h1>
          </ParallaxElement>
          <ParallaxElement speed={0.2}>
            <p className="font-lato text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              "He who does not know how to look back at where he came from will never get to his destination."
            </p>
          </ParallaxElement>
          <Button
            onClick={() => scrollToSection("context")}
            className="bg-gold hover:bg-gold-light text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-elegant transition-all hover:scale-105"
          >
            Start the Journey
          </Button>
        </div>
      </ScrollSection>

      {/* SECTION 2: 19TH CENTURY CONTEXT */}
      <ScrollSection id="context" background="primary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            The 19th Century Philippines
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <CastaPyramid />
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">The Galleon Trade (1565-1815)</h3>
                <p className="font-lato text-muted-foreground">250 years of Manila-Acapulco trade enriched Spain but isolated the Philippines from global ideas. Its end opened the country to liberalism.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">Colonial Abuses</h3>
                <ul className="font-lato text-muted-foreground space-y-2">
                  <li>• <strong>Polo y Servicio</strong> – Forced labor for 40 days/year</li>
                  <li>• <strong>Bandala</strong> – Forced sale of crops at low prices</li>
                  <li>• <strong>Frailocracy</strong> – Friars ruled over civil officials</li>
                </ul>
              </div>
              <div className="bg-mahogany p-6 rounded-xl shadow-elegant">
                <h3 className="font-playfair text-xl font-bold text-gold mb-2">GOMBURZA (1872)</h3>
                <p className="font-lato text-primary-foreground text-sm">Fathers Gómez, Burgos, and Zamora were garroted for their alleged role in the Cavite Mutiny. Their execution awakened Filipino nationalism—including the young José Rizal.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* SECTION 3: BIOGRAPHY */}
      <ScrollSection id="biography" background="secondary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            The Roots of a Hero
          </h2>
          <p className="font-lato text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Born June 19, 1861, in Calamba, Laguna. Mixed heritage: Chinese (Lam-co), Malay, and Spanish.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ateneo Card */}
            <div className="bg-card p-8 rounded-xl shadow-elegant border-l-4 border-gold">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Ateneo Municipal</h3>
              <p className="font-lato text-muted-foreground mb-4">Under the Jesuits, Rizal flourished. He earned the title "Emperor" for academic excellence.</p>
              <ul className="font-lato text-sm text-muted-foreground space-y-2">
                <li>✦ Won first prize in poetry: "A La Juventud Filipina"</li>
                <li>✦ Graduated with highest honors (Sobresaliente)</li>
                <li>✦ Liberal education encouraged critical thinking</li>
              </ul>
            </div>
            
            {/* UST Card */}
            <div className="bg-card p-8 rounded-xl shadow-elegant border-l-4 border-destructive">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">University of Santo Tomas</h3>
              <p className="font-lato text-muted-foreground mb-4">Under the Dominicans, Rizal faced discrimination. Filipinos were "Indio Chongo" (pigtailed natives).</p>
              <ul className="font-lato text-sm text-muted-foreground space-y-2">
                <li>✦ Wrote "El Consejo de los Dioses" (allegorical play)</li>
                <li>✦ Experienced racial discrimination firsthand</li>
                <li>✦ Decided to continue studies in Spain</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-mahogany/10 p-6 rounded-xl max-w-3xl mx-auto">
            <h4 className="font-playfair text-xl font-bold text-primary text-center mb-4">The Story of the Moth</h4>
            <p className="font-lato text-center text-muted-foreground italic">
              "The moth that flew towards the flame and burned—it was worth dying for the light. This story, told by his mother Teodora, would define Rizal's life philosophy."
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* SECTION 4: ROMANCES - 3D FLIP CARDS */}
      <ScrollSection id="romances" background="primary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            The Gallery of Faces
          </h2>
          <p className="font-lato text-center text-muted-foreground mb-12">
            The seven women who touched Rizal's heart. Hover or tap to reveal their stories.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {womenData.map((woman) => (
              <FlipCard3D
                key={woman.name}
                frontImage={woman.img}
                frontTitle={woman.name}
                frontSubtitle={woman.subtitle}
                backTitle={woman.back}
                backContent={woman.content}
                backDetails={woman.details}
              />
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* SECTION 5: TRAVELS - 3D REALISTIC GLOBE */}
      <ScrollSection id="travels" background="accent">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gold text-center mb-4">
            Rizal's Global Journey
          </h2>
          <p className="font-lato text-center text-primary-foreground/80 mb-8">
            Drag to rotate the globe • Click markers for travel details
          </p>
          <Suspense fallback={
            <div className="w-full h-[550px] flex items-center justify-center bg-black/50 rounded-xl">
              <div className="text-gold animate-pulse text-lg">Loading 3D Earth...</div>
            </div>
          }>
            <RealisticGlobe />
          </Suspense>
        </div>
      </ScrollSection>

      {/* SECTION 6: PROPAGANDA MOVEMENT */}
      <ScrollSection id="propaganda" background="secondary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            The Propaganda Movement
          </h2>
          
          {/* La Solidaridad - Newspaper Style */}
          <div className="bg-parchment-dark border-4 border-primary p-8 rounded-lg max-w-4xl mx-auto mb-12 shadow-elegant">
            <div className="text-center border-b-2 border-primary pb-4 mb-6">
              <h3 className="font-playfair text-4xl font-black tracking-widest text-primary">LA SOLIDARIDAD</h3>
              <p className="font-lato text-sm text-muted-foreground mt-2">Founded February 15, 1889 • Barcelona, Spain</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 font-lato text-sm">
              <div>
                <h4 className="font-bold text-primary mb-2">AIMS OF THE MOVEMENT:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Representation in the Spanish Cortes</li>
                  <li>• Secularization of parishes</li>
                  <li>• Freedom of press and speech</li>
                  <li>• Equal treatment before the law</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">KEY CONTRIBUTORS:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• José Rizal ("Laong Laan")</li>
                  <li>• Marcelo H. del Pilar ("Plaridel")</li>
                  <li>• Graciano López Jaena ("Fray Botod")</li>
                </ul>
              </div>
            </div>
          </div>

          {/* La Liga Filipina */}
          <div className="bg-mahogany p-8 rounded-xl max-w-3xl mx-auto shadow-elegant text-center">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">La Liga Filipina</h3>
            <p className="font-lato text-xl text-primary-foreground italic mb-4">"Unus Instar Omnium"</p>
            <p className="font-lato text-sm text-primary-foreground/80 mb-4">"One Like All" — Founded July 3, 1892</p>
            <p className="font-lato text-primary-foreground">
              A civic organization to unite the archipelago, mutual protection, and reform. 
              Rizal was arrested just four days after its founding.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* SECTION 7: LITERARY WORKS - CHARACTER CARDS */}
      <ScrollSection id="works" background="primary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            The Masterpieces
          </h2>
          <p className="font-lato text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rizal's novels created an "Imagined Community" (Benedict Anderson) — Filipinos reading the same stories imagined themselves as one nation.
          </p>

          {/* Books */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="relative group">
              <img src={noliImg} alt="Noli Me Tangere" className="w-full h-64 object-cover rounded-xl shadow-elegant" />
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany to-transparent rounded-xl flex flex-col justify-end p-6">
                <h3 className="font-playfair text-2xl font-bold text-gold">Noli Me Tangere</h3>
                <p className="font-lato text-sm text-primary-foreground">Berlin, 1887 • "The Social Cancer"</p>
              </div>
            </div>
            <div className="relative group">
              <img src={filiImg} alt="El Filibusterismo" className="w-full h-64 object-cover rounded-xl shadow-elegant" />
              <div className="absolute inset-0 bg-gradient-to-t from-mahogany to-transparent rounded-xl flex flex-col justify-end p-6">
                <h3 className="font-playfair text-2xl font-bold text-gold">El Filibusterismo</h3>
                <p className="font-lato text-sm text-primary-foreground">Ghent, 1891 • Dedicated to GOMBURZA</p>
              </div>
            </div>
          </div>

          <h3 className="font-playfair text-2xl font-bold text-primary text-center mb-8">Character Symbolism</h3>
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
      </ScrollSection>

      {/* SECTION 8: RIZAL LAW */}
      <ScrollSection id="rizal-law" background="accent">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gold text-center mb-4">
            Republic Act No. 1425
          </h2>
          <p className="font-lato text-center text-primary-foreground/80 mb-12">The Rizal Law • Approved June 12, 1956</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-xl border border-gold/30">
              <h3 className="font-playfair text-xl font-bold text-gold mb-4 flex items-center gap-2">
                <BookOpen size={24} /> Senator Claro M. Recto
              </h3>
              <p className="font-lato text-primary-foreground text-sm">
                Author of the bill, Recto argued that studying Rizal's works would instill nationalism and patriotism. 
                "Without Rizal's works, there would be no Filipino nation."
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-xl border border-gold/30">
              <h3 className="font-playfair text-xl font-bold text-gold mb-4">⛪ The Catholic Church</h3>
              <p className="font-lato text-primary-foreground text-sm">
                Led by Fr. Jesus Cavanna, opposed the reading of unexpurgated (unedited) novels, 
                arguing it violated religious freedom and contained anti-Catholic content.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gold/20 p-8 rounded-xl max-w-3xl mx-auto text-center">
            <h4 className="font-playfair text-2xl font-bold text-gold mb-4">The Compromise</h4>
            <p className="font-lato text-primary-foreground">
              The law passed: All schools must teach Rizal's life, works, and writings. However, students can request exemption from reading the unexpurgated novels for religious reasons—though they still take the course with edited versions.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="font-playfair text-xl text-gold italic">
              "The youth is the hope of our future."
            </p>
            <p className="font-lato text-sm text-primary-foreground/60 mt-2">— Dr. José Rizal (1861-1896)</p>
          </div>
        </div>
      </ScrollSection>

      {/* SECTION 9: VIRTUAL ARTIFACT */}
      <ScrollSection id="artifact" background="primary">
        <div className="container mx-auto px-4 py-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Virtual Artifact
          </h2>
          <p className="font-lato text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore a 3D recreation of the historic artifact that concealed Rizal's final masterpiece.
          </p>
          <VirtualArtifact className="max-w-md mx-auto" />
        </div>
      </ScrollSection>

      {/* Modals & Widgets */}
      <CheatSheetModal open={cheatSheetOpen} onOpenChange={setCheatSheetOpen} />
      <QuizChallenge open={quizOpen} onOpenChange={setQuizOpen} />
      {!isPresentationMode && (
        <>
          <ChatbotWidget />
          <AudioPlayer />
        </>
      )}
    </div>
  );
};

export default ScrollytellingPage;
