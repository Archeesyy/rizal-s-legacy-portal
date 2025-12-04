import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  direction = "up",
  className = "" 
}: ParallaxElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - windowHeight / 2;
        setOffset(distanceFromCenter * speed * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${-offset}px)`;
      case "down":
        return `translateY(${offset}px)`;
      case "left":
        return `translateX(${-offset}px)`;
      case "right":
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-transform duration-100 ${className}`}
      style={{ transform: getTransform() }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
