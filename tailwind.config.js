/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: { creepy: ['"Creepster"', "cursive"] },
        colors: {
            night: "#0D0D0D",
            pumpkin: "#FF7518",
            witch: "#6A0DAD",
            ghost: "#FFF8DC",
        },
    },
  },
  plugins: [],
};
