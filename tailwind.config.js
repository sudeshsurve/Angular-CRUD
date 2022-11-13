/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      theme:{
        extend:{
          colours:{
            purple:'#93A4FF',
            yellow:'#F0FD71',
            pink:'#FF9EFF'
          }
        }
      }
    },
  },
  plugins: [],
} 
