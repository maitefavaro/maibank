/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    

    extend: {

      height: {
        'card-login': '35rem',
      },

      height: {
        'card-cadastro': '45rem',
      },

      width: {
        'card-log': '42rem',
      },

      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '30px',
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(102, 18, 119, 0.8)',
      },

      colors: {
        agoravai: "#3A0CA3",
        agoravai2: "#560BAD",
        agoravai3: "#2A0A73",

        preto: "#07051B",
        roxo1: "#3A0A44",
        roxo2: "#570F66",
        roxo3: "#661277",
        roxo4: "#741487",
        roxo5: "#812992",
        roxo6: "#D6BDDC",
        roxo7: "#E3D2E7",
        roxoTeste: "#8439FF",
        rosaTeste: "#D22DC2",
        principal: "#8439FF",
        secundaria: "#632BC0",
        terciaria: "#421D80",
        teste: "#210F40",
      
      },

    },

  },
  
  plugins: [
    
  ],
}
