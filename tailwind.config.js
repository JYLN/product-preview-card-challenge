/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      cream: "#F2EAE2",
      deepaqua: {
        DEFAULT: "#3D8168",
        hover: "#1A4032",
      },
      gunmetal: "#1C232B",
      saurus: "#6C7289",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        fraunces: ["Fraunces Variable", "serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
      },
      screens: {
        xs: "37.5rem",
      },
    },
  },
  plugins: [],
};
