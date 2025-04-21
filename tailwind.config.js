/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": {
            opacity: "0.0",
            visibility: "hidden",
            filter: "blur(7px)",
            transform: "translateX(65%)"
          },
          "25%": {
            opacity: "0.25",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        show: "show 1.3s ease-in-out"
      },
      colors: {
        primary: '#2D3250',
        secondary: '#121212',
        softGrey: '#A0A0A0',
        lightGrey: '#E5E7EB'
      }
    },
  },
  plugins: [],
}

