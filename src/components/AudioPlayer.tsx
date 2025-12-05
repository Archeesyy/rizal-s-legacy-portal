import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const MI_ULTIMO_ADIOS = `Adiós, Patria adorada, región del sol querida,
Perla del Mar de Oriente, nuestro perdido edén!
A darte voy alegre la triste mustia vida,
Y fuera más brillante, más fresca, más florida,
También por ti la diera, la diera por tu bien.

En campos de batalla, luchando con delirio,
Otros te dan sus vidas sin dudas, sin pesar;
El sitio nada importa, ciprés, laurel o lirio,
Cadalso o campo abierto, combate o cruel martirio,
Lo mismo es si lo piden la patria y el hogar.

Yo muero cuando veo que el cielo se colora
Y al fin anuncia el día tras lóbrego capuz;
Si grana necesitas para teñir tu aurora,
Vierte la sangre mía, derrámala en buen hora
Y dórela un reflejo de su naciente luz.

Mis sueños cuando apenas muchacho adolescente,
Mis sueños cuando joven ya lleno de vigor,
Fueron el verte un día, joya del Mar de Oriente,
Secos los negros ojos, alta la tersa frente,
Sin ceño, sin arrugas, sin manchas de rubor.

Ensueño de mi vida, mi ardiente vivo anhelo,
¡Salud te grita el alma que pronto va a partir!
¡Salud! Ah, que es hermoso caer por darte vuelo,
Morir por darte vida, morir bajo tu cielo,
Y en tu encantada tierra la eternidad dormir.`;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Create ambient audio (using a placeholder - in production use actual audio file)
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Note: In production, set a real audio source
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const readPoem = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      setReadProgress(0);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(MI_ULTIMO_ADIOS);
    utterance.lang = 'es-ES';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // Find a Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es'));
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => {
      setIsReading(false);
      setReadProgress(0);
    };
    utterance.onerror = () => {
      setIsReading(false);
      setReadProgress(0);
    };

    // Track progress
    const words = MI_ULTIMO_ADIOS.split(' ').length;
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        setReadProgress((event.charIndex / MI_ULTIMO_ADIOS.length) * 100);
      }
    };

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-24 left-4 z-40">
      <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-auto'}`}>
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="bg-background/95 backdrop-blur-md rounded-xl shadow-elegant border border-border p-4 mb-3 animate-fade-in">
            <h4 className="font-playfair text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-gold">♪</span> Audio Experience
            </h4>
            
            {/* Background Music Control */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Background Music</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="h-8 w-8 p-0"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="h-8 w-8 p-0"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
              </div>
            </div>
            
            {/* Mi Último Adiós Voiceover */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">Mi Último Adiós</span>
                <Button
                  variant={isReading ? "destructive" : "outline"}
                  size="sm"
                  onClick={readPoem}
                  className="h-8"
                >
                  <Mic size={14} className="mr-1" />
                  {isReading ? "Stop" : "Listen"}
                </Button>
              </div>
              {isReading && (
                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold transition-all duration-200"
                    style={{ width: `${readProgress}%` }}
                  />
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2 italic">
                Rizal's farewell poem, written the night before his execution.
              </p>
            </div>
          </div>
        )}
        
        {/* Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`rounded-full w-12 h-12 shadow-elegant ${
            isExpanded || isReading ? 'bg-gold hover:bg-gold-light' : 'bg-mahogany hover:bg-mahogany-light'
          }`}
          size="icon"
        >
          <Volume2 size={20} className={isReading ? 'animate-pulse' : ''} />
        </Button>
      </div>
    </div>
  );
};

export default AudioPlayer;
