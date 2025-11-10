"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PumpkinGame() {
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    const sound = new Audio("/sounds/gem-collect.mp3");
    sound.play().catch(() => {});
    e.target.classList.add("scale-0");
    setTimeout(() => {
      e.target.classList.remove("scale-0");
      setScore((s) => s + 1);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-4xl text-orange-400 font-creepy drop-shadow-[0_0_20px_#ff7518]">Pumpkin Smash 🎃</h2>
      <p className="text-gray-300">Click the pumpkins to collect energy gems!</p>
      <div className="grid grid-cols-3 gap-10 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 bg-gradient-to-b from-orange-500 to-orange-800 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_15px_#ff7518]"
            onClick={handleClick}
          >
            🎃
          </motion.div>
        ))}
      </div>
      <h3 className="mt-8 text-2xl text-purple-300">Gems Collected: <span className="text-orange-400">{score}</span></h3>
    </div>
  );
}
