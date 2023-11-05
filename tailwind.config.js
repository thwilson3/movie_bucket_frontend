/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:'#fff129',
        secondary: '#4a4a4a',
        accent: '#e5d1ff',
        secondAccent: '#a79cb6',
        background: '#fdf1df'
      },
      // fontFamily: {
      //   mono: ['var(--font-SF-Mono)']
      // },
      dropShadow: {
        primaryGlow: "0 0 3px #ff9d42",
        whiteGlow: "0 0 3px #b5c0b7",
      }
    },
  },
  plugins: [],
}

