"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const laugh = new Audio("/sounds/witch-laugh.mp3");
    laugh.volume = 0.4;
    laugh.play().catch(() => {});
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-night text-pumpkin z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-creepy mb-4">🎃 Halloween Townhall 🎃</h1>
      <img src="/witch-flying.gif" alt="Witch" className="w-52 h-52" />
    </motion.div>
  );
}
