/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#005231",
        primaryHover: "#004827",
        dim: "#00150D",
        harvestaBlack: "#242424",
        harvestaSecondBlack: "#3F3D4D",
        tertiaryGreen: "rgba(1, 190, 114, 0.3)",
        tertiaryGreenHover: "rgba(1, 152, 91, 0.3)"
      },
      boxShadow: {
        marketCustom: "0px 4px 16.66px 0px rgba(2, 2, 2, 0.15)"
      },
      width  : {
        'size': "calc(50% + 25px)",
        'marketcards': 'calc(33.33% - .725rem)',
      },
      dropShadow: {
        'custom':  "0px 4px 8px 0px rgba(0, 64, 216, 0.30)",
      },
      backgroundImage: {
        marketSec1: "url('/images/Rectangle 1.png')",
      },
      height: {
        "max": "max-content",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans"],
      },

      animation: {
      },
      
      keyframes: {
      },
    },
  },

  plugins: [],
}   
