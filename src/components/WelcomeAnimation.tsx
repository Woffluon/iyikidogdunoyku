import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  color: string;
  velocity: { x: number; y: number };
}

const WelcomeAnimation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isPlaying) return;

    let animationFrame: number;
    const startTime = Date.now();
    const duration = 5000; // 5 seconds

    const createFirework = () => {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      
      // Create explosion particles
      const newParticles: Particle[] = Array.from({ length: 30 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 3 + Math.random() * 2;
        return {
          x,
          y,
          color,
          velocity: {
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity
          }
        };
      });

      setParticles(prev => [...prev, ...newParticles]);
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        if (Math.random() < 0.1) createFirework();
        
        setParticles(prev => 
          prev
            .map(p => ({
              ...p,
              x: p.x + p.velocity.x,
              y: p.y + p.velocity.y - 0.5,
              velocity: {
                x: p.velocity.x * 0.99,
                y: p.velocity.y * 0.99
              }
            }))
            .filter(p => p.y > 0)
        );

        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      <button 
        onClick={() => setIsPlaying(false)}
        className="absolute top-4 right-4 z-50 pointer-events-auto p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label="Animasyonu Kapat"
      >
        <X className="w-5 h-5 text-white" />
      </button>
      
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
              transform: 'translate(-50%, -50%)',
              opacity: Math.min(1, particle.velocity.x * particle.velocity.x + particle.velocity.y * particle.velocity.y),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeAnimation;