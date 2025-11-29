import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface CheatSheetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheatSheetModal = ({ open, onOpenChange }: CheatSheetModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-3xl text-primary">
            Exam Reviewer - Quick Study Guide
          </DialogTitle>
          <DialogDescription className="font-lato">
            Essential facts about Dr. José Rizal for your review
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 font-lato">
            {/* Key Dates */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3 flex items-center gap-2">
                📅 Key Dates
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>June 19, 1861</strong> - Born in Calamba, Laguna
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>1882</strong> - Left for Spain to study medicine
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>March 21, 1887</strong> - Published <em>Noli Me Tangere</em> in Berlin
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>September 18, 1891</strong> - Published <em>El Filibusterismo</em> in Ghent
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>July 3, 1892</strong> - Founded La Liga Filipina in Manila
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>1892-1896</strong> - Exiled in Dapitan, Zamboanga del Norte
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>December 30, 1896</strong> - Executed at Bagumbayan (Luneta)
                </li>
              </ul>
            </div>

            {/* Key People */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3 flex items-center gap-2">
                👥 Key People
              </h3>
              <div className="space-y-3">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">The Seven Women</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• <strong>Segunda Katigbak</strong> - First love (1877)</li>
                    <li>• <strong>Leonor Valenzuela</strong> - "Orang" (1878-1880)</li>
                    <li>• <strong>Leonor Rivera</strong> - The great love, inspired María Clara (1882-1888)</li>
                    <li>• <strong>Consuelo Ortiga y Perez</strong> - Parisian romance (1883)</li>
                    <li>• <strong>O Sei San</strong> - Japanese romance (1888)</li>
                    <li>• <strong>Gertrude Beckett</strong> - London admirer (1888-1889)</li>
                    <li>• <strong>Josephine Bracken</strong> - Common-law wife (1895-1896)</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">Family & Mentors</h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• <strong>Teodora Alonso</strong> - Mother, first teacher</li>
                    <li>• <strong>Francisco Mercado</strong> - Father</li>
                    <li>• <strong>Paciano Rizal</strong> - Older brother, supporter of the revolution</li>
                    <li>• <strong>Ferdinand Blumentritt</strong> - Austrian scholar, close friend</li>
                    <li>• <strong>Dr. Otto Becker</strong> - Ophthalmology mentor in Heidelberg</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Locations */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3 flex items-center gap-2">
                📍 Key Locations
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Calamba, Laguna</strong> - Birthplace and childhood home
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Madrid, Spain</strong> - Studied medicine (1882-1885)
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Heidelberg, Germany</strong> - Ophthalmology specialization (1886)
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Brussels, Belgium</strong> - Wrote El Filibusterismo (1890-1891)
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Dapitan, Mindanao</strong> - Place of exile (1892-1896)
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Fort Santiago, Manila</strong> - Final imprisonment
                </li>
                <li className="pl-4 border-l-2 border-gold py-1">
                  <strong>Bagumbayan (Luneta)</strong> - Site of execution
                </li>
              </ul>
            </div>

            {/* Literary Works */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3 flex items-center gap-2">
                📚 Major Works
              </h3>
              <div className="space-y-3">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">Noli Me Tangere (1887)</h4>
                  <p className="text-sm mt-1">Exposed colonial abuses, sparked reform movement</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">El Filibusterismo (1891)</h4>
                  <p className="text-sm mt-1">Darker sequel showing revolution's cost</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">Mi Último Adiós (1896)</h4>
                  <p className="text-sm mt-1">Farewell poem written hours before execution</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="font-semibold text-primary">Annotations to Morga's Sucesos</h4>
                  <p className="text-sm mt-1">Proved pre-colonial Philippine civilization</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3 flex items-center gap-2">
                ⚡ Quick Facts
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Polyglot: Spoke 22 languages including Tagalog, Spanish, French, German, English, Chinese, Japanese</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Ophthalmologist who performed successful eye surgeries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Sculptor, painter, poet, and novelist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Founded La Liga Filipina on July 3, 1892</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Age at execution: 35 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-bold">•</span>
                  <span>Last words: "Consummatum est" (It is finished)</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CheatSheetModal;
