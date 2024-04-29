/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:"heading",
        para:"para",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#fefae0',
        'secondary': '#606c38',
        'light': '#edf6f9',
        "orangelight" : "#bc6c25"
       }),
      colors:{
        "heading" : "#fde299",
        "para" : "#283618",
        "orangelight" : "#bc6c25",
        'light': '#edf6f9',
      },
      boxShadow:{
        "bg-box":"inset 0px 0px 0 2000px rgba(0, 0, 0, 0.5)"
      },
      screens:{
        'lg-desktop' :"1414px",
        'sm-laptop' : "1060px",
        'lg-tablet' : "920px"
      }
    },
   
  },
  plugins: [],
}

