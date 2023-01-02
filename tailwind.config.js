/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qblack': 'rgb(34 34 34/var(--tw-text-opacity))',
        'qgray': 'rgb(239 239 239/var(--tw-border-opacity))',
      },
    },
  },
  plugins: [],
}