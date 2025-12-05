import { useState } from "react";

interface VirtualArtifactProps {
  className?: string;
}

const VirtualArtifact = ({ className = "" }: VirtualArtifactProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showStory, setShowStory] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="perspective-1000 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowStory(!showStory)}
      >
        {/* 3D Alcohol Lamp Container */}
        <div 
          className="relative w-48 h-64 mx-auto transition-transform duration-700"
          style={{
            transform: isHovered ? 'rotateY(15deg) rotateX(-5deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Lamp Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full shadow-lg"
            style={{ transform: 'rotateX(60deg) translateZ(0px)' }}
          />
          
          {/* Lamp Body - Glass Container */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-32 rounded-t-full rounded-b-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(200,180,140,0.6) 50%, rgba(180,160,120,0.4) 100%)',
              boxShadow: 'inset -5px -5px 20px rgba(255,255,255,0.3), inset 5px 5px 20px rgba(0,0,0,0.2)',
              border: '2px solid rgba(212,175,55,0.5)'
            }}
          >
            {/* Alcohol liquid inside */}
            <div className="absolute bottom-2 left-2 right-2 h-20 rounded-b-md"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,220,100,0.3) 0%, rgba(255,200,50,0.5) 100%)',
              }}
            />
            
            {/* Wick */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-1 h-8 bg-gradient-to-t from-gray-800 to-gray-600" />
          </div>
          
          {/* Lamp Neck */}
          <div className="absolute bottom-36 left-1/2 -translate-x-1/2 w-8 h-6 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
          
          {/* Flame */}
          <div 
            className={`absolute bottom-44 left-1/2 -translate-x-1/2 transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
            }`}
          >
            <div className="relative">
              {/* Outer flame glow */}
              <div 
                className="absolute -inset-4 rounded-full blur-xl opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(255,150,0,0.8) 0%, transparent 70%)' }}
              />
              {/* Outer flame */}
              <div 
                className="w-6 h-10 rounded-full animate-pulse"
                style={{
                  background: 'linear-gradient(to top, rgba(255,100,0,1) 0%, rgba(255,200,0,1) 50%, rgba(255,255,200,1) 100%)',
                  filter: 'blur(1px)',
                  animation: 'flicker 0.3s ease-in-out infinite alternate'
                }}
              />
              {/* Inner flame */}
              <div 
                className="absolute top-1 left-1 w-4 h-6 rounded-full"
                style={{
                  background: 'linear-gradient(to top, rgba(255,255,100,1) 0%, rgba(255,255,255,1) 100%)',
                  filter: 'blur(1px)'
                }}
              />
            </div>
          </div>
          
          {/* Hidden poem scroll indicator */}
          <div className={`absolute -right-2 top-1/2 -translate-y-1/2 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}>
            <div className="bg-parchment-dark px-2 py-1 rounded text-xs font-playfair text-mahogany shadow-md border border-gold/30">
              📜 Hidden
            </div>
          </div>
        </div>
        
        {/* Label */}
        <div className="text-center mt-6">
          <h4 className="font-playfair text-lg font-bold text-primary">The Alcohol Lamp</h4>
          <p className="text-sm text-muted-foreground">Click to reveal its secret</p>
        </div>
      </div>
      
      {/* Story Modal */}
      {showStory && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowStory(false)}
        >
          <div 
            className="bg-background max-w-lg rounded-xl p-6 shadow-2xl border border-gold/30 animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              The Secret of the Lamp
            </h3>
            <div className="space-y-4 text-muted-foreground font-lato">
              <p>
                On the night before his execution, December 29, 1896, José Rizal wrote his final poem, 
                <em className="text-primary"> "Mi Último Adiós"</em> (My Last Farewell).
              </p>
              <p>
                Knowing that his belongings would be searched, Rizal cleverly hid the poem 
                inside this <strong className="text-gold">alcohol lamp</strong>, which he gave to his sister Trinidad.
              </p>
              <p>
                He whispered to her: <em className="text-primary">"There is something inside."</em>
              </p>
              <p>
                The poem was discovered after his death—a final gift to the Filipino people, 
                written in the shadow of Bagumbayan, where dawn would bring both his death 
                and the birth of a nation's resolve.
              </p>
            </div>
            <button 
              onClick={() => setShowStory(false)}
              className="mt-6 w-full bg-gold hover:bg-gold-light text-accent-foreground py-2 rounded-lg font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes flicker {
          0% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.05) scaleX(0.95); }
          100% { transform: scaleY(0.98) scaleX(1.02); }
        }
      `}</style>
    </div>
  );
};

export default VirtualArtifact;
