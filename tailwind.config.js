/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor: "#161516",
        textColor: "#FFFFFF",
        goldColor: "#F5C401",
        goldColorSelected: "#876C02"
      },
    },
  },
  plugins: [],
}