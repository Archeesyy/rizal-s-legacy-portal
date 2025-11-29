import Navigation from "@/components/Navigation";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import LibrarySection from "@/components/LibrarySection";
import WomenSection from "@/components/WomenSection";
import MapSection from "@/components/MapSection";
import GallerySection from "@/components/GallerySection";
import TravelerSection from "@/components/TravelerSection";
import QuizSection from "@/components/QuizSection";
import LegacySection from "@/components/LegacySection";
import { usePresentationMode } from "@/contexts/PresentationContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Index = () => {
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  return (
    <div 
      className={`min-h-screen bg-background font-lato transition-all ${
        isPresentationMode ? "text-[120%]" : ""
      }`}
    >
      <ReadingProgressBar />
      <Navigation />
      
      {/* Exit Presentation Mode Button */}
      {isPresentationMode && (
        <Button
          onClick={togglePresentationMode}
          className="fixed bottom-8 right-8 z-50 bg-mahogany hover:bg-mahogany-light text-primary-foreground shadow-elegant rounded-full w-16 h-16"
          size="icon"
          title="Exit Presentation Mode"
        >
          <X size={24} />
        </Button>
      )}
      
      <main>
        <HeroSection />
        <TimelineSection />
        <LibrarySection />
        <WomenSection />
        <MapSection />
        <GallerySection />
        <TravelerSection />
        <QuizSection />
        <LegacySection />
      </main>
      {!isPresentationMode && (
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-playfair text-lg mb-2">
              Dr. José Rizal (1861-1896)
            </p>
            <p className="font-lato text-sm opacity-90">
              Philippine National Hero • Writer • Ophthalmologist • Polymath
            </p>
            <p className="font-lato text-xs mt-4 opacity-75">
              "The youth is the hope of our future."
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
