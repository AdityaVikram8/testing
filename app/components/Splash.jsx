"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const sound = new Audio("/sounds/witch-laugh.mp3");
    sound.volume = 0.4;
    sound.play().catch(() => {});
    setTimeout(() => {
      setShow(false);
      onFinish();
    }, 4000);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-black to-purple-950 flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-orange-400 text-6xl font-creepy drop-shadow-[0_0_20px_#ff5500]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            🎃 Halloween Townhall 🎃
          </motion.h1>
          <motion.img
            src="/witch-flying.gif"
            alt="witch"
            className="w-60 mt-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
