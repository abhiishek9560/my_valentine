import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
        size: 12 + Math.random() * 20,
        opacity: 0.3 + Math.random() * 0.4,
      };
      
      setHearts((prev) => [...prev.slice(-15), newHeart]);
    };

    // Create initial hearts
    for (let i = 0; i < 8; i++) {
      setTimeout(createHeart, i * 500);
    }

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
