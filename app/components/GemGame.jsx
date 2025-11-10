"use client";
import { useState } from "react";

export default function GemGame() {
  const [score, setScore] = useState(0);

  const handleCollect = () => {
    const sound = new Audio("/sounds/gem-collect.mp3");
    sound.play().catch(() => {});
    setScore(score + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl text-pumpkin">Collect Gems 💎</h2>
      <p className="text-lg">Click pumpkins to earn gems!</p>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <button
            key={i}
            onClick={handleCollect}
            className="w-20 h-20 bg-pumpkin rounded-full hover:scale-110 transition-transform"
          >
            🎃
          </button>
        ))}
      </div>
      <p className="mt-6 text-xl text-ghost">
        Gems Collected: <span className="text-witch">{score}</span>
      </p>
    </div>
  );
}
