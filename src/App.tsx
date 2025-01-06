import React, { useState, useEffect } from 'react';
import { Cake, Heart, Stars } from 'lucide-react';
import Confetti from './components/Confetti';
import Fireworks from './components/Fireworks';
import FlowerAnimation from './components/FlowerAnimation';
import WelcomeAnimation from './components/WelcomeAnimation';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center">
        <div className="animate-pulse">
          <Cake className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 overflow-hidden relative">
      {showWelcome && <WelcomeAnimation />}
      <Fireworks />
      <FlowerAnimation />
      {showConfetti && <Confetti />}
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center w-full max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in-down bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 filter drop-shadow-lg px-4">
            İyiki Doğdun Öykü!
          </h1>
          
          <div className="space-y-4 sm:space-y-6">
            <button
              onClick={triggerConfetti}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-center space-x-2">
                <Stars className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:animate-spin" />
                <span className="text-base sm:text-lg font-medium text-pink-600">Dileklerini Tut!</span>
              </div>
            </button>
          </div>

          <div className="mt-8 sm:mt-12 flex justify-center space-x-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-bounce" />
            <Cake className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-bounce delay-100" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500 animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;