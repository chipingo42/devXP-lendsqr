/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "md": "40px",
        "sm": "30px",
        'xs': "20px",
        "xxs": "16px",
        "xxx": "12px",
      },
      backgroundColor: {
        "primary-50": "#E5E5E5",
        "default": "#FFFFFF",
      },
      fontFamily: {
        Avenir: 'Avenir Next LT Pro',
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      margin: {
        10: "10px",
        107: "107px",
        139: "139px",
        220: "220px",
      },
      colors: {
        "primary": "#213F7D",
        "primary-50": "#545F7D",
        "secondary": "#39CDCC",
      },
      borderColor: {
        "primary": "#545F7D26",
      },
    },
  },
  plugins: [],
}

