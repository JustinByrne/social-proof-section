/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        'vd-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dg-magenta': 'hsl(303, 10%, 53%)',
        'lg-magenta': 'hsl(300, 24%, 96%)',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'top-mobile': "url('./images/bg-pattern-top-mobile.svg')",
        'top-desktop': "url('./images/bg-pattern-top-desktop.svg')",
        'bottom-mobile': "url('./images/bg-pattern-bottom-mobile.svg')",
        'bottom-desktop': "url('./images/bg-pattern-bottom-desktop.svg')",
      }
    },
  },
  plugins: [],
}
