/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'search': "url('../img/search.svg')",
      }


    },
  },
  plugins: [],
};
