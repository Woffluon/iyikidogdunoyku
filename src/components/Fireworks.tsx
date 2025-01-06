import React from 'react';

const Fireworks: React.FC = () => {
  return (
    <div className="fireworks fixed inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-white rounded-full
            animate-firework-${i + 1} opacity-0`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;