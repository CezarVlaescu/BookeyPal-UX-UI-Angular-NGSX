/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  theme: {
    container : { // ajust your container
      // padding : { DEFAULT : '15px'}
    },
    screens: { // ajust your screen size
      // sm : '640px',
      // md : '768px'
    },
    extend: {
      colors : { // customize your colors 
        // primary : #000000,
        // secondary : #111111,
      },
      backgroundImage : { // ajust your background image
        // exposition : 'url("your image.png"),
        // site : 'url("your site.png")',
      },
      animation: { // animations style
        // 'spin-slow : 'spin 6s linear infinite'
      },
      fontFamily: { // ajust your font
        // poppins : [......]       
      }
    },
  },
  plugins: [/* require('tailwind-scrollbar)*/],
}

