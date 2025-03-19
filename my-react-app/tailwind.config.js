module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        Primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        dark: "#303030",

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      }
    }
  },
  plugins: [],
}