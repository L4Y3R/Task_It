/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_green: '#7db092',
        light_green:'#AED4C5',
        dark_purple:'#7f59ff',
        light_purple:'#d4cdff',
        dark_pink:'#fc6c6c',
        light_pink:'#fac7c6',
        dark_yellow:'#fbbc64',
        light_yellow:'#fbe9cc',
        dark_blue:'#3395ff',
        light_blue:'#cbe4fe'
      },
      fontFamily: ['Gabarito','Onest']
    },
  },
  plugins: [],
}
