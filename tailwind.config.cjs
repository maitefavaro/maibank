/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        azulescuro: "#143655",
        azulclaro: "#0740BC",
        azulmedio: "#073CC2",
        azulescuro2: "#062D8F",
        azulescuro3: "#172342",
        btnlogin: "#0740BC",
        verdeagua: "#04D6C8",
        cinzaa: "#F5F5F5",
        verdeagua_escuro: "#2FB2A9"
      },

    },

  },
  
  plugins: [],
}
