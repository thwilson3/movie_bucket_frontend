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
        accent: '#d7d7d7',
        background: '#ffffff'
      },
      // fontFamily: {
      //   mono: ['var(--font-SF-Mono)']
      // },
      dropShadow: {
        primaryGlow: "0 0 3px #56b02d",
        whiteGlow: "0 0 3px #b5c0b7",
      }
    },
  },
  plugins: [],
}

