/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'reseller': "url('/src/images/resellers.jpg')",
        'logo': "url('/src/images/log.png')",
      },
       colors: {
        'gh-blue': '#040449',
      }
    },
  },
  plugins: [],
}
