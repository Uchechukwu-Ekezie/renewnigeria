/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        "20s": "370px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        '428px': '428px',
        'h-sm': { raw: '(max-height: 556px)' },
      },
      fontFamily: {
        sanss: ['"DM Sans"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        segoe: ['"Segoe Script"', 'cursive'], 
      },
      colors: {
        green: {
          700: '#2f855a', // Adjust based on your design
        },
        primary: {
          light: "#005911",
          DEFAULT: "#005911",
          dark: "#002D0A",
        },
        secondary: {
          light: "#F7F7F7",
          DEFAULT: "#F2F2F2",
          dark: "#E5E5E5",
        },
      },
    },
  },
  plugins: [],
};