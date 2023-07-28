module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      staatliches: ['Staatliches', 'ui-sans-serif'],
      comicSans: ['"Comic Sans MS"', '"Comic Neue"', 'ui-sans-serif']
    },
    extend: {
      animation: {
        flyIn: 'flyIn 0.5s ease-in-out'
      },
      keyframes: {
        flyIn: {
          '0%': { transform: 'translate(100%, 0)' },
          '100%': { transform: 'translate(0, 0)' }
        }
      }
    }
  },
  plugins: []
};
