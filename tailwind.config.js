/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src for class names
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
        primary: '#3b82f6',
        secondary: '#facc15',
      },
      height: {
        '128': '32rem',
      },
      maxHeight: {
        'screen-1/2': '50vh',
      }
    },
  },
  plugins: [],
}
