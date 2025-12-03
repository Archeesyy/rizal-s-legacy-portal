import { useState } from "react";
import TabNavigation from "@/components/TabNavigation";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import HomeSection from "@/components/sections/HomeSection";
import ContextSection from "@/components/sections/ContextSection";
import BiographySection from "@/components/sections/BiographySection";
import PropagandaSection from "@/components/sections/PropagandaSection";
import LiterarySection from "@/components/sections/LiterarySection";
import RizalLawSection from "@/components/sections/RizalLawSection";
import ChatbotWidget from "@/components/ChatbotWidget";
import { usePresentationMode } from "@/contexts/PresentationContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection onNavigate={setActiveTab} />;
      case "context":
        return <ContextSection />;
      case "biography":
        return <BiographySection />;
      case "propaganda":
        return <PropagandaSection />;
      case "library":
        return <LiterarySection />;
      case "rizal-law":
        return <RizalLawSection />;
      default:
        return <HomeSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div 
      className={`min-h-screen bg-background font-lato transition-all ${
        isPresentationMode ? "text-[120%] cursor-crosshair" : ""
      }`}
      style={isPresentationMode ? { cursor: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"red\" opacity=\"0.8\"/><circle cx=\"10\" cy=\"10\" r=\"3\" fill=\"white\"/></svg>') 10 10, crosshair" } : {}}
    >
      <ReadingProgressBar />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
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
      
      <main className={isPresentationMode ? "" : "pt-16"}>
        {renderSection()}
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
      
      {/* Chatbot Widget */}
      {!isPresentationMode && <ChatbotWidget />}
    </div>
  );
};

export default Index;
