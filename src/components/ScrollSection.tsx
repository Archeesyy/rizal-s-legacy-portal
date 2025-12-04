import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary" | "accent" | "dark";
}

const ScrollSection = ({ id, children, className = "", background = "primary" }: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    primary: "bg-background",
    secondary: "bg-secondary",
    accent: "bg-gradient-to-br from-mahogany to-mahogany-light",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`min-h-screen snap-start snap-always flex flex-col justify-center relative overflow-hidden ${bgClasses[background]} ${className}`}
    >
      <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;
