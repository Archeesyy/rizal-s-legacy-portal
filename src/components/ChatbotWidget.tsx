import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Function to handle the chatbot logic
function getRizalResponse(userText: string): string {
  // Convert input to lowercase for easier matching
  let input = userText.toLowerCase().trim();

  // 1. BIOGRAPHY & BASICS
  if (input.includes("name") || input.includes("who are you")) {
    return "I am Dr. José Protasio Rizal Mercado y Alonso Realonda. I was born on June 19, 1861, in Calamba, Laguna.";
  }
  if (input.includes("birthday") || input.includes("born")) {
    return "I was born on June 19, 1861, under the sign of Gemini, in the town of Calamba.";
  }
  if (input.includes("height") || input.includes("tall")) {
    return "Historical records vary, but I was approximately 4 feet 11 inches to 5 feet 2 inches tall. Proof that greatness is not measured in inches!";
  }
  if (input.includes("parents") || input.includes("mother") || input.includes("father")) {
    return "My father was Francisco Mercado, a hardworking farmer, and my mother was Teodora Alonso, my first teacher and a woman of high culture.";
  }
  if (input.includes("siblings") || input.includes("brother") || input.includes("sister")) {
    return "I had 10 siblings: Saturnina, Paciano, Narcisa, Olimpia, Lucia, Maria, Concepcion, Josefa, Trinidad, and Soledad. Paciano was my second father and hero.";
  }

  // 2. ROMANCE (The "Tea")
  if (input.includes("girlfriends") || input.includes("women") || input.includes("love")) {
    return "I have been linked to several women: Segunda Katigbak (my first love), Leonor Rivera (my longest love), O Sei San, Nellie Boustead, and finally, my dear Josephine Bracken.";
  }
  if (input.includes("leonor rivera")) {
    return "Leonor Rivera was my sweetheart for 11 years. Her mother disapproved of me, and she was married to Henry Kipping. She was the inspiration for Maria Clara.";
  }
  if (input.includes("josephine") || input.includes("wife")) {
    return "Josephine Bracken was my dulcinea in Dapitan. Though the church refused to marry us, we considered ourselves husband and wife until my last breath.";
  }

  // 3. LITERARY WORKS
  if (input.includes("noli") || input.includes("tangere")) {
    return "Noli Me Tangere (Touch Me Not) was published in Berlin in 1887. It exposed the cancer of society and the abuses of the friars. It was a romantic novel.";
  }
  if (input.includes("fili") || input.includes("filibusterismo")) {
    return "El Filibusterismo (The Reign of Greed) was published in Ghent in 1891. It is a political novel, darker than the Noli, and dedicated to the martyred priests Gomburza.";
  }
  if (input.includes("poem") || input.includes("adios")) {
    return "'Mi Último Adiós' was the untitled poem I hid in an alcohol stove before my execution. It was my final farewell to my beloved country.";
  }

  // 4. EDUCATION & TRAVELS
  if (input.includes("education") || input.includes("study") || input.includes("school")) {
    return "I began in Biñan, then studied at Ateneo Municipal (Bachelor of Arts) and UST (Medicine). Disgusted by the method of instruction at UST, I continued my studies in Spain.";
  }
  if (input.includes("profession") || input.includes("job") || input.includes("doctor")) {
    return "I was an ophthalmologist by profession, but also a farmer, engineer, journalist, novelist, sculptor, and linguist. I spoke 22 languages.";
  }

  // 5. DEATH & LEGACY
  if (input.includes("death") || input.includes("died") || input.includes("execution")) {
    return "I was executed by firing squad at Bagumbayan (now Rizal Park) on December 29, 1896, at 7:03 AM. My pulse was normal, proving I was not afraid to die.";
  }
  if (input.includes("retraction")) {
    return "The issue of whether I retracted my Masonic beliefs remains a controversial topic among historians to this day. I leave that to your judgment.";
  }

  // DEFAULT ANSWER (If the bot doesn't know)
  const searchQuery = encodeURIComponent(userText);
  return `I apologize, I do not have that specific record in my offline memory. However, since you are asking about "${userText}", would you like to search for it?\n\n[GOOGLE_SEARCH:${searchQuery}]`;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Greetings! I am your virtual guide. Ask me about my life, my novels, or my travels.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Who is Josephine?",
    "Summary of Noli",
    "Where did you study?",
    "Tell me about your execution",
    "What languages did you speak?",
    "Who were your parents?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Get bot response with typing indicator
    setTimeout(() => {
      const responseText = getRizalResponse(text);
      const botResponse: Message = {
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);

    setInputValue("");
  };

  const handleChipClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-mahogany hover:bg-mahogany-light text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-110"
        size="icon"
        title="Ask Rizal"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-card rounded-lg shadow-elegant border border-border flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-mahogany text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-playfair text-xl font-bold text-gold">
              Ask Rizal AI
            </h3>
            <p className="text-xs opacity-90">Your virtual guide to history</p>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4 bg-parchment custom-scrollbar">
            <div className="space-y-3">
              {messages.map((message, index) => {
                const hasSearchButton = message.text.includes("[GOOGLE_SEARCH:");
                const searchMatch = message.text.match(/\[GOOGLE_SEARCH:(.*?)\]/);
                const displayText = message.text.replace(/\[GOOGLE_SEARCH:.*?\]/, "").trim();
                
                return (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-mahogany text-primary-foreground"
                          : "bg-card border border-border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{displayText}</p>
                      {hasSearchButton && searchMatch && (
                        <Button
                          onClick={() => window.open(`https://www.google.com/search?q=Jose+Rizal+${searchMatch[1]}`, "_blank")}
                          className="mt-2 bg-mahogany hover:bg-mahogany-light text-primary-foreground text-xs"
                          size="sm"
                        >
                          Search Google
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border p-3 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Suggested Questions (Chips) */}
          <div className="px-4 py-2 bg-parchment-dark border-t border-border">
            <div className="flex gap-2 flex-wrap">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleChipClick(question)}
                  className="text-xs px-3 py-1 rounded-full bg-gold/20 hover:bg-gold/30 text-foreground border border-gold/40 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-card border-t border-border rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputValue);
                  }
                }}
                placeholder="Ask about Rizal..."
                className="flex-1 bg-background border-border"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="icon"
                className="bg-mahogany hover:bg-mahogany-light text-primary-foreground"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
