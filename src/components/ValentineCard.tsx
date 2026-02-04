import { useState, useCallback } from "react";
import { Heart } from "lucide-react";

const noButtonTexts = [
  "No 😈",
  "Are you sure?",
  "Think again 🥺",
  "Don't break my heart 💔",
  "Really really sure?",
  "Last chance 😳",
  "Okay but please 🥹",
  "Pretty please? 🙏",
];

interface ValentineCardProps {
  onYesClick: () => void;
  onOpenMemories: () => void;
  onOpenPhotoBooth: () => void;
  onOpenLetter: () => void;
}

const ValentineCard = ({ 
  onYesClick, 
  onOpenMemories, 
  onOpenPhotoBooth, 
  onOpenLetter 
}: ValentineCardProps) => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  
  const yesButtonScale = 1 + noClickCount * 0.25;
  const noButtonText = noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)];
  
  const handleNoClick = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    setNoClickCount((prev) => prev + 1);
  }, []);

  const yesButtonStyle = {
    transform: `scale(${yesButtonScale})`,
    fontSize: `${1 + noClickCount * 0.1}rem`,
    padding: `${1 + noClickCount * 0.25}rem ${2 + noClickCount * 0.5}rem`,
    zIndex: 10,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="valentine-card text-center max-w-md w-full animate-bounce-in">
        {/* Heart decoration */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-16 h-16 text-heart fill-heart animate-float" />
            <div className="absolute -top-1 -right-1">
              <span className="text-2xl animate-pulse">✨</span>
            </div>
          </div>
        </div>
        
        {/* Main question */}
        <h1 className="font-romantic text-3xl md:text-4xl lg:text-5xl text-primary mb-8 leading-relaxed">
          Will you be my Valentine?
        </h1>
        
        {/* Buttons container */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Yes button */}
          <button
            onClick={onYesClick}
            className="btn-yes animate-pulse-grow origin-center"
            style={yesButtonStyle}
          >
            Yes 💖
          </button>
          
          {/* No button */}
          <button
            onClick={handleNoClick}
            className={`btn-no ${isShaking ? "animate-shake" : ""}`}
            style={{
              opacity: Math.max(0.4, 1 - noClickCount * 0.1),
              transform: `scale(${Math.max(0.7, 1 - noClickCount * 0.05)})`,
            }}
          >
            {noButtonText}
          </button>
        </div>
        
        {/* Hint text */}
        {noClickCount > 0 && noClickCount < 4 && (
          <p className="text-muted-foreground text-sm animate-fade-in-up italic mb-6">
            The Yes button seems to be growing... 👀
          </p>
        )}
        
        {noClickCount >= 4 && (
          <p className="text-primary text-sm animate-fade-in-up font-medium mb-6">
            Just say yes already! 💕
          </p>
        )}
        
        {/* Feature buttons */}
        <div className="pt-6 border-t border-rose-light">
          <p className="text-muted-foreground text-sm mb-4">
            While you decide... 💭
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button onClick={onOpenMemories} className="btn-feature text-xs md:text-sm">
              📸 Our Memories
            </button>
            <button onClick={onOpenPhotoBooth} className="btn-feature text-xs md:text-sm">
              🎞 Photo Booth
            </button>
            <button onClick={onOpenLetter} className="btn-feature text-xs md:text-sm">
              💌 Read My Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
