"use client";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-4 backdrop-blur-md bg-black/40 border-b border-orange-500/40"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl text-orange-400 font-creepy">🕯️ Halloween Townhall</h1>
      <div className="space-x-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-400 rounded-md text-black font-bold transition-all">Login</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md text-white font-bold transition-all">Sign Up</button>
          </SignUpButton>
        </SignedOut>
      </div>
    </motion.nav>
  );
}
