/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}\", \"./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Gr_Light: "#606c38",
        Gr_Dark: "#283618",
        Background: "#fefae0",
        Bw_Light: "#dda15e",
        Bw_Dark: "#bc6c25",
      },
    },
  },
  plugins: [],
}

