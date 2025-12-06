import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Clock, 
  User, 
  BookOpen, 
  Globe, 
  Scale, 
  Trophy,
  FileText,
  Presentation,
  Music
} from "lucide-react";
import { usePresentationMode } from "@/contexts/PresentationContext";
import CheatSheetModal from "./CheatSheetModal";
import QuizChallenge from "./QuizChallenge";
import AudioPlayer from "./AudioPlayer";

interface SPANavigationProps {
  activeRoom: string;
  onNavigate: (room: string) => void;
}

const SPANavigation = ({ activeRoom, onNavigate }: SPANavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cheatSheetOpen, setCheatSheetOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  const rooms = [
    { id: "home", label: "Atrium", icon: Home },
    { id: "context", label: "History", icon: Clock },
    { id: "biography", label: "Roots", icon: User },
    { id: "works", label: "Library", icon: BookOpen },
    { id: "travels", label: "Map", icon: Globe },
    { id: "law", label: "Courtroom", icon: Scale },
  ];

  if (isPresentationMode) {
    return (
      <>
        <Button
          onClick={togglePresentationMode}
          className="fixed bottom-8 right-8 z-50 bg-mahogany hover:bg-mahogany-light text-primary-foreground shadow-elegant rounded-full w-16 h-16"
          size="icon"
        >
          <X size={24} />
        </Button>
        <QuizChallenge open={quizOpen} onOpenChange={setQuizOpen} />
        <CheatSheetModal open={cheatSheetOpen} onOpenChange={setCheatSheetOpen} />
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-mahogany/95 backdrop-blur-lg border-b border-gold/20 shadow-elegant">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <button 
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <BookOpen className="text-gold" size={24} />
              <h1 className="font-playfair text-xl font-bold text-primary-foreground hidden sm:block">
                <span className="text-gold">Rizal</span> Legacy
              </h1>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {rooms.map((room) => (
                <Button
                  key={room.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate(room.id)}
                  className={`font-lato text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 transition-all ${
                    activeRoom === room.id ? "text-gold bg-primary-foreground/10" : ""
                  }`}
                >
                  <room.icon size={16} className="mr-1.5" />
                  {room.label}
                </Button>
              ))}
            </div>

            {/* Desktop Utility Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuizOpen(true)}
                className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
              >
                <Trophy size={16} className="mr-1.5" />
                Quiz
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCheatSheetOpen(true)}
                className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
              >
                <FileText size={16} className="mr-1.5" />
                Review
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePresentationMode}
                className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
              >
                <Presentation size={16} className="mr-1.5" />
                Present
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gold/20 animate-fade-in">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {rooms.map((room) => (
                  <Button
                    key={room.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      onNavigate(room.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`justify-start font-lato text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 ${
                      activeRoom === room.id ? "text-gold bg-primary-foreground/10" : ""
                    }`}
                  >
                    <room.icon size={16} className="mr-2" />
                    {room.label}
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gold/20">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setQuizOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 border-gold/30 text-primary-foreground hover:bg-gold/20"
                >
                  <Trophy size={14} className="mr-1" /> Quiz
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setCheatSheetOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 border-gold/30 text-primary-foreground hover:bg-gold/20"
                >
                  <FileText size={14} className="mr-1" /> Review
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    togglePresentationMode();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 border-gold/30 text-primary-foreground hover:bg-gold/20"
                >
                  <Presentation size={14} className="mr-1" /> Present
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <CheatSheetModal open={cheatSheetOpen} onOpenChange={setCheatSheetOpen} />
      <QuizChallenge open={quizOpen} onOpenChange={setQuizOpen} />
      <AudioPlayer />
    </>
  );
};

export default SPANavigation;