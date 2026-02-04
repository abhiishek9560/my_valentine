import { X } from "lucide-react";

interface MemoriesGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const memories = [
  { id: 1, caption: "Our first adventure together 💕", placeholder: "🌸" },
  { id: 2, caption: "That magical sunset 🌅", placeholder: "🌷" },
  { id: 3, caption: "Laughing until we cried 😂", placeholder: "🌺" },
  { id: 4, caption: "Our favorite coffee spot ☕", placeholder: "🌻" },
  { id: 5, caption: "Dancing in the rain 🌧️", placeholder: "💐" },
  { id: 6, caption: "Best day ever! ✨", placeholder: "🌹" },
  { id: 7, caption: "Movie night cuddles 🎬", placeholder: "💮" },
  { id: 8, caption: "Beach vibes 🏖️", placeholder: "🌼" },
  { id: 9, caption: "You make me smile 😊", placeholder: "🪷" },
];

const MemoriesGallery = ({ isOpen, onClose }: MemoriesGalleryProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content p-6 md:p-8 animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-romantic text-2xl md:text-3xl text-primary">
            Our Memories
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blush transition-colors"
          >
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {memories.map((memory, index) => (
            <div 
              key={memory.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-light to-lavender-light flex items-center justify-center text-4xl md:text-5xl shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-300">
                {memory.placeholder}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
                {memory.caption}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-6 italic">
          Replace placeholders with your actual photos! 📸
        </p>
      </div>
    </div>
  );
};

export default MemoriesGallery;
