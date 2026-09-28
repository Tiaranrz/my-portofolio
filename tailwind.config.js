/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0d0a17',
          card: '#18122a',
          border: '#2e204d',
          pink: '#ff4d8d',
          neon: '#f43f5e',
          accent: '#e879f9',
          lavender: '#c084fc',
        }
      }
    },
  },
  plugins: [],
}