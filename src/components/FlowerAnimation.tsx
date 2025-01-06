import React from 'react';

const FlowerAnimation: React.FC = () => {
  return (
    <div className="flowers fixed inset-0 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default FlowerAnimation;