/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:'#ffa939',
        secondary: '#4a4a4a',
        accent: '#d1eaff',
        secondAccent: '#ddc6ae',
        background: '#e4ebf9'
      },
      dropShadow: {
        primaryGlow: "0 0 3px #ff9d42",
        whiteGlow: "0 0 3px #b5c0b7",
      },
      boxShadow: {
        base: '6px 6px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '6px',
        boxShadowY: '6px',
      },
    },
  },
  plugins: [],
}

