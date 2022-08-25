/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        bonitinho: "blue",
        verdeagua: "#04D6C8",
        cinzaa: "#F5F5F5"
      },

    },

  },
  
  plugins: [],
}
