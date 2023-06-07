/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#422FC6',
        primaryHover: '#2B199E',
        secondary: 'purple',
        danger: '#FF0000',
      },
    },
  },
  plugins: [],
}