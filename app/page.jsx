"use client";
import { useState } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import PumpkinGame from "./components/PumpkinGame";
import { motion } from "framer-motion";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Splash onFinish={() => setReady(true)} />}
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col"
        >
          <Navbar />
          <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 text-center">
            <h2 className="text-5xl text-orange-400 font-creepy mb-10">Welcome, Witch Coder 🧙‍♂️</h2>
            <PumpkinGame />
          </main>
          <footer className="p-4 text-sm text-gray-400 text-center border-t border-orange-500/40">
            © 2025 Halloween Townhall | Code Slam 2.0
          </footer>
        </motion.div>
      )}
    </>
  );
}
