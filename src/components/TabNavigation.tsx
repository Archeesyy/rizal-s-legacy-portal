import { useState } from "react";
import { 
  Home, 
  History, 
  User, 
  Users, 
  BookOpen, 
  Scale, 
  Monitor, 
  ClipboardList,
  Search,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CheatSheetModal from "@/components/CheatSheetModal";
import { usePresentationMode } from "@/contexts/PresentationContext";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "context", label: "19th Century", icon: History },
  { id: "biography", label: "Biography", icon: User },
  { id: "propaganda", label: "Propaganda", icon: Users },
  { id: "library", label: "Literary Works", icon: BookOpen },
  { id: "rizal-law", label: "Rizal Law", icon: Scale },
];

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Remove previous highlights
    const existingHighlights = document.querySelectorAll(".search-highlight");
    existingHighlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize();
      }
    });

    const searchText = searchQuery.toLowerCase();
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );

    let firstMatch: Element | null = null;
    const nodesToHighlight: { node: Text; index: number }[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      const text = node.textContent?.toLowerCase() || "";
      const index = text.indexOf(searchText);
      if (index !== -1 && node.parentElement?.tagName !== "SCRIPT") {
        nodesToHighlight.push({ node, index });
      }
    }

    nodesToHighlight.forEach(({ node, index }) => {
      const span = document.createElement("span");
      span.className = "search-highlight bg-accent text-accent-foreground px-1 rounded";
      const matchText = node.textContent?.substring(index, index + searchQuery.length) || "";
      span.textContent = matchText;

      const before = node.textContent?.substring(0, index) || "";
      const after = node.textContent?.substring(index + searchQuery.length) || "";

      const parent = node.parentNode;
      if (parent) {
        const beforeNode = document.createTextNode(before);
        const afterNode = document.createTextNode(after);
        parent.insertBefore(beforeNode, node);
        parent.insertBefore(span, node);
        parent.insertBefore(afterNode, node);
        parent.removeChild(node);

        if (!firstMatch) {
          firstMatch = span;
        }
      }
    });

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (isPresentationMode) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-mahogany/80 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <BookOpen className="text-gold" size={24} />
              <span className="font-playfair text-xl font-bold text-primary-foreground">
                José Rizal
              </span>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-lato text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-gold text-accent-foreground"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-40 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </form>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCheatSheet(true)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ClipboardList size={18} />
                <span className="ml-2">Review</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePresentationMode}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Monitor size={18} />
                <span className="ml-2">Present</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary-foreground/20">
              <div className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-lato text-sm transition-all ${
                      activeTab === tab.id
                        ? "bg-gold text-accent-foreground"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
                <div className="border-t border-primary-foreground/20 my-2" />
                <form onSubmit={handleSearch} className="px-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                </form>
                <div className="flex gap-2 px-4 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCheatSheet(true)}
                    className="flex-1 border-primary-foreground/30 text-primary-foreground"
                  >
                    <ClipboardList size={16} />
                    <span className="ml-2">Review</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePresentationMode}
                    className="flex-1 border-primary-foreground/30 text-primary-foreground"
                  >
                    <Monitor size={16} />
                    <span className="ml-2">Present</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CheatSheetModal open={showCheatSheet} onOpenChange={setShowCheatSheet} />
    </>
  );
};

export default TabNavigation;
