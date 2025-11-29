import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, BookOpen, Monitor, ClipboardList, Search } from "lucide-react";
import { usePresentationMode } from "@/contexts/PresentationContext";
import CheatSheetModal from "./CheatSheetModal";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const { isPresentationMode, togglePresentationMode } = usePresentationMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "timeline", "library", "traveler", "quiz"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Remove previous highlights
    const prevHighlights = document.querySelectorAll(".search-highlight");
    prevHighlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el);
        parent.normalize();
      }
    });

    // Find and highlight new matches
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node;
    let firstMatch: HTMLElement | null = null;

    while ((node = walker.nextNode())) {
      const text = node.textContent || "";
      const lowerText = text.toLowerCase();
      const lowerQuery = searchQuery.toLowerCase();

      if (lowerText.includes(lowerQuery)) {
        const parent = node.parentElement;
        if (
          parent &&
          !parent.closest("nav") &&
          !parent.closest("script") &&
          !parent.closest("style")
        ) {
          const index = lowerText.indexOf(lowerQuery);
          const before = text.substring(0, index);
          const match = text.substring(index, index + searchQuery.length);
          const after = text.substring(index + searchQuery.length);

          const span = document.createElement("span");
          span.className = "search-highlight bg-yellow-300 px-1 rounded";
          span.textContent = match;

          const fragment = document.createDocumentFragment();
          fragment.appendChild(document.createTextNode(before));
          fragment.appendChild(span);
          fragment.appendChild(document.createTextNode(after));

          parent.replaceChild(fragment, node);

          if (!firstMatch) firstMatch = span;
        }
      }
    }

    // Scroll to first match
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setSearchQuery("");
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "timeline", label: "Biography" },
    { id: "library", label: "Works" },
    { id: "traveler", label: "Travels" },
    { id: "quiz", label: "Quiz" },
  ];

  if (isPresentationMode) {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-mahogany/90 backdrop-blur-md shadow-elegant"
            : "bg-mahogany/70 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <BookOpen className="text-gold" size={24} />
              <h2 className="font-playfair text-2xl font-bold text-primary-foreground">
                José Rizal
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Nav Links */}
              <div className="flex gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`font-lato text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 transition-colors ${
                      activeSection === item.id ? "text-gold" : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition-colors text-sm w-40 focus:w-60"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/50"
                  size={16}
                />
              </form>

              {/* Action Buttons */}
              <Button
                onClick={() => setShowCheatSheet(true)}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
                title="Quick Review"
              >
                <ClipboardList size={18} />
              </Button>

              <Button
                onClick={togglePresentationMode}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:text-gold hover:bg-primary-foreground/10"
                title="Presentation Mode"
              >
                <Monitor size={18} />
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
            <div className="lg:hidden py-4 border-t border-primary-foreground/20">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start font-lato text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 ${
                      activeSection === item.id ? "text-gold" : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="px-2 py-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/50"
                      size={16}
                    />
                  </div>
                </form>

                {/* Mobile Action Buttons */}
                <div className="flex gap-2 px-2 pt-2">
                  <Button
                    onClick={() => {
                      setShowCheatSheet(true);
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="flex-1 text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 justify-start"
                  >
                    <ClipboardList size={18} className="mr-2" />
                    Quick Review
                  </Button>

                  <Button
                    onClick={() => {
                      togglePresentationMode();
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="flex-1 text-primary-foreground hover:text-gold hover:bg-primary-foreground/10 justify-start"
                  >
                    <Monitor size={18} className="mr-2" />
                    Present
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

export default Navigation;
