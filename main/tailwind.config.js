/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'conic-rainbow': 'conic-gradient(from 180deg, red, yellow, lime, aqua, blue, magenta, red)',
      // },
  //     animation: {
  //   'spin-slow': 'spin 1s linear infinite',
  // },
  fontFamily: {
        righteous: ['Righteous', 'cursive'],
        poppins: ['poppins'],// <== This line is required
      },
      colors:{
        purple:{
          100: "#C4A8CB",
          200: "#A368C0",
          300: "#7D3C98",
        },
        orange: {
          100: "#FFD6C2",
          200: "#FFD6C2",
          300: "#FFD6C2",
          400: "#E07A5F",
        },
        green: {
          100: "#A3B18A",
        },
        yellow:{
          100:"#F7F3EF",
        },
      }
    },
  },
  plugins: [],
}

