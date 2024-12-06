/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}","./src/components/Home/aakritpassphoto.png"],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        // => @media (min-width: 350px) { ... }
      },
      fontFamily: {
        'main' : '"Lora", serif'
      },
      boxShadow: { 
        'bottom': '0 4px 4px rgba(2,2,35, 0.5)',
        'allSides': '0px 0px 50px 30px  rgba(2,2,35, 0.5)'
      }
      
    },
  },
  plugins: [
    
  ],
}

