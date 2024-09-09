/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px',
    },
    extend: {
      colors: {
      
        'primary': '#aaaaaa',
        'secondary': '#f2f2f2',
        'accent-blue' :'#459bff',

      },
    },
  },
  plugins: [],
};
