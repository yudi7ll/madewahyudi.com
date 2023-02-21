const BLUE = '#113A7D'
const DARK = '#011627'
const PURPLE = '#321D48'
const RED = '#E71D36'
const YELLOW = '#FF9F1C'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'y-accent': YELLOW,
        'y-yellow': YELLOW,
        'y-blue': BLUE,
        'y-dark': DARK,
        'y-red': RED,
        'y-purple': PURPLE,
      },
    },
  },
  plugins: [],
}
