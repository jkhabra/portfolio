/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      }, colors: {
        highlight: {DEFAULT: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600:"#0d9488"},
        light: { DEFAULT: "#F7F8FC", 300: "#FFFFFF", 500: "#f6f7f8" },
        dark: { DEFAULT: "#0D2438", 300: "#102D44", 500: "#1E3851" },
      },
    },
  },
  plugins: [],
}
