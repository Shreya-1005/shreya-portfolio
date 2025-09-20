/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        cyan: {
          400: '#00e0ff',
        },
        yellow: {
          400: '#ffd400',
        },
        green: {
          400: '#3cff6b',
        },
        pink: {
          500: '#ff00b7',
        }
      }
    },
  },
  plugins: [],
}