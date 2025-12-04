import { useState } from "react";

interface FlipCard3DProps {
  frontImage: string;
  frontTitle: string;
  frontSubtitle?: string;
  backTitle: string;
  backContent: string;
  backDetails?: string;
}

const FlipCard3D = ({
  frontImage,
  frontTitle,
  frontSubtitle,
  backTitle,
  backContent,
  backDetails,
}: FlipCard3DProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-[400px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-elegant">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${frontImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-mahogany/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
            <h3 className="font-playfair text-2xl font-bold">{frontTitle}</h3>
            {frontSubtitle && (
              <p className="font-lato text-sm text-gold mt-1">{frontSubtitle}</p>
            )}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-elegant bg-gradient-to-br from-mahogany to-mahogany-light p-6 flex flex-col justify-center">
          <div className="border-l-4 border-gold pl-4">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-3">
              {backTitle}
            </h3>
            <p className="font-lato text-primary-foreground text-sm leading-relaxed mb-4">
              {backContent}
            </p>
            {backDetails && (
              <p className="font-lato text-primary-foreground/80 text-xs italic">
                {backDetails}
              </p>
            )}
          </div>
          <div className="absolute bottom-4 right-4 text-gold/50 text-xs">
            Click or hover to flip
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard3D;
