/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:'#e9ef79',
        secondary: '#8992e5',
        accent: '#cf81ac',
        background: '#fefce3'
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

