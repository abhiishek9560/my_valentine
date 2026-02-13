import { X } from "lucide-react";
import collegeMemoryImg from "@/assets/college_memory.jpeg";
import firstTimeImg from "@/assets/first_time_together.jpeg";
import lookHowCuteImg from "@/assets/look_how_cute.jpeg";
import foreverDateImg from "@/assets/my_forever_date.jpeg";
import princessImg from "@/assets/my_princess.jpeg";
import facetimeImg from "@/assets/facetime_everywhere.jpeg";
import unforgettableImg from "@/assets/unforgettable_memory.jpeg";

interface MemoriesGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const memories = [
  { id: 1, image: collegeMemoryImg, caption: "Our College Days 🎓💕" },
  { id: 2, image: firstTimeImg, caption: "Our First Time Together 💖" },
  { id: 3, image: lookHowCuteImg, caption: "Look How Adorable We Are 🥰" },
  { id: 4, image: foreverDateImg, caption: "My Forever Date 💘" },
  { id: 5, image: princessImg, caption: "My Beautiful Princess 👑✨" },
  { id: 6, image: facetimeImg, caption: "Our FaceTime Rituals 📱💕" },
  { id: 7, image: unforgettableImg, caption: "A Memory We'll Never Forget 🫶" },
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
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-300">
                <img src={memory.image} alt={memory.caption} className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
                {memory.caption}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-6 italic">
          Every moment with you is a treasure 💝
        </p>
      </div>
    </div>
  );
};

export default MemoriesGallery;
