/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'y-accent': '#FF9F1C',
        'y-yellow': '#FF9F1C',
        'y-blue': '#113A7D',
        'y-dark': '#011627',
        'y-red': '#E71D36',
        'y-purple': '#321D48',
      },
    },
  },
  plugins: [],
}
