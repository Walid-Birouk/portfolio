/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: {
          DEFAULT: "#a8f0e0", // Default light teal
          100: "#98e8d0", // Slightly darker
          200: "#88e0c0", // A bit more depth
          300: "#78d8b0", // Richer teal
          400: "#68d0a0", // Deeper still
          500: "#58c890", // Midway teal
          600: "#48c080", // Heading to dark
          700: "#38b870", // Darker teal
          800: "#28b060", // Rich dark teal
          900: "#18a850", // Very dark teal
          950: "#0a9840", // Nearly the darkest
          1000: "#0a8840", // Darkest shade of customTeal
          1100: "#086f38",
        },
        gray: {
          900: "#1c1c1e", // slightly lighter than Tailwind's default gray-900
          950: "#1a1a1c", // Custom shade, slightly darker than 900
          1000: "#18181a", // Darker than 950
          1050: "#161618", // Darker than 1000
          1100: "#141416", // Darker than 1050
          1150: "#121214", // Darker than 1100
          1200: "#101012", // Darker than 1150
          1250: "#0e0e10", // Darker than 1200
          1300: "#0c0c0e", // Darker than 1250
          1350: "#0a0a0c", // Darker than 1300
          1400: "#08080a", // Darker than 1350
          1450: "#060608", // Darker than 1400
          1500: "#040406", // The darkest shade, darker than 1450
        },
        softPink: "#ff79b0",
        electricBlue: "#007bff",
        cc: "#01402E",
      },
      height: {
        128: "20rem",
        "3/4-screen": "75vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
