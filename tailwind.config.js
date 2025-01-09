/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      },
        "colors": {
    "PaleBlue": {
      50: "#F2F4F7",
      100: "#E6E9EF",
      200: "#CDD2E0",
      300: "#B3BCD0",
      400: "#9AA6C1",
      500: "#818FB1",
      600: "#5E6F97",
      700: "#465371",
      800: "#2F374C",
      900: "#171C26",
      950: "#0C0E13"
    },
    "BlushPink": {
      50: "#FDF1F5",
      100: "#FBE4EB",
      200: "#F8C9D7",
      300: "#F5B2C6",
      400: "#F297B2",
      500: "#EE7C9E",
      600: "#E63D70",
      700: "#C2194C",
      800: "#7E1031",
      900: "#3F0819",
      950: "#20040C"
    }
    }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    },
    fontFamily:{
      roboto_mono:['Roboto Mono', 'serif']
    }
  },
  plugins: [],
}

