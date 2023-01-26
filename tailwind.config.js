/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'search': "url('../img/search.svg')",
      },
      colors: {
        'surf-blue': '#008eff',
        'surf-blue-dark': '#095da1',
      },


    },
  },
  plugins: [],
};
