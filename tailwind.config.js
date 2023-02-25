/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'y-accent': 'var(--color-accent)',
        'y-yellow': 'var(--color-yellow)',
        'y-blue': 'var(--color-blue)',
        'y-dark': 'var(--color-dark)',
        'y-red': 'var(--color-red)',
        'y-purple': 'var(--color-purple)',
      },
      fontSize: {
        header: '40px',
      },
    },
  },
  plugins: [],
}
