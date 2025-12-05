import { useState } from "react";
import { Trophy, X, CheckCircle, XCircle, Medal, Star, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "When was José Rizal born?",
    options: ["June 12, 1861", "June 19, 1861", "December 30, 1896", "June 19, 1856"],
    correct: 1,
    explanation: "Rizal was born on June 19, 1861, in Calamba, Laguna."
  },
  {
    question: "What does 'Noli Me Tangere' mean in Latin?",
    options: ["Touch Me Not", "The Uprising", "Social Cancer", "My Last Farewell"],
    correct: 0,
    explanation: "'Noli Me Tangere' translates to 'Touch Me Not', referring to the social cancers in Philippine society."
  },
  {
    question: "Who among the following was Rizal's 'Great Love'?",
    options: ["Josephine Bracken", "Segunda Katigbak", "Leonor Rivera", "O Sei San"],
    correct: 2,
    explanation: "Leonor Rivera was Rizal's great love. Their 11-year relationship inspired the character of María Clara."
  },
  {
    question: "To whom was El Filibusterismo dedicated?",
    options: ["His Mother Teodora", "Leonor Rivera", "GOMBURZA", "Marcelo H. del Pilar"],
    correct: 2,
    explanation: "El Filibusterismo was dedicated to GOMBURZA (Fathers Gómez, Burgos, and Zamora), the martyred priests of 1872."
  },
  {
    question: "What was the name of the reform organization Rizal founded?",
    options: ["Katipunan", "La Solidaridad", "La Liga Filipina", "Indios Bravos"],
    correct: 2,
    explanation: "Rizal founded La Liga Filipina on July 3, 1892, with the motto 'Unus Instar Omnium' (One Like All)."
  },
  {
    question: "Where was Rizal exiled for four years?",
    options: ["Hong Kong", "Dapitan", "Madrid", "Fort Santiago"],
    correct: 1,
    explanation: "Rizal was exiled in Dapitan (1892-1896) where he built a school, hospital, and water system."
  },
  {
    question: "What is the Rizal Law officially known as?",
    options: ["RA 1425", "RA 1896", "RA 1861", "RA 7079"],
    correct: 0,
    explanation: "The Rizal Law is Republic Act No. 1425, requiring the study of Rizal's life and works in schools."
  },
  {
    question: "Who authored the Rizal Law?",
    options: ["Manuel Quezon", "Jose Laurel", "Claro M. Recto", "Ferdinand Marcos"],
    correct: 2,
    explanation: "Senator Claro M. Recto authored the Rizal Law, which was enacted on June 12, 1956."
  },
  {
    question: "What character in Noli Me Tangere represents the Filipino mothers' suffering?",
    options: ["María Clara", "Sisa", "Salomé", "Juli"],
    correct: 1,
    explanation: "Sisa, who went mad searching for her sons Basilio and Crispín, symbolizes the suffering of Filipino mothers."
  },
  {
    question: "Where did Rizal publish Noli Me Tangere?",
    options: ["Madrid, Spain", "Paris, France", "Berlin, Germany", "Ghent, Belgium"],
    correct: 2,
    explanation: "Noli Me Tangere was published in Berlin, Germany in 1887 with financial help from Maximo Viola."
  }
];

interface QuizChallengeProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuizChallenge = ({ open, onOpenChange }: QuizChallengeProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [medalUnlocked, setMedalUnlocked] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      if (score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0) >= 8) {
        setMedalUnlocked(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setQuizComplete(false);
    setMedalUnlocked(false);
  };

  const finalScore = score + (selectedAnswer === questions[currentQuestion]?.correct && quizComplete ? 1 : 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
            <Trophy className="text-gold" size={24} />
            Rizal Challenge Mode
          </DialogTitle>
        </DialogHeader>

        {!quizComplete ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span className="flex items-center gap-1">
                <Star size={14} className="text-gold" /> Score: {score}
              </span>
            </div>

            {/* Question */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      !answered 
                        ? 'border-border hover:border-gold hover:bg-gold/10' 
                        : index === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-500/10'
                          : index === selectedAnswer
                            ? 'border-red-500 bg-red-500/10'
                            : 'border-border opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        !answered 
                          ? 'bg-secondary text-foreground' 
                          : index === questions[currentQuestion].correct
                            ? 'bg-green-500 text-white'
                            : index === selectedAnswer
                              ? 'bg-red-500 text-white'
                              : 'bg-secondary text-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-lato">{option}</span>
                      {answered && index === questions[currentQuestion].correct && (
                        <CheckCircle className="ml-auto text-green-500" size={20} />
                      )}
                      {answered && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                        <XCircle className="ml-auto text-red-500" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={`p-4 rounded-lg animate-fade-in ${
                selectedAnswer === questions[currentQuestion].correct 
                  ? 'bg-green-500/10 border border-green-500/30' 
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                <p className="font-lato text-sm">
                  <strong>{selectedAnswer === questions[currentQuestion].correct ? '✓ Correct!' : '✗ Incorrect.'}</strong>{' '}
                  {questions[currentQuestion].explanation}
                </p>
              </div>
            )}

            {answered && (
              <Button 
                onClick={nextQuestion} 
                className="w-full bg-gold hover:bg-gold-light text-accent-foreground"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            )}
          </div>
        ) : (
          /* Results Screen */
          <div className="text-center space-y-6 py-8">
            {medalUnlocked ? (
              <div className="animate-scale-in">
                <div className="relative inline-block">
                  <Medal size={120} className="text-gold mx-auto" />
                  <div className="absolute inset-0 animate-ping">
                    <Medal size={120} className="text-gold/30" />
                  </div>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-gold mt-4">
                  ¡Sobresaliente!
                </h2>
                <p className="text-muted-foreground mt-2">
                  You've earned the Virtual Medal of Excellence!
                </p>
              </div>
            ) : (
              <div className="animate-scale-in">
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-primary">{finalScore}</span>
                </div>
                <h2 className="font-playfair text-2xl font-bold text-primary mt-4">
                  Quiz Complete!
                </h2>
              </div>
            )}

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{finalScore}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{questions.length}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold">{Math.round((finalScore / questions.length) * 100)}%</p>
                  <p className="text-sm text-muted-foreground">Score</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {finalScore >= 8 
                ? "Outstanding! You truly know your Rizal history!" 
                : finalScore >= 5 
                  ? "Good effort! Keep learning about our national hero."
                  : "Keep studying! Rizal's life and works have much to teach us."}
            </p>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline" className="gap-2">
                <RotateCcw size={16} /> Try Again
              </Button>
              <Button onClick={() => onOpenChange(false)} className="bg-mahogany hover:bg-mahogany-light">
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizChallenge;
