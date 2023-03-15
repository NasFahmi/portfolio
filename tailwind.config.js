/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'whiteColor':'#f3f3f3',
      'Background':'#26242D',
      'Gray':'#A1A1A1',
      'Blue':'#1F63AF',
      'DarkBlue':'#2C2348',
      'Black':'#1F63AF',
      'Black1':'#2E2E2E',
      'Black2':'#1E1E1F',
      'Black3':'#323233',
      'Gray2':'#D4D4D4',
    }
  },
  plugins: [],
}