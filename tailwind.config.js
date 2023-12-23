/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': "#FFFFFF",
        'white-1-hover': "#E9E9E9",
        'white-2': "#F1F4F5",
        'blue-1': "#070C29",
        'blue-2': "#640EF1",
        'blue-2-hover': "#782FEF",
        'blue-3': "#080C2E",
        'blue-3-hover': "#5A5B68",
        'gray-1': "#8D90A8",
        'gray-2': "#5D5D7C",
        'yellow': "#FFD15A",
        'yellow-hover': "#FFC633",
        'dark-blue-1': "#03051B",
        'dark-blue-2': "#111428",
      },

      fontFamily: {
        'clash-display': ["Clash-Display", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

