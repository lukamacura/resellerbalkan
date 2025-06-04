/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
