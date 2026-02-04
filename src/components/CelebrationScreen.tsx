import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = ["#f472b6", "#c084fc", "#fcd34d", "#fb7185", "#a78bfa", "#f9a8d4"];
const emojis = ["💖", "💕", "💗", "💓", "💝", "✨", "🌸", "🎀"];

interface CelebrationScreenProps {
  onOpenMemories: () => void;
  onOpenPhotoBooth: () => void;
  onOpenLetter: () => void;
}

const CelebrationScreen = ({ onOpenMemories, onOpenPhotoBooth, onOpenLetter }: CelebrationScreenProps) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Create confetti
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 12,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(newConfetti);
    
    // Show content after animation
    setTimeout(() => setShowContent(true), 500);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed animate-confetti pointer-events-none z-10"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            fontSize: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </div>
      ))}
      
      {/* Content */}
      <div 
        className={`valentine-card text-center max-w-lg mx-4 z-20 transition-all duration-1000 ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-20 h-20 text-heart fill-heart animate-pulse" />
            <Heart className="w-20 h-20 text-heart fill-heart absolute top-0 left-0 animate-ping opacity-30" />
          </div>
        </div>
        
        <h1 className="font-romantic text-3xl md:text-5xl text-primary mb-4 animate-bounce-in">
          I knew you'd say yes!
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-2">
          💖 Happy Valentine's Day! 💖
        </p>
        
        <p className="text-muted-foreground mb-8">
          Thank you for making my heart complete
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenMemories}
            className="btn-feature"
          >
            📸 Our Memories
          </button>
          <button
            onClick={onOpenPhotoBooth}
            className="btn-feature"
          >
            🎞 Photo Booth
          </button>
          <button
            onClick={onOpenLetter}
            className="btn-feature"
          >
            💌 Read My Note
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-rose-light">
          <p className="font-romantic text-lg text-muted-foreground">
            Forever & Always ♡
          </p>
        </div>
      </div>
    </div>
  );
};

export default CelebrationScreen;
