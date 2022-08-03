/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./public/index.html"],
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      spacing: {
        8: '2rem',
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
