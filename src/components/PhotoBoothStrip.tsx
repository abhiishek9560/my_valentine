import { X } from "lucide-react";

interface PhotoBoothStripProps {
  isOpen: boolean;
  onClose: () => void;
}

const photos = [
  { id: 1, emoji: "🥰", caption: "Us being cute" },
  { id: 2, emoji: "😘", caption: "Stolen kisses" },
  { id: 3, emoji: "🤪", caption: "Being silly" },
  { id: 4, emoji: "💑", caption: "Forever & always" },
];

const PhotoBoothStrip = ({ isOpen, onClose }: PhotoBoothStripProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-blush transition-colors z-10"
        >
          <X className="w-6 h-6 text-muted-foreground" />
        </button>
        
        <div className="photo-strip bg-white p-3 rounded-lg max-w-[180px] mx-auto">
          <div className="space-y-2">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-rose-light via-lavender-light to-cream rounded-sm flex items-center justify-center text-5xl border-4 border-white shadow-sm">
                  {photo.emoji}
                </div>
                <p className="text-center text-xs text-muted-foreground font-medium py-1 font-romantic">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-3 pt-2 border-t border-rose-light">
            <p className="text-center font-romantic text-rose text-sm">
              Valentine's Day 2025
            </p>
            <p className="text-center text-xs text-muted-foreground mt-1">
              💕 Made with love 💕
            </p>
          </div>
        </div>
        
        <p className="text-center text-white text-sm mt-4 opacity-80 italic">
          Tap outside to close
        </p>
      </div>
    </div>
  );
};

export default PhotoBoothStrip;
