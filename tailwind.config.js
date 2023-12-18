/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': "#FFFFFF",
        'white-2': "#F1F4F5",
        'blue-1': "#070C29",
        'blue-2': "#640EF1",
        'blue-3': "#080C2E",
        'gray-1': "#8D90A8",
        'gray-2': "#5D5D7C",
        'yellow-1': "#FFD15A",
      },

      fontFamily: {
        'clash-display': ["Clash-Display", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

