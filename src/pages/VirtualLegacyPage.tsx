import { useState, useEffect } from "react";
import { usePresentationMode } from "@/contexts/PresentationContext";
import SPANavigation from "@/components/SPANavigation";
import ChatbotWidget from "@/components/ChatbotWidget";
import AtriumRoom from "@/components/rooms/AtriumRoom";
import HistoryHallRoom from "@/components/rooms/HistoryHallRoom";
import RootsHallRoom from "@/components/rooms/RootsHallRoom";
import LibraryRoom from "@/components/rooms/LibraryRoom";
import MapRoom from "@/components/rooms/MapRoom";
import CourtroomRoom from "@/components/rooms/CourtroomRoom";

type RoomType = "home" | "context" | "biography" | "works" | "travels" | "law";

const VirtualLegacyPage = () => {
  const [activeRoom, setActiveRoom] = useState<RoomType>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { isPresentationMode } = usePresentationMode();

  const handleNavigate = (room: string) => {
    if (room === activeRoom) return;
    
    setIsTransitioning(true);
    
    // Fade out, change room, fade in
    setTimeout(() => {
      setActiveRoom(room as RoomType);
      window.scrollTo({ top: 0, behavior: "instant" });
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const rooms: RoomType[] = ["home", "context", "biography", "works", "travels", "law"];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const currentIndex = rooms.indexOf(activeRoom);
        if (currentIndex < rooms.length - 1) {
          handleNavigate(rooms[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const currentIndex = rooms.indexOf(activeRoom);
        if (currentIndex > 0) {
          handleNavigate(rooms[currentIndex - 1]);
        }
      }
    };

    if (isPresentationMode) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeRoom, isPresentationMode]);

  const renderRoom = () => {
    switch (activeRoom) {
      case "home":
        return <AtriumRoom onNavigate={handleNavigate} />;
      case "context":
        return <HistoryHallRoom />;
      case "biography":
        return <RootsHallRoom />;
      case "works":
        return <LibraryRoom />;
      case "travels":
        return <MapRoom />;
      case "law":
        return <CourtroomRoom />;
      default:
        return <AtriumRoom onNavigate={handleNavigate} />;
    }
  };

  return (
    <div 
      className={`min-h-screen bg-background ${isPresentationMode ? "text-[120%]" : ""}`}
      style={isPresentationMode ? { 
        cursor: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"red\" opacity=\"0.8\"/><circle cx=\"10\" cy=\"10\" r=\"3\" fill=\"white\"/></svg>') 10 10, crosshair" 
      } : {}}
    >
      <SPANavigation activeRoom={activeRoom} onNavigate={handleNavigate} />
      
      {/* Room Container with Transitions */}
      <main className={`pt-16 transition-all duration-300 ease-in-out ${
        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}>
        {renderRoom()}
      </main>

      {/* Room Progress Indicator */}
      {!isPresentationMode && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-elegant border border-border/50">
          {["home", "context", "biography", "works", "travels", "law"].map((room) => (
            <button
              key={room}
              onClick={() => handleNavigate(room)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeRoom === room 
                  ? "bg-gold w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to ${room}`}
            />
          ))}
        </div>
      )}

      {/* Chatbot Widget */}
      {!isPresentationMode && <ChatbotWidget />}
    </div>
  );
};

export default VirtualLegacyPage;