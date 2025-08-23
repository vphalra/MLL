/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Hero.tsx", // Explicitly add Hero.tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        courierprime: ['CourierPrime', 'monospace'],
        poiret: ['Poiret One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};