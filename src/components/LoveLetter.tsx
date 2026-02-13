import { X, Heart } from "lucide-react";

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoveLetter = ({ isOpen, onClose }: LoveLetterProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content p-8 md:p-10 animate-bounce-in max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-heart fill-heart animate-pulse" />
            <span className="font-romantic text-2xl text-primary">My Dearest</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blush transition-colors"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
        
        <div 
          className="bg-cream rounded-2xl p-6 shadow-inner animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="handwritten text-foreground text-lg leading-relaxed space-y-4">
            <h1>To My Beautiful Ankita 💕</h1>

                <p>
                    From the moment I met you, Ankita, my world became brighter and more colorful than I ever imagined possible.
                </p>
            
                <p>
                    Every laugh we share, every quiet moment together, every adventure — big or small — they're all treasures I hold close to my heart.
                </p>
            
                <p>
                    You are my favorite person, my best friend, and the love of my life. 
                    My sweet boo boo, you make everything feel magical just by being you.
                </p>
            
                <p>
                    I am so grateful to call you mine, boo boo. You are my happiness, my peace, and my forever.
                </p>
            
                <p>
                    Will you be my Valentine? 💖
                </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-rose-light">
            <p className="handwritten text-right text-primary text-xl">
              Forever yours,
            </p>
            <p className="handwritten text-right text-primary text-2xl mt-1">
              ♡ Your Love ♡
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoveLetter;
