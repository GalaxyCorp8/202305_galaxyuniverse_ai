/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {},
  },
  plugins: [],
}
