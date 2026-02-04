import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import CelebrationScreen from "@/components/CelebrationScreen";
import MemoriesGallery from "@/components/MemoriesGallery";
import PhotoBoothStrip from "@/components/PhotoBoothStrip";
import LoveLetter from "@/components/LoveLetter";

const Index = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isMemoriesOpen, setIsMemoriesOpen] = useState(false);
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleYesClick = () => {
    setHasAccepted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background floating hearts */}
      <FloatingHearts />
      
      {/* Main content */}
      {!hasAccepted ? (
        <ValentineCard
          onYesClick={handleYesClick}
          onOpenMemories={() => setIsMemoriesOpen(true)}
          onOpenPhotoBooth={() => setIsPhotoBoothOpen(true)}
          onOpenLetter={() => setIsLetterOpen(true)}
        />
      ) : (
        <CelebrationScreen
          onOpenMemories={() => setIsMemoriesOpen(true)}
          onOpenPhotoBooth={() => setIsPhotoBoothOpen(true)}
          onOpenLetter={() => setIsLetterOpen(true)}
        />
      )}
      
      {/* Modals */}
      <MemoriesGallery 
        isOpen={isMemoriesOpen} 
        onClose={() => setIsMemoriesOpen(false)} 
      />
      <PhotoBoothStrip 
        isOpen={isPhotoBoothOpen} 
        onClose={() => setIsPhotoBoothOpen(false)} 
      />
      <LoveLetter 
        isOpen={isLetterOpen} 
        onClose={() => setIsLetterOpen(false)} 
      />
    </div>
  );
};

export default Index;
